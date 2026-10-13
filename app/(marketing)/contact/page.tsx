import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're trying to solve. Email Doral Systems and we'll reply personally.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 pt-20 sm:pt-28">
      <p className="text-sm font-medium uppercase tracking-wider text-navy">
        Contact
      </p>
      <h1 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
        Tell us what you&apos;re trying to solve.
      </h1>
      <p className="mt-6 leading-relaxed text-muted">
        Whether you&apos;re starting from scratch or refining what you already
        have, we&apos;d like to hear about your goals. Send us an email and
        we&apos;ll get back to you.
      </p>

      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="mt-8 inline-flex rounded-full bg-navy px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-navy-dark"
      >
        {CONTACT_EMAIL}
      </a>

      <dl className="mt-10 space-y-5 text-sm">
        <div>
          <dt className="font-medium text-ink">Where we are</dt>
          <dd className="text-muted">Cheltenham, England, United Kingdom</dd>
        </div>
        <div>
          <dt className="font-medium text-ink">What to expect</dt>
          <dd className="text-muted">
            A personal reply from our team — no autoresponders, no sales
            sequences.
          </dd>
        </div>
      </dl>
    </section>
  );
}
