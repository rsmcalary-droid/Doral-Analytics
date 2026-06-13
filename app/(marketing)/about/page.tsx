import Link from "next/link";
import type { Metadata } from "next";
import { about } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Doral Analytics is a boutique data and analytics consultancy built around the decisions our clients need to make.",
};

export default function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-3xl px-6 pt-20 sm:pt-28">
        <p className="text-sm font-medium uppercase tracking-wider text-navy">
          About us
        </p>
        <h1 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
          A boutique analytics partner, built around your decisions.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted">{about.lead}</p>
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-6">
        <div className="rounded-2xl border border-line bg-white p-8 sm:p-10">
          <h2 className="font-serif text-2xl text-ink">Our mission</h2>
          <p className="mt-3 leading-relaxed text-ink/80">{about.mission}</p>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl px-6">
        <h2 className="font-serif text-3xl text-ink">How we work</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {about.approach.map((a, i) => (
            <div key={a.title} className="border-t border-line pt-5">
              <span className="font-serif text-sm text-navy">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 font-serif text-xl text-ink">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{a.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl px-6">
        <h2 className="font-serif text-3xl text-ink">What we value</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {about.values.map((v) => (
            <div key={v.title}>
              <h3 className="font-serif text-xl text-ink">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl text-ink">
          Let&apos;s talk about your data.
        </h2>
        <p className="mt-3 text-muted">
          Tell us what you&apos;re trying to solve — we&apos;ll show you where
          the data can take you.
        </p>
        <Link
          href="/contact"
          className="mt-7 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-navy-dark"
        >
          Get in touch
        </Link>
      </section>
    </>
  );
}
