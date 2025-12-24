import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const postsDirectory = path.join(process.cwd(), 'src/contents', 'blogs');

export function getBlogPosts() {
  console.log("Looking for blogs in:", postsDirectory);

  if (!fs.existsSync(postsDirectory)) {
    console.warn("Directory not found!");
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames
    .filter((fileName) => /\.(md|mdx)$/.test(fileName)) 
    .map((fileName) => {
      const slug = fileName.replace(/\.(md|mdx)$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return {
        slug,
        metadata: data as {
          title: string;
          date: string;
          description: string;
          image?: string;
          category?: string;
          readTime?: string;
        },
      };
    })
    .sort((a, b) => (new Date(a.metadata.date) < new Date(b.metadata.date) ? 1 : -1));
}

export async function getPostData(slug: string) {
  const extensions = ['mdx', 'md'];
  let actualPath = '';
  
  for (const ext of extensions) {
    const testPath = path.join(postsDirectory, `${slug}.${ext}`);
    if (fs.existsSync(testPath)) {
      actualPath = testPath;
      break;
    }
  }

  if (!actualPath) {
    throw new Error(`Post not found: ${slug} at ${postsDirectory}`);
  }

  const fileContents = fs.readFileSync(actualPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    metadata: data as {
      title: string;
      date: string;
      description: string;
      category?: string;
      readTime?: string;
    },
  };
}