'use client';

import Link from 'next/link';
import { MdMail, MdPhone } from 'react-icons/md';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  const quickLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Skills', href: '/skills' },
    { label: 'Contact', href: '/contact' }
  ];

  const socials = [
    { icon: FaInstagram, url: '#' },
    { icon: FaLinkedin, url: '#' },
    { icon: FaYoutube, url: '#' }
  ];

  return (
    <footer className="py-12 px-4 md:px-6 lg:px-8 border-t animate-fade-in-up" style={{ backgroundColor: '#000000', borderColor: 'rgba(220, 38, 38, 0.2)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-2xl font-bold mb-4">
              <span style={{ color: '#DC2626' }}>A.</span>
              <span style={{ color: '#F5F5F5' }}>J</span>
            </div>
            <p style={{ color: 'rgba(245, 245, 245, 0.7)' }} className="text-sm">
              Creative video editor crafting cinematic stories for brands and creators.
            </p>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-bold mb-4" style={{ color: '#DC2626' }}>Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm transition-colors hover:opacity-70"
                    style={{ color: 'rgba(245, 245, 245, 0.7)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-bold mb-4" style={{ color: '#DC2626' }}>Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(245, 245, 245, 0.7)' }}>
                <MdPhone size={18} />
                <span>+91 9876543210</span>
              </div>
              <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(245, 245, 245, 0.7)' }}>
                <MdMail size={18} />
                <span>abishek@example.com</span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-bold mb-4" style={{ color: '#DC2626' }}>Follow</h3>
            <div className="flex gap-3">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="p-2 rounded-lg transition-all duration-300 hover:scale-110 inline-flex items-center justify-center"
                    style={{
                      backgroundColor: 'rgba(17, 17, 17, 0.92)',
                      color: '#DC2626',
                      border: '1px solid rgba(220, 38, 38, 0.2)'
                    }}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(220, 38, 38, 0.2)', marginBottom: '1rem' }}></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-center md:text-left" style={{ color: 'rgba(245, 245, 245, 0.6)' }}>
          <p>&copy; 2025 Abishek.J. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link href="#" className="hover:opacity-70 transition-opacity">Privacy Policy</Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
