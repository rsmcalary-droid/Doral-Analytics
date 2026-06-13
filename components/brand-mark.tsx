import Link from "next/link";

/** The line-chart glyph that echoes the logo. Inherits color via currentColor. */
export function BrandLine({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2 17 L10 19 L16 9 L22 14 L34 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="34" cy="3" r="2.4" fill="currentColor" />
    </svg>
  );
}

/** Clickable wordmark used in the header. */
export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Doral Analytics — home"
    >
      <BrandLine className="h-5 w-7 text-navy transition-transform group-hover:-translate-y-0.5" />
      <span className="font-serif text-[1.4rem] font-medium leading-none tracking-tight text-ink">
        Doral Analytics
      </span>
    </Link>
  );
}
