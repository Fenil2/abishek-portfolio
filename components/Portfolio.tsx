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
      title: 'Medical Aesthetic Campaigns',
      category: 'medical',
      views: '2.5K',
      duration: '0:45',
      description: 'Short-form content for aesthetic clinic',
      videoUrl: 'https://res.cloudinary.com/demo/video/upload/v1634567890/sample1.mp4'
    },
    {
      id: 2,
      title: 'Fashion & Lifestyle',
      category: 'lifestyle',
      views: '3.2K',
      duration: '1:30',
      description: 'Influencer collaboration reel',
      videoUrl: 'https://res.cloudinary.com/demo/video/upload/v1634567890/sample2.mp4'
    },
    {
      id: 3,
      title: 'Automotive Showcase',
      category: 'commercial',
      views: '4.1K',
      duration: '2:15',
      description: 'Product showcase video',
      videoUrl: 'https://res.cloudinary.com/demo/video/upload/v1634567890/sample3.mp4'
    },
    {
      id: 4,
      title: 'Motion Graphics Bundle',
      category: 'motion',
      views: '1.8K',
      duration: '1:00',
      description: 'Explainer animation set',
      videoUrl: 'https://res.cloudinary.com/demo/video/upload/v1634567890/sample4.mp4'
    },
    {
      id: 5,
      title: 'Wedding Highlights',
      category: 'lifestyle',
      views: '2.9K',
      duration: '3:45',
      description: 'Cinematic wedding montage',
      videoUrl: 'https://res.cloudinary.com/demo/video/upload/v1634567890/sample5.mp4'
    },
    {
      id: 6,
      title: 'Luxury Resort Tour',
      category: 'commercial',
      views: '3.6K',
      duration: '2:30',
      description: 'Property showcase video',
      videoUrl: 'https://res.cloudinary.com/demo/video/upload/v1634567890/sample6.mp4'
    }
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Medical', value: 'medical' },
    { label: 'Lifestyle', value: 'lifestyle' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Motion Graphics', value: 'motion' }
  ];

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-20 px-4 md:px-6 lg:px-8 md:py-32 overflow-hidden" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 rounded-full animate-scale-in" style={{ backgroundColor: 'rgba(220, 38, 38, 0.18)' }}>
            <span className="text-sm font-bold" style={{ color: '#DC2626' }}>PORTFOLIO</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up" style={{ color: '#F5F5F5', animationDelay: '0.1s' }}>
            Featured Projects
          </h2>
          <p className="text-lg animate-fade-in-up" style={{ color: 'rgba(245, 245, 245, 0.72)', animationDelay: '0.2s' }}>
            A showcase of recent work across diverse industries and content types
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-lg overflow-hidden transition-all duration-500 animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                backgroundColor: 'rgba(17, 17, 17, 0.92)',
                border: '1px solid rgba(220, 38, 38, 0.2)'
              }}
            >
              <button
                onClick={() => setSelectedVideo(project)}
                className="relative w-full h-48 bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 overflow-hidden cursor-pointer"
              >
                <MdPlayArrow size={48} style={{ color: '#DC2626', opacity: 0.8 }} />

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: '#DC2626' }}>
                      <MdPlayArrow size={32} style={{ color: '#FFFFFF', marginLeft: '4px' }} />
                    </div>
                  </div>
                </div>

                <div className="absolute top-3 right-3 flex gap-2">
                  <div className="px-2 py-1 rounded text-xs font-bold" style={{ backgroundColor: 'rgba(220, 38, 38, 0.18)', color: '#F5F5F5' }}>
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
          ))}
        </div>

        <div className="text-center">
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
            className="relative w-full max-w-4xl animate-scale-in"
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
                className="w-full h-auto"
                style={{ maxHeight: 'calc(100vh - 120px)' }}
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
