"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { notFound } from "next/navigation";

const blogPosts = [
  {
    id: "1",
    title: "Getting Started with Next.js 15",
    excerpt: "Learn about the latest features in Next.js 15 including React 19 support, improved performance, and new development tools.",
    content: `
# Getting Started with Next.js 15

Next.js 15 represents a significant leap forward in React framework development. With built-in React 19 support, developers now have access to the latest React features out of the box.

## Key Features

### React 19 Integration
One of the most exciting aspects of Next.js 15 is its seamless integration with React 19. This includes:
- Automatic React 19 compatibility
- Improved server components
- Enhanced streaming capabilities

### Performance Improvements
Next.js 15 brings several performance enhancements:
- Faster build times
- Optimized bundle sizes
- Improved caching mechanisms

### Development Experience
The development experience has been significantly improved with:
- Better error messages
- Enhanced debugging tools
- Improved hot module replacement

## Getting Started

To create a new Next.js 15 project:

\`\`\`bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
\`\`\`

## Conclusion

Next.js 15 is a powerful update that makes building modern web applications easier and more efficient than ever before.
    `,
    publishedAt: "2024-01-15",
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
    content: `
# Building Scalable React Applications

Creating scalable React applications requires careful planning and adherence to best practices. In this article, we'll explore key patterns and techniques.

## Architecture Patterns

### Component Composition
Break down your UI into small, reusable components:
- Single responsibility principle
- Props vs state management
- Component composition patterns

### State Management
Choose the right state management solution:
- Local state with useState
- Context API for global state
- External libraries like Zustand or Redux

## Performance Optimization

### Code Splitting
Implement code splitting to reduce initial bundle size:
- Dynamic imports with React.lazy
- Route-based code splitting
- Component-based splitting

### Memoization
Use React's built-in optimization tools:
- React.memo for component memoization
- useMemo for expensive calculations
- useCallback for function references

## Testing Strategies

### Unit Testing
Test individual components in isolation:
- Jest for testing framework
- React Testing Library for component testing
- Mock external dependencies

### Integration Testing
Test component interactions:
- User flow testing
- API integration testing
- End-to-end testing with Cypress

## Conclusion

Building scalable React applications is about making the right architectural decisions from the start.
    `,
    publishedAt: "2024-01-10",
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
    title: "TypeScript Best Practices in 2024",
    excerpt: "Essential TypeScript patterns and practices that every developer should know for better type safety.",
    content: `
# TypeScript Best Practices in 2024

TypeScript has become essential for modern JavaScript development. Here are the best practices you should follow.

## Type Definitions

### Interface vs Type
Use interfaces for object shapes and types for unions or computed types:
\`\`\`typescript
// Use interfaces for object shapes
interface User {
  id: number;
  name: string;
  email: string;
}

// Use types for unions or computed types
type Status = 'pending' | 'approved' | 'rejected';
type UserWithStatus = User & { status: Status };
\`\`\`

### Generic Types
Create reusable type-safe components:
\`\`\`typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}
\`\`\`

## Advanced Patterns

### Utility Types
Leverage TypeScript's built-in utility types:
- Partial<T>
- Required<T>
- Pick<T, K>
- Omit<T, K>

### Conditional Types
Create type logic with conditional types:
\`\`\`typescript
type NonNullable<T> = T extends null | undefined ? never : T;
\`\`\`

## Configuration

### Strict Mode
Always enable strict mode in tsconfig.json:
\`\`\`json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true
  }
}
\`\`\`

## Conclusion

Following these TypeScript best practices will help you write more maintainable and type-safe code.
    `,
    publishedAt: "2024-01-05",
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
    content: `
# Modern CSS with Tailwind CSS

Tailwind CSS has revolutionized how we approach styling in web development. Let's explore how to use it effectively.

## Getting Started

### Installation
Install Tailwind CSS in your project:
\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

### Configuration
Configure your tailwind.config.js:
\`\`\`javascript
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
}
\`\`\`

## Core Concepts

### Utility-First Approach
Tailwind's utility-first approach means:
- No custom CSS files needed
- Rapid development
- Consistent design system
- Smaller bundle sizes

### Responsive Design
Use responsive prefixes for adaptive designs:
\`\`\`html
<div className="w-full md:w-1/2 lg:w-1/3">
  Responsive content
</div>
\`\`\`

## Advanced Techniques

### Custom Components
Create reusable components with Tailwind:
\`\`\`jsx
const Button = ({ variant, children }) => (
  <button className={\`
    px-4 py-2 rounded font-semibold
    \${variant === 'primary' ? 'bg-blue-500 text-white' : ''}
    \${variant === 'secondary' ? 'bg-gray-200 text-gray-800' : ''}
  \`}>
    {children}
  </button>
);
\`\`\`

### Dark Mode
Implement dark mode with Tailwind:
\`\`\`html
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Dark mode content
</div>
\`\`\`

## Best Practices

### Component Extraction
Extract repeated patterns into components:
- Button components
- Card components
- Form elements

### Custom Configuration
Extend Tailwind with custom themes:
- Custom colors
- Custom spacing
- Custom fonts

## Conclusion

Tailwind CSS provides a powerful and efficient way to style modern web applications while maintaining consistency and developer productivity.
    `,
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
  }
];

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const post = blogPosts.find(p => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <>
      {/* SEO META TAGS */}
      <Head>
        <title>{post.title} | Arham Ali - Software Engineer Portfolio</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.categories.map(c => c.title).join(', ')} />
        <meta name="robots" content="index, follow" />
      </Head>

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen py-20"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Back to Blog */}
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 transition-colors"
          >
            ← Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-12">
            {/* Category */}
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-300 rounded-full">
                {post.categories[0].title}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={post.author.image}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-medium">{post.author.name}</span>
              </div>
              <span>•</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="relative aspect-video w-full mb-12 rounded-lg overflow-hidden">
            <Image
              src={post.mainImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg prose-orange dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
          </div>

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4">Share this article</h3>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Share on Twitter
              </button>
              <button className="px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors">
                Share on LinkedIn
              </button>
            </div>
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.id !== post.id && p.categories[0].slug === post.categories[0].slug)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.id}`}
                    className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <h4 className="text-lg font-semibold mb-2">{relatedPost.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                      {relatedPost.excerpt}
                    </p>
                    <span className="text-orange-600 text-sm font-medium">
                      Read more →
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </motion.article>
    </>
  );
};

export default BlogPostPage;
