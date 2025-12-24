// app/blogs/[slug]/page.tsx
import { getPostData } from '@/utils/getBlogPost';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { MdOutlineArrowBack } from 'react-icons/md';
import { MDXComponents } from '@/components/MDXComponents'; // Update this path to where your code is

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { content, metadata } = await getPostData(slug);

  return (
    <article className="min-h-screen bg-[#050505] text-zinc-300 font-mono py-24 px-4 selection:bg-amber-500/30">
      <div className="max-w-3xl mx-auto">
        <Link href="/blogs" className="group text-zinc-500 hover:text-white transition-colors flex items-center gap-2 mb-16 text-[10px] uppercase tracking-[0.3em] font-bold">
          <MdOutlineArrowBack className="group-hover:-translate-x-1 transition-transform" /> 
          Back to Writings
        </Link>

        <header className="mb-16 border-b border-zinc-900 pb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-[1.1] mb-6">
            {metadata.title}
          </h1>
          <p className="text-zinc-500 text-sm">{metadata.date} • {metadata.readTime || '5 min read'}</p>
        </header>

        {/* PASS THE COMPONENTS HERE */}
        <div className="max-w-none">
          <MDXRemote 
            source={content} 
            components={MDXComponents} 
          />
        </div>
      </div>
    </article>
  );
}