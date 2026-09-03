import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services | Arham Ali",
  description: "Hire Arham Ali for frontend, full-stack, e-commerce, and portfolio website development using React, Next.js, Tailwind CSS, and APIs.",
  alternates: { canonical: "/services" },
  openGraph: { type: "website", title: "Web Development Services | Arham Ali", description: "Frontend, full-stack, e-commerce, and portfolio website development with React and Next.js.", url: "/services", images: [{ url: "/asset/portofolio.png", width: 800, height: 600, alt: "Web development services by Arham Ali" }] },
  twitter: { card: "summary_large_image", title: "Web Development Services | Arham Ali", description: "Frontend, full-stack, e-commerce, and portfolio website development with React and Next.js.", images: ["/asset/portofolio.png"] },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) { return children; }
