import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frontend Development Blog | Arham Ali",
  description: "Read practical articles by Arham Ali about React, Next.js, TypeScript, scalable application architecture, SEO, and web performance.",
  alternates: { canonical: "/blog" },
  openGraph: { type: "website", title: "Frontend Development Blog | Arham Ali", description: "Practical articles about React, Next.js, TypeScript, SEO, and web performance.", url: "/blog", images: [{ url: "/asset/blog-6.png", width: 800, height: 600, alt: "Frontend development article" }] },
  twitter: { card: "summary_large_image", title: "Frontend Development Blog | Arham Ali", description: "Practical articles about React, Next.js, TypeScript, SEO, and web performance.", images: ["/asset/blog-6.png"] },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) { return children; }
