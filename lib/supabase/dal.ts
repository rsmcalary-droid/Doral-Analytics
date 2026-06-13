import { cache } from "react";
import { redirect } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/config";

/**
 * Auth data-access layer. The real security boundary is Row Level Security in
 * Postgres — only emails in the `admins` table can read/update messages. These
 * helpers drive the UI: who is logged in, and whether they're an approved
 * developer. `cache` dedupes each lookup within a single request.
 */

export const getCurrentUser = cache(async (): Promise<User | null> => {
  if (!isSupabaseConfigured()) return null;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
});

/** True if the logged-in user's email is in the `admins` table (is_admin RPC). */
export const isCurrentUserAdmin = cache(async (): Promise<boolean> => {
  const user = await getCurrentUser();
  if (!user) return false;
  const supabase = await createClient();
  const { data, error } = await supabase.rpc("is_admin");
  if (error) {
    console.error(
      "is_admin RPC failed — did you run supabase/schema.sql?",
      error.message,
    );
    return false;
  }
  return data === true;
});

/** Require any logged-in user, or redirect to /login. */
export const requireUser = cache(async (): Promise<User> => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  return user;
});
