import type { Metadata } from "next";
import blogPosts from "@/lib/blogPosts";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts.find((item) => item.id === params.id);
  if (!post) return { title: "Article Not Found | Arham Ali" };

  return {
    title: `${post.title} | Arham Ali`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.id}` },
    openGraph: {
      type: "article",
      title: `${post.title} | Arham Ali`,
      description: post.excerpt,
      url: `/blog/${post.id}`,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [{ url: post.mainImage, width: 800, height: 600, alt: post.title }],
    },
    twitter: { card: "summary_large_image", title: `${post.title} | Arham Ali`, description: post.excerpt, images: [post.mainImage] },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) { return children; }
