'use client'

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

interface ResumeProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Resume({ isOpen }: ResumeProps) {
  const resumePath = "/Resume/kishan_adhikari.pdf";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex flex-col bg-[#323639]"
        >
    

          <div className="flex-1 w-full bg-[#323639]">
            <iframe
              src={`${resumePath}#zoom=100&scrollbar=1`} 
              className="w-full h-full border-none"
              title="Resume"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}