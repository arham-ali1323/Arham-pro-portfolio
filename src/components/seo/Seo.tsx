import Head from 'next/head'
import React from 'react'

interface SeoProps {
  title: string
  description: string
  keywords?: string
  url?: string
  image?: string
  publishedAt?: string
  authorName?: string
}

const Seo = ({ title, description, keywords, url, image, publishedAt, authorName }: SeoProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    url: url || '',
    image: image || '',
    author: { "@type": "Person", name: authorName || 'Author' },
    datePublished: publishedAt || undefined,
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {image && <meta property="og:image" content={image} />}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </Head>
  )
}

export default Seo
