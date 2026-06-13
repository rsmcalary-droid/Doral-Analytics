import Link from "next/link";
import { home } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 sm:pt-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-wider text-navy">
            Doral Analytics
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[1.05] text-ink sm:text-6xl">
            {home.hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
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
            Four ways we help you get more from your data — from the first
            dashboard to a team that can carry the work forward.
          </p>
        </div>
        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
          {home.services.map((s, i) => (
            <div key={s.title} className="bg-white p-8">
              <span className="font-serif text-sm text-navy">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-serif text-2xl text-ink">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{s.body}</p>
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
