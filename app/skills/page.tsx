import Header from '@/components/Header';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Skills & Expertise - Abishek.J',
  description: 'Professional expertise in video editing software, color grading, motion design, cinematography, and specialized content creation.',
  openGraph: {
    title: 'Skills & Expertise - Abishek.J',
    description: 'Professional expertise in video editing software, color grading, motion design, cinematography, and specialized content creation.',
  },
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Skills />
      <Footer />
    </main>
  );
}
