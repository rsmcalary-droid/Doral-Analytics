import Link from "next/link";
import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Wordmark } from "@/components/brand-mark";
import { SignUpForm } from "@/components/signup-form";
import { getCurrentUser } from "@/lib/supabase/dal";
import { isSupabaseConfigured } from "@/lib/config";

export const metadata: Metadata = {
  title: "Developer sign-up",
  robots: { index: false },
};

export default async function SignUpPage() {
  const user = await getCurrentUser();
  if (user) redirect("/admin");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm">
        <div className="flex justify-center">
          <Wordmark />
        </div>

        <div className="mt-10 rounded-2xl border border-line bg-white p-8">
          <h1 className="font-serif text-2xl text-ink">
            Create a developer account
          </h1>
          <p className="mt-1 text-sm text-muted">
            Sign up to view and reply to contact messages.
          </p>

          {!isSupabaseConfigured() && (
            <p className="mt-4 rounded-lg border border-line bg-paper px-4 py-3 text-sm text-muted">
              Supabase isn&apos;t connected yet. See{" "}
              <span className="font-medium text-ink">SETUP.md</span>.
            </p>
          )}

          <div className="mt-6">
            <SignUpForm />
          </div>

          <p className="mt-5 text-center text-sm text-muted">
            Already have an account?{" "}
            <Link href="/login" className="text-navy hover:text-navy-dark">
              Sign in
            </Link>
          </p>
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
