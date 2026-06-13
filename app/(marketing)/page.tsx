import Link from "next/link";
import { home } from "@/lib/content";
import { HeroGraphic } from "@/components/hero-graphic";

const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// One line icon per service, in the same order as home.services.
const serviceIcons = [
  <svg key="systems" {...iconProps}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m3 14 9 5 9-5" />
  </svg>,
  <svg key="integration" {...iconProps}>
    <path d="M10 13a5 5 0 0 0 7.07 0l2-2a5 5 0 0 0-7.07-7.07l-1 1" />
    <path d="M14 11a5 5 0 0 0-7.07 0l-2 2a5 5 0 0 0 7.07 7.07l1-1" />
  </svg>,
  <svg key="strategy" {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </svg>,
  <svg key="stakeholder" {...iconProps}>
    <circle cx="9" cy="9" r="3" />
    <path d="M4 19a5 5 0 0 1 10 0" />
    <path d="M16 7a3 3 0 0 1 0 6" />
    <path d="M19 19a5 5 0 0 0-3.5-4.78" />
  </svg>,
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="max-w-xl">
            <p className="text-sm font-medium uppercase tracking-wider text-navy">
              Doral Systems
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-ink sm:text-6xl">
              {home.hero.headline}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">
              {home.hero.subhead}
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-navy px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-navy-dark"
              >
                {home.hero.ctaPrimary}
              </Link>
              <Link
                href="/about"
                className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40"
              >
                {home.hero.ctaSecondary}
              </Link>
            </div>
          </div>
          <div className="hidden lg:block">
            <HeroGraphic className="mx-auto w-full max-w-md" />
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-y border-line bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-3">
          {home.valueProps.map((v) => (
            <div key={v.title}>
              <h3 className="font-serif text-xl text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">What we do</h2>
          <p className="mt-3 leading-relaxed text-muted">
            Four ways we put modern technology to work for your business — from
            the first build to a team that can carry it forward.
          </p>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {home.services.map((s, i) => (
            <div key={s.title} className="bg-white p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 text-navy">
                {serviceIcons[i]}
              </div>
              <h3 className="mt-4 font-serif text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process flowchart */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl text-ink sm:text-4xl">
            How we work with you
          </h2>
          <p className="mt-3 leading-relaxed text-muted">
            Every project follows the same clear path — from understanding your
            needs to delivering a solution built around them.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {home.process.map((p, i) => (
            <div
              key={p.title}
              className="relative rounded-2xl border border-line bg-white p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-navy text-sm font-medium text-paper">
                  {i + 1}
                </span>
                <h3 className="font-serif text-xl text-ink">{p.title}</h3>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{p.body}</p>
              {i < home.process.length - 1 && (
                <>
                  <span
                    aria-hidden="true"
                    className="absolute right-0 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-line bg-paper text-navy md:flex"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 6 6 6-6 6" />
                    </svg>
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-1/2 z-10 flex h-7 w-7 -translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper text-navy md:hidden"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-navy px-8 py-14 text-center sm:px-16">
          <h2 className="font-serif text-3xl text-paper sm:text-4xl">
            {home.closing.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-paper/80">
            {home.closing.body}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-paper px-7 py-3 text-sm font-medium text-navy transition-colors hover:bg-white"
          >
            {home.closing.cta}
          </Link>
        </div>
      </section>
    </>
  );
}
