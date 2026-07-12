'use client';

import { MdVideoLibrary, MdCameraAlt, MdAutoAwesome } from 'react-icons/md';

export default function About() {
  const highlights = [
    {
      icon: MdVideoLibrary,
      title: 'Video Editing',
      description: 'Expert in Adobe Premiere Pro, After Effects, and DaVinci Resolve Studio'
    },
    {
      icon: MdCameraAlt,
      title: 'Videography',
      description: 'Professional camera operation and on-location shoot expertise'
    },
    {
      icon: MdAutoAwesome,
      title: 'Motion Graphics',
      description: 'Creating dynamic motion graphics and visual effects'
    }
  ];

  return (
    <section id="about" className="relative py-20 px-4 md:px-6 lg:px-8 md:py-32 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #000000, rgba(220, 38, 38, 0.08))' }}>
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl -mr-32 -mt-32" style={{ backgroundColor: 'rgba(220, 38, 38, 0.08)' }}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center" data-reveal>
          <div className="inline-block mb-4 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(220, 38, 38, 0.18)' }}>
            <span className="text-sm font-bold" style={{ color: '#DC2626' }}>ABOUT ME</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F5F5F5' }}>
            Bringing Vision to <span style={{ color: '#DC2626' }}>Reality</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(245, 245, 245, 0.72)' }}>
            Creative and detail-oriented videographer with hands-on experience crafting cinematic content across diverse industries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-20">
          <div data-reveal="left">
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#F5F5F5' }}>
              I&apos;m Abishek.J, a passionate video editor and videographer based in Chennai. My journey in video production started with a genuine love for visual storytelling and has evolved into a professional expertise spanning multiple industries.
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: 'rgba(245, 245, 245, 0.8)' }}>
              From aesthetic clinics to automotive brands, influencer collaborations to luxury resorts, I&apos;ve had the privilege of working with diverse clients. Currently producing high-volume short-form content at GrowMedico while maintaining freelance projects with premium clients.
            </p>
            <p className="text-lg leading-relaxed" style={{ color: 'rgba(245, 245, 245, 0.8)' }}>
              I believe in the power of visual communication. Every frame matters, every transition has purpose, and every edit tells a story. My commitment is to deliver content that not only meets client expectations but exceeds them.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="cine-card p-6 rounded-lg cursor-pointer"
                  data-reveal="right"
                  style={{
                    backgroundColor: 'rgba(17, 17, 17, 0.92)',
                    border: '1px solid rgba(220, 38, 38, 0.2)',
                    '--reveal-delay': `${index * 0.12}s`,
                  } as React.CSSProperties}
                >
                  <div className="flex gap-4">
                    <div style={{ color: '#DC2626' }}>
                      <Icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#DC2626' }}>{highlight.title}</h3>
                      <p style={{ color: 'rgba(245, 245, 245, 0.8)' }}>{highlight.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-4" style={{ color: '#F5F5F5' }} data-reveal>Education</h3>
          <div className="cine-card mb-8 p-6 rounded-lg" data-reveal style={{ backgroundColor: 'rgba(17, 17, 17, 0.92)', border: '1px solid rgba(220, 38, 38, 0.2)' }}>
            <h4 className="text-xl font-bold" style={{ color: '#DC2626' }}>Bachelor of Computer Applications (BCA)</h4>
            <p style={{ color: 'rgba(245, 245, 245, 0.7)' }}>Sri Krishna College of Arts and Science, Coimbatore</p>
          </div>

          <h3 className="text-2xl font-bold mb-4 mt-12" style={{ color: '#F5F5F5' }} data-reveal>Recent Experience</h3>

          {[
            { title: 'Video Editor - GrowMedico', date: 'Jul 2025 - Present', desc: 'Editing short-form videos for aesthetic clinics and medical brands spanning PRP, GFC, Ayurveda, and plastic surgery.' },
            { title: 'Freelance Video Editor - CrownX', date: 'Ongoing', desc: 'Creating motion graphics explainer videos, long-form content, trailers, and short-form reels for YouTube and social media.' },
            { title: 'Freelance Videographer & Video Editor', date: 'Jan 2024 - Jun 2025', desc: 'Worked with diverse clients including automobile brands, luxury resorts, aesthetic clinics, and hospitality businesses.' }
          ].map((exp, idx) => (
            <div key={idx} className="cine-card mb-6 p-6 rounded-lg" data-reveal="left" style={{ backgroundColor: 'rgba(17, 17, 17, 0.92)', border: '1px solid rgba(220, 38, 38, 0.2)', '--reveal-delay': `${idx * 0.1}s` } as React.CSSProperties}>
              <h4 className="text-lg font-bold" style={{ color: '#DC2626' }}>{exp.title}</h4>
              <p className="text-sm" style={{ color: 'rgba(245, 245, 245, 0.6)' }}>{exp.date}</p>
              <p className="mt-3" style={{ color: 'rgba(245, 245, 245, 0.8)' }}>{exp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
