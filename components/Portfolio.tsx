'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MdPlayArrow, MdVisibility, MdClose } from 'react-icons/md';

type Project = {
  id: number;
  title: string;
  category: string;
  views: string;
  duration: string;
  description: string;
  videoUrl: string;
};

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedVideo, setSelectedVideo] = useState<Project | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Personal Branding',
      category: 'personal',
      views: '2.5K',
      duration: '0:45',
      description: 'Personal brand storytelling video',
      videoUrl: 'https://res.cloudinary.com/dfyoup4e5/video/upload/v1782218323/script_8_will_to_live_V4_nytjhl.mov'
    },
    {
      id: 2,
      title: 'Explainer',
      category: 'explainer',
      views: '3.2K',
      duration: '1:30',
      description: 'Engaging explainer video',
      videoUrl: 'https://res.cloudinary.com/dfyoup4e5/video/upload/v1782218244/07-03-26_abishek_v2_yzm6iz.mov'
    },
    {
      id: 3,
      title: 'Motion Graphics',
      category: 'motion',
      views: '1.8K',
      duration: '1:00',
      description: 'Dynamic motion graphics set',
      videoUrl: 'https://res.cloudinary.com/dfyoup4e5/video/upload/v1782202644/motion_graphics_lue4so.mp4'
    },
    {
      id: 4,
      title: 'UGC Content',
      category: 'ugc',
      views: '4.1K',
      duration: '0:30',
      description: 'User-generated style content',
      videoUrl: 'https://res.cloudinary.com/dfyoup4e5/video/upload/v1783414040/dermatologist_gj3o20.mov'
    }
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Personal Branding', value: 'personal' },
    { label: 'Explainer', value: 'explainer' },
    { label: 'Motion Graphics', value: 'motion' },
    { label: 'UGC Content', value: 'ugc' }
  ];

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  // Only auto-scroll when there are enough videos to loop; otherwise a
  // single/pair of videos are shown static and centered (no duplication).
  const useCarousel = filtered.length > 2;

  const renderCard = (
    project: Project,
    key: React.Key,
    { ariaHidden = false, className = '' }: { ariaHidden?: boolean; className?: string } = {}
  ) => (
    <div
      key={key}
      aria-hidden={ariaHidden}
      className={`cine-card group shrink-0 w-64 rounded-lg overflow-hidden ${className}`}
      style={{
        backgroundColor: 'rgba(17, 17, 17, 0.92)',
        border: '1px solid rgba(220, 38, 38, 0.2)'
      }}
    >
      <button
        onClick={() => setSelectedVideo(project)}
        className="relative w-full aspect-9/16 bg-black flex items-center justify-center transition-transform duration-300 overflow-hidden cursor-pointer"
      >
        <video
          src={project.videoUrl}
          muted
          loop
          autoPlay
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />

        {/* Legibility + play overlay */}
        <div className="absolute inset-0 transition-colors duration-300" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55), transparent 55%)' }}></div>

        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.35)' }}>
          <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: '#DC2626' }}>
            <MdPlayArrow size={32} style={{ color: '#FFFFFF', marginLeft: '4px' }} />
          </div>
        </div>

        <div className="absolute top-3 right-3 flex gap-2">
          <div className="px-2 py-1 rounded text-xs font-bold" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', color: '#F5F5F5' }}>
            {project.duration}
          </div>
        </div>
      </button>

      <div className="p-5">
        <h3 className="text-lg font-bold mb-2" style={{ color: '#F5F5F5' }}>{project.title}</h3>
        <p className="text-sm mb-4" style={{ color: 'rgba(245, 245, 245, 0.72)' }}>{project.description}</p>

        <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(245, 245, 245, 0.6)' }}>
          <MdVisibility size={18} />
          <span>{project.views} views</span>
        </div>
      </div>
    </div>
  );

  return (
    <section id="portfolio" className="relative py-20 px-4 md:px-6 lg:px-8 md:py-32 overflow-hidden" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center" data-reveal>
          <div className="inline-block mb-4 px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(220, 38, 38, 0.18)' }}>
            <span className="text-sm font-bold" style={{ color: '#DC2626' }}>PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#F5F5F5' }}>
            Featured Projects
          </h2>
          <p className="text-lg" style={{ color: 'rgba(245, 245, 245, 0.72)' }}>
            A showcase of recent work across diverse industries and content types
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16" data-reveal="scale">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className="px-6 py-2 rounded-lg font-bold transition-all duration-300"
              style={{
                backgroundColor: activeFilter === filter.value ? '#DC2626' : 'rgba(255, 255, 255, 0.06)',
                color: '#F5F5F5',
                border: activeFilter === filter.value ? 'none' : '1px solid rgba(220, 38, 38, 0.2)'
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Keyed by the active filter so results re-mount and fade in on every
            filter change — always visible, never gated behind a scroll reveal. */}
        <div key={activeFilter} className="animate-fade-in-up">
          {useCarousel ? (
            <div className="marquee-viewport mb-12">
              <div className="marquee-track">
                {[...filtered, ...filtered].map((project, index) =>
                  renderCard(project, index, {
                    ariaHidden: index >= filtered.length,
                    className: 'mr-6',
                  })
                )}
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {filtered.map((project) => renderCard(project, project.id))}
            </div>
          )}
        </div>

        <div className="text-center" data-reveal>
          <Link href="/portfolio" className="inline-block px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}>
            View Full Portfolio
          </Link>
        </div>
      </div>

      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-sm animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 p-2 transition-all duration-300 hover:scale-110"
              style={{ color: '#DC2626' }}
              aria-label="Close video"
            >
              <MdClose size={32} />
            </button>

            <div className="relative bg-black rounded-lg overflow-hidden">
              <video
                src={selectedVideo.videoUrl}
                controls
                autoPlay
                playsInline
                className="w-full h-auto aspect-9/16 object-contain bg-black"
                style={{ maxHeight: 'calc(100vh - 160px)' }}
              />
            </div>

            <div className="mt-6 p-6 rounded-lg" style={{ backgroundColor: 'rgba(17, 17, 17, 0.96)', border: '1px solid rgba(220, 38, 38, 0.2)' }}>
              <h3 className="text-2xl font-bold mb-2" style={{ color: '#DC2626' }}>
                {selectedVideo.title}
              </h3>
              <p style={{ color: 'rgba(245, 245, 245, 0.8)' }}>
                {selectedVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
