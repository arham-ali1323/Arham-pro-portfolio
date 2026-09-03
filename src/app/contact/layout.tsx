import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Arham Ali | Hire a Web Developer",
  description: "Contact Arham Ali to discuss a React, Next.js, e-commerce, or custom web application project and find the right development approach.",
  alternates: { canonical: "/contact" },
  openGraph: { type: "website", title: "Contact Arham Ali | Hire a Web Developer", description: "Discuss your React, Next.js, e-commerce, or custom web application project with Arham Ali.", url: "/contact", images: [{ url: "/arham-avater.png", width: 400, height: 400, alt: "Contact Arham Ali" }] },
  twitter: { card: "summary_large_image", title: "Contact Arham Ali | Hire a Web Developer", description: "Discuss your next web application project with Arham Ali.", images: ["/arham-avater.png"] },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) { return children; }
