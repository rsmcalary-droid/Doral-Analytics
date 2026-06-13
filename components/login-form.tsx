"use client";

import { useActionState } from "react";
import { signIn, type AuthState } from "@/lib/actions/auth";

const inputClass =
  "w-full rounded-lg border border-line bg-white px-4 py-2.5 text-ink outline-none transition focus:border-navy focus:ring-2 focus:ring-navy/15";
const labelClass = "mb-1.5 block text-sm font-medium text-ink";

export function LoginForm() {
  const [state, action, pending] = useActionState<AuthState, FormData>(
    signIn,
    undefined,
  );

  return (
    <form action={action} className="space-y-4">
      {state?.error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.error}
        </p>
      )}

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input id="email" name="email" type="email" autoComplete="email" required className={inputClass} />
      </div>

      <div>
        <label htmlFor="password" className={labelClass}>
          Password
        </label>
        <input id="password" name="password" type="password" autoComplete="current-password" required className={inputClass} />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-navy px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-navy-dark disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
