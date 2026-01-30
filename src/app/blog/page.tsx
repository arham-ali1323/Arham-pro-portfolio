"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js 15",
    excerpt: "Learn about the latest features in Next.js 15 including React 19 support, improved performance, and new development tools.",
    content: "Next.js 15 brings exciting new features that enhance the development experience...",
    publishedAt: "2025-01-15",
    author: {
      name: "Arham Ali",
      image: "/asset/arham-avater.png"
    },
    mainImage: "/asset/portofolio.png",
    categories: [
      { _id: "1", title: "Web Development", slug: "web-development" }
    ],
    readTime: "5 min read"
  },
  {
    id: "2",
    title: "Building Scalable React Applications",
    excerpt: "Best practices for creating maintainable and scalable React applications using modern patterns and tools.",
    content: "Building scalable React applications requires careful planning and architecture...",
    publishedAt: "2025-01-10",
    author: {
      name: "Arham Ali",
      image: "/asset/arham-avater.png"
    },
    mainImage: "/asset/ShopHub.png",
    categories: [
      { _id: "2", title: "React", slug: "react" }
    ],
    readTime: "8 min read"
  },
  {
    id: "3",
    title: "TypeScript Best Practices in 2025",
    excerpt: "Essential TypeScript patterns and practices that every developer should know for better type safety.",
    content: "TypeScript has become an essential tool for modern JavaScript development...",
    publishedAt: "2025-01-05",
    author: {
      name: "Arham Ali",
      image: "/asset/arham-avater.png"
    },
    mainImage: "/asset/CarRental.png",
    categories: [
      { _id: "3", title: "TypeScript", slug: "typescript" }
    ],
    readTime: "6 min read"
  },
  {
    id: "4",
    title: "Modern CSS with Tailwind CSS",
    excerpt: "How to leverage Tailwind CSS for rapid UI development while maintaining clean and maintainable styles.",
    content: "Tailwind CSS has revolutionized the way we approach styling in web development...",
    publishedAt: "2023-12-28",
    author: {
      name: "Arham Ali",
      image: "/asset/arham-avater.png"
    },
    mainImage: "/asset/Gym &.png",
    categories: [
      { _id: "4", title: "CSS", slug: "css" }
    ],
    readTime: "7 min read"
  },
  {
    id: "5",
    title: "State Management in React Applications",
    excerpt: "Explore different state management solutions in React including Context API, Zustand, and Redux Toolkit.",
    content: "Effective state management is crucial for building complex React applications...",
    publishedAt: "2025-01-20",
    author: {
      name: "Arham Ali",
      image: "/asset/arham-avater.png"
    },
    mainImage: "/asset/AlphaSoft360.png",
    categories: [
      { _id: "5", title: "State Management", slug: "state-management" }
    ],
    readTime: "10 min read"
  },
  {
    id: "6",
    title: "API Design Best Practices",
    excerpt: "Learn how to design RESTful APIs that are scalable, maintainable, and follow industry standards.",
    content: "Designing good APIs is essential for building robust applications...",
    publishedAt: "2025-01-18",
    author: {
      name: "Arham Ali",
      image: "/asset/arham-avater.png"
    },
    mainImage: "/asset/ShopHub.png",
    categories: [
      { _id: "6", title: "Backend", slug: "backend" }
    ],
    readTime: "12 min read"
  },
  {
    id: "7",
    title: "Web Performance Optimization",
    excerpt: "Techniques and strategies to optimize your web applications for better performance and user experience.",
    content: "Performance optimization is key to delivering great user experiences...",
    publishedAt: "2025-01-12",
    author: {
      name: "Arham Ali",
      image: "/asset/arham-avater.png"
    },
    mainImage: "/asset/CarRental.png",
    categories: [
      { _id: "7", title: "Performance", slug: "performance" }
    ],
    readTime: "9 min read"
  },
  {
    id: "8",
    title: "Testing React Applications",
    excerpt: "Comprehensive guide to testing React applications with Jest, React Testing Library, and Cypress.",
    content: "Testing is an essential part of building reliable applications...",
    publishedAt: "2025-01-08",
    author: {
      name: "Arham Ali",
      image: "/asset/arham-avater.png"
    },
    mainImage: "/asset/Gym &.png",
    categories: [
      { _id: "8", title: "Testing", slug: "testing" }
    ],
    readTime: "11 min read"
  },
  {
    id: "9",
    title: "Deploying Next.js Applications",
    excerpt: "Learn different deployment strategies for Next.js applications including Vercel, Netlify, and self-hosting.",
    content: "Deploying applications correctly is crucial for production success...",
    publishedAt: "2025-01-25",
    author: {
      name: "Arham Ali",
      image: "/asset/arham-avater.png"
    },
    mainImage: "/asset/AlphaSoft360.png",
    categories: [
      { _id: "9", title: "DevOps", slug: "devops" }
    ],
    readTime: "8 min read"
  },
  {
    id: "10",
    title: "JavaScript ES6+ Features",
    excerpt: "Modern JavaScript features that every developer should know to write cleaner and more efficient code.",
    content: "ES6 and beyond have transformed JavaScript development...",
    publishedAt: "2025-01-22",
    author: {
      name: "Arham Ali",
      image: "/asset/arham-avater.png"
    },
    mainImage: "/asset/portofolio.png",
    categories: [
      { _id: "10", title: "JavaScript", slug: "javascript" }
    ],
    readTime: "6 min read"
  },
  {
    id: "11",
    title: "Building Accessible Web Applications",
    excerpt: "Learn how to create web applications that are accessible to all users, including those with disabilities.",
    content: "Web accessibility ensures that everyone can use your applications...",
    publishedAt: "2025-01-28",
    author: {
      name: "Arham Ali",
      image: "/asset/arham-avater.png"
    },
    mainImage: "/asset/ShopHub.png",
    categories: [
      { _id: "11", title: "Accessibility", slug: "accessibility" }
    ],
    readTime: "7 min read"
  },
  {
    id: "12",
    title: "Database Design Principles",
    excerpt: "Fundamental principles for designing efficient and scalable databases for your applications.",
    content: "Good database design is the foundation of performant applications...",
    publishedAt: "2025-01-30",
    author: {
      name: "Arham Ali",
      image: "/asset/arham-avater.png"
    },
    mainImage: "/asset/CarRental.png",
    categories: [
      { _id: "12", title: "Database", slug: "database" }
    ],
    readTime: "13 min read"
  }
];

const BlogPage = () => {
  return (
    <>
      {/* SEO META TAGS */}
      <Head>
        <title>Blog | Arham Ali - Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Read articles about web development, React, Next.js, TypeScript, and more by Arham Ali."
        />
        <meta
          name="keywords"
          content="Arham Ali, Blog, Web Development, React, Next.js, TypeScript, Programming"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen py-20"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-orange-600 mb-4">
              My Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about web development, programming, and technology.
            </p>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Featured Image */}
                <div className="relative aspect-video w-full">
                  <Image
                    src={post.mainImage}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category */}
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-300 rounded-full">
                      {post.categories[0].title}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    <Link 
                      href={`/blog/${post.id}`}
                      className="hover:text-orange-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors">
              Load More Posts
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BlogPage;
