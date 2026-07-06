import Header from '@/components/Header';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Get In Touch - Abishek.J',
  description: 'Contact me for your video editing and videography projects. Let\'s collaborate and create amazing content together.',
  openGraph: {
    title: 'Get In Touch - Abishek.J',
    description: 'Contact me for your video editing and videography projects. Let\'s collaborate and create amazing content together.',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Contact />
      <Footer />
    </main>
  );
}
