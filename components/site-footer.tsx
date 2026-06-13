import Link from "next/link";
import { BrandLine } from "./brand-mark";
import { COMPANY, CONTACT_EMAIL, navLinks } from "@/lib/config";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <div className="flex items-center gap-2.5">
            <BrandLine className="h-5 w-7 text-navy" />
            <span className="font-serif text-xl font-medium tracking-tight text-ink">
              Doral Analytics
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
            {COMPANY.tagline}. A boutique data &amp; analytics consultancy based
            in {COMPANY.location}.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="mt-4 inline-block text-sm text-navy hover:text-navy-dark"
          >
            {CONTACT_EMAIL}
          </a>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-ink/80 hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted">
            Legal
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link href="/privacy" className="text-ink/80 hover:text-ink">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="text-ink/80 hover:text-ink">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/login" className="text-ink/80 hover:text-ink">
                Developers
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-xs text-muted sm:flex-row">
          <p>
            © {year} {COMPANY.name}. All rights reserved.
          </p>
          <p>{COMPANY.location}, USA</p>
        </div>
      </div>
    </footer>
  );
}
