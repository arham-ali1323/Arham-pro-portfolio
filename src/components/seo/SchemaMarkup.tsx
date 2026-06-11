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
    title: "Frontend Engineer",
    description: "Expert Frontend Engineer specializing in Next.js, React, and AI integration",
    
    // Professional Role & Expertise
    jobTitle: "Senior Frontend Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Independent Contractor",
      url: "https://arham-pro-portfolio.vercel.app",
    },
    
    // Website & Canonical URL
    url: "https://arham-pro-portfolio.vercel.app",
    sameAs: [
      "https://linkedin.com/in/arhamali", // Update with your LinkedIn
      "https://github.com/arhamali", // Update with your GitHub
      "https://twitter.com/arhamali", // Update with your Twitter
    ],
    
    // Profile Image
    image: {
      "@type": "ImageObject",
      url: "https://arham-pro-portfolio.vercel.app/arham-avater.png",
      width: 400,
      height: 400,
    },
    
    // Contact Information
    email: "arhamali.dev@gmail.com",
    telephone: "", // Add your phone if desired
    
    // Location
    address: {
      "@type": "PostalAddress",
      addressCountry: "US", // Update as needed
      // Add more address details if desired
    },
    
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
    
    // Professional Organization
    memberOf: {
      "@type": "Organization",
      name: "Web Developer Community",
    },
    
    // Highlights & Awards (optional - add real achievements)
    award: [],
    
    // Educational Background (optional)
    educationDetails: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      suppressHydrationWarning
    />
  );
}
