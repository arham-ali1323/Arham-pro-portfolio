import type { Metadata } from "next";
import blogPosts from "@/lib/blogPosts";

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = blogPosts.find((item) => item.id === params.id);
  if (!post) return { title: "Article Not Found | Arham Ali" };

  const description =
    post.excerpt.length > 155
      ? `${post.excerpt.slice(0, 152).trimEnd()}...`
      : post.excerpt;

  return {
    title: `${post.title} | Arham Ali`,
    description,
    alternates: { canonical: `/blog/${post.id}` },
    openGraph: {
      type: "article",
      title: `${post.title} | Arham Ali`,
      description,
      url: `/blog/${post.id}`,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [{ url: post.mainImage, width: 800, height: 600, alt: post.title }],
    },
    twitter: { card: "summary_large_image", title: `${post.title} | Arham Ali`, description, images: [post.mainImage] },
  };
}

export default function BlogPostLayout({ children }: { children: React.ReactNode }) { return children; }
