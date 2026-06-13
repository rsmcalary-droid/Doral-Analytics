"use server";

import { createClient } from "@/lib/supabase/server";
import { CONTACT_EMAIL, isSupabaseConfigured } from "@/lib/config";

export type ContactState = { ok: boolean; error?: string } | undefined;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function submitContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  // Honeypot: bots tend to fill every field. Silently accept and drop.
  if (String(formData.get("company") || "").trim().length > 0) {
    return { ok: true };
  }

  const name = String(formData.get("name") || "").trim();
  const email = String(formData.get("email") || "").trim();
  const subject = String(formData.get("subject") || "").trim();
  const message = String(formData.get("message") || "").trim();

  if (!name || !email || !message) {
    return { ok: false, error: "Please add your name, email, and a message." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }
  if (message.length > 5000) {
    return {
      ok: false,
      error: "Your message is a little long — please keep it under 5,000 characters.",
    };
  }

  if (!isSupabaseConfigured()) {
    return {
      ok: false,
      error: `The contact form isn't connected yet. Please email us directly at ${CONTACT_EMAIL}.`,
    };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("contact_messages").insert({
    name,
    email,
    subject: subject || null,
    message,
  });

  if (error) {
    console.error("contact_messages insert failed:", error.message);
    return {
      ok: false,
      error: "Something went wrong on our end. Please try again, or email us directly.",
    };
  }

  return { ok: true };
}
