'use client';

import { useEffect } from 'react';

/**
 * CinematicFX — mounted once (in the root layout). It powers the site-wide
 * cinematic feel without any runtime dependency:
 *
 *  1. Scroll reveals: observes every [data-reveal] element and adds
 *     `.is-visible` when it enters the viewport (staggered via --reveal-delay).
 *  2. Film-grain overlay for a filmic texture.
 *  3. A red "scrubber" progress bar at the top of the page — a nod to a
 *     video timeline — driven by scroll position.
 *
 * All effects are progressive enhancements and honour prefers-reduced-motion
 * (handled in globals.css).
 */
export default function CinematicFX() {
  useEffect(() => {
    const root = document.documentElement;

    // Flag the document so CSS hides [data-reveal] elements only when JS is
    // available (no-JS visitors keep seeing content).
    root.classList.add('reveal-ready');

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    // ---- Scroll reveals -------------------------------------------------
    let observer: IntersectionObserver | null = null;
    let mutationObserver: MutationObserver | null = null;

    const register = (el: HTMLElement) => {
      if (el.dataset.revealBound === 'true') return;
      el.dataset.revealBound = 'true';
      if (reduceMotion || !observer) {
        el.classList.add('is-visible');
      } else {
        observer.observe(el);
      }
    };

    if (!reduceMotion) {
      observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              obs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
      );
    }

    document
      .querySelectorAll<HTMLElement>('[data-reveal]')
      .forEach(register);

    // Catch elements added later (filtered lists, modals, route content).
    mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        m.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches('[data-reveal]')) register(node);
          node
            .querySelectorAll<HTMLElement>('[data-reveal]')
            .forEach(register);
        });
      });
    });
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // ---- Scroll scrubber ------------------------------------------------
    let ticking = false;
    const updateScrubber = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      root.style.setProperty('--scroll-progress', String(progress));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrubber);
        ticking = true;
      }
    };
    updateScrubber();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      observer?.disconnect();
      mutationObserver?.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-scrubber" aria-hidden="true" />
      <div className="film-grain" aria-hidden="true" />
    </>
  );
}
