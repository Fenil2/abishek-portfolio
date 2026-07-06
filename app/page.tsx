import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Abishek.J - Video Editor & Videographer | Home',
  description: 'Creative video editor specializing in short-form content, motion graphics, and medical/aesthetic brand content. Based in Chennai.',
  openGraph: {
    title: 'Abishek.J - Video Editor & Videographer',
    description: 'Creative video editor specializing in short-form content, motion graphics, and medical/aesthetic brand content.',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
}
