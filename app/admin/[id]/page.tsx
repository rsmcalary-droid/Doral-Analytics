import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/supabase/dal";
import { createClient } from "@/lib/supabase/server";
import { setStatus } from "@/lib/actions/admin";
import { ReplyForm } from "@/components/reply-form";
import { StatusBadge } from "@/components/status-badge";
import { isEmailConfigured } from "@/lib/config";
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
  await requireAdmin();
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
  const defaultSubject = `Re: ${m.subject || "Your message to Doral Analytics"}`;
  const defaultBody = `Hi ${firstName},\n\n\n\n— Doral Analytics\n\n---------- Original message ----------\n${quoted}`;

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

      {m.status === "replied" && m.reply_body && (
        <div className="mt-6 rounded-2xl border border-green-200 bg-green-50/60 p-6">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-green-700">
            Your reply
            {m.replied_at ? ` · ${formatDate(m.replied_at)}` : ""}
            {m.replied_by ? ` · ${m.replied_by}` : ""}
          </h2>
          <p className="mt-3 whitespace-pre-wrap leading-relaxed text-ink/80">
            {m.reply_body}
          </p>
        </div>
      )}

      <div className="mt-6 rounded-2xl border border-line bg-white p-6">
        <h2 className="font-serif text-2xl text-ink">Reply</h2>
        {!isEmailConfigured() && (
          <p className="mt-3 rounded-lg border border-line bg-paper px-4 py-3 text-sm text-muted">
            Email sending isn&apos;t configured yet. Add{" "}
            <span className="font-medium text-ink">RESEND_API_KEY</span> and{" "}
            <span className="font-medium text-ink">CONTACT_FROM_EMAIL</span> (see
            SETUP.md) to send from here. You can also reply from your own client
            via{" "}
            <a
              href={`mailto:${m.email}`}
              className="text-navy hover:text-navy-dark"
            >
              {m.email}
            </a>
            .
          </p>
        )}
        <div className="mt-4">
          <ReplyForm
            id={m.id}
            to={m.email}
            defaultSubject={defaultSubject}
            defaultBody={defaultBody}
          />
        </div>
      </div>
    </div>
  );
}
