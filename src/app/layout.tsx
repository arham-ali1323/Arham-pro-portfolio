import type { Metadata } from "next";
import { Inter } from "next/font/google";
// @ts-ignore — allow side-effect CSS import without type declarations
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Header from "@/components/main/Header";
import PageTransition from "@/components/main/PageTransition";
import BracketTransition from "@/components/main/BracketTransition";
import { Toaster } from "react-hot-toast";
import ThemeSwitch from "@/components/theme-switch";
import SchemaMarkup from "@/components/seo/SchemaMarkup";
import ChatBot from "@/components/chatbot/ChatBot";

const inter = Inter({ subsets: ["latin"] });
const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-JetBrains_Mono",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://arham-pro-portfolio.vercel.app"),
  
  // Title & Description - SEO Optimized
  title: "Arham Ali | Frontend Engineer Specializing in Next.js & React",
  description:
    "Expert Frontend Engineer specializing in Next.js, React, and AI integration. I build fast, scalable web interfaces with modern design patterns.",
  
  // Keywords for target search intent
  keywords: [
    "Frontend Engineer",
    "Next.js Developer",
    "React UI Developer",
    "Web Developer",
    "Full Stack Engineer",
    "AI Integration",
  ],
  
  // Canonical URL - Vercel production domain
  alternates: {
    canonical: "https://arham-pro-portfolio.vercel.app",
  },

  // Author & Creator Information
  authors: [
    {
      name: "Arham Ali",
      url: "https://arham-pro-portfolio.vercel.app",
    },
  ],
  creator: "Arham Ali",

  // Icons
  icons: {
    icon: "/arham-avater.png",
    shortcut: "/arham-avater.png",
    apple: "/arham-avater.png",
  },

  // OpenGraph - Social Sharing Previews
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arham-pro-portfolio.vercel.app",
    siteName: "Arham Ali - Frontend Engineer",
    title: "Arham Ali | Frontend Engineer Specializing in Next.js & React",
    description:
      "Expert Frontend Engineer specializing in Next.js, React, and AI integration. I build fast, scalable web interfaces with modern design patterns.",
    images: [
      {
        url: "https://arham-pro-portfolio.vercel.app/arham-avater.png",
        width: 1200,
        height: 630,
        alt: "Arham Ali - Frontend Engineer & Next.js Developer",
        type: "image/png",
      },
      {
        url: "https://arham-pro-portfolio.vercel.app/arham-avater.png",
        width: 800,
        height: 600,
        alt: "Arham Ali - Frontend Engineer & Next.js Developer",
        type: "image/png",
      },
    ],
  },

  // Twitter Card - Optimized for Twitter/X
  twitter: {
    card: "summary_large_image",
    site: "@arhamali", // Update with your Twitter handle
    creator: "@arhamali", // Update with your Twitter handle
    title: "Arham Ali | Frontend Engineer & Next.js Developer",
    description:
      "Building fast, scalable web interfaces with Next.js, React, and modern AI integration.",
    images: ["https://arham-pro-portfolio.vercel.app/arham-avater.png"],
  },

  // Robots - Control indexing behavior
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },

  // Verification tags (add your verification codes if needed)
  verification: {
    google: "", // Add your Google Search Console verification code
    // yandex: "",
    // other: {},
  },

  // Viewport & viewport optimization
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },

  // Additional metadata
  applicationName: "Arham Ali Portfolio",
  referrer: "origin-when-cross-origin",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Arham Ali",
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
  category: "Technology",
  classification: "Frontend Development",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Schema Markup for Google Knowledge Graph */}
        <SchemaMarkup />
      </head>
      <body
        className={`${JetBrainsMono.variable} text-black font-bold dark:font-normal bg-white/10  dark:text-white  dark:bg-[#030014]  `}
      >
        <Toaster position="top-center" />
        <ThemeSwitch />
        <Header />
        <BracketTransition />
        <PageTransition>{children}</PageTransition>
        <ChatBot />
      </body>
    </html>
  );
}
