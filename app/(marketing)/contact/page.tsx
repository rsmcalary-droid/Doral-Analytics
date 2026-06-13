import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { CONTACT_EMAIL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us what you're trying to solve. Get in touch with Doral Analytics and we'll reply by email.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-20 sm:pt-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-navy">
            Contact
          </p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-ink sm:text-5xl">
            Tell us what you&apos;re trying to solve.
          </h1>
          <p className="mt-6 leading-relaxed text-muted">
            Whether you&apos;re starting from scratch or refining what you
            already have, we&apos;d like to hear about your goals. Fill out the
            form and we&apos;ll get back to you by email.
          </p>

          <dl className="mt-8 space-y-5 text-sm">
            <div>
              <dt className="font-medium text-ink">Email us directly</dt>
              <dd>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-navy hover:text-navy-dark"
                >
                  {CONTACT_EMAIL}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-medium text-ink">Where we are</dt>
              <dd className="text-muted">
                Cheltenham, England, United Kingdom
              </dd>
            </div>
            <div>
              <dt className="font-medium text-ink">What to expect</dt>
              <dd className="text-muted">
                A personal reply from our team — no autoresponders, no sales
                sequences.
              </dd>
            </div>
          </dl>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
