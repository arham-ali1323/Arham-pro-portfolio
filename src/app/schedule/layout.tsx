import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule a Consultation | Arham Ali",
  description: "Book a 30-minute consultation with Arham Ali to discuss your frontend, React, Next.js, or custom web development project.",
  alternates: { canonical: "/schedule" },
  openGraph: { type: "website", title: "Schedule a Consultation | Arham Ali", description: "Book a 30-minute consultation to discuss your web development project with Arham Ali.", url: "/schedule", images: [{ url: "/arham-avater.png", width: 400, height: 400, alt: "Schedule a consultation with Arham Ali" }] },
  twitter: { card: "summary_large_image", title: "Schedule a Consultation | Arham Ali", description: "Book a 30-minute consultation with Arham Ali.", images: ["/arham-avater.png"] },
};

export default function ScheduleLayout({ children }: { children: React.ReactNode }) { return children; }
