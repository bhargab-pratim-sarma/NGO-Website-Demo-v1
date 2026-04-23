'use client';

import React from 'react';
import Image from 'next/image';
import { GraduationCap, Globe, Sprout, Activity } from 'lucide-react';
import { CourseCard } from '@/components/ui/Cards';

export function Courses() {
  return (
    <section className="py-32 bg-background-warm dark:bg-gray-950 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-1.5 rounded-full text-primary font-bold text-xs uppercase tracking-widest border border-primary/10 mb-6">
              <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span> Skill Development
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tighter">
              Our Exclusive Courses <br /> & Training Programs
            </h2>
          </div>
          <p className="text-gray-500 dark:text-gray-400 max-w-md font-medium text-lg lg:text-right">
            Empowering individuals through specialized vocational training that preserves cultural heritage while building modern livelihoods.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CourseCard 
            icon={<GraduationCap size={32} />}
            title="Bodo Handloom"
            duration="6 Months"
            lessons="48 Lessons"
            desc="Learn traditional Dokhona weaving and intricate motif designs from master artisans."
          />
          <CourseCard 
            icon={<Globe size={32} />}
            title="Digital Literacy"
            duration="3 Months"
            lessons="24 Lessons"
            desc="Essential computing and internet skills for employment in the digital economy."
          />
          <CourseCard 
            icon={<Sprout size={32} />}
            title="Organic Farming"
            duration="4 Months"
            lessons="32 Lessons"
            desc="Sustainable agricultural practices and soil management for better regional yields."
          />
          <CourseCard 
            icon={<Activity size={32} />}
            title="Healthcare Basics"
            duration="5 Months"
            lessons="40 Lessons"
            desc="Fundamental community health training and emergency first-aid certification."
          />
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
           <div className="flex -space-x-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white dark:border-gray-900 overflow-hidden relative shadow-sm">
                   <Image src={`https://picsum.photos/seed/user${i}/100/100`} alt="Stud" fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
           </div>
           <p className="font-bold text-gray-700 dark:text-gray-300">Join 2,500+ students already learning with us.</p>
           <button className="bg-secondary text-primary font-black px-10 py-4 rounded-full hover:bg-primary hover:text-white transition-all shadow-xl cursor-pointer">
              View All Courses
           </button>
        </div>
      </div>
    </section>
  );
}
