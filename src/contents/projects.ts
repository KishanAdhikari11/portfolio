import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: 'Nepalidatecli',
    description: 'A command line interface (CLI) app written in Go that displays current Nepali date, time, tithi, events and panchang. Built using Cobra library with web scraping capabilities using GoColly to fetch data from hamropatro.com.',
    technologies: ['Go', 'Cobra', 'GoColly', 'Web Scraping', 'CLI'],
    githubLink: 'https://github.com/KishanAdhikari11/Nepalidatecli',
    image: '/projects/date-cli.png',
  },
  {
    title: 'Nepali News Summarizer',
    description: 'A machine learning application that fine-tunes mT5 and mBART models to summarize Nepali news articles. Features automated data extraction using Beautiful Soup and containerized deployment with Docker.',
    technologies: ['Python', 'Flask', 'React', 'mT5', 'mBART', 'Beautiful Soup', 'Docker'],
    githubLink: 'https://github.com/KishanAdhikari11/abstractive-news-summary-in-nepali',
    image: '/projects/news.png',
  },
  {
    title: 'Handwriting Synthesis and Cloning',
    description: 'A generative AI model combining BigGAN and Transformer architectures for realistic handwriting synthesis and style cloning. Trained on custom English handwriting datasets with diverse style generation capabilities.',
    technologies: ['Python', 'BigGAN', 'Transformer', 'PyTorch', 'Machine Learning'],
    githubLink: 'https://github.com/KishanAdhikari11/HandwritingGAN',
    image: '/projects/handwriting.png',
  },
  {
    title: 'Stake Crash Alert Bot',
    description: 'A high-performance Playwright-based bot for 24/7 Stake Crash game monitoring with real-time Telegram notifications. Features automated data extraction from authenticated and CAPTCHA-protected sites.',
    technologies: ['Python', 'Playwright', 'Telegram Bot API', 'Web Scraping', 'Automation'],
    githubLink: 'https://github.com/KishanAdhikari11/Crash_Monitor_TelegramBot',
    image: '/projects/stake.png',
  },
  {
    title: 'Next.js LLM Content Generator',
    description: 'An AI-powered content processing application using Gemini API for paraphrasing, summarizing, and converting content to Markdown. Features automated workflows with AWS Lambda and EventBridge integration.',
    technologies: ['Next.js', 'TypeScript', 'Gemini API', 'AWS Lambda', 'EventBridge', 'Markdown'],
    githubLink: 'https://github.com/yourusername/nextjs-llm-app',
    image: '/projects/blog-website.jpeg',
  }
];
