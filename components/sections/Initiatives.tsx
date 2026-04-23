'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Activity, Scale, LifeBuoy, Star } from 'lucide-react';
import { InitiativeCard } from '@/components/ui/Cards';

export function Initiatives() {
  return (
    <section className="py-32 bg-background-warm dark:bg-gray-950 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
      
      <div className="container mx-auto text-center mb-20 relative z-10">
        <div className="inline-flex items-center gap-2 bg-primary/5 dark:bg-white/5 border border-primary/10 px-4 py-2 rounded-full text-primary font-bold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
          Our Programs
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white tracking-tighter leading-[1.1] mb-8 bg-clip-text">
          Initiatives that Empower
        </h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Our programs are thoughtfully designed to address real community needs, promote self-reliance, and create sustainable opportunities in education, healthcare, and human rights.
        </p>
      </div>
      
      <motion.div 
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
        variants={{ visible: { transition: { staggerChildren: 0.2 } }, hidden: {} }}
        className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
          <InitiativeCard 
            img="https://picsum.photos/seed/health1/800/1200" 
            label="Community Health" 
            title="Health & Wellness Outreach" 
            impact="5k+ Treated"
            icon={Activity}
          />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
          <InitiativeCard 
            img="https://picsum.photos/seed/legal/800/1200" 
            label="Legal Awareness" 
            title="Human Rights Advocacy" 
            impact="1.2k+ Case Support"
            icon={Scale}
          />
        </motion.div>
        <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}>
          <InitiativeCard 
            img="https://picsum.photos/seed/relief/800/1200" 
            label="Crisis Support" 
            title="Disaster Relief & Recovery" 
            impact="50+ Areas Reached"
            icon={LifeBuoy}
          />
        </motion.div>
      </motion.div>

      <div className="container mx-auto mt-20 p-8 rounded-[3rem] bg-secondary flex flex-col md:flex-row items-center justify-between gap-8 border border-white/20 shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent"></div>
        <div className="flex items-center gap-6 relative z-10">
          <div className="bg-primary text-secondary px-6 py-2 rounded-2xl font-black text-xl shadow-lg">
            $350
          </div>
          <p className="text-primary font-black text-lg md:text-xl leading-snug">
            Help Our Kids with Education, Food, & Health Support. <Link href="#" className="underline decoration-2 underline-offset-4 hover:opacity-70 transition-opacity">View All Programs</Link>
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end relative z-10">
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="#0a2e1d" className="text-primary" />)}
          </div>
          <p className="text-primary/70 font-bold tracking-widest uppercase text-xs">
            4.9 / 5.0 • Over 2000 Reviews
          </p>
        </div>
      </div>
    </section>
  );
}
