'use client'

import { FaGithub, FaXTwitter } from 'react-icons/fa6'

export default function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-zinc-900 font-mono py-8 mt-4"> 
      <div className="container max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-6"> 
          
          <div className="flex items-center gap-8">
            <FooterSocialLink 
              href="https://github.com/KishanAdhikari11" 
              icon={<FaGithub size={20} />} 
            />
            <FooterSocialLink 
              href="https://x.com/KishanAdhikary7" 
              icon={<FaXTwitter size={18} />} 
            />
          </div>

          <div className="text-center space-y-2">
            <p className="text-[11px] text-zinc-500 uppercase tracking-[0.3em] font-bold">
              Kishan Adhikari
            </p>
            <div className="flex flex-col md:flex-row items-center gap-2 md:gap-3 text-[9px] text-zinc-700 uppercase tracking-[0.2em]">
              <span>© {new Date().getFullYear()} All Rights Reserved</span>
              <span className="hidden md:inline text-zinc-800">•</span>
              <span> Built with Next.js</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

function FooterSocialLink({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-zinc-600 hover:text-white transition-colors duration-300"
    >
      {icon}
    </a>
  )
}