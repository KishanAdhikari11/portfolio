import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    description: string;
    date: string;
    image?: string;
  };
  content: string;
}

export function getBlogPosts(): BlogPost[] {
  const blogDir = path.join(process.cwd(),'src/app/blogs/posts');
  const files = fs.readdirSync(blogDir);
  
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(blogDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      return {
        slug: file.replace('.mdx', ''),
        metadata: data as BlogPost['metadata'],
        content,
      };
    })
    .sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

  return posts;
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return getBlogPosts().find((post) => post.slug === slug);
}