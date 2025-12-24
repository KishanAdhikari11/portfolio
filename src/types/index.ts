export interface Project {
  title: string;
  description: string;
  image: string;
  githubLink: string;
  technologies: string[];
  liveLink?: string; 
}


export interface BlogPost {
  slug: string;
  metadata: {
    title: string;
    date: string;
    description: string;
    category?: string;
    readTime?: string;
  };
}