# Portfolio Routing Guide

## Overview

The portfolio now uses Next.js App Router with proper page-based routing. Each major section has its own dedicated route with clean URLs.

## Routes

### Home Page
- **URL**: `/`
- **Location**: `app/page.tsx`
- **Content**: Full homepage with all sections (Hero, About, Portfolio, Skills, Contact)
- **Description**: Main landing page featuring overview of services and skills

### About Page
- **URL**: `/about`
- **Location**: `app/about/page.tsx`
- **Content**: Detailed about section with background, experience, and education
- **Description**: Learn more about the video editor's journey and expertise

### Portfolio Page
- **URL**: `/portfolio`
- **Location**: `app/portfolio/page.tsx`
- **Content**: Featured projects with video players and filtering options
- **Description**: Showcase of work across medical, lifestyle, commercial, and motion graphics categories

### Skills Page
- **URL**: `/skills`
- **Location**: `app/skills/page.tsx`
- **Content**: Tools, software, and expertise areas
- **Description**: Professional proficiency in editing software, color grading, cinematography, and more

### Contact Page
- **URL**: `/contact`
- **Location**: `app/contact/page.tsx`
- **Content**: Contact form and contact information
- **Description**: Get in touch page with multiple contact methods

## Navigation Structure

### Header Navigation
The header component (`components/Header.tsx`) contains navigation links that connect to all routes:

```
Home (A.J logo) → /
About → /about
Portfolio → /portfolio
Skills → /skills
Contact → /contact
Hire Me → (Button)
```

### Footer Navigation
The footer component (`components/Footer.tsx`) includes:

```
Quick Links:
- Home → /
- About → /about
- Portfolio → /portfolio
- Skills → /skills
- Contact → /contact
```

### Hero CTA Buttons
The hero section has two main CTAs:

1. **Watch My Work** → `/portfolio`
2. **Get In Touch** → `/contact`

## File Structure

```
app/
├── layout.tsx              (Root layout with Header & Footer)
├── globals.css            (Global styles with animations)
├── page.tsx               (Home page /)
├── about/
│   └── page.tsx           (About page /about)
├── portfolio/
│   └── page.tsx           (Portfolio page /portfolio)
├── skills/
│   └── page.tsx           (Skills page /skills)
└── contact/
    └── page.tsx           (Contact page /contact)

components/
├── Header.tsx             (Navigation & Header)
├── Footer.tsx             (Footer with links)
├── Hero.tsx               (Hero section with CTAs)
├── About.tsx              (About content)
├── Portfolio.tsx          (Portfolio with videos)
├── Skills.tsx             (Skills showcase)
└── Contact.tsx            (Contact form)
```

## SEO & Metadata

Each page has optimized metadata:

### Home Page
- Title: `Abishek.J - Video Editor & Videographer | Home`
- Description: Tailored for portfolio home

### About Page
- Title: `About Me - Abishek.J Video Editor`
- Description: Learn about my journey as a video editor

### Portfolio Page
- Title: `Portfolio - Abishek.J Video Projects`
- Description: Explore video editing projects

### Skills Page
- Title: `Skills & Expertise - Abishek.J`
- Description: Professional expertise showcase

### Contact Page
- Title: `Get In Touch - Abishek.J`
- Description: Contact information and form

## Navigation Flow

### From Homepage
- Users land on `/`
- Can navigate to any section via header/footer links
- Hero CTA buttons direct to `/portfolio` or `/contact`

### From Dedicated Pages
- Each page displays full header and footer
- Easy navigation between sections
- Logo always returns to `/`

## Adding New Routes

To add a new route:

1. Create a new directory under `app/` (e.g., `app/blog/`)
2. Create `page.tsx` inside it
3. Add imports for Header and Footer components
4. Add metadata export
5. Export default function with your content
6. Update navigation links in `Header.tsx` and `Footer.tsx`

Example:
```typescript
// app/blog/page.tsx
import Header from '@/components/Header';
import BlogContent from '@/components/BlogContent';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Blog - Abishek.J',
  description: 'Video editing tips and insights',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <BlogContent />
      <Footer />
    </main>
  );
}
```

Then update the nav links:
```typescript
const navLinks = [
  { label: 'About', href: '/about' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Skills', href: '/skills' },
  { label: 'Blog', href: '/blog' },  // Add this
  { label: 'Contact', href: '/contact' },
];
```

## Performance Considerations

- Each route is independently optimized with Next.js
- Metadata is set per page for better SEO
- Navigation is instant with Next.js client-side routing
- Videos load on demand with Cloudinary URLs
- All animations are smooth and performant

## Deployment

The routing structure works perfectly with:
- Vercel (recommended)
- Any Node.js hosting platform
- Static export (with limitations)

Routes will be automatically created and deployed with your Next.js app.
