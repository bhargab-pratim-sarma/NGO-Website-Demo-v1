'use client';

import React from 'react';
import Image from 'next/image';
import { Users, Activity, GraduationCap, Sprout } from 'lucide-react';
import { CauseItem } from '@/components/ui/Items';

export function Causes() {
  return (
    <section className="py-24 bg-primary/5 dark:bg-gray-900 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative group">
          <div className="relative rounded-[3rem] overflow-hidden h-[400px] md:h-[600px] shadow-2xl">
             <Image src="https://picsum.photos/seed/girl/800/1000" alt="Person" fill className="object-cover transition-transform duration-700 group-hover:scale-105" referrerPolicy="no-referrer" />
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="text-primary font-bold uppercase tracking-widest">Our Causes</div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white leading-tight">
            Building a Just and Sustainable Future
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            By addressing interconnected social & environmental issues, we strive to create inclusive communities and lasting positive change worldwide.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
             <CauseItem icon={<Users />} title="Women Empowerment" desc="Gender equality and independence by supporting women leadership." />
             <CauseItem icon={<Activity />} title="Healthcare & Wellbeing" desc="Improving community health training and medical outreach networks." />
             <CauseItem icon={<GraduationCap />} title="Education for All" desc="Providing access to quality education for children & adults in underserved." />
             <CauseItem icon={<Sprout />} title="Environmental Protection" desc="Supporting environmental sustainability through tree plantation." />
          </div>
        </div>
      </div>
    </section>
  );
}
