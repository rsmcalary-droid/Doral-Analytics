"use client";

import { useActionState } from "react";
import { sendReply, type ReplyState } from "@/lib/actions/admin";

const inputClass =
  "w-full rounded-lg border border-line bg-white px-4 py-2.5 text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/15";

export function ReplyForm({
  id,
  to,
  defaultSubject,
  defaultBody,
}: {
  id: string;
  to: string;
  defaultSubject: string;
  defaultBody: string;
}) {
  const [state, action, pending] = useActionState<ReplyState, FormData>(
    sendReply,
    undefined,
  );

  return (
    <form action={action} className="space-y-4">
      {state?.ok && (
        <p className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
          Reply sent to {to}.
        </p>
      )}
      {state?.error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </p>
      )}

      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="to" value={to} />

      <div>
        <label className="mb-1.5 block text-sm text-muted">To</label>
        <input
          value={to}
          disabled
          className="w-full rounded-lg border border-line bg-paper px-4 py-2.5 text-muted"
        />
      </div>

      <div>
        <label htmlFor="reply-subject" className="mb-1.5 block text-sm text-muted">
          Subject
        </label>
        <input
          id="reply-subject"
          name="subject"
          defaultValue={defaultSubject}
          required
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="reply-body" className="mb-1.5 block text-sm text-muted">
          Message
        </label>
        <textarea
          id="reply-body"
          name="body"
          rows={10}
          defaultValue={defaultBody}
          required
          className={`${inputClass} font-sans`}
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center justify-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-navy-dark disabled:opacity-60"
      >
        {pending ? "Sending…" : "Send reply"}
      </button>
    </form>
  );
}
