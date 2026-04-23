'use client';

import React from 'react';
import { HandHeart, CheckCircle } from 'lucide-react';
import { AnimatedCounter } from '@/components/AnimatedCounter';

export function AboutItem({ title, desc }: { title: string, desc: string }) {
  return (
    <div className="flex gap-4 p-6 bg-primary/5 dark:bg-gray-900 rounded-[2rem] border border-gray-100 dark:border-gray-800">
      <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-lg">
        <HandHeart size={28} />
      </div>
      <div>
        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export function WhyItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-6 items-start group">
      <div className="w-14 h-14 bg-secondary rounded-2xl flex items-center justify-center text-primary shrink-0 shadow-lg group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div className="space-y-1">
        <h4 className="text-xl font-black text-gray-900 dark:text-white tracking-tight">{title}</h4>
        <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm font-medium">{desc}</p>
      </div>
    </div>
  );
}

export function CauseItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex gap-4 p-4 rounded-2xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700 group hover:shadow-md transition-shadow">
      <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-primary dark:text-secondary group-hover:bg-secondary transition-colors shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-900 dark:text-white mb-1">{title}</h4>
        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export function StepItem({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="flex gap-6 group">
       <div className="text-6xl font-black text-gray-200 dark:text-gray-800/80 group-hover:text-secondary group-hover:scale-110 transition-all duration-500 tabular-nums select-none opacity-80 group-hover:opacity-100">
          {num}
       </div>
       <div className="pt-4 space-y-2 border-l-2 border-gray-100 dark:border-gray-800 pl-8 relative before:absolute before:-left-1 before:top-6 before:w-2 before:h-2 before:bg-secondary before:rounded-full before:opacity-0 group-hover:before:opacity-100 transition-all">
          <h4 className="text-2xl font-black text-gray-900 dark:text-white group-hover:text-primary dark:group-hover:text-secondary transition-colors">{title}</h4>
          <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{desc}</p>
       </div>
    </div>
  );
}

export function BenefitMetric({ value, label, desc }: { value: number, label: string, desc: string }) {
  return (
    <div className="space-y-4 p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10">
      <div className="text-5xl font-black text-secondary tracking-tighter"><AnimatedCounter value={value} /></div>
      <div className="space-y-2">
        <div className="text-sm font-black uppercase tracking-[0.2em] text-white underline decoration-secondary/50 underline-offset-8 decoration-2">{label}</div>
        <p className="text-white/60 text-xs font-medium leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

export function Tag({ text }: { text: string }) {
  return (
    <div className="bg-white/10 px-6 py-2.5 rounded-full border border-white/20 text-sm font-bold tracking-widest uppercase text-white/80 hover:bg-secondary hover:text-primary transition-all cursor-default">
      {text}
    </div>
  );
}

export function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center text-primary">
        <CheckCircle size={14} />
      </div>
      <p className="font-bold text-gray-600 text-sm">{text}</p>
    </div>
  );
}

export function AmountBtn({ text, active = false }: { text: string, active?: boolean }) {
  return (
    <button className={`py-4 rounded-2xl font-black text-lg transition-all border-2 cursor-pointer ${active ? 'bg-primary text-secondary border-primary shadow-lg scale-105' : 'bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 border-gray-100 dark:border-gray-700 hover:border-primary hover:text-primary'}`}>
       {text}
    </button>
  );
}
