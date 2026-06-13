import type { Metadata } from "next";
import { LegalDocument } from "@/components/legal-document";
import { privacy } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Doral Analytics collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return <LegalDocument doc={privacy} />;
}
