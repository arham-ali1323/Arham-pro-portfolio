import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Arham Ali",
  description: "Explore Arham Ali's React and Next.js portfolio projects, including e-commerce, booking, fitness, and business management applications.",
  alternates: { canonical: "/work" },
  openGraph: { type: "website", title: "Projects | Arham Ali", description: "Explore Arham Ali's React and Next.js portfolio projects and practical web applications.", url: "/work", images: [{ url: "/asset/portofolio.png", width: 800, height: 600, alt: "Arham Ali portfolio project" }] },
  twitter: { card: "summary_large_image", title: "Projects | Arham Ali", description: "Explore Arham Ali's React and Next.js portfolio projects.", images: ["/asset/portofolio.png"] },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) { return children; }
