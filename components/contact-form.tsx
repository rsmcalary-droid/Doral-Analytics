"use client";

import { useActionState } from "react";
import { submitContactMessage, type ContactState } from "@/lib/actions/contact";

const inputClass =
  "w-full rounded-lg border border-line bg-white px-4 py-2.5 text-ink placeholder:text-muted/60 outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/15";
const labelClass = "mb-1.5 block text-sm font-medium text-ink";

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(
    submitContactMessage,
    undefined,
  );

  if (state?.ok) {
    return (
      <div className="rounded-2xl border border-line bg-white p-10 text-center">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-navy/10 text-navy">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-4 font-serif text-2xl text-ink">
          Thank you — your message is on its way.
        </h3>
        <p className="mt-2 text-muted">
          We read every inquiry personally and will reply by email shortly.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-5" noValidate>
      {state?.error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name
          </label>
          <input id="name" name="name" autoComplete="name" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className={labelClass}>
          Subject <span className="font-normal text-muted">(optional)</span>
        </label>
        <input id="subject" name="subject" className={inputClass} />
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          How can we help?
        </label>
        <textarea id="message" name="message" rows={6} required className={inputClass} />
      </div>

      {/* Honeypot — hidden from people, tempting to bots. */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-navy-dark disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
