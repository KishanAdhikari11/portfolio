'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MdOutlineCalendarMonth, 
  MdOutlineEmail, 
  MdOutlineArrowOutward 
} from 'react-icons/md'
import { FaLinkedinIn } from 'react-icons/fa6'

interface ContactMethodProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus('idle'), 5000) 
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 5000)
      }
    }
    catch  {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }
  return (
    <section className="bg-[#050505] text-zinc-300 font-mono py-12 px-4 border-t border-zinc-900/50">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h2 className="text-[12px] uppercase tracking-[0.3em] text-zinc-500 font-bold mb-10">
            LET&apos;S WORK TOGETHER
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -8 }}
            className="group bg-[#0A0A0A] border border-zinc-900 rounded-[2.5rem] p-8 flex flex-col hover:border-zinc-800 transition-all duration-500"
          >
            <h3 className="text-xl font-bold text-white tracking-tight mb-4">Get in Touch</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8 font-sans">
              Choose a platform to start a conversation about your next big idea.
            </p>
            <div className="space-y-3 mt-auto">
              <ContactMethodCard 
                icon={<MdOutlineCalendarMonth size={20} />}
                title="Schedule a call"
                subtitle="30-min strategy session"
                href="https://cal.com/kishan-adhikary-vfb4l7/30min"
              />
              <ContactMethodCard 
                icon={<MdOutlineEmail size={20} />}
                title="Email Me"
                subtitle="adhikarykishan11@gmail.com"
                href="mailto:adhikarykishan11@gmail.com"
              />
              <ContactMethodCard 
                icon={<FaLinkedinIn size={18} />}
                title="LinkedIn"
                subtitle="Professional networking"
                href="https://linkedin.com/in/kishan-adhikari-a8464a200/"
              />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ y: -8 }}
            className="group bg-[#0A0A0A] border border-zinc-900 rounded-[2.5rem] p-8 flex flex-col hover:border-zinc-800 transition-all duration-500"
          >
            <h3 className="text-xl font-bold text-white tracking-tight mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-3 font-sans">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full bg-[#0D0D0D] border border-zinc-900 rounded-xl px-4 py-3 text-sm text-white focus:border-zinc-700 outline-none transition-all"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full bg-[#0D0D0D] border border-zinc-900 rounded-xl px-4 py-3 text-sm text-white focus:border-zinc-700 outline-none transition-all"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                className="w-full bg-[#0D0D0D] border border-zinc-900 rounded-xl px-4 py-3 text-sm text-white focus:border-zinc-700 outline-none transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-white text-black font-bold py-3.5 rounded-xl text-xs transition-transform active:scale-[0.98] flex items-center justify-center gap-2"
              >
                {status === 'loading' ? 'ANALYZING & SENDING...' : 'SEND MESSAGE'}
                <MdOutlineArrowOutward size={14} />
              </button>
              
              {status === 'success' && (
                <p className="text-cyan-500 text-[10px] text-center uppercase tracking-widest mt-2 font-bold animate-pulse">
                  Transmission Successful!
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-[10px] text-center uppercase tracking-widest mt-2 font-bold">
                  Error: Transmission Failed.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function ContactMethodCard({ icon, title, subtitle, href }: ContactMethodProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-3 bg-[#0D0D0D] border border-zinc-900 rounded-2xl hover:border-zinc-700 transition-all group/item">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-zinc-900/50 rounded-lg text-zinc-500 group-hover/item:text-white transition-colors">{icon}</div>
        <div>
          <h4 className="text-[14px] text-white font-bold tracking-tight">{title}</h4>
          <p className="text-[12px] text-zinc-600 font-sans">{subtitle}</p>
        </div>
      </div>
      <MdOutlineArrowOutward size={14} className="text-zinc-800 group-hover/item:text-zinc-400" />
    </a>
  )
}