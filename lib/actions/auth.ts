"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isAdminEmail, isSupabaseConfigured } from "@/lib/config";

export type AuthState = { error?: string } | undefined;

export async function signIn(
  _prev: AuthState,
  formData: FormData,
): Promise<AuthState> {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");

  if (!email || !password) {
    return { error: "Enter your email and password." };
  }
  if (!isSupabaseConfigured()) {
    return { error: "Authentication isn't configured yet. See SETUP.md." };
  }
  if (!isAdminEmail(email)) {
    return { error: "This email isn't authorized for the developer dashboard." };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    return { error: "Invalid email or password." };
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
