import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { getBlogPosts } from '@/utils/getBlogPost';

export default function BlogsPage() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-300 font-mono py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
            Recent Writings
          </h2>
          <h1 className="text-4xl font-bold text-white tracking-tighter">
            Articles & Insights
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blogs/${post.slug}`}
              className="group block bg-[#0A0A0A] border border-zinc-900 rounded-[2.5rem] p-4 transition-all duration-500 hover:border-zinc-700 hover:bg-[#0f0f0f]"
            >
              <div className="relative aspect-video rounded-[2rem] overflow-hidden mb-6 bg-zinc-900 border border-zinc-800">
                 {post.metadata.image ? (
                    <Image
                      src={post.metadata.image} 
                      alt={post.metadata.title}
                      fill
                      className="object-cover transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:rotate-1 group-hover:saturate-[1.3] group-hover:brightness-110"
                    />
                 ) : (
                    <div className="w-full h-full flex items-center justify-center text-zinc-800 font-bold text-4xl">
                      {post.metadata.title.charAt(0)}
                    </div>
                 )}
              </div>

              <div className="px-6 pb-6">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h2 className="text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors tracking-tight">
                    {post.metadata.title}
                  </h2>
                  <div className="p-2 rounded-full bg-zinc-900 border border-zinc-800 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <MdOutlineArrowOutward size={20} />
                  </div>
                </div>
                <p className="text-zinc-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {post.metadata.description}
                </p>
                <div className="text-[10px] text-zinc-600 uppercase tracking-widest">
                  {post.metadata.date}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}