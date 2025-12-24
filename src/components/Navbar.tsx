'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('portfolio');
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Portfolio', id: 'portfolio' },
    { href: '/#about', label: 'Experience', id: 'about' }, 
    { href: '/blogs', label: 'Blogs', id: 'blogs' },
  ];

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('blogs');
      return;
    }

    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        setActiveSection(rect.top < 150 ? 'about' : 'portfolio');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <nav className="fixed w-full bg-black/50 backdrop-blur-md z-50 font-mono">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          
          <Link 
            href="/" 
            className="text-sm font-bold text-white transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          >
            <span className="text-zinc-500 mr-1">~/</span>
            <span className="drop-shadow-[0_0_3px_rgba(255,255,255,0.3)]">kishan_adhikari</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-2">
            {menuItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  onClick={() => setActiveSection(item.id)}
                  className={`relative px-3 py-1.5 text-sm transition-colors duration-300 ${
                    isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {isActive && (
                    <motion.div 
                      layoutId="nav-glow"
                      className="absolute inset-0 bg-white-500/10 "
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30
                      }}
                    >
                      <div className="absolute inset-0 bg-white-400/5 blur-md rounded-md" />
                      <div className="absolute bottom-0 left-1/4 right-1/4 h-[1px] bg-white-400/20 blur-[2px]" />
                    </motion.div>
                  )}
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden text-zinc-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-14 left-0 w-full bg-black/95 backdrop-blur-lg border-b border-zinc-900 px-4 py-6 space-y-4"
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-sm transition-colors ${
                  activeSection === item.id ? 'text-cyan-400 font-bold' : 'text-zinc-400'
                }`}
                onClick={() => {
                  setActiveSection(item.id);
                  setIsMobileMenuOpen(false);
                }}
              >
                <span className="mr-2 opacity-50">{activeSection === item.id ? '>' : '#'}</span>
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}