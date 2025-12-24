'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeInUp } from '@/utils/animations';



const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const itemVariant = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 }
}

interface ExperienceProps {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  bullets: string[];
  logo: string;
}

export default function About() {
  return (
    <section className="bg-[#050505] text-zinc-400 font-mono py-24 px-4 selection:bg-cyan-500/30">
      <div className="max-w-3xl mx-auto">
        
        <motion.div 
          {...fadeInUp}
          className="mb-12 flex items-center gap-4"
        >
          <h2 className="text-[14px] uppercase tracking-[0.4em] text-zinc-500 font-bold">
            EXPERIENCE
          </h2>
          <div className=" flex-1 bg-zinc-900"></div>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8 mb-24"
        >
          <ExperienceCard 
            title="AI Application Developer"
            company="Smart Contents Nepal"
            location="New Baneswor, Kathmandu"
            period="July 2025 – Nov 2025"
            description="Worked on various AI-driven projects including web crawling, YouTube caption extraction, chatbot development, and AI agent creation."
            bullets={[
              "Wrote a crawler to crawl a url and turn the entire website into markdown",
              "Wrote Youtube Caption Extraction Using google oauth and Youtube Data API",
              "Implemented Chatbot memory management, caching and context management",
              "Built an AI Agent for Japanese business plan generation using langraph"
            ]}
            logo="/image/SCN.jpeg"
          />
          <ExperienceCard 
            title="Software Engineer – AI focused"
            company="Maskey Consulting LLC"
            location="Remote"
            period="Jan 2025 – June 2025"
            description="Automated Dental Blog Generation System"
            bullets={[
              "Automated content pipeline using AWS Lambda and EventBridge",
              "Used Gemini API to paraphrase and summarize blog content",
              "Implemented Agent to automatically generate blog outlines and titles based on SEO keywords"
            ]}
            logo="/logos/maskey.png" 
          />
          <ExperienceCard 
            title="Web Scraping and Data Processing"
            company="Freelancer – Upwork"
            location="Remote"
            period="Dec 2023 – Present"
            description="Developing complex automation and real-time data systems."
            bullets={[
              "Built large scale scraper using Python and Playwright",
              "Analyzed and processed large financial datasets with Pandas and NumPy",
            ]}
            logo="/image/upwork.png"
          />
        </motion.div>

        <motion.div 
           {...fadeInUp}
           className="mb-12 flex items-center gap-4"
        >
          <h2 className="text-[14px] uppercase tracking-[0.4em] text-zinc-500 font-bold">
            EDUCATION
          </h2>
          <div className=" flex-1 bg-zinc-900"></div>
        </motion.div>

        <motion.div 
          {...fadeInUp}
          whileHover={{ y: -5 }}
          className="relative group p-8 bg-[#080808] border border-zinc-900 rounded-lg hover:border-cyan-500/50 transition-all"
        >
          <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-zinc-800 group-hover:border-cyan-500 transition-colors" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-zinc-800 group-hover:border-cyan-500 transition-colors" />
          
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-16 h-16 shrink-0 bg-white border border-zinc-800 flex items-center justify-center overflow-hidden rounded-md transition-all">
              <Image 
                src="/image/TU.png" 
                alt="TU" 
                width={64} 
                height={64}
                className="object-contain p-2 w-full h-full" 
                priority
              />
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                <div>
                  <h3 className="text-zinc-100 font-bold text-[18px] tracking-tight">Bachelor of Computer Engineering</h3>
                  <p className="text-[14px] text-zinc-500 mt-1">Institute of Engineering, Thapathali Campus</p>
                </div>
                <span className="text-[10px] text-zinc-100 font-bold uppercase tracking-widest bg-zinc-800 px-4 py-1.5 border border-zinc-700 whitespace-nowrap self-center md:self-start shadow-[2px_2px_0px_rgba(6,182,212,0.2)]">
                  2021 {"—"} 2025
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ExperienceCard({ title, company, location, period, description, bullets, logo }: ExperienceProps) {
  return (
    <motion.div 
      variants={itemVariant}
      className="relative p-6 bg-[#080808] border border-zinc-900 rounded-sm hover:bg-[#0A0A0A] transition-all group"
    >
      <div className="flex flex-col sm:flex-row gap-6 ">
        
        <div className="w-14 h-14 shrink-0 border border-zinc-800 bg-white flex items-center justify-center overflow-hidden rounded-md transition-all">
          {logo ? (
            <Image 
              src={logo} 
              alt={company} 
              width={56} 
              height={56}
              className="object-contain p-1 w-full h-full" 
              priority
            />
          ) : (
            <div className="w-full h-full bg-zinc-900" />
          )}
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-4">
            <div>
              <h3 className="text-zinc-100 font-bold text-[16px] uppercase tracking-wide group-hover:text-cyan-400 transition-colors">
                {title}
              </h3>
              <p className="text-[12px] text-zinc-500 font-bold mt-1 tracking-tighter uppercase">
                {company}
              </p>
            </div>
            <span className="text-[10px] text-zinc-100 font-bold bg-zinc-800 px-3 py-1 border border-zinc-700 shadow-[2px_2px_0px_rgba(6,182,212,0.2)] whitespace-nowrap">
              {period}
            </span>
          </div>
          
          <div className="mb-5">
            <div className="text-[12px] text-cyan-500/80 flex items-start gap-3 italic font-bold mb-2">
               <span className="shrink-0">{`>>`}</span>
               <span className="uppercase tracking-tight">{location}</span>
            </div>
            <p className="text-[14px] text-zinc-400 font-sans italic opacity-80 border-l-2 border-zinc-800 pl-4 leading-relaxed">
              {description}
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-3">
            {bullets.map((bullet: string, i: number) => (
              <li key={i} className="text-[14px] text-zinc-400 flex items-start gap-3 leading-relaxed">
                <span className="text-cyan-500/50 mt-1.5 text-[14px] leading-none shrink-0 font-bold">{`>`}</span>
                <span className="group-hover:text-zinc-200 transition-colors">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}