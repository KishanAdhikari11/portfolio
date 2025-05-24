import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { getBlogPost, getBlogPosts } from '@/app/utils/getBlogPost';
import { MDXComponents } from '@/components/MDXComponent';
import { Metadata, NextPage } from 'next';

// Define the PageProps type explicitly
interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params; // Resolve the Promise
  const post = await getBlogPost(slug);

  if (!post) return {};
  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

// Helper function to safely format date
function formatDate(dateInput: string | Date | undefined): string {
  if (!dateInput) return '';
  
  try {
    let date: Date;
    
    if (typeof dateInput === 'string') {
      if (dateInput.includes('T') || dateInput.includes('Z')) {
        date = new Date(dateInput);
      } else if (dateInput.match(/^\d{4}-\d{2}-\d{2}$/)) {
        date = new Date(dateInput + 'T00:00:00');
      } else if (dateInput.match(/^\d{1,2}\/\d{1,2}\/\d{4}$/)) {
        date = new Date(dateInput);
      } else {
        date = new Date(dateInput);
      }
    } else {
      date = dateInput;
    }

    if (isNaN(date.getTime())) {
      console.warn('Invalid date:', dateInput);
      return String(dateInput);
    }

    return date.toLocaleDateString('ne-NP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch (error) {
    console.warn('Date formatting error:', error, 'Input:', dateInput);
    return String(dateInput);
  }
}

const BlogPost: NextPage<PageProps> = async ({ params }) => {
  const { slug } = await params; // Resolve the Promise
  const post = await getBlogPost(slug);

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
            {post.metadata.date && (
              <time className="text-lg text-zinc-500">
                {formatDate(post.metadata.date)}
              </time>
            )}
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
};

export default BlogPost;