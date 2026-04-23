'use client';

import React from 'react';
import { motion } from 'motion/react';
import { TestimonialCard } from '@/components/ui/Cards';

const testimonials = [
  {
    name: "Bessie Cooper", 
    role: "Local Partner", 
    text: "When this organization started working in our area, we honestly expect change. The education and health programs have helped children stay in school & our families stay healthy.", 
    img: "https://picsum.photos/seed/p1/100/100"
  },
  {
    name: "Annette Black", 
    role: "Community Volunteer", 
    text: "Being part of this organization has been life-changing. The team's compassion, transparency & commitment to real impact made me feel proud to contribute my time and skills.",
    img: "https://picsum.photos/seed/p2/100/100"
  },
  {
    name: "Jane Cooper", 
    role: "Long-Term Supporter", 
    text: "Our growth with this organization has been life-changing. Their commitment to transparency & community development is genuine, and the impact they create is visible at every level.",
    img: "https://picsum.photos/seed/p3/100/100"
  },
  {
    name: "Robert Fox", 
    role: "Volunteer Dr.", 
    text: "Medicine is my profession, but service is my passion. This organization allows me to bring quality healthcare to remote villages where it's needed most.",
    img: "https://picsum.photos/seed/p4/100/100"
  },
  {
    name: "Savannah Nguyen", 
    role: "Program Alumni", 
    text: "I was one of the first students in the digital literacy program. Today, I'm working as a web developer and supporting my entire family. Forever grateful.",
    img: "https://picsum.photos/seed/p5/100/100"
  }
];

export function Testimonials() {
  return (
    <section className="py-32 bg-background-warm dark:bg-gray-950 px-4 md:px-6 overflow-hidden">
      <div className="container mx-auto text-center mb-20">
        <div className="inline-flex items-center gap-2 bg-primary/5 dark:bg-white/5 border border-primary/10 px-4 py-2 rounded-full text-primary font-bold uppercase tracking-widest mb-6">
          <span className="w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
          Client Success
        </div>
        <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tighter">Voices of Real People</h2>
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">Hear directly from the people, volunteers, and partners whose lives have been touched by our work and who continue to believe in our mission.</p>
      </div>
      
      <div className="relative group/marquee">
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-background-warm dark:from-gray-950 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-background-warm dark:from-gray-950 to-transparent z-20 pointer-events-none"></div>

        <div className="flex animate-marquee group-hover/marquee:[animation-play-state:paused] gap-8 py-4 px-4">
          {[...testimonials, ...testimonials, ...testimonials].map((t, idx) => (
            <div key={idx} className="min-w-[350px] md:min-w-[500px]">
              <TestimonialCard 
                name={t.name}
                role={t.role}
                text={t.text}
                img={t.img}
                featured={idx % 4 === 1}
              />
            </div>
          ))}
        </div>
        
        <div className="container mx-auto max-w-2xl mt-12 bg-gray-200 dark:bg-gray-800 h-1 rounded-full overflow-hidden">
           <motion.div 
             animate={{ x: ["-100%", "100%"] }}
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             className="bg-primary w-1/3 h-full rounded-full"
           />
        </div>
      </div>
    </section>
  );
}
