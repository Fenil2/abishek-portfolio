'use server';

import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/prisma';

export async function updateStatus(formData: FormData) {
  const id = String(formData.get('id') ?? '');
  const status = String(formData.get('status') ?? '');
  if (!id || !['new', 'read', 'archived'].includes(status)) return;
  await prisma.lead.update({ where: { id }, data: { status } });
  revalidatePath('/dashboard');
}

export async function deleteLead(formData: FormData) {
  const id = String(formData.get('id') ?? '');
  if (!id) return;
  await prisma.lead.delete({ where: { id } });
  revalidatePath('/dashboard');
}
