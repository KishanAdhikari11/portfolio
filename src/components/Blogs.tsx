'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BlogPost } from '@/types';
import { fadeInUp } from '@/utils/animations';
import { MdOutlineArrowOutward, MdOutlineCalendarToday, MdOutlineTimer } from 'react-icons/md';


export default function Blogs({ posts }: { posts: BlogPost[] }) {
  const latestBlogs = posts.slice(0, 3);

  return (
    <section className="bg-[#050505] text-zinc-300 font-mono py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div {...fadeInUp} className="mb-12">
          <h2 className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-4">
            Recent Writings
          </h2>
          <div className="flex justify-between items-end">
            <h3 className="text-3xl font-bold text-white tracking-tight">Latest Blog Posts</h3>
            <Link href="/blogs" className="text-xs text-zinc-500 hover:text-white transition-colors flex items-center gap-2 group">
              View all posts 
              <MdOutlineArrowOutward className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestBlogs.map((blog, index) => (
            <motion.article
              key={blog.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group h-full"
            >
              <Link href={`/blogs/${blog.slug}`} className="h-full flex">
                <div className="bg-[#0A0A0A] border border-zinc-900 rounded-[2rem] p-8 flex flex-col justify-between transition-all hover:border-zinc-700 hover:bg-[#0f0f0f] w-full">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[10px] bg-zinc-900 border border-zinc-800 text-zinc-400 px-2 py-0.5 rounded uppercase font-bold">
                        {blog.metadata.category || "Tech"}
                      </span>
                      <MdOutlineArrowOutward className="text-zinc-700 group-hover:text-white transition-colors" size={20} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-zinc-200">
                      {blog.metadata.title}
                    </h4>
                    <p className="text-zinc-500 text-sm mb-8 line-clamp-3 leading-relaxed">
                      {blog.metadata.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-[10px] text-zinc-600 uppercase tracking-[0.2em] font-bold">
                    <span className="flex items-center gap-1.5">
                      <MdOutlineCalendarToday size={14} />
                      {new Date(blog.metadata.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MdOutlineTimer size={14} />
                      {blog.metadata.readTime || "5 min"}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}