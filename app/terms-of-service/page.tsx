import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms of Service - Abishek.J',
  description: 'Terms of service for using the Abishek.J portfolio website.',
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="px-4 pb-16 pt-32 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/70 p-8 md:p-10">
          <h1 className="mb-6 text-4xl font-bold" style={{ color: '#F5F5F5' }}>
            Terms of Service
          </h1>
          <div className="space-y-4 text-sm leading-7" style={{ color: 'rgba(245, 245, 245, 0.78)' }}>
            <p>
              This website is provided to showcase portfolio work and accept legitimate business
              inquiries.
            </p>
            <p>
              By using the contact form, you agree to provide accurate information and not use the
              site for spam, abuse, or unlawful activity.
            </p>
            <p>
              Portfolio samples, branding, and written content on this site remain the property of
              their respective owners and may not be reused without permission.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
