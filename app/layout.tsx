import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://doralsystems.co.uk"),
  title: {
    default: "Doral Systems — Innovating Business Solutions",
    template: "%s · Doral Systems",
  },
  description:
    "Doral Systems builds bespoke technical solutions for ambitious businesses — cutting-edge technology, shaped around what you actually need, with service at the centre.",
  openGraph: {
    title: "Doral Systems",
    description:
      "Bespoke technical solutions, built around your business — cutting-edge technology with service at the centre.",
    type: "website",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
