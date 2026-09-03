import { MetadataRoute } from 'next';
import blogPosts from '@/lib/blogPosts';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://arham-pro-portfolio.vercel.app';

  // Define all pages in your portfolio
  const pages = [
    // Main pages
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0, // Highest priority for homepage
    },
    {
      url: `${baseUrl}/aboutme`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/schedule`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.7,
    },
    
    // Blog posts (if dynamically added, replace with actual blog data fetch)
    // Example blog entries - update these with your actual blog posts
    // {
    //   url: `${baseUrl}/blog/sample-post`,
    //   lastModified: new Date('2024-01-15'),
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.7,
    // },
  ];

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...pages, ...blogPages];
}

/**
 * NOTES FOR DYNAMIC BLOG POSTS:
 * If you're fetching blog posts from a database or CMS, update the sitemap like this:
 * 
 * export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
 *   // Fetch your blog posts
 *   const blogPosts = await fetchBlogPosts(); // Your API call
 *   
 *   const blogSitemap = blogPosts.map((post) => ({
 *     url: `${baseUrl}/blog/${post.id}`,
 *     lastModified: new Date(post.lastModified),
 *     changeFrequency: 'weekly' as const,
 *     priority: 0.7,
 *   }));
 *   
 *   return [...pages, ...blogSitemap];
 * }
 * 
 * STATIC SITEMAP LIMITS:
 * - XML sitemaps can have max 50,000 URLs
 * - If you exceed this, use sitemap index file
 * - See: https://www.sitemaps.org/
 */
