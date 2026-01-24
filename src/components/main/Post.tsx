import Image from 'next/image'
import { format } from 'date-fns'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import Link from 'next/link'

interface Post {
  _id: string;
  title: string;
  excerpt: string;
  body: any;
  publishedAt: string;
  author: {
    name: string;
    image: any;
  };
  mainImage: any;
  categories: Array<{
    _id: string;
    title: string;
    slug: string;
  }>;
}

interface PostProps {
  post: Post
}

export function Post({ post }: PostProps) {
  return (
    <article className="max-w-5xl mx-auto px-4 py-8">
      {/* Title - Centered at Top */}
      <h1 className="text-4xl font-bold text-orange-600 text-center mb-6">
        {post.title}
      </h1>

      {/* Publication Date - Centered below title */}
      <time 
        dateTime={post.publishedAt} 
        className="block text-sm text-gray-500 text-center mb-4"
      >
        {`( ${format(new Date(post.publishedAt), 'MMMM d, yyyy')} )`}
      </time>

      {/* Featured Image */}
      {post.mainImage && (
        <div className="relative aspect-video w-full m-8 rounded-lg overflow-hidden">
          <Image
            src="https://via.placeholder.com/1200x600/4ade80/000000?text=Blog+Post"
            alt={post.title}
            fill
            className="object-cover rounded-2xl"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      )}

      {/* Author and Category Row */}
      <div className="flex justify-between items-center m-12">
        {/* Author Info - Left Side */}
        <div className="flex items-center gap-4">
          {post.author?.image && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="https://via.placeholder.com/150x150/4ade80/000000?text=Author"
                alt={post.author.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <p className="font-medium mt-2 text-orange-400">{post.author.name}</p>
        </div>

        {/* Categories - Right Side */}
        {post.categories.length > 0 && (
          <div className="flex gap-2">
            <Link
              href={`/category/${post.categories[0].slug}`}
              >
              {post.categories.map((category) => (
                <span
                  key={category._id}
                  className="font-medium rounded-3xl px-4 py-2 bg-black-100 text-white bg hover:bg-orange-700  bg-gray-900 text-[16px] "
                >
                  {category.title}
                </span>
              ))}
            </Link>
          </div>
        )}
      </div>

      {/* Body Content */}
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-700 leading-relaxed">
          {post.excerpt}
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          This is a placeholder content since the Sanity CMS has been removed. 
          In a real implementation, this would display the full blog post content 
          with rich text formatting, code blocks, and other media elements.
        </p>
      </div>
    </article>
  )
}