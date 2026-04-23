'use client';

import React from 'react';
import Image from 'next/image';
import { Play, ArrowUpRight } from 'lucide-react';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { AboutItem } from '@/components/ui/Items';

export function About() {
  return (
    <section className="py-32 bg-background-warm dark:bg-gray-950 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="relative">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-3xl overflow-hidden h-64 border-4 border-white dark:border-gray-800 shadow-xl translate-y-8">
                <Image src="https://picsum.photos/seed/a/600/600" alt="About 1" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="bg-secondary p-8 rounded-3xl shadow-xl flex flex-col items-center justify-center text-center">
                <div className="text-5xl font-black text-primary"><AnimatedCounter value={25} /></div>
                <div className="text-sm font-bold text-primary/70 uppercase">Years of Experience</div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="relative rounded-3xl overflow-hidden h-[400px] border-4 border-white dark:border-gray-800 shadow-xl">
                <Image src="https://picsum.photos/seed/b/600/800" alt="About 2" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="text-primary font-bold uppercase tracking-widest flex items-center gap-2">
            <span className="w-8 h-1 bg-primary rounded-full"></span> About Our NGO
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tighter">
            Movement Built Hope and Humanity
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed font-medium">
            We believe in the power of collective compassion. Through dedicated efforts and inclusive programs, we support vulnerable communities.
          </p>
          
          <div className="space-y-6">
            <AboutItem title="Empowering Communities" desc="We work closely with community to identify and real needs." />
            <div className="flex gap-4 items-center">
                <button className="bg-secondary text-primary font-bold px-8 py-3 rounded-full hover:bg-primary hover:text-white transition-all shadow-lg flex items-center gap-2 cursor-pointer">
                  More About Us <ArrowUpRight size={18} />
                </button>
                <button className="flex items-center gap-3 font-bold text-gray-900 dark:text-white group transition-all cursor-pointer">
                   <div className="w-12 h-12 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center group-hover:bg-secondary transition-all">
                      <Play size={18} fill="currentColor" />
                   </div>
                   Watch Our Video
                </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
