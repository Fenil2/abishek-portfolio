import { prisma } from '@/lib/prisma';
import { deleteLead, updateStatus } from './actions';

export const metadata = {
  title: 'Leads Dashboard',
  robots: { index: false, follow: false },
};

// The dashboard reads live data, so never cache it.
export const dynamic = 'force-dynamic';

const STATUSES = ['new', 'read', 'archived'] as const;

const STATUS_COLORS: Record<string, string> = {
  new: '#DC2626',
  read: '#EAB308',
  archived: 'rgba(245, 245, 245, 0.5)',
};

export default async function DashboardPage() {
  const leads = await prisma.lead.findMany({
    orderBy: { createdAt: 'desc' },
    take: 500,
  });

  const counts = {
    total: leads.length,
    new: leads.filter((lead) => lead.status === 'new').length,
    read: leads.filter((lead) => lead.status === 'read').length,
    archived: leads.filter((lead) => lead.status === 'archived').length,
  };

  return (
    <main className="min-h-screen px-4 py-10 md:px-8" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold" style={{ color: '#F5F5F5' }}>
              Leads
            </h1>
            <p className="text-sm mt-1" style={{ color: 'rgba(245, 245, 245, 0.6)' }}>
              {counts.total} total | {counts.new} new | {counts.read} read | {counts.archived}{' '}
              archived
            </p>
          </div>
        </div>

        {leads.length === 0 ? (
          <div
            className="p-12 rounded-lg text-center"
            style={{
              backgroundColor: 'rgba(17, 17, 17, 0.92)',
              border: '1px solid rgba(220, 38, 38, 0.2)',
              color: 'rgba(245, 245, 245, 0.6)',
            }}
          >
            No leads yet. Submissions from the contact form will appear here.
          </div>
        ) : (
          <div className="space-y-4">
            {leads.map((lead) => (
              <div
                key={lead.id}
                className="p-6 rounded-lg"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.92)',
                  border: '1px solid rgba(220, 38, 38, 0.2)',
                  opacity: lead.status === 'archived' ? 0.6 : 1,
                }}
              >
                <div className="flex items-start justify-between gap-4 flex-wrap mb-3">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-lg font-bold" style={{ color: '#F5F5F5' }}>
                        {lead.name}
                      </span>
                      <span
                        className="text-xs font-bold uppercase px-2 py-1 rounded-full"
                        style={{
                          color: STATUS_COLORS[lead.status] ?? '#F5F5F5',
                          border: `1px solid ${STATUS_COLORS[lead.status] ?? '#F5F5F5'}`,
                        }}
                      >
                        {lead.status}
                      </span>
                    </div>
                    <a
                      href={`mailto:${lead.email}`}
                      className="text-sm hover:underline"
                      style={{ color: '#DC2626' }}
                    >
                      {lead.email}
                    </a>
                    <p className="text-sm mt-1" style={{ color: 'rgba(245, 245, 245, 0.72)' }}>
                      {lead.phone || 'No phone provided'}
                    </p>
                  </div>
                  <span className="text-xs" style={{ color: 'rgba(245, 245, 245, 0.5)' }}>
                    {new Date(lead.createdAt).toLocaleString()}
                  </span>
                </div>

                <p
                  className="mb-4 whitespace-pre-wrap"
                  style={{ color: 'rgba(245, 245, 245, 0.7)' }}
                >
                  {lead.message}
                </p>

                <div className="flex items-center gap-2 flex-wrap">
                  {STATUSES.filter((status) => status !== lead.status).map((status) => (
                    <form key={status} action={updateStatus}>
                      <input type="hidden" name="id" value={lead.id} />
                      <input type="hidden" name="status" value={status} />
                      <button
                        type="submit"
                        className="text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: 'rgba(0, 0, 0, 0.4)',
                          border: '1px solid rgba(220, 38, 38, 0.2)',
                          color: 'rgba(245, 245, 245, 0.8)',
                        }}
                      >
                        Mark {status}
                      </button>
                    </form>
                  ))}
                  <form action={deleteLead}>
                    <input type="hidden" name="id" value={lead.id} />
                    <button
                      type="submit"
                      className="text-xs font-bold px-3 py-1.5 rounded-lg transition-all duration-300 hover:scale-105"
                      style={{
                        backgroundColor: 'rgba(220, 38, 38, 0.15)',
                        border: '1px solid rgba(220, 38, 38, 0.4)',
                        color: '#F87171',
                      }}
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
