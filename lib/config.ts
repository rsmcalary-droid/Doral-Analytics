// Centralized config + small environment helpers.
// Safe to import from both Server and Client Components — it only reads
// NEXT_PUBLIC_* values that are available in the browser.

export const COMPANY = {
  name: "Doral Analytics",
  tagline: "Innovating Business Solutions",
  location: "Doral, Florida",
} as const;

/** Public-facing contact address. Used in legal pages and the contact page. */
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "hello@doralanalytics.com";

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

/** True once Resend is configured so the dashboard can send replies. */
export function isEmailConfigured(): boolean {
  return !!process.env.RESEND_API_KEY && !!process.env.CONTACT_FROM_EMAIL;
}

/** Comma-separated allowlist of developer emails permitted in the dashboard. */
export function getAdminEmails(): string[] {
  return (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((e) => e.trim().toLowerCase())
    .filter(Boolean);
}

export function isAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  const admins = getAdminEmails();
  // If no allowlist is configured, any authenticated Supabase user counts as a
  // developer. Set ADMIN_EMAILS in production to lock this down.
  if (admins.length === 0) return true;
  return admins.includes(email.toLowerCase());
}
