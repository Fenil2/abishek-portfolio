'use client';

import { MdPlayArrow, MdPalette, MdStars, MdPeople } from 'react-icons/md';

export default function Skills() {
  const skillCategories = [
    {
      icon: MdPlayArrow,
      title: 'Editing Software',
      skills: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Final Cut Pro']
    },
    {
      icon: MdPalette,
      title: 'Color & Design',
      skills: ['Color Grading', 'Motion Design', 'VFX', 'Animation']
    },
    {
      icon: MdStars,
      title: 'Production',
      skills: ['Cinematography', 'Lighting', 'Sound Design', 'Storyboarding']
    },
    {
      icon: MdPeople,
      title: 'Specialization',
      skills: ['Short-form Content', 'Medical Content', 'Commercial Videos', 'Brand Stories']
    }
  ];

  const languages = [
    { name: 'English', level: 95 },
    { name: 'Tamil', level: 90 },
    { name: 'Hindi', level: 70 },
    { name: 'Kannada', level: 60 }
  ];

  const stats = [
    { value: '50+', label: 'Projects Delivered' },
    { value: '20+', label: 'Happy Clients' },
    { value: '3+', label: 'Industry Verticals' },
    { value: '2+', label: 'Years Experience' }
  ];

  return (
    <section id="skills" className="relative py-20 px-4 md:px-6 lg:px-8 md:py-32 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #000000, rgba(220, 38, 38, 0.08))' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 rounded-full animate-scale-in" style={{ backgroundColor: 'rgba(220, 38, 38, 0.18)' }}>
            <span className="text-sm font-bold" style={{ color: '#DC2626' }}>EXPERTISE</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up" style={{ color: '#F5F5F5', animationDelay: '0.1s' }}>
            Tools & Expertise
          </h2>
          <p className="text-lg animate-fade-in-up" style={{ color: 'rgba(245, 245, 245, 0.72)', animationDelay: '0.2s' }}>
            Professional proficiency across industry-standard software and creative techniques
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-lg transition-all duration-300 hover:scale-105 cursor-pointer group animate-fade-in-up"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.92)',
                  border: '1px solid rgba(220, 38, 38, 0.2)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="mb-4 inline-block p-3 rounded-lg group-hover:scale-110 transition-transform" style={{ backgroundColor: 'rgba(220, 38, 38, 0.18)' }}>
                  <Icon size={24} style={{ color: '#DC2626' }} />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#DC2626' }}>{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm" style={{ color: 'rgba(245, 245, 245, 0.8)' }}>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#DC2626' }}></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8" style={{ color: '#F5F5F5' }}>Languages</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(17, 17, 17, 0.92)', border: '1px solid rgba(220, 38, 38, 0.2)' }}>
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold" style={{ color: '#DC2626' }}>{lang.name}</h4>
                  <span className="text-sm" style={{ color: 'rgba(245, 245, 245, 0.7)' }}>{lang.level}%</span>
                </div>
                <div className="h-2 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, 0.12)' }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: `${lang.level}%`, backgroundColor: '#DC2626' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 text-center rounded-lg transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: 'rgba(17, 17, 17, 0.92)',
                border: '1px solid rgba(220, 38, 38, 0.2)'
              }}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2" style={{ color: '#DC2626' }}>
                {stat.value}
              </div>
              <div className="text-sm" style={{ color: 'rgba(245, 245, 245, 0.7)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
