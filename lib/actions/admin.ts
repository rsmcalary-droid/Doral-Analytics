"use server";

import { revalidatePath } from "next/cache";
import { Resend } from "resend";
import { createClient } from "@/lib/supabase/server";
import { requireAdmin } from "@/lib/supabase/dal";
import { CONTACT_EMAIL, isEmailConfigured } from "@/lib/config";

export type ReplyState = { ok: boolean; error?: string } | undefined;

const VALID_STATUSES = ["new", "replied", "archived"] as const;
type Status = (typeof VALID_STATUSES)[number];

/** Send an email reply via Resend, then record it on the message. */
export async function sendReply(
  _prev: ReplyState,
  formData: FormData,
): Promise<ReplyState> {
  const admin = await requireAdmin(); // redirects if not an authorized developer

  const id = String(formData.get("id") || "");
  const to = String(formData.get("to") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const body = String(formData.get("body") || "").trim();

  if (!id || !to) {
    return { ok: false, error: "Missing the message to reply to." };
  }
  if (!subject || !body) {
    return { ok: false, error: "A subject and a message are required." };
  }
  if (!isEmailConfigured()) {
    return {
      ok: false,
      error:
        "Email sending isn't configured. Add RESEND_API_KEY and CONTACT_FROM_EMAIL to your environment.",
    };
  }

  const resend = new Resend(process.env.RESEND_API_KEY!);
  const { error: sendError } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL!,
    to,
    subject,
    replyTo: CONTACT_EMAIL,
    text: body,
  });

  if (sendError) {
    console.error("Resend send failed:", sendError);
    return {
      ok: false,
      error: "The email failed to send. Check your Resend configuration and try again.",
    };
  }

  const supabase = await createClient();
  const { error: updateError } = await supabase
    .from("contact_messages")
    .update({
      status: "replied" satisfies Status,
      replied_at: new Date().toISOString(),
      replied_by: admin.email,
      reply_body: body,
    })
    .eq("id", id);

  if (updateError) {
    console.error("contact_messages update failed:", updateError.message);
    return {
      ok: false,
      error: "Your reply was sent, but recording it failed. Refresh to check.",
    };
  }

  revalidatePath("/admin");
  revalidatePath(`/admin/${id}`);
  return { ok: true };
}

/** Mark a message new / replied / archived (used by the small status buttons). */
export async function setStatus(formData: FormData): Promise<void> {
  await requireAdmin();

  const id = String(formData.get("id") || "");
  const status = String(formData.get("status") || "");
  if (!id || !VALID_STATUSES.includes(status as Status)) return;

  const supabase = await createClient();
  await supabase.from("contact_messages").update({ status }).eq("id", id);

  revalidatePath("/admin");
  revalidatePath(`/admin/${id}`);
}
