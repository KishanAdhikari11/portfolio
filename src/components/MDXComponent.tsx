import Link from 'next/link';
import Image from 'next/image';
import type { ComponentPropsWithoutRef } from 'react';

export const MDXComponents = {
  // Headings
  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6 leading-tight border-b border-zinc-200 dark:border-zinc-700 pb-4" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="text-3xl md:text-4xl font-semibold text-zinc-800 dark:text-zinc-100 mb-5 mt-8 leading-tight" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="text-2xl md:text-3xl font-semibold text-zinc-800 dark:text-zinc-100 mb-4 mt-6" {...props} />
  ),
  h4: (props: ComponentPropsWithoutRef<'h4'>) => (
    <h4 className="text-xl md:text-2xl font-medium text-zinc-700 dark:text-zinc-200 mb-3 mt-5" {...props} />
  ),
  h5: (props: ComponentPropsWithoutRef<'h5'>) => (
    <h5 className="text-lg md:text-xl font-medium text-zinc-700 dark:text-zinc-200 mb-3 mt-4" {...props} />
  ),
  h6: (props: ComponentPropsWithoutRef<'h6'>) => (
    <h6 className="text-base md:text-lg font-medium text-zinc-600 dark:text-zinc-300 mb-2 mt-3" {...props} />
  ),

  // Paragraph
  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed" {...props} />
  ),

  // Lists
  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="pl-6 md:pl-8 space-y-3 mb-6 list-disc marker:text-blue-500 marker:text-xl" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="pl-6 md:pl-8 space-y-3 mb-6 list-decimal marker:text-blue-500 marker:font-semibold" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<'li'>) => (
    <li className="text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed" {...props} />
  ),

  // Code
  pre: (props: ComponentPropsWithoutRef<'pre'>) => (
    <pre className="bg-zinc-100 dark:bg-zinc-800 p-4 md:p-6 rounded-lg overflow-x-auto mb-6 text-sm md:text-base border border-zinc-200 dark:border-zinc-700" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<'code'>) => (
    <code className="bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded text-sm font-mono text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700" {...props} />
  ),

  // Blockquote
  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote className="border-l-4 border-blue-500 pl-6 md:pl-8 py-2 my-6 bg-blue-50 dark:bg-blue-900/20 text-lg md:text-xl italic text-zinc-700 dark:text-zinc-300 rounded-r-lg" {...props} />
  ),

  // Anchor
  a: ({ href = '', ...rest }: ComponentPropsWithoutRef<'a'>) => (
    <Link
      href={href}
      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-200 underline underline-offset-2 hover:underline-offset-4 transition-all duration-200"
      {...rest}
    />
  ),

  // Image (Next.js optimized) - FIXED
  img: ({ src, alt, width, height, ...rest }: ComponentPropsWithoutRef<'img'> & { src?: string }) => {
    if (!src) {
      console.warn('Image component: src is missing or invalid');
      return null;
    }

    const imgWidth = width ? Number(width) : 800;
    const imgHeight = height ? Number(height) : 600;

    return (
      <Image
        src={src as string} // Explicitly cast to string since we checked for undefined
        alt={alt || ''}
        width={imgWidth}
        height={imgHeight}
        className="w-full h-auto rounded-lg shadow-md my-6 border border-zinc-200 dark:border-zinc-700"
        {...rest}
      />
    );
  },

  // Tables
  table: (props: ComponentPropsWithoutRef<'table'>) => (
    <div className="overflow-x-auto mb-6">
      <table className="w-full border-collapse border border-zinc-200 dark:border-zinc-700 rounded-lg overflow-hidden" {...props} />
    </div>
  ),
  th: (props: ComponentPropsWithoutRef<'th'>) => (
    <th className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 px-4 py-3 text-left font-semibold text-zinc-800 dark:text-zinc-200" {...props} />
  ),
  td: (props: ComponentPropsWithoutRef<'td'>) => (
    <td className="border border-zinc-200 dark:border-zinc-700 px-4 py-3 text-zinc-700 dark:text-zinc-300" {...props} />
  ),

  // HR
  hr: (props: ComponentPropsWithoutRef<'hr'>) => (
    <hr className="my-8 border-zinc-200 dark:border-zinc-700" {...props} />
  ),

  // Emphasis
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-bold text-zinc-900 dark:text-zinc-100" {...props} />
  ),
  em: (props: ComponentPropsWithoutRef<'em'>) => (
    <em className="italic text-zinc-800 dark:text-zinc-200" {...props} />
  ),
};