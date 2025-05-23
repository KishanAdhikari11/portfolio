import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { getBlogPost,getBlogPosts } from '@/app/utils/getBlogPost';
import { MDXComponents } from '@/components/MDXComponent';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const posts = await getBlogPosts(); // ✅ await in case it's async
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string }; // Update type to account for possible Promise
}): Promise<Metadata> {
  // Await params to resolve if it's a Promise
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug); // Use resolved params

  if (!post) return {};
  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string }; // Update type to account for possible Promise
}) {
  // Await params to resolve if it's a Promise
  const resolvedParams = await params;
  const post = await getBlogPost(resolvedParams.slug); // Use resolved params

  if (!post) notFound();

  return (
    <div className="min-h-screen bg-[#f9fafb] dark:bg-[#101112] py-12">
      <div className="max-w-3xl mx-auto px-4">
        <Link
          href="/blogs"
          className="text-blue-600 dark:text-blue-400 text-lg font-medium hover:underline inline-block mb-6"
        >
          ← All Blogs
        </Link>

        <article className="bg-white dark:bg-zinc-900 shadow-md rounded-lg p-10">
          <header className="mb-12">
            <h1 className="text-5xl font-bold text-zinc-900 dark:text-white mb-5 leading-tight">
              {post.metadata.title}
            </h1>
            <p className="text-2xl text-zinc-600 dark:text-zinc-300 mb-4">
              {post.metadata.description}
            </p>
            <time className="text-lg text-zinc-500">
              {new Date(post.metadata.date).toLocaleDateString('ne-NP')}
            </time>
          </header>

          <div className="prose prose-blue dark:prose-invert prose-2xl max-w-none leading-9">
            <MDXRemote
              source={post.content}
              components={{
                ...MDXComponents,
                ul: (props) => (
                  <ul
                    className="pl-7 space-y-5 list-disc marker:text-blue-500 marker:text-2xl"
                    {...props}
                  />
                ),
                li: (props) => (
                  <li
                    className="text-zinc-800 dark:text-zinc-200 text-xl leading-relaxed font-medium"
                    {...props}
                  />
                ),
              }}
            />
          </div>
        </article>
      </div>
    </div>
  );
}