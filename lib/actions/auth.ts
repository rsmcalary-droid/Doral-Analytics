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

  // Sign-up is invite-only: the email must already be in the `admins` table.
  const { data: allowed, error: allowError } = await supabase.rpc("can_signup", {
    check_email: email,
  });
  if (allowError || allowed !== true) {
    if (allowError) {
      console.error(
        "can_signup RPC failed — did you run supabase/schema.sql?",
        allowError.message,
      );
    }
    return {
      error:
        "Sign-ups are limited to approved developers right now. Ask an admin to add your email, then try again.",
    };
  }

  const { data, error } = await supabase.auth.signUp({ email, password });

  if (error) {
    console.error("auth.signUp failed:", error.message);
    const msg = error.message.toLowerCase();
    if (msg.includes("registered") || msg.includes("already")) {
      return {
        error: "An account with this email already exists — try signing in instead.",
      };
    }
    if (msg.includes("password")) {
      return { error: "That password was rejected — try a longer, less common one." };
    }
    if (msg.includes("rate") || msg.includes("sending") || msg.includes("confirmation")) {
      return {
        error:
          "Confirmation email is rate-limited. Turn off 'Confirm email' in Supabase (Authentication → Providers → Email), or wait a few minutes and retry.",
      };
    }
    if (msg.includes("disabled") || msg.includes("not allowed")) {
      return {
        error: "Email sign-ups are disabled in Supabase — enable them under Authentication → Providers → Email.",
      };
    }
    // Surface the real reason for anything else.
    return { error: `Couldn't create the account: ${error.message}` };
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
