'use client';

import React from 'react';
import Image from 'next/image';
import { HandHeart } from 'lucide-react';
import { Tag } from '@/components/ui/Items';

export function FocusedActions() {
  return (
    <section className="py-28 bg-[#0a2e1d] text-white overflow-hidden relative px-6 rounded-[4rem] mx-4 mb-24 shadow-2xl">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
      <div className="container mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
         <div className="lg:w-1/3 flex flex-col gap-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
               <div className="text-4xl font-black text-secondary mb-2">3,500+</div>
               <div className="text-xs font-bold uppercase tracking-widest text-white/60">Active Volunteers</div>
               <div className="flex mt-4 -space-x-4">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-primary overflow-hidden relative">
                       <Image src={`https://picsum.photos/seed/user${i}/100/100`} alt="user" fill className="object-cover" referrerPolicy="no-referrer" />
                    </div>
                  ))}
               </div>
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden group">
               <Image src="https://picsum.photos/seed/impact/600/400" alt="Action" fill className="object-cover transition-transform group-hover:scale-110" referrerPolicy="no-referrer" />
               <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                  <div className="text-2xl font-black text-secondary">250+ <span className="text-white text-sm font-medium">Projects Completed</span></div>
               </div>
            </div>
         </div>
         
         <div className="lg:w-2/3 space-y-10">
            <div className="space-y-6">
              <div className="text-secondary font-bold uppercase tracking-widest flex items-center gap-2">
                <span className="w-4 h-[2px] bg-secondary rounded-full"></span> What We Do
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
                Focused Actions That <br /> Deliver Impact
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl">
                Through thoughtfully planned programs and community-led action, we empower individuals, strengthen neighborhood, and foster lasting positive change one initiative at a time.
              </p>
            </div>
            
            <div className="flex gap-4">
               <Tag text="Awareness" />
               <Tag text="Capacity Building" />
               <Tag text="Collaboration" />
            </div>
            
            <div className="space-y-6 pt-6">
               <div className="flex gap-4 items-start group">
                  <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                     <HandHeart size={28} />
                  </div>
                  <div>
                     <h4 className="text-2xl font-bold mb-2">Empowering Communities</h4>
                     <p className="text-gray-400 leading-relaxed max-w-xl">We design and implement programs that address key community needs - ranging from education and healthcare to women in youth.</p>
                  </div>
               </div>
            </div>
            
            <button className="bg-secondary text-primary font-bold px-12 py-5 rounded-2xl hover:scale-105 active:scale-95 transition-all text-xl shadow-2xl uppercase tracking-widest cursor-pointer">
               Contact Us
            </button>
         </div>
      </div>
    </section>
  );
}
