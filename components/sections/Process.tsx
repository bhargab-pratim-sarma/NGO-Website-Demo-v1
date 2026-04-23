'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { StepItem } from '@/components/ui/Items';

export function Process() {
  return (
    <section className="py-32 bg-background-warm dark:bg-gray-950 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="space-y-8">
          <div className="text-primary font-bold uppercase tracking-widest">How We Work</div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tighter">
            From Planning to Action, Every Step Counts
          </h2>
          <p className="text-xl text-gray-400 dark:text-gray-500 font-bold bg-secondary/10 dark:bg-secondary/5 p-8 rounded-3xl border-l-8 border-secondary relative overflow-hidden">
             We transform compassion into concrete action. Our structured approach ensures that every project is sustainable, scalable, and directly benefits those in need.
          </p>
          <button className="bg-secondary text-primary font-bold px-10 py-4 rounded-full shadow-lg hover:translate-x-2 transition-transform inline-flex items-center gap-2 cursor-pointer">
             Learn More <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="space-y-12">
           <StepItem num="01" title="Identify Community Needs" desc="Communities first through research survey, & direct engagement." />
           <StepItem num="02" title="Plan & Collaborate" desc="Our team collaborates with local leader, volunteers & partner organizations." />
           <StepItem num="03" title="Take Action & Measure Impact" desc="We implement programs on the ground, monitor results closely." />
        </div>
      </div>
    </section>
  );
}
