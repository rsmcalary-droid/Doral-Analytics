import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Wordmark } from "@/components/brand-mark";
import { LoginForm } from "@/components/login-form";
import { getCurrentUser } from "@/lib/supabase/dal";
import { isAdminEmail, isSupabaseConfigured } from "@/lib/config";

export const metadata: Metadata = {
  title: "Developer login",
  robots: { index: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  const user = await getCurrentUser();
  if (user && isAdminEmail(user.email)) redirect("/admin");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="flex justify-center">
          <Wordmark />
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-white p-8">
          <h1 className="font-serif text-2xl text-ink">Developer login</h1>
          <p className="mt-1 text-sm text-muted">
            Sign in to view and reply to contact messages.
          </p>

          {error === "unauthorized" && (
            <p className="mt-4 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
              That account isn&apos;t authorized for the dashboard.
            </p>
          )}
          {!isSupabaseConfigured() && (
            <p className="mt-4 rounded-lg border border-line bg-paper px-4 py-3 text-sm text-muted">
              Supabase isn&apos;t connected yet. See{" "}
              <span className="font-medium text-ink">SETUP.md</span> to finish
              configuration.
            </p>
          )}

          <div className="mt-6">
            <LoginForm />
          </div>
        </div>

        <p className="mt-6 text-center text-sm">
          <Link href="/" className="text-muted hover:text-ink">
            ← Back to site
          </Link>
        </p>
      </div>
    </div>
  );
}
