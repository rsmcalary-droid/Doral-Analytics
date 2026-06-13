// Centralized config + small environment helpers.
// Safe to import from both Server and Client Components — it only reads
// NEXT_PUBLIC_* values that are available in the browser.

export const COMPANY = {
  name: "Doral Systems Ltd",
  tagline: "Innovating Business Solutions",
  location: "Cheltenham, England",
} as const;

/** Public-facing contact address. Used in legal pages and the contact page.
 *  Hardcoded so it can't be overridden by a stale NEXT_PUBLIC_CONTACT_EMAIL. */
export const CONTACT_EMAIL = "hello@doralsystems.co.uk";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

/** True once real Supabase credentials are present (not the placeholders). */
export function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  return (
    !!url &&
    !!key &&
    url.startsWith("http") &&
    !url.includes("YOUR-") &&
    !key.includes("your-")
  );
}
