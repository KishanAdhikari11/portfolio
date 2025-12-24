import Link from 'next/link';
import Image from 'next/image';
import type { ComponentPropsWithoutRef } from 'react';

export const MDXComponents = {
  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <h1 className="text-3xl font-bold text-white mb-8 mt-12 tracking-tight" {...props} />
  ),
  h2: (props: ComponentPropsWithoutRef<'h2'>) => (
    <h2 className="text-xl font-bold text-zinc-100 mb-4 mt-10 tracking-tight border-l-2 border-zinc-800 pl-4" {...props} />
  ),
  h3: (props: ComponentPropsWithoutRef<'h3'>) => (
    <h3 className="text-lg font-bold text-zinc-200 mb-3 mt-8" {...props} />
  ),

  p: (props: ComponentPropsWithoutRef<'p'>) => (
    <p className="text-base text-zinc-400 mb-6 leading-relaxed" {...props} />
  ),

  ul: (props: ComponentPropsWithoutRef<'ul'>) => (
    <ul className="pl-5 space-y-2 mb-6 list-disc marker:text-zinc-700" {...props} />
  ),
  ol: (props: ComponentPropsWithoutRef<'ol'>) => (
    <ol className="pl-5 space-y-2 mb-6 list-decimal marker:text-zinc-700 marker:font-mono" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<'li'>) => (
    <li className="text-base text-zinc-400" {...props} />
  ),

  pre: (props: ComponentPropsWithoutRef<'pre'>) => (
    <pre className="bg-[#0A0A0A] p-6 rounded-2xl overflow-x-auto mb-8 border border-zinc-900 shadow-2xl font-mono text-sm leading-relaxed" {...props} />
  ),
  code: (props: ComponentPropsWithoutRef<'code'>) => (
    <code className="bg-zinc-900 text-zinc-200 px-1.5 py-0.5 rounded text-[13px] font-mono border border-zinc-800 before:content-none after:content-none" {...props} />
  ),

  blockquote: (props: ComponentPropsWithoutRef<'blockquote'>) => (
    <blockquote className="border-l-2 border-zinc-700 pl-6 py-1 my-8 text-zinc-500 italic font-mono" {...props} />
  ),

  a: ({ href = '', ...rest }: ComponentPropsWithoutRef<'a'>) => (
    <Link
      href={href}
      className="text-zinc-200 hover:text-white underline underline-offset-4 decoration-zinc-700 hover:decoration-white transition-all duration-200"
      {...rest}
    />
  ),

  img: ({ src, alt, width, height, ...rest }: ComponentPropsWithoutRef<'img'> & { src?: string }) => {
    if (!src) return null;

    return (
      <div className="my-10 rounded-[2rem] overflow-hidden border border-zinc-900 bg-[#0A0A0A] p-2">
        <Image
          src={src}
          alt={alt || ''}
          width={width ? Number(width) : 1200}
          height={height ? Number(height) : 675}
          className="w-full h-auto rounded-[1.5rem] opacity-90 hover:opacity-100 transition-opacity"
          {...rest}
        />
        {alt && <span className="block text-center text-[10px] text-zinc-600 mt-3 uppercase tracking-widest">{alt}</span>}
      </div>
    );
  },

  // Tables - Flat dark style
  table: (props: ComponentPropsWithoutRef<'table'>) => (
    <div className="overflow-x-auto mb-8 rounded-xl border border-zinc-900">
      <table className="w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props: ComponentPropsWithoutRef<'th'>) => (
    <th className="bg-zinc-900/50 border-b border-zinc-900 px-4 py-3 text-left font-bold text-zinc-200 uppercase tracking-widest text-[10px]" {...props} />
  ),
  td: (props: ComponentPropsWithoutRef<'td'>) => (
    <td className="border-b border-zinc-900/50 px-4 py-3 text-zinc-400" {...props} />
  ),

  // HR
  hr: (props: ComponentPropsWithoutRef<'hr'>) => (
    <hr className="my-12 border-zinc-900" {...props} />
  ),

  // Emphasis
  strong: (props: ComponentPropsWithoutRef<'strong'>) => (
    <strong className="font-bold text-zinc-200" {...props} />
  ),
};