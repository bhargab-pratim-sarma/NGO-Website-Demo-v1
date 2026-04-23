'use client';

import React from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { ImpactCalculator } from '@/components/ImpactCalculator';

export function Volunteer() {
  return (
    <section className="py-32 bg-primary/5 dark:bg-gray-900 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
         <ImpactCalculator />
         
         <div className="flex flex-col justify-center space-y-10">
            <div className="space-y-6">
               <div className="text-primary font-bold uppercase tracking-widest flex items-center gap-2">
                   <span className="w-8 h-1 bg-primary rounded-full"></span> Join As A Volunteer
               </div>
               <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tighter">Become A Volunteer</h2>
               <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                 Join us in creating positive change. You can contribute your skills and time meaningfully, support communities directly, and be part of a compassionate network committed to a fairer, stronger, and more inclusive society.
               </p>
            </div>
            
            <ul className="space-y-4">
               <li className="flex items-center gap-3 font-bold text-gray-700 dark:text-gray-300">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary dark:text-secondary">
                     <CheckCircle size={16} />
                  </div>
                  Contribute your time and skills to programs that directly support.
               </li>
               <li className="flex items-center gap-3 font-bold text-gray-700 dark:text-gray-300">
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary dark:text-secondary">
                     <CheckCircle size={16} />
                  </div>
                  Join a network of like-minded volunteers who believe in compassion.
               </li>
            </ul>
            
            <button className="bg-secondary text-primary font-bold px-12 py-5 rounded-2xl hover:bg-primary hover:text-white transition-all shadow-xl text-lg w-fit cursor-pointer">
               Become A Volunteer <ArrowRight className="inline ml-2" />
            </button>
         </div>
      </div>
    </section>
  );
}
