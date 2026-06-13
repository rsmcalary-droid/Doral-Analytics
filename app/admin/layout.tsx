import Link from "next/link";
import type { Metadata } from "next";
import { requireUser, isCurrentUserAdmin } from "@/lib/supabase/dal";
import { signOut } from "@/lib/actions/auth";
import { BrandLine } from "@/components/brand-mark";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false },
};

function SignOutButton() {
  return (
    <form action={signOut}>
      <button
        type="submit"
        className="rounded-full border border-line px-4 py-1.5 text-ink transition-colors hover:border-ink/40"
      >
        Sign out
      </button>
    </form>
  );
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await requireUser();
  const isAdmin = await isCurrentUserAdmin();

  if (!isAdmin) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <BrandLine className="h-6 w-9 text-navy" />
        <h1 className="mt-6 font-serif text-3xl text-ink">
          Account pending approval
        </h1>
        <p className="mt-3 max-w-md text-muted">
          You&apos;re signed in as{" "}
          <span className="text-ink">{user.email}</span>, but this account
          isn&apos;t approved yet. Ask an existing developer to add your email to
          the team, then refresh this page.
        </p>
        <div className="mt-8 flex items-center gap-4 text-sm">
          <Link href="/" className="text-muted hover:text-ink">
            View site
          </Link>
          <SignOutButton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
          <Link href="/admin" className="flex items-center gap-2.5">
            <BrandLine className="h-5 w-7 text-navy" />
            <span className="font-serif text-lg font-medium text-ink">
              Doral Analytics
            </span>
            <span className="ml-1 rounded-full bg-navy/10 px-2 py-0.5 text-xs font-medium text-navy">
              Dashboard
            </span>
          </Link>
          <div className="flex items-center gap-4 text-sm">
            <span className="hidden text-muted sm:inline">{user.email}</span>
            <Link href="/" className="text-muted hover:text-ink">
              View site
            </Link>
            <SignOutButton />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
    </div>
  );
}
