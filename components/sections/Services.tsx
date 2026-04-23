'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Users, GraduationCap, ShieldCheck } from 'lucide-react';
import { ServiceCard } from '@/components/ui/Cards';

export function Services() {
  return (
    <section className="py-32 bg-primary/5 dark:bg-gray-900 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto flex flex-col items-center text-center mb-24 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }}
          className="bg-primary text-secondary text-[10px] font-black px-6 py-2 rounded-full shadow-lg uppercase tracking-[0.3em] mb-8"
        >
           Our Services
        </motion.div>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-[1.1] mb-10"
        >
          Our Actions for <br className="hidden md:block" /> <span className="text-primary">Social Change</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 }}
          className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-xl leading-relaxed font-medium"
        >
          We approach every social contribution through compassion, technical expertise, and long-term community partnerships.
        </motion.p>
      </div>
      
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } }, hidden: {} }}
        className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          <ServiceCard 
            icon={<Users size={40} />} 
            title="Community Development" 
            desc="Comprehensive rural development initiatives that focus on sustainable livelihoods, clean water, and civic engagement." 
          />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          <ServiceCard 
            icon={<GraduationCap size={40} />} 
            title="Education & Awareness" 
            desc="Building community learning hubs that bridge the gap between traditional wisdom and modern digital skills." 
            dark
          />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}>
          <ServiceCard 
            icon={<ShieldCheck size={40} />} 
            title="Human Rights Advocacy" 
            desc="Legal aid, policy research, and awareness campaigns to protect the fundamental rights of marginalized groups." 
          />
        </motion.div>
      </motion.div>
      
      <div className="container mx-auto mt-20 flex flex-col md:flex-row items-center justify-center gap-6 text-sm font-black text-gray-400 uppercase tracking-[0.2em] relative z-10 bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] shadow-xl max-w-4xl border border-gray-100 dark:border-gray-700">
        <div className="flex -space-x-3">
           {[...Array(4)].map((_, i) => (
             <div key={i} className="w-10 h-10 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden relative shadow-md">
                <Image src={`https://picsum.photos/seed/serv${i}/100/100`} alt="Supporter" fill className="object-cover" referrerPolicy="no-referrer" />
             </div>
           ))}
           <div className="w-10 h-10 rounded-full bg-secondary text-primary flex items-center justify-center text-[10px] shadow-md border-4 border-white dark:border-gray-800">+12k</div>
        </div>
        <p className="text-center md:text-left">
          Join <span className="text-primary">3,500+ Ambassadors</span> working for change. <Link href="#" className="text-primary underline decoration-secondary decoration-4 underline-offset-4 hover:opacity-70 transition-opacity ml-2">Get Started Today</Link>
        </p>
      </div>
    </section>
  );
}
