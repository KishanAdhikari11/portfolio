'use client'

import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion'; 
import { useState, useEffect } from 'react'; 
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { fadeInUp } from '@/utils/animations';
import { SiLeetcode } from 'react-icons/si';

import { 
  Mail, 
  MapPin, 
  Terminal, 
  Globe, 
  FileText, 
  MessageSquare,
  Clock,
  Users,
} from 'lucide-react';



const roles = ["AI/ML Engineer", "Backend Developer", "Automation Expert","Web Scraping Specialist"];

export default function Hero() { 
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-fit bg-[#050505] text-zinc-300 pt-20 pb-10 px-4 font-mono">
      <div className="max-w-2xl mx-auto">
        
        <motion.div 
          className="flex items-center gap-6 mb-8"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-zinc-400/20 to-zinc-800/20 rounded-3xl blur-md opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <Image
              src="/image/imagea.png"
              alt="Profile"
              width={90}
              height={90}
              className="relative rounded-2xl border border-zinc-800 object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              priority
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-bold text-white tracking-tight">Kishan Adhikari</h1>
              <span className="flex items-center gap-1.5 bg-zinc-900/50 border border-zinc-800/50 px-3 py-1 rounded-full text-[10px] text-zinc-400 uppercase tracking-widest font-bold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for work
              </span>
            </div>
            
            <div className="h-8 flex items-center overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={roles[index]}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-amber-50 text-lg"
                >
                  {roles[index]}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-12 mb-8 text-[13px] text-amber-50"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900/50 rounded-lg border border-zinc-800/50">
                <Terminal size={14} />
              </div>
              <span>AI/ML Engineer</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900/50 rounded-lg border border-zinc-800/50">
                <MapPin size={14} />
              </div>
              <span>Kavrepalanchok, Nepal</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900/50 rounded-lg border border-zinc-800/50 text-zinc-400">
                <Mail size={14} />
              </div>
              <a href="mailto:adhikarykishan11@gmail.com" className="hover:text-white transition-colors">adhikarykishan11@gmail.com</a>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900/50 rounded-lg border border-zinc-800/50 text-zinc-400">
                <Clock size={14} />
              </div>
              <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900/50 rounded-lg border border-zinc-800/50 text-zinc-400">
                <Globe size={14} />
              </div>
              <a href="https://kishanadhikari.com.np" className="hover:text-white transition-colors">kishanadhikari.com.np</a>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-zinc-900/50 rounded-lg border border-zinc-800/50 text-zinc-400">
                <Users size={14} />
              </div>
              <span>He / Him</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mb-8 leading-relaxed text-zinc-400 text-md"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
        >
          <p>
            I’m Kishan Adhikari, a backend-focused developer building intelligent systems with{' '}
            <span className="inline-flex items-center px-2 py-0.5 rounded border border-blue-500/20 bg-blue-500/5 text-blue-400 text-xs mx-1">
              Python
            </span>,{' '}
            <span className="inline-flex items-center px-2 py-0.5 rounded border border-emerald-500/20 bg-emerald-500/5 text-cyan-400 text-xs mx-1">
              Golang
            </span>, and{' '}
            <span className="inline-flex items-center px-2 py-0.5 rounded border border-zinc-700 bg-zinc-800/50 text-orange-400 text-xs mx-1">
              PyTorch
            </span>. 
            I focus on building scalable software and applying machine learning where it matters.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-wrap items-center gap-3"
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          transition={{ delay: 0.3 }}
        >
          <Link 
            href="/resume" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-[#0A0A0A] border border-zinc-800/80 text-zinc-300 px-5 py-2.5 rounded-xl text-xs font-bold hover:border-zinc-600 hover:text-white transition-all shadow-sm"
          >
            <FileText size={14} className="text-zinc-500 group-hover:text-zinc-300" /> 
            Resume
          </Link>
          
          <Link href="#contact" className="group flex items-center gap-2 bg-[#0A0A0A] border border-zinc-800/80 text-zinc-300 px-5 py-2.5 rounded-xl text-xs font-bold hover:border-zinc-600 hover:text-white transition-all shadow-sm">
            <MessageSquare size={14} className="text-zinc-500 group-hover:text-zinc-300" /> 
            Contact
          </Link>

          <div className="h-4 w-[1px] bg-zinc-800 mx-2 hidden sm:block" />

          <div className="flex items-center gap-2">
            <a href="https://github.com/KishanAdhikari11" target="_blank" className="p-2.5 bg-[#0A0A0A] border border-zinc-800/80 rounded-xl text-zinc-500 hover:text-white hover:border-zinc-600 transition-all">
              <FaGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/kishan-adhikari-a8464a200/" target="_blank" className="p-2.5 bg-[#0A0A0A] border border-zinc-800/80 rounded-xl text-zinc-500 hover:text-white hover:border-zinc-600 transition-all">
              <FaLinkedin size={18} />
            </a>
            <a href="https://leetcode.com/u/KishanAdhikari/" target="_blank" className="p-2.5 bg-[#0A0A0A] border border-zinc-800/80 rounded-xl text-zinc-500 hover:text-white hover:border-zinc-600 transition-all">
              <SiLeetcode size={18} />
            </a>
            <a href= "https://x.com/KishanAdhikary7" target="_blank" className="p-2.5 bg-[#0A0A0A] border border-zinc-800/80 rounded-xl text-zinc-500 hover:text-white hover:border-zinc-600 transition-all">
              <FaXTwitter size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}