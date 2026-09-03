import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog Category | Arham Ali",
  description: "Browse frontend development articles from Arham Ali.",
  robots: { index: false, follow: true },
};

export default function CategoryLayout({ children }: { children: React.ReactNode }) { return children; }
