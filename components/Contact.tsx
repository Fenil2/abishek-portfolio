'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { MdMail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const contactMethods = [
    { icon: MdPhone, label: 'Phone', value: '+91 9876543210' },
    { icon: MdMail, label: 'Email', value: 'abishek@example.com' },
    { icon: MdLocationOn, label: 'Location', value: 'Chennai, India' }
  ];

  const socialLinks = [
    { icon: FaInstagram, label: 'Instagram', url: '#' },
    { icon: FaLinkedin, label: 'LinkedIn', url: '#' },
    { icon: FaYoutube, label: 'YouTube', url: '#' }
  ];

  return (
    <section id="contact" className="relative py-20 px-4 md:px-6 lg:px-8 md:py-32 overflow-hidden" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 rounded-full animate-scale-in" style={{ backgroundColor: 'rgba(220, 38, 38, 0.18)' }}>
            <span className="text-sm font-bold" style={{ color: '#DC2626' }}>GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up" style={{ color: '#F5F5F5', animationDelay: '0.1s' }}>
            Let&apos;s Create Something Amazing
          </h2>
          <p className="text-lg max-w-2xl mx-auto animate-fade-in-up" style={{ color: 'rgba(245, 245, 245, 0.72)', animationDelay: '0.2s' }}>
            Have a project in mind? Let&apos;s collaborate and bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-lg text-center transition-all duration-300 hover:scale-105 animate-fade-in-up"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.92)',
                  border: '1px solid rgba(220, 38, 38, 0.2)',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="inline-block p-4 rounded-lg mb-4" style={{ backgroundColor: 'rgba(220, 38, 38, 0.18)' }}>
                  <Icon size={32} style={{ color: '#DC2626' }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#DC2626' }}>{method.label}</h3>
                <p style={{ color: 'rgba(245, 245, 245, 0.8)' }}>{method.value}</p>
              </div>
            );
          })}
        </div>

        <div className="max-w-2xl mx-auto mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#DC2626' }}>
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.92)',
                  color: '#F5F5F5',
                  border: '1px solid rgba(220, 38, 38, 0.2)'
                }}
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#DC2626' }}>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.92)',
                  color: '#F5F5F5',
                  border: '1px solid rgba(220, 38, 38, 0.2)'
                }}
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#DC2626' }}>
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.92)',
                  color: '#F5F5F5',
                  border: '1px solid rgba(220, 38, 38, 0.2)'
                }}
                placeholder="Project topic"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-2" style={{ color: '#DC2626' }}>
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.92)',
                  color: '#F5F5F5',
                  border: '1px solid rgba(220, 38, 38, 0.2)'
                }}
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105"
              style={{
                backgroundColor: submitted ? 'rgba(100, 200, 100, 0.8)' : '#DC2626',
                color: '#FFFFFF'
              }}
              disabled={submitted}
            >
              {submitted ? 'Message Sent Successfully!' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="flex justify-center gap-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                aria-label={social.label}
                className="p-4 rounded-lg transition-all duration-300 hover:scale-110 inline-flex items-center justify-center"
                style={{
                  backgroundColor: 'rgba(17, 17, 17, 0.92)',
                  border: '1px solid rgba(220, 38, 38, 0.2)',
                  color: '#DC2626'
                }}
              >
                <Icon size={24} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
