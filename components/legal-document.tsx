import type { ReactNode } from "react";
import { CONTACT_EMAIL } from "@/lib/config";
import type { LegalDoc } from "@/lib/content";

/** Replaces the {{CONTACT_EMAIL}} token in legal copy with a mailto link. */
function withContactEmail(body: string): ReactNode[] {
  const segments = body.split("{{CONTACT_EMAIL}}");
  const nodes: ReactNode[] = [];
  segments.forEach((segment, i) => {
    if (i > 0) {
      nodes.push(
        <a
          key={`email-${i}`}
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-navy underline underline-offset-2 hover:text-navy-dark"
        >
          {CONTACT_EMAIL}
        </a>,
      );
    }
    nodes.push(segment);
  });
  return nodes;
}

export function LegalDocument({ doc }: { doc: LegalDoc }) {
  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
      <p className="text-sm font-medium uppercase tracking-wider text-navy">
        Legal
      </p>
      <h1 className="mt-3 font-serif text-4xl text-ink sm:text-5xl">{doc.title}</h1>
      <p className="mt-3 text-sm text-muted">Last updated: {doc.lastUpdated}</p>

      <p className="mt-8 leading-relaxed text-ink/80">
        {withContactEmail(doc.intro)}
      </p>

      <div className="mt-10 space-y-9">
        {doc.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-2xl text-ink">{section.heading}</h2>
            <p className="mt-3 leading-relaxed text-ink/80">
              {withContactEmail(section.body)}
            </p>
          </section>
        ))}
      </div>
    </article>
  );
}
