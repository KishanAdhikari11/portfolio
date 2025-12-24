import { Project } from "@/types";

export const projects: Project[] = [
 
  {
    title: 'Nepali News Summarizer',
    description: 'A machine learning application that fine-tunes mT5 and mBART models to summarize Nepali news articles.',
    technologies: ['Python', 'Flask', 'React', 'Docker'],
    githubLink: 'https://github.com/KishanAdhikari11/abstractive-news-summary-in-nepali',
    image: '/projects/news.png',
  },
  {
    title: 'Handwriting Synthesis and Cloning',
    description: 'A generative AI model combining BigGAN and Transformer architectures to generate realistic handwriting synthesis and style cloning.',
    technologies: ['Python',  'PyTorch', 'Machine Learning'],
    githubLink: 'https://github.com/KishanAdhikari11/HandwritingGAN',
    image: '/projects/handwriting.png',
  }
 
 
];
