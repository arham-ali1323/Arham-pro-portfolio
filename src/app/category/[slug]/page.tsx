import { CategoryPostCard } from '@/components/main/CategoryPostCard'

interface CategoryPageProps {
  params: {
    slug: string
  }
}

// Placeholder data since Sanity is removed
const mockCategory = {
  title: "Technology",
  description: "Latest posts about technology and development"
}

const mockPosts = [
  {
    _id: "1",
    title: "Getting Started with React",
    excerpt: "Learn the basics of React and how to build your first component.",
    slug: "getting-started-react",
    mainImage: { asset: { _ref: "image-1" } },
    author: { name: "John Doe", image: { asset: { _ref: "author-1" } } },
    publishedAt: new Date().toISOString()
  }
]

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = mockCategory
  const posts = mockPosts

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Category not found</h1>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 ">
      {/* Category Header */}
      <header className="mb-1 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold my-12 text-orange-500 mb-4">{category.title}</h1>
        {category.description && (
          <p className="text-lg  my-8 text-gray-400 dark:text-gray-600 max-w-4xl text-center">{category.description}</p>
        )}
      </header>

      <h2 className="text-3xl text-center font-bold  text-orange-800 mb-12">Related Posts</h2>

      {/* Posts List */}
      <div className="space-y-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <CategoryPostCard key={post._id} post={post} />
          ))
        ) : (
          <p className="text-gray-500 text-center py-12">
            No posts found in this category
          </p>
        )}
      </div>
    </div>
  )
}