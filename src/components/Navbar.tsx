'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { href: '/', label: 'Portfolio' },
    { href: '/#about', label: 'Experience' }, 
    { href: '/blogs', label: 'Blogs' },
  ];

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
          
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => {
              const isActive = pathname === item.href || (pathname === '/' && item.href.startsWith('/#'));

              return (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={`text-sm transition-colors ${
                    isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden text-zinc-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-5 w-5" />
            ) : (
              <Bars3Icon className="h-5 w-5" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute top-14 left-0 w-full bg-black border-b border-zinc-900 px-4 py-6 space-y-4"
          >
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-sm text-zinc-400 hover:text-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}