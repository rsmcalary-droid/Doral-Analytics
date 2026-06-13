"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/config";

export type AuthState = { error?: string; notice?: string } | undefined;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function signIn(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  if (!email || !password) return { error: "Enter your email and password." };
  if (!isSupabaseConfigured()) {
    return { error: "Authentication isn't configured yet. See SETUP.md." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error: "Invalid email or password." };

  redirect("/admin");
}

export async function signUp(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const confirm = String(formData.get("confirm") || "");

  if (!email || !password) return { error: "Enter an email and a password." };
  if (!EMAIL_RE.test(email)) {
    return { error: "Please enter a valid email address." };
  }
  if (password.length < 8) {
    return { error: "Use a password of at least 8 characters." };
  }
  if (password !== confirm) return { error: "Those passwords don't match." };
  if (!isSupabaseConfigured()) {
    return { error: "Sign-up isn't configured yet. See SETUP.md." };
  }

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    const msg = error.message.toLowerCase();
    if (msg.includes("disabled") || msg.includes("not allowed")) {
      return {
        error: "Sign-ups are currently closed — ask an admin to add you.",
      };
    }
    if (msg.includes("registered") || msg.includes("already")) {
      return {
        error: "An account with this email already exists — try signing in.",
      };
    }
    return { error: "Couldn't create the account. Please try again." };
  }

  // With email confirmation on, there's no session until the link is clicked.
  if (!data.session) {
    return {
      notice:
        "Almost there — check your email to confirm your account, then sign in.",
    };
  }

  redirect("/admin");
}

export async function signOut() {
  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }
  redirect("/login");
}
