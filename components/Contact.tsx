'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import { MdMail, MdPhone, MdLocationOn, MdPlayArrow } from 'react-icons/md';
import { siteConfig } from '@/lib/site';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: '', // honeypot - should stay empty
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const submitted = status === 'success';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorMsg('');

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to send message.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '', company: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong.');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    { icon: MdPhone, label: 'Phone', value: siteConfig.phoneDisplay, href: siteConfig.phoneHref },
    { icon: MdMail, label: 'Email', value: siteConfig.email, href: siteConfig.emailHref },
    { icon: MdLocationOn, label: 'Location', value: siteConfig.locationLabel, href: siteConfig.locationHref },
  ];

  const actionLinks = [
    { icon: MdMail, label: 'Email', href: siteConfig.emailHref },
    { icon: MdPhone, label: 'Call', href: siteConfig.phoneHref },
    { icon: MdPlayArrow, label: 'Portfolio', href: siteConfig.ctas.portfolio },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden px-4 py-20 md:px-6 md:py-32 lg:px-8"
      style={{ backgroundColor: '#000000' }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center" data-reveal>
          <div
            className="mb-4 inline-block rounded-full px-4 py-2"
            style={{ backgroundColor: 'rgba(220, 38, 38, 0.18)' }}
          >
            <span className="text-sm font-bold" style={{ color: '#DC2626' }}>
              GET IN TOUCH
            </span>
          </div>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl" style={{ color: '#F5F5F5' }}>
            Let&apos;s Create Something Amazing
          </h2>
          <p className="mx-auto max-w-2xl text-lg" style={{ color: 'rgba(245, 245, 245, 0.72)' }}>
            Have a project in mind? Let&apos;s collaborate and bring your vision to life
          </p>
        </div>

        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.href}
                className="cine-card block rounded-lg p-8 text-center transition-transform duration-300 hover:-translate-y-1"
                data-reveal
                target={method.label === 'Location' ? '_blank' : undefined}
                rel={method.label === 'Location' ? 'noreferrer' : undefined}
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.92)',
                  border: '1px solid rgba(220, 38, 38, 0.2)',
                  '--reveal-delay': `${index * 0.1}s`,
                } as React.CSSProperties}
              >
                <div
                  className="mb-4 inline-block rounded-lg p-4"
                  style={{ backgroundColor: 'rgba(220, 38, 38, 0.18)' }}
                >
                  <Icon size={32} style={{ color: '#DC2626' }} />
                </div>
                <h3 className="mb-2 text-lg font-bold" style={{ color: '#DC2626' }}>
                  {method.label}
                </h3>
                <p style={{ color: 'rgba(245, 245, 245, 0.8)' }}>{method.value}</p>
              </a>
            );
          })}
        </div>

        <div className="mx-auto mb-16 max-w-2xl" data-reveal>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot field - hidden from real users, catches bots */}
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div>
              <label className="mb-2 block text-sm font-bold" style={{ color: '#DC2626' }}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.92)',
                  color: '#F5F5F5',
                  border: '1px solid rgba(220, 38, 38, 0.2)',
                }}
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold" style={{ color: '#DC2626' }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.92)',
                  color: '#F5F5F5',
                  border: '1px solid rgba(220, 38, 38, 0.2)',
                }}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold" style={{ color: '#DC2626' }}>
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.92)',
                  color: '#F5F5F5',
                  border: '1px solid rgba(220, 38, 38, 0.2)',
                }}
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-bold" style={{ color: '#DC2626' }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full resize-none rounded-lg px-4 py-3 transition-all duration-300 focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.92)',
                  color: '#F5F5F5',
                  border: '1px solid rgba(220, 38, 38, 0.2)',
                }}
                placeholder="Tell me about your project..."
              />
            </div>

            {status === 'error' && (
              <p className="text-center text-sm font-bold" style={{ color: '#F87171' }}>
                {errorMsg}
              </p>
            )}

            <button
              type="submit"
              className="w-full transform rounded-lg py-4 font-bold transition-all duration-300 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:scale-100"
              style={{
                backgroundColor: submitted ? 'rgba(100, 200, 100, 0.85)' : '#DC2626',
                color: '#FFFFFF',
              }}
              disabled={status === 'submitting' || submitted}
            >
              {status === 'submitting'
                ? 'Sending...'
                : submitted
                  ? 'Message Sent Successfully!'
                  : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="flex justify-center gap-6" data-reveal="scale">
          {actionLinks.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link
                key={index}
                href={action.href}
                aria-label={action.label}
                className="inline-flex items-center justify-center rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:scale-110"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.92)',
                  border: '1px solid rgba(220, 38, 38, 0.2)',
                  color: '#DC2626',
                }}
              >
                <Icon size={24} />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
