import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { terms } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Doral Systems website.",
};

export default function TermsPage() {
  return <LegalDocument doc={terms} />;
}
