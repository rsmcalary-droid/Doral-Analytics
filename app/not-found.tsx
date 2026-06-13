import Link from "next/link";
import { Wordmark } from "@/components/brand-mark";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <Wordmark />
      <p className="mt-10 text-sm font-medium uppercase tracking-wider text-navy">
        404
      </p>
      <h1 className="mt-3 font-serif text-4xl text-ink">Page not found</h1>
      <p className="mt-3 max-w-sm text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-full bg-navy px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-navy-dark"
      >
        Back to home
      </Link>
    </div>
  );
}
