"use client";
import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Seo from "@/components/seo/Seo";
import { notFound } from "next/navigation";
import blogPosts from "@/lib/blogPosts";

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const post = blogPosts.find((p) => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <>
      <Seo
        title={`${post.title} | Arham Ali - Software Engineer Portfolio`}
        description={post.excerpt}
        keywords={post.categories.map((c) => c.title).join(", ")}
        url={`/blog/${post.id}`}
        image={post.mainImage}
        publishedAt={post.publishedAt}
        authorName={post.author.name}
      />

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen py-20"
      >
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-primary text-white hover:bg-orange-700 mb-8 transition-colors px-3 py-1 rounded shadow-sm"
          >
            ← Back to Blog
          </Link>

          <header className="mb-12">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-300 rounded-full">
                {post.categories[0].title}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>

            <div className="flex items-center gap-6 text-gray-600 dark:text-gray-300">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image src={post.author.image} alt={post.author.name} fill className="object-cover" />
                </div>
                <span className="font-medium">{post.author.name}</span>
              </div>
              <span>•</span>
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className="relative aspect-video w-full mb-12 rounded-lg overflow-hidden">
            <Image src={post.mainImage} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </div>

          <div className="prose prose-lg prose-orange dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Related Posts */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold mb-8">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {
                (() => {
                  // first try same-category posts
                  const currentCategorySlug = post.categories && post.categories[0] ? post.categories[0].slug : null;
                  let related = currentCategorySlug
                    ? blogPosts.filter((p) => p.id !== post.id && p.categories && p.categories[0] && p.categories[0].slug === currentCategorySlug)
                    : [];
                  // if not enough, fill with other posts (excluding current and duplicates)
                  if (related.length < 2) {
                    const others = blogPosts.filter((p) => p.id !== post.id && !related.some(r => r.id === p.id)).slice(0, 2 - related.length);
                    related = related.concat(others);
                  }
                  // ensure limit
                  related = related.slice(0, 2);

                  return related.map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`} className="block p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                      <h4 className="text-lg font-semibold mb-2">{relatedPost.title}</h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">{relatedPost.excerpt}</p>
                      <span className="text-orange-600 text-sm font-medium">Read more →</span>
                    </Link>
                  ));
                })()
              }
            </div>
          </div>
        </div>
      </motion.article>
    </>
  );
};

export default BlogPostPage;
