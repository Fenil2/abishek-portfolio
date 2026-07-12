import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy - Abishek.J',
  description: 'Privacy policy for Abishek.J portfolio and contact form submissions.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <section className="px-4 pb-16 pt-32 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/70 p-8 md:p-10">
          <h1 className="mb-6 text-4xl font-bold" style={{ color: '#F5F5F5' }}>
            Privacy Policy
          </h1>
          <div className="space-y-4 text-sm leading-7" style={{ color: 'rgba(245, 245, 245, 0.78)' }}>
            <p>
              Information submitted through this portfolio contact form is used only to respond to
              project inquiries and collaboration requests.
            </p>
            <p>
              Submitted details such as your name, email address, phone number, and message may be
              stored securely so conversations can be reviewed and replied to.
            </p>
            <p>
              Your information is not sold to third parties. If you want your inquiry removed, you
              can request deletion by reaching out directly through the contact details on this
              site.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
