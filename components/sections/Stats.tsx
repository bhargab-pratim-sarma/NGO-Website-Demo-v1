'use client';

import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { BenefitMetric } from '@/components/ui/Items';
import { ImpactCharts } from '@/components/ImpactCharts';

export function Stats() {
  return (
    <section className="py-32 bg-primary text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,206,46,0.08)_0%,transparent_50%)]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>

      <div className="container mx-auto relative z-10 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div className="space-y-12 sticky top-32">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-white/10 px-6 py-2 rounded-full border border-white/20 backdrop-blur-md">
                 <span className="w-2 h-2 bg-secondary rounded-full"></span>
                 <div className="text-secondary font-black text-xs uppercase tracking-[0.3em]">Our Benefits</div>
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter">
                Impact That <br /> <span className="text-secondary">Changes Lives</span>
              </h2>
              <p className="text-2xl opacity-70 leading-relaxed font-light max-w-xl">
                Our programs deliver measurable outcomes, ensuring that every contribution creates a ripple effect of positive change.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <BenefitMetric 
                value={12000} 
                label="Lives Impacted" 
                desc="Families provided with clean water, healthcare access, and quality education." 
              />
              <BenefitMetric 
                value={350} 
                label="Projects Done" 
                desc="Successful community-led initiatives across 15+ underdeveloped regions." 
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-6 pt-8">
              <button className="bg-secondary text-primary font-black px-12 py-5 rounded-[2rem] hover:bg-white transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:-translate-y-2 cursor-pointer flex items-center justify-center gap-3 text-xl group">
                Join The Mission <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-black px-10 py-5 rounded-[2rem] hover:bg-white/20 transition-all cursor-pointer flex items-center justify-center gap-3 group">
                Learn History <Clock size={20} className="group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="relative lg:pt-12">
             <div className="absolute -inset-10 bg-secondary/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>
             <ImpactCharts />
          </div>
        </div>
      </div>
    </section>
  );
}
