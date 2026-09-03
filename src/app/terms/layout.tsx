import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions | Arham Ali Portfolio",
  description: "Review the terms and conditions for using Arham Ali's portfolio website, content, contact form, external links, and AI assistant.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) { return children; }
