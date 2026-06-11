import { NextResponse } from 'next/server'
import blogPosts from '@/lib/blogPosts'

const SITE_URL = process.env.SITE_URL || 'https://arhamali.me'

function buildSitemap() {
  const pages = [
    `${SITE_URL}/`,
    `${SITE_URL}/blog`,
    // add blog posts
    ...blogPosts.map((p) => `${SITE_URL}/blog/${p.id}`),
  ]

  const urls = pages
    .map(
      (url) => `  <url>
    <loc>${url}</loc>
  </url>`
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
}

export async function GET() {
  const sitemap = buildSitemap()
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  })
}
