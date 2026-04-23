'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { MagneticButton } from '@/components/MagneticButton';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export function Hero() {
  return (
    <section className="relative h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image 
          src="https://picsum.photos/seed/charity/1920/1080" 
          alt="Hero Background" 
          fill 
          className="object-cover brightness-50"
          priority
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-white">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-6">
             <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-primary">
                <Heart size={20} fill="currentColor" />
             </div>
             <span className="text-sm font-bold uppercase tracking-widest text-secondary">Driving Positive Change Worldwide</span>
          </div>
          <h1 className="text-5xl md:text-[5.5rem] font-black leading-[1.05] tracking-tighter mb-8">
            Empowering Communities, Inspiring Change
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl font-medium">
            We bring people together to stage injustice, amplify unheard voices, and drive collective action that addresses inequality, defends human rights, and builds a more inclusive.
          </p>
          <div className="flex flex-wrap gap-4 items-center">
            <MagneticButton className="bg-secondary text-primary font-bold px-8 py-4 rounded-full hover:bg-white transition-all shadow-xl text-lg cursor-pointer">
              Become A Volunteer
            </MagneticButton>
            <motion.div 
              className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
                <div className="text-3xl font-bold text-secondary"><AnimatedCounter value={180} /></div>
                <div className="text-xs font-bold leading-tight uppercase opacity-80">Active <br /> Volunteers</div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
