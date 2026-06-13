import Link from "next/link";
import { requireUser } from "@/lib/supabase/dal";
import { createClient } from "@/lib/supabase/server";
import { StatusBadge } from "@/components/status-badge";
import type { ContactMessage } from "@/lib/types";

function formatDate(iso: string) {
  return new Date(iso).toLocaleString("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
  });
}

export default async function AdminPage() {
  await requireUser();

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });

  const messages = (data ?? []) as ContactMessage[];
  const newCount = messages.filter((m) => m.status === "new").length;

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <h1 className="font-serif text-3xl text-ink">Contact messages</h1>
        <p className="text-sm text-muted">
          {messages.length} total · {newCount} new
        </p>
      </div>

      {error && (
        <p className="mt-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          Couldn&apos;t load messages: {error.message}
        </p>
      )}

      {!error && messages.length === 0 && (
        <div className="mt-10 rounded-2xl border border-dashed border-line p-12 text-center">
          <p className="font-serif text-xl text-ink">No messages yet</p>
          <p className="mt-2 text-sm text-muted">
            Submissions from the contact form will appear here.
          </p>
        </div>
      )}

      {messages.length > 0 && (
        <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-line text-xs uppercase tracking-wide text-muted">
              <tr>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">From</th>
                <th className="px-5 py-3 font-medium">Subject</th>
                <th className="px-5 py-3 font-medium whitespace-nowrap">
                  Received
                </th>
              </tr>
            </thead>
            <tbody>
              {messages.map((m) => (
                <tr
                  key={m.id}
                  className="border-b border-line transition-colors last:border-0 hover:bg-paper"
                >
                  <td className="px-5 py-4 align-top">
                    <StatusBadge status={m.status} />
                  </td>
                  <td className="px-5 py-4 align-top">
                    <Link
                      href={`/admin/${m.id}`}
                      className="font-medium text-ink hover:text-navy"
                    >
                      {m.name}
                    </Link>
                    <div className="text-muted">{m.email}</div>
                  </td>
                  <td className="px-5 py-4 align-top text-ink/80">
                    <Link href={`/admin/${m.id}`} className="hover:text-navy">
                      {m.subject || (
                        <span className="text-muted">(no subject)</span>
                      )}
                    </Link>
                  </td>
                  <td className="px-5 py-4 align-top whitespace-nowrap text-muted">
                    {formatDate(m.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
