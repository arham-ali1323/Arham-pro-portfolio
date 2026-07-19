/**
 * PAGE-LEVEL METADATA TEMPLATES
 * ===========================
 * 
 * Copy these metadata configurations to each page route for consistent,
 * SEO-optimized metadata. Update values specific to each page.
 * 
 * Usage: Add these to the top of each page.tsx file
 */

import type { Metadata } from "next";

/**
 * TEMPLATE 1: HOME PAGE METADATA
 * File: src/app/page.tsx
 */
export const metadata: Metadata = {
  title: "Arham Ali | Frontend Engineer Specializing in Next.js & React",
  description:
    "Expert Frontend Engineer specializing in Next.js, React, and AI integration. I build fast, scalable web interfaces with modern design patterns.",
  keywords: [
    "Frontend Engineer",
    "Next.js Developer",
    "React UI Developer",
    "Web Developer",
  ],
  alternates: {
    canonical: "https://arham-pro-portfolio.vercel.app",
  },
  openGraph: {
    type: "website",
    url: "https://arham-pro-portfolio.vercel.app",
    title: "Arham Ali | Frontend Engineer Specializing in Next.js & React",
    description:
      "Expert Frontend Engineer specializing in Next.js, React, and AI integration.",
    images: [
      {
        url: "https://arham-pro-portfolio.vercel.app/arham-avater.png",
        width: 1200,
        height: 630,
        alt: "Arham Ali - Frontend Engineer & Next.js Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arham Ali | Frontend Engineer & Next.js Developer",
    description: "Building fast, scalable web interfaces with Next.js and React.",
    images: ["https://arham-pro-portfolio.vercel.app/arham-avater.png"],
  },
};

/**
 * TEMPLATE 2: ABOUT PAGE METADATA
 * File: src/app/aboutme/page.tsx
 */
export const aboutMetadata: Metadata = {
  title: "About Arham Ali | Frontend Engineer & Next.js Developer",
  description:
    "Learn about my journey as a Frontend Engineer. Expertise in Next.js, React,  , and modern web development practices.",
  keywords: ["Arham Ali", "Frontend Engineer", "About me", "Web Developer"],
  alternates: {
    canonical: "https://arham-pro-portfolio.vercel.app/aboutme",
  },
  openGraph: {
    type: "website",
    url: "https://arham-pro-portfolio.vercel.app/aboutme",
    title: "About Arham Ali | Frontend Engineer & Next.js Developer",
    description:
      "Learn about my journey, skills, and expertise in modern web development.",
    images: [
      {
        url: "https://arham-pro-portfolio.vercel.app/arham-avater.png",
        width: 1200,
        height: 630,
        alt: "Arham Ali - Professional Profile",
      },
    ],
  },
};

/**
 * TEMPLATE 3: WORK/PORTFOLIO PAGE METADATA
 * File: src/app/work/page.tsx
 */
export const workMetadata: Metadata = {
  title: "My Work | Frontend Projects & Case Studies - Arham Ali",
  description:
    "Explore my portfolio of Next.js, React, and full-stack web development projects. See real-world applications and case studies.",
  keywords: [
    "Portfolio",
    "Web Projects",
    "Next.js Projects",
    "React Applications",
    "Case Studies",
  ],
  alternates: {
    canonical: "https://arham-pro-portfolio.vercel.app/work",
  },
  openGraph: {
    type: "website",
    url: "https://arham-pro-portfolio.vercel.app/work",
    title: "My Work | Frontend Projects & Case Studies - Arham Ali",
    description:
      "Explore my portfolio of Next.js and React projects with live demos and detailed case studies.",
    images: [
      {
        url: "https://arham-pro-portfolio.vercel.app/arham-avater.png",
        width: 1200,
        height: 630,
        alt: "Arham Ali - Portfolio of Web Projects",
      },
    ],
  },
};

/**
 * TEMPLATE 4: BLOG LISTING PAGE METADATA
 * File: src/app/blog/page.tsx
 */
export const blogListMetadata: Metadata = {
  title: "Blog | Frontend Development Articles - Arham Ali",
  description:
    "Read my latest articles on Next.js, React, web performance, and modern frontend development best practices.",
  keywords: [
    "Blog",
    "Frontend Development",
    "Next.js Tutorial",
    "React Guide",
    "Web Performance",
  ],
  alternates: {
    canonical: "https://arham-pro-portfolio.vercel.app/blog",
  },
  openGraph: {
    type: "website",
    url: "https://arham-pro-portfolio.vercel.app/blog",
    title: "Blog | Frontend Development Articles - Arham Ali",
    description:
      "Explore articles on Next.js, React, web performance, and frontend best practices.",
    images: [
      {
        url: "https://arham-pro-portfolio.vercel.app/arham-avater.png",
        width: 1200,
        height: 630,
        alt: "Arham Ali - Frontend Development Blog",
      },
    ],
  },
};

/**
 * TEMPLATE 5: BLOG POST PAGE METADATA (DYNAMIC)
 * File: src/app/blog/[id]/page.tsx
 * 
 * NOTE: Implement with generateMetadata function for dynamic blogs
 */
export async function generateBlogMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  // Replace with your actual blog data fetching logic
  // const post = await fetchBlogPost(params.id);
  
  return {
    title: `Blog Post Title | Arham Ali`, // Use actual post title
    description:
      "Blog post description from your content management system or frontmatter.",
    keywords: ["Next.js", "React", "Frontend Development"],
    alternates: {
      canonical: `https://arham-pro-portfolio.vercel.app/blog/${params.id}`,
    },
    openGraph: {
      type: "article",
      url: `https://arham-pro-portfolio.vercel.app/blog/${params.id}`,
      title: "Blog Post Title",
      description: "Blog post excerpt or description",
      publishedTime: new Date().toISOString(),
      authors: ["Arham Ali"],
      images: [
        {
          url: "https://arham-pro-portfolio.vercel.app/blog-post-image.png",
          width: 1200,
          height: 630,
          alt: "Blog post preview image",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Blog Post Title",
      description: "Blog post excerpt",
      images: ["https://arham-pro-portfolio.vercel.app/blog-post-image.png"],
      creator: "@arhamali",
    },
  };
}

/**
 * TEMPLATE 6: SERVICES PAGE METADATA
 * File: src/app/services/page.tsx
 */
export const servicesMetadata: Metadata = {
  title: "Services | Hire Frontend Engineer - Arham Ali",
  description:
    "Professional frontend development services. UI/UX implementation, Next.js development, React optimization, and web performance consulting.",
  keywords: [
    "Frontend Services",
    "Hire Frontend Engineer",
    "React Development",
    "Next.js Development",
    "Web Development Services",
  ],
  alternates: {
    canonical: "https://arham-pro-portfolio.vercel.app/services",
  },
  openGraph: {
    type: "website",
    url: "https://arham-pro-portfolio.vercel.app/services",
    title: "Services | Hire Frontend Engineer - Arham Ali",
    description:
      "Professional frontend development services tailored to your project needs.",
    images: [
      {
        url: "https://arham-pro-portfolio.vercel.app/arham-avater.png",
        width: 1200,
        height: 630,
        alt: "Arham Ali - Frontend Development Services",
      },
    ],
  },
};

/**
 * TEMPLATE 7: CONTACT PAGE METADATA
 * File: src/app/contact/page.tsx
 */
export const contactMetadata: Metadata = {
  title: "Contact Me | Get in Touch - Arham Ali Frontend Engineer",
  description:
    "Reach out for project inquiries, freelance work, or collaboration opportunities. Let's build something amazing together.",
  keywords: ["Contact", "Hire", "Freelance", "Project Inquiry"],
  alternates: {
    canonical: "https://arham-pro-portfolio.vercel.app/contact",
  },
  openGraph: {
    type: "website",
    url: "https://arham-pro-portfolio.vercel.app/contact",
    title: "Contact Me | Get in Touch - Arham Ali",
    description:
      "Reach out for project inquiries or collaboration opportunities.",
    images: [
      {
        url: "https://arham-pro-portfolio.vercel.app/arham-avater.png",
        width: 1200,
        height: 630,
        alt: "Arham Ali - Contact",
      },
    ],
  },
};

/**
 * TEMPLATE 8: RESUME PAGE METADATA
 * File: src/app/resume/page.tsx
 */
export const resumeMetadata: Metadata = {
  title: "Resume | Arham Ali - Frontend Engineer",
  description:
    "Download my professional resume. Experience in Next.js, React,  , Tailwind CSS, and modern web development.",
  keywords: [
    "Resume",
    "CV",
    "Experience",
    "Skills",
    "Qualifications",
    "Frontend",
  ],
  alternates: {
    canonical: "https://arham-pro-portfolio.vercel.app/resume",
  },
  openGraph: {
    type: "website",
    url: "https://arham-pro-portfolio.vercel.app/resume",
    title: "Resume | Arham Ali - Frontend Engineer",
    description: "Download my professional resume and experience details.",
    images: [
      {
        url: "https://arham-pro-portfolio.vercel.app/arham-avater.png",
        width: 1200,
        height: 630,
        alt: "Arham Ali - Resume",
      },
    ],
  },
};

/**
 * IMPLEMENTATION GUIDE
 * ===================
 * 
 * STEP 1: Copy the appropriate template to your page.tsx file
 * STEP 2: Replace placeholder values with actual content
 * STEP 3: Ensure each page has:
 *   - Unique, compelling title (50-60 characters)
 *   - Unique description (150-160 characters)
 *   - Relevant keywords for the page topic
 *   - Proper canonical URL
 *   - OpenGraph and Twitter cards
 * 
 * STEP 4: For blog posts, implement generateMetadata() for dynamic metadata
 * STEP 5: Test metadata with Google Rich Results Test
 * 
 * TIPS:
 * - Keep titles under 60 characters for full display in search results
 * - Keep descriptions under 160 characters
 * - Include primary keyword in title and description
 * - Use high-quality, unique images for OpenGraph
 * - Update social share images to match page content
 */
