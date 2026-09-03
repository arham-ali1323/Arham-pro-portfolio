import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Arham Ali | Frontend Developer",
  description:
    "Learn about Arham Ali, a frontend developer building responsive React and Next.js interfaces with a focus on usability, performance, and clean code.",
  alternates: { canonical: "/aboutme" },
  openGraph: {
    type: "website",
    title: "About Arham Ali | Frontend Developer",
    description:
      "Learn about Arham Ali, a frontend developer building responsive React and Next.js interfaces with a focus on usability and performance.",
    url: "/aboutme",
    images: [{ url: "/arham-avater.png", width: 400, height: 400, alt: "Arham Ali" }],
  },
  twitter: { card: "summary_large_image", title: "About Arham Ali | Frontend Developer", description: "Learn about Arham Ali and his frontend development experience.", images: ["/arham-avater.png"] },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
