/**
 * JSON-LD Schema Markup Component
 * Provides structured data for Google Knowledge Graph and rich snippets
 * Person Schema for Arham Ali - Frontend Engineer
 */

export default function SchemaMarkup() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://arham-pro-portfolio.vercel.app#person",
    
    // Core Identity
    name: "Arham Ali",
    description: "Frontend developer building responsive React and Next.js interfaces with practical AI integrations.",
    
    // Professional Role & Expertise
    jobTitle: "Frontend Developer",
    worksFor: {
      "@type": "Organization",
      name: "Independent Contractor",
      url: "https://arham-pro-portfolio.vercel.app",
    },
    
    // Website & Canonical URL
    url: "https://arham-pro-portfolio.vercel.app",
    sameAs: [
      "https://github.com/arham-ali1323",
      "https://www.linkedin.com/in/arham-ali-973359289/",
    ],
    
    // Profile Image
    image: {
      "@type": "ImageObject",
      url: "https://arham-pro-portfolio.vercel.app/arham-avater.png",
      width: 400,
      height: 400,
    },
    
    email: "arhamali.dev@gmail.com",
    
    // Skills - Target Keywords
    skills: [
      {
        "@type": "Thing",
        name: "Next.js",
        category: "Frontend Framework",
      },
      {
        "@type": "Thing",
        name: "React",
        category: "JavaScript Library",
      },
      {
        "@type": "Thing",
        name: "Frontend Development",
        category: "Web Development",
      },
      {
        "@type": "Thing",
        name: "UI/UX Design",
        category: "Design",
      },
      {
        "@type": "Thing",
        name: "TypeScript",
        category: "Programming Language",
      },
      {
        "@type": "Thing",
        name: "Tailwind CSS",
        category: "CSS Framework",
      },
      {
        "@type": "Thing",
        name: "AI Integration",
        category: "Artificial Intelligence",
      },
      {
        "@type": "Thing",
        name: "Web Performance Optimization",
        category: "Web Development",
      },
    ],
    
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "@id": "https://arham-pro-portfolio.vercel.app#website",
            name: "Arham Ali Portfolio",
            url: "https://arham-pro-portfolio.vercel.app",
            publisher: { "@id": "https://arham-pro-portfolio.vercel.app#person" },
          }),
        }}
        suppressHydrationWarning
      />
    </>
  );
}
