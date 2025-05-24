import Link from 'next/link';
import { getBlogPosts } from '../utils/getBlogPost';
import Image from 'next/image'

export default function BlogsPage() {
  const posts = getBlogPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-gradient-to-b from-gray-50 to-white dark:from-[#0f0f0f] dark:to-[#1a1a1a] min-h-screen">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">📝 Blog Posts</h1>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/blogs/${post.slug}`}
            className="group block bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-xl transition-all duration-300 p-6 hover:border-primary"
          >
            {post.metadata.image && (
              <Image
                src={post.metadata.image} 
                alt={post.metadata.title}
                className="w-full h-48 object-cover rounded-lg mb-4 group-hover:scale-[1.02] transition-transform"
              />
            )}
            <h2 className="text-xl font-bold text-zinc-800 dark:text-white mb-2 group-hover:text-primary">
              {post.metadata.title}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
              {post.metadata.description}
            </p>
            <time className="text-xs text-zinc-500 dark:text-zinc-400">
              {new Date(post.metadata.date).toLocaleDateString()}
            </time>
          </Link>
        ))}
      </div>
    </div>
  );
}
