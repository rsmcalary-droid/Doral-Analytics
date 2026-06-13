import { cache } from "react";
import { redirect } from "next/navigation";
import type { User } from "@supabase/supabase-js";
import { createClient } from "@/lib/supabase/server";
import { isAdminEmail, isSupabaseConfigured } from "@/lib/config";

/**
 * Data Access Layer for auth. Per the Next.js authentication guide, the secure
 * authorization check lives here (close to the data) and is invoked inside each
 * protected page and Server Action — not only in the layout, which does not
 * re-render on navigation. `cache` dedupes the lookup within a single request.
 */

export const getCurrentUser = cache(async (): Promise<User | null> => {
  if (!isSupabaseConfigured()) return null;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
});

/** Require an authenticated, allowlisted developer or redirect to /login. */
export const requireAdmin = cache(async (): Promise<User> => {
  const user = await getCurrentUser();
  if (!user) redirect("/login");
  if (!isAdminEmail(user.email)) redirect("/login?error=unauthorized");
  return user;
});
