// Abstract "connected system" motif for the hero. Restrained, geometric, and
// on-brand (ink hairlines, navy accents, faint blueprint grid) — meant to read
// as considered and technical rather than decorative.
export function HeroGraphic({ className }: { className?: string }) {
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

      {/* connections */}
      <g stroke="#1a1a1a" strokeOpacity="0.16" strokeWidth="1">
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
    </svg>
  );
}
