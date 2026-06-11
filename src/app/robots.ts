import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://arham-pro-portfolio.vercel.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/.next/',
          '/private/',
        ],
      },
      // Additional rule for Googlebot with specific crawl settings
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0, // No delay for Googlebot
      },
      // Slow down other crawlers
      {
        userAgent: '*',
        crawlDelay: 1, // 1 second delay
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
