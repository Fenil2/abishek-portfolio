import Header from '@/components/Header';
import About from '@/components/About';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Me - Abishek.J Video Editor',
  description: 'Learn about my journey as a video editor and videographer with experience in short-form content and motion graphics.',
  openGraph: {
    title: 'About Me - Abishek.J Video Editor',
    description: 'Learn about my journey as a video editor and videographer with experience in short-form content and motion graphics.',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <About />
      <Footer />
    </main>
  );
}
