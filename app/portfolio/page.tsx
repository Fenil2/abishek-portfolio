import Header from '@/components/Header';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Portfolio - Abishek.J Video Projects',
  description: 'Explore my video editing projects across medical, lifestyle, commercial, and motion graphics categories.',
  openGraph: {
    title: 'Portfolio - Abishek.J Video Projects',
    description: 'Explore my video editing projects across medical, lifestyle, commercial, and motion graphics categories.',
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Portfolio />
      <Footer />
    </main>
  );
}
