'use client'

import { projects } from '@/contents/projects'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'
import { TbWorld } from 'react-icons/tb'
import { 
  SiPython, SiPytorch, SiFastapi, SiAmazonwebservices, 
  SiGo, SiFlask, SiRedis, SiDocker, SiPostgresql, SiLinux, SiGithub, SiReact
} from 'react-icons/si'

// Define the icons with their specific brand colors
const techIcons: Record<string, React.ReactNode> = {
  "Python": <SiPython className="w-8 h-8 text-[#3776AB]" />, // Python Blue
  "PyTorch": <SiPytorch className="w-8 h-8 text-[#EE4C2C]" />, // PyTorch Orange/Red
  "FastAPI": <SiFastapi className="w-8 h-8 text-[#05998B]" />, // FastAPI Teal
  "AWS": <SiAmazonwebservices className="w-8 h-8 text-[#FF9900]" />, // AWS Orange
  "Golang": <SiGo className="w-8 h-8 text-[#00ADD8]" />, // Go Blue
  "Flask": <SiFlask className="w-8 h-8 text-zinc-200" />, // Flask (White/Light Zinc for dark mode)
  "Redis": <SiRedis className="w-8 h-8 text-[#DC382D]" />, // Redis Red
  "Docker": <SiDocker className="w-8 h-8 text-[#2496ED]" />, // Docker Blue
  "PostgreSQL": <SiPostgresql className="w-8 h-8 text-[#336791]" />, // PostgreSQL Blue
  "Linux": <SiLinux className="w-8 h-8 text-[#FCC624]" />, // Linux Yellow
  "GitHub": <SiGithub className="w-8 h-8 text-zinc-200" />, // GitHub (White/Light Zinc for dark mode)
  "React": <SiReact className="w-8 h-8 text-[#61DAFB]" />, // React Blue


};

export default function Projects() {
  return (
    <section className="flex items-center gap-2 bg-[#050505] text-zinc-300 font-mono pt-24 px-4">
      <div className="max-w-3xl mx-auto">
        
        <div className="mb-20">
          <h2 className="text-[12px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-8">
            TECH STACK
          </h2>
          <div className="flex flex-wrap gap-x-10 gap-y-6">
             {Object.entries(techIcons).map(([name, icon]) => (
               <div key={name} className="flex items-center group cursor-default">
                 <div className="transition-all duration-300 group-hover:scale-125 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                    {icon}
                 </div>
                 <span className="text-[11px] text-zinc-400 ml-2 tracking-tight font-bold group-hover:text-white transition-colors">
                    {name}
                 </span>
               </div>
             ))}
          </div>
        </div>

        <h2 className="text-[12px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-6">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8 }}
              className="group bg-[#0A0A0A] border border-zinc-900 rounded-[2.5rem] overflow-hidden flex flex-col hover:border-zinc-800 transition-all duration-500"
            >
              <div className="relative aspect-[4/3] p-6 overflow-hidden bg-[#0D0D0D]">
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 blur-[80px] transition-opacity duration-700" />
                
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-zinc-800/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-zinc-100 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-4 text-zinc-600">
                    <a href={project.githubLink} target="_blank" className="hover:text-white transition-colors">
                      <FaGithub size={18} />
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      <TbWorld size={20} />
                    </a>
                  </div>
                </div>

                <p className="text-zinc-500 text-sm leading-relaxed mb-8 line-clamp-3 font-sans">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <div 
                      key={tech} 
                      className="p-2.5 bg-zinc-900/40 border border-zinc-800/50 rounded-xl text-zinc-400 group-hover:border-zinc-700 transition-all duration-300"
                      title={tech}
                    >
                      {techIcons[tech] || <span className="text-[10px] px-1 font-bold">{tech}</span>}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}