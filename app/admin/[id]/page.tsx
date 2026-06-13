import Link from "next/link";
import { notFound } from "next/navigation";
import { requireUser } from "@/lib/supabase/dal";
import { createClient } from "@/lib/supabase/server";
import { setStatus } from "@/lib/actions/admin";
import { StatusBadge } from "@/components/status-badge";
import type { ContactMessage } from "@/lib/types";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

function StatusButton({
  id,
  status,
  label,
}: {
  id: string;
  status: ContactMessage["status"];
  label: string;
}) {
  return (
    <form action={setStatus}>
      <input type="hidden" name="id" value={id} />
      <input type="hidden" name="status" value={status} />
      <button
        type="submit"
        className="rounded-full border border-line px-3 py-1.5 text-xs text-ink transition-colors hover:border-ink/40"
      >
        {label}
      </button>
    </form>
  );
}

export default async function MessagePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireUser();
  const { id } = await params;

  const supabase = await createClient();
  const { data } = await supabase
    .from("contact_messages")
    .select("*")
    .eq("id", id)
    .single();

  if (!data) notFound();
  const m = data as ContactMessage;

  const firstName = m.name.split(" ")[0] || m.name;
  const quoted = m.message
    .split("\n")
    .map((line) => `> ${line}`)
    .join("\n");
  const replySubject = `Re: ${m.subject || "Your message to Doral Analytics"}`;
  const replyBody = `Hi ${firstName},\n\n\n\n— Doral Analytics\n\n---------- Original message ----------\n${quoted}`;
  const mailtoHref = `mailto:${m.email}?subject=${encodeURIComponent(
    replySubject,
  )}&body=${encodeURIComponent(replyBody)}`;

  return (
    <div>
      <Link href="/admin" className="text-sm text-muted hover:text-ink">
        ← All messages
      </Link>

      <div className="mt-4 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="font-serif text-3xl text-ink">
              {m.subject || "(no subject)"}
            </h1>
            <StatusBadge status={m.status} />
          </div>
          <p className="mt-2 text-sm text-muted">
            From <span className="text-ink">{m.name}</span> ·{" "}
            <a
              href={`mailto:${m.email}`}
              className="text-navy hover:text-navy-dark"
            >
              {m.email}
            </a>{" "}
            · {formatDate(m.created_at)}
            {m.status === "replied" && m.replied_at ? (
              <>
                {" "}
                · replied {formatDate(m.replied_at)}
                {m.replied_by ? ` by ${m.replied_by}` : ""}
              </>
            ) : null}
          </p>
        </div>
        <div className="flex gap-2">
          {m.status !== "archived" ? (
            <StatusButton id={m.id} status="archived" label="Archive" />
          ) : (
            <StatusButton id={m.id} status="new" label="Unarchive" />
          )}
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-line bg-white p-6">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted">
          Message
        </h2>
        <p className="mt-3 whitespace-pre-wrap leading-relaxed text-ink/90">
          {m.message}
        </p>
      </div>

      <div className="mt-6 rounded-2xl border border-line bg-white p-6">
        <h2 className="font-serif text-2xl text-ink">Reply</h2>
        <p className="mt-2 text-sm text-muted">
          This opens a pre-filled email in your own mail app, with their message
          quoted. After you send it, mark the message as replied.
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <a
            href={mailtoHref}
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-navy-dark"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m3 7 9 6 9-6" />
            </svg>
            Reply via email
          </a>
          {m.status !== "replied" ? (
            <form action={setStatus}>
              <input type="hidden" name="id" value={m.id} />
              <input type="hidden" name="status" value="replied" />
              <button
                type="submit"
                className="rounded-full border border-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40"
              >
                Mark as replied
              </button>
            </form>
          ) : (
            <span className="text-sm text-green-700">✓ Marked as replied</span>
          )}
        </div>
      </div>
    </div>
  );
}
