'use client';

import React from 'react';
import { ArrowRight, Users } from 'lucide-react';
import { MagneticButton } from '@/components/MagneticButton';

export function FinalCTA() {
  return (
    <section className="py-32 px-4 md:px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="bg-primary rounded-[4rem] p-8 md:p-24 text-center relative overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.4)]">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto space-y-12">
            <div className="bg-secondary/20 text-secondary text-[10px] font-black px-6 py-2 rounded-full uppercase tracking-[0.4em] inline-block mb-4 backdrop-blur-md border border-secondary/20">
              Ready to Make a Difference?
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[1.1]">
              Let&apos;s Build a <br /> <span className="text-secondary">Stronger World</span> <br /> Together.
            </h2>
            
            <p className="text-white/70 text-xl md:text-2xl font-medium leading-relaxed max-w-2xl mx-auto">
              Whether you donate your resources or your time, your contribution plays a vital role in empowering families and transforming communities.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
              <MagneticButton intensity={0.4} className="bg-secondary text-primary font-black px-12 py-6 rounded-[2.5rem] hover:bg-white transition-all shadow-2xl cursor-pointer flex items-center gap-4 text-xl group w-full sm:w-auto justify-center">
                Donate Now <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </MagneticButton>
              <MagneticButton intensity={0.4} className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-black px-12 py-6 rounded-[2.5rem] hover:bg-white hover:text-primary transition-all shadow-xl cursor-pointer flex items-center gap-4 text-xl group w-full sm:w-auto justify-center">
                Become a Volunteer <Users className="group-hover:scale-110 transition-transform" />
              </MagneticButton>
            </div>
            
            <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/10 mt-16">
              <div className="space-y-2">
                <div className="text-secondary text-3xl font-black tracking-tighter">100%</div>
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Transparency</p>
              </div>
              <div className="space-y-2">
                <div className="text-secondary text-3xl font-black tracking-tighter">Global</div>
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Impact Scope</p>
              </div>
              <div className="space-y-2">
                <div className="text-secondary text-3xl font-black tracking-tighter">Secure</div>
                <p className="text-white/50 text-xs font-bold uppercase tracking-widest">Payment Systems</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
