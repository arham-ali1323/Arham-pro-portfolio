"use client";
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';

interface PostPreview {
  _id: string;
  title: string;
  excerpt: string;
  slug: string;
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  author: {
    name: string;
    image: {
      asset: {
        _ref: string;
      };
    };
  };
  publishedAt: string;
}

interface CategoryPostCardProps {
  post: PostPreview;
}

export function CategoryPostCard({ post }: CategoryPostCardProps) {
  return (
    <div className="flex flex-col md:flex-row rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300  md:max-w-5xl md:mx-32 lg:max-w-6xl lg:mx-8 md:h-56 lg:h-64 ">
      {/* Left side - Image section (3/4 width) */}
      <div className="relative w-full md:w-3/4 h-32 sm:h-56 md:h-56 lg:h-64">
        <Image
          src="/asset/portofolio.png"
          alt={post.title}
          fill
          className="object-cover w-full h-full "
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-6">
          <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-bold mb-1 sm:mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-white/90 text-xs sm:text-sm mb-2 sm:mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <Link
            href={`/blog/${post._id}`}
            className="self-start    sm:px-4 sm:py-2  text-xs sm:text-sm transition-colors
            rounded-full bg-black-100 font-medium text-[16px] hover:bg-orange-700  bg-gray-900 text-white px-5 py-3"
          
          >
            Read Now
          </Link>
        </div>
      </div>

      {/* Right side - Author and Metadata (1/4 width) */}
      <div className="w-full md:w-1/4 flex flex-col items-center justify-center p-2 sm:p-4 bg-gray-100  hover:bg-orange-200 border-2 border-gray-200 h-42 sm:h-56 md:h-64 lg:h-72">
        {/* Author Info */}
        <div className="flex flex-col items-center">
          {post.author?.image && (
            <Image
              src="/arham-avater.png"
              alt={post.author.name}
              width={60}
              height={60}
              className="rounded-full mb-1 sm:mb-2 border-2 hover:ring-popover border-white shadow-lg "
            />
          )}
          <span className="text-gray-700  text-center font-bold line-clamp-1">
            {post.author.name}
          </span>
        </div>

        {/* Created Date */}
        <div className="text-gray-500 mt-1  font-semibold text-sm">
          {format(new Date(post.publishedAt), 'MMM d, yyyy')}
        </div>
      </div>
    </div>
  );
}
