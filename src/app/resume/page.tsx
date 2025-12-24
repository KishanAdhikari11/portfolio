'use client'

import { useRouter } from 'next/navigation';
import Resume from '@/components/Resume'; 

export default function ResumePage() {
  const router = useRouter();


  return (
    <main className="bg-[#323639] min-h-screen">
      <Resume 
        isOpen={true} 
        onClose={() => router.push('/')} 
      />
      
    
      <div className="fixed inset-0 flex items-center justify-center -z-10">
        <p className="text-zinc-500 font-mono text-xs animate-pulse">
          LOADING DOCUMENT...
        </p>
      </div>
    </main>
  );
}