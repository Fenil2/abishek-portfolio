'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { MdPlayArrow } from 'react-icons/md';

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 md:pt-20 pb-10 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat opacity-20"
        style={{ backgroundImage: "url('/s.jpg')" }}
      ></div>
      <div className=""></div>

      <div className={`relative max-w-5xl mx-auto text-center z-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-block mb-6 px-4 py-2 rounded-full animate-fade-in-up" style={{ backgroundColor: 'rgba(220, 38, 38, 0.18)', border: '1px solid rgba(220, 38, 38, 0.45)', animationDelay: '0.1s' }}>
          <span className="text-sm font-bold" style={{ color: '#DC2626' }}>Creative Video Editor</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance animate-fade-in-up" style={{ color: '#F5F5F5', animationDelay: '0.2s' }}>
          Cinematic Stories{' '}
          <span style={{ background: 'linear-gradient(to right, #DC2626, #F87171, #F3F3F3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Come Alive
          </span>
        </h1>

        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto text-balance leading-relaxed animate-fade-in-up" style={{ color: 'rgba(245, 245, 245, 0.78)', animationDelay: '0.3s' }}>
          I craft engaging video content that captivates audiences. Specializing in short-form content, motion graphics, and brand storytelling for medical, aesthetic, and lifestyle brands.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link href="/portfolio" className="group px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2" style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}>
            <MdPlayArrow size={20} className="group-hover:translate-x-1 transition-transform" />
            Watch My Work
          </Link>
          <Link href="/contact" className="px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '2px solid #DC2626', color: '#F5F5F5' }}>
            Get In Touch
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-4 md:gap-8 text-center animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
          <div className="p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-default" style={{ backgroundColor: 'rgba(17, 17, 17, 0.92)', border: '1px solid rgba(220, 38, 38, 0.2)' }}>
            <div className="text-3xl md:text-4xl font-bold" style={{ color: '#DC2626' }}>50+</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(245, 245, 245, 0.7)' }}>Projects Completed</div>
          </div>
          <div className="p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-default" style={{ backgroundColor: 'rgba(17, 17, 17, 0.92)', border: '1px solid rgba(220, 38, 38, 0.2)' }}>
            <div className="text-3xl md:text-4xl font-bold" style={{ color: '#DC2626' }}>2+</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(245, 245, 245, 0.7)' }}>Years Experience</div>
          </div>
          <div className="p-4 rounded-lg transition-all duration-300 hover:scale-105 cursor-default" style={{ backgroundColor: 'rgba(17, 17, 17, 0.92)', border: '1px solid rgba(220, 38, 38, 0.2)' }}>
            <div className="text-3xl md:text-4xl font-bold" style={{ color: '#DC2626' }}>100%</div>
            <div className="text-sm mt-2" style={{ color: 'rgba(245, 245, 245, 0.7)' }}>Client Satisfied</div>
          </div>
        </div>
      </div>
    </section>
  );
}
