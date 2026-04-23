'use client';

import React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Globe, Users, TrendingUp, ArrowUpRight, HandHeart } from 'lucide-react';
import { WhyItem } from '@/components/ui/Items';

export function WhyChooseUs() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section className="py-32 bg-background-warm dark:bg-gray-950 px-4 md:px-6 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-1.5 rounded-full text-primary font-bold text-xs uppercase tracking-widest border border-primary/10">
               <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
               Why Choose Us
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tighter">
              What Makes our Impact Strong
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
              We approach every initiative with compassion, operate with full transparency, and focus on creating sustainable impact that improves lives through community-led solutions.
            </p>
          </div>

          <div className="space-y-6 bg-white/50 dark:bg-white/5 p-8 rounded-[3rem] border border-white/20 backdrop-blur-sm">
            <WhyItem 
              icon={<Globe size={24} />} 
              title="Complete Transparency" 
              desc="We operate with complete openness, clearly communicating our goals, processes, and measurable outcomes to our partners and stakeholders." 
            />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
            <WhyItem 
              icon={<Users size={24} />} 
              title="Compassion & Dignity" 
              desc="Ensures every program is guided by empathy, maintaining the dignity of every individual and community we serve." 
            />
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
            <WhyItem 
              icon={<TrendingUp size={24} />} 
              title="Sustainable Empowerment" 
              desc="Our initiatives focus on long-term solutions that empower communities to become self-reliant and resilient." 
            />
          </div>

          <button className="bg-secondary text-primary font-black px-10 py-5 rounded-2xl hover:bg-primary hover:text-white transition-all shadow-xl inline-flex items-center gap-3 cursor-pointer group text-lg">
            Learn More <ArrowUpRight size={22} className="group-hover:rotate-45 transition-transform" />
          </button>
        </div>
        
        <div className="relative">
          <div className="relative z-10 w-full flex justify-end">
            <motion.div style={{ y: y1 }} className="relative rounded-[3.5rem] overflow-hidden shadow-2xl h-[650px] w-full max-w-[450px] border-8 border-white dark:border-gray-900 translate-x-8">
              <motion.div style={{ scale: scaleImage }} className="w-full h-full">
                <Image src="https://picsum.photos/seed/choose1/800/1200" alt="Main Impact" fill className="object-cover" referrerPolicy="no-referrer" />
              </motion.div>
            </motion.div>
            
            <motion.div style={{ y: y2 }} className="absolute -bottom-12 -left-4 w-72 h-80 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white dark:border-gray-900 z-20 hidden md:block">
              <Image src="https://picsum.photos/seed/choose2/600/800" alt="Community Action" fill className="object-cover" referrerPolicy="no-referrer" />
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="absolute top-12 left-0 md:-left-12 bg-white dark:bg-gray-800 p-6 rounded-[2.5rem] shadow-2xl flex items-center gap-4 z-30 border border-gray-100 dark:border-gray-700 cursor-pointer group"
            >
               <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary shadow-inner min-w-[64px]">
                  <HandHeart size={32} className="group-hover:scale-110 transition-transform" />
               </div>
               <div className="pr-4">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</div>
                  <div className="font-black text-xl text-gray-900 dark:text-white">+1 (123) 456 - 789</div>
               </div>
            </motion.div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
        </div>
      </div>
    </section>
  );
}
