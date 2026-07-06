'use client';

import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Skills', href: '/skills' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full backdrop-blur-lg z-50 transition-all duration-300" style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)', borderBottom: '1px solid rgba(220, 38, 38, 0.2)' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          <span style={{ color: '#DC2626' }}>A.</span>
          <span style={{ color: '#F5F5F5' }}>J</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors duration-300 text-sm font-bold hover:opacity-70"
              style={{ color: '#F5F5F5' }}
            >
              {link.label}
            </Link>
          ))}
          <button className="px-6 py-2 rounded-lg font-bold transition-colors duration-300" style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}>
            Hire Me
          </button>
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
              <button className="px-6 py-2 rounded-lg font-bold transition-colors duration-300 w-full" style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}>
                Hire Me
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
