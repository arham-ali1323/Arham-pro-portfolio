import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arham Ali Resume | Frontend Developer",
  description: "View Arham Ali's frontend developer resume, including experience with React, Next.js, responsive interfaces, and modern web application development.",
  alternates: { canonical: "/resume" },
  openGraph: { type: "website", title: "Arham Ali Resume | Frontend Developer", description: "View Arham Ali's frontend developer resume and experience with React and Next.js.", url: "/resume", images: [{ url: "/arham-avater.png", width: 400, height: 400, alt: "Arham Ali frontend developer" }] },
  twitter: { card: "summary_large_image", title: "Arham Ali Resume | Frontend Developer", description: "View Arham Ali's frontend developer resume and experience.", images: ["/arham-avater.png"] },
};

export default function ResumeLayout({ children }: { children: React.ReactNode }) { return children; }
