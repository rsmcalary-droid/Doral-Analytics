"use client";

import { useEffect, useRef } from "react";

// Abstract "connected system" motif for the hero. Restrained, geometric, and
// on-brand (ink hairlines, navy accents, faint blueprint grid). The node
// network gently rotates, expands, and brightens as you scroll down the hero —
// disabled for visitors who prefer reduced motion.
export function HeroGraphic({ className }: { className?: string }) {
  const groupRef = useRef<SVGGElement>(null);
  const linesRef = useRef<SVGGElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ticking = false;
    const update = () => {
      ticking = false;
      const p = Math.min(Math.max(window.scrollY / 560, 0), 1);
      const rot = (p * 16).toFixed(2);
      const scale = (1 + p * 0.12).toFixed(3);
      groupRef.current?.setAttribute(
        "transform",
        `translate(220 210) rotate(${rot}) scale(${scale}) translate(-220 -210)`,
      );
      linesRef.current?.setAttribute(
        "stroke-opacity",
        (0.16 + p * 0.36).toFixed(3),
      );
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <svg
      viewBox="0 0 440 420"
      className={className}
      role="img"
      aria-label="Abstract diagram of a connected technical system"
      fill="none"
    >
      <defs>
        <pattern
          id="hero-dots"
          width="22"
          height="22"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1.5" fill="#1a1a1a" opacity="0.06" />
        </pattern>
      </defs>

      <rect x="1" y="1" width="438" height="418" rx="22" fill="#ffffff" stroke="#e4e2dd" />
      <rect x="1" y="1" width="438" height="418" rx="22" fill="url(#hero-dots)" />

      <g ref={groupRef}>
        {/* connections */}
        <g ref={linesRef} stroke="#1a1a1a" strokeOpacity="0.16" strokeWidth="1">
          <line x1="96" y1="120" x2="196" y2="80" />
          <line x1="196" y1="80" x2="300" y2="138" />
          <line x1="300" y1="138" x2="356" y2="250" />
          <line x1="356" y1="250" x2="252" y2="304" />
          <line x1="252" y1="304" x2="124" y2="312" />
          <line x1="124" y1="312" x2="96" y2="120" />
          <line x1="212" y1="198" x2="96" y2="120" />
          <line x1="212" y1="198" x2="196" y2="80" />
          <line x1="212" y1="198" x2="300" y2="138" />
          <line x1="212" y1="198" x2="356" y2="250" />
          <line x1="212" y1="198" x2="252" y2="304" />
          <line x1="212" y1="198" x2="124" y2="312" />
        </g>

        {/* outer nodes */}
        <g fill="#ffffff" stroke="#1a1a1a" strokeWidth="1.25">
          <circle cx="96" cy="120" r="6" />
          <circle cx="300" cy="138" r="6" />
          <circle cx="356" cy="250" r="6" />
          <circle cx="124" cy="312" r="6" />
        </g>

        {/* accent nodes */}
        <circle cx="196" cy="80" r="8" fill="#1f3a5f" />
        <circle cx="252" cy="304" r="8" fill="#1f3a5f" />

        {/* hub */}
        <circle cx="212" cy="198" r="14" fill="#ffffff" stroke="#1f3a5f" strokeWidth="1.5" />
        <circle cx="212" cy="198" r="5" fill="#1f3a5f" />
      </g>
    </svg>
  );
}
