import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export const runtime = 'nodejs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function str(value: unknown, max: number): string {
  return typeof value === 'string' ? value.trim().slice(0, max) : '';
}

// POST /api/leads - persist a contact-form submission.
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body.' }, { status: 400 });
  }

  const data = body as Record<string, unknown>;
  const name = str(data.name, 120);
  const email = str(data.email, 200);
  const phone = str(data.phone, 50);
  const message = str(data.message, 5000);

  // Honeypot: bots fill hidden fields; humans leave them empty.
  if (str(data.company, 200)) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !phone || !message) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 }
    );
  }

  try {
    const lead = await prisma.lead.create({
      // Mirror phone into the legacy subject field so stale dev bundles or
      // older Prisma metadata do not reject submissions during hot reloads.
      data: { name, email, phone, message, subject: phone },
      select: { id: true },
    });
    return NextResponse.json({ ok: true, id: lead.id }, { status: 201 });
  } catch (err) {
    console.error('Failed to save lead:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again later.' },
      { status: 500 }
    );
  }
}
