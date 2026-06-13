import type { MessageStatus } from "@/lib/types";

const styles: Record<MessageStatus, string> = {
  new: "bg-navy/10 text-navy",
  replied: "bg-green-100 text-green-700",
  archived: "bg-zinc-100 text-zinc-500",
};

const labels: Record<MessageStatus, string> = {
  new: "New",
  replied: "Replied",
  archived: "Archived",
};

export function StatusBadge({ status }: { status: MessageStatus }) {
  return (
    <span
      className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-medium ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}
