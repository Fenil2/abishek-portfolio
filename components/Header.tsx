'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { siteConfig } from '@/lib/site';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Skills', href: '/skills' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className="fixed top-0 w-full backdrop-blur-lg z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.96)' : 'rgba(0, 0, 0, 0.72)',
        borderBottom: '1px solid rgba(220, 38, 38, 0.2)',
        boxShadow: scrolled ? '0 8px 30px -12px rgba(220, 38, 38, 0.4)' : 'none',
      }}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-500"
        style={{ paddingTop: scrolled ? '0.6rem' : '1rem', paddingBottom: scrolled ? '0.6rem' : '1rem' }}
      >
        <Link
          href="/"
          className="transition-transform duration-300 hover:scale-105"
          aria-label="Abishek J home"
        >
          <Image src="/logo.png" alt="Abishek J logo" width={104} height={44} priority />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-underline text-sm font-bold"
              style={{ color: '#F5F5F5' }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={siteConfig.ctas.hireMe}
            className="px-6 py-2 rounded-lg font-bold transition-colors duration-300"
            style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}
          >
            Hire Me
          </Link>
        </div>

        <button
          className="md:hidden transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          style={{ color: '#F5F5F5' }}
        >
          {isOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 md:hidden" style={{ backgroundColor: '#111111', borderBottom: '1px solid rgba(220, 38, 38, 0.2)' }}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition-colors duration-300 font-bold hover:opacity-70"
                  style={{ color: '#F5F5F5' }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={siteConfig.ctas.hireMe}
                className="w-full rounded-lg px-6 py-2 text-center font-bold transition-colors duration-300"
                style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
