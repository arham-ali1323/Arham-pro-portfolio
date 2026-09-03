import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Arham Ali Portfolio",
  description: "Read the privacy policy for Arham Ali's portfolio website, including information about contact forms, cookies, analytics, and the AI assistant.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) { return children; }
