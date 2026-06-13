"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { getCurrentUser, isCurrentUserAdmin } from "@/lib/supabase/dal";

const VALID_STATUSES = ["new", "replied", "archived"] as const;
type Status = (typeof VALID_STATUSES)[number];

/**
 * Update a message's status (new / replied / archived). Replies are sent from
 * the developer's own email client via a mailto: link, so marking "replied"
 * here just records that it was handled. Row Level Security is the real guard;
 * this app-level check keeps the UI honest.
 */
export async function setStatus(formData: FormData): Promise<void> {
  const user = await getCurrentUser();
  if (!user || !(await isCurrentUserAdmin())) return;

  const id = String(formData.get("id") || "");
  const status = String(formData.get("status") || "");
  if (!id || !VALID_STATUSES.includes(status as Status)) return;

  const update: Record<string, unknown> = { status };
  if (status === "replied") {
    update.replied_at = new Date().toISOString();
    update.replied_by = user.email;
  }

  const supabase = await createClient();
  await supabase.from("contact_messages").update(update).eq("id", id);

  revalidatePath("/admin");
  revalidatePath(`/admin/${id}`);
}
