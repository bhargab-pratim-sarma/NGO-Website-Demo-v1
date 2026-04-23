'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Star, Quote, CheckCircle, Clock, BookOpen, Calendar } from 'lucide-react';

export function ServiceCard({ icon, title, desc, dark = false }: { icon: React.ReactNode, title: string, desc: string, dark?: boolean }) {
  return (
    <div className={`p-12 rounded-[3.5rem] shadow-2xl transition-all duration-700 hover:-translate-y-4 group border relative overflow-hidden ${dark ? 'bg-primary text-white scale-105 z-10 border-white/10' : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-100 dark:border-gray-700'}`}>
      <div className={`absolute top-0 right-0 w-32 h-32 blur-3xl transition-opacity duration-500 opacity-20 group-hover:opacity-40 -z-10 ${dark ? 'bg-secondary' : 'bg-primary'}`}></div>
      
      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-10 transition-all duration-500 shadow-lg ${dark ? 'bg-secondary text-primary group-hover:scale-110' : 'bg-primary/5 dark:bg-gray-700 text-primary group-hover:bg-secondary group-hover:scale-110'}`}>
        {icon}
      </div>
      
      <h3 className="text-3xl font-black mb-6 tracking-tighter leading-[1.1]">{title}</h3>
      <p className={`text-base leading-relaxed mb-10 font-medium ${dark ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'}`}>{desc}</p>
      
      <button className={`flex items-center gap-2 font-black uppercase text-xs tracking-[0.2em] transition-all cursor-pointer ${dark ? 'text-secondary hover:translate-x-2' : 'text-primary dark:text-secondary hover:translate-x-2'}`}>
        Explore Service <ArrowRight size={16} />
      </button>
    </div>
  );
}

export function InitiativeCard({ img, label, title, impact, icon: Icon }: { img: string, label: string, title: string, impact: string, icon: any }) {
  return (
    <div className="group relative rounded-[3rem] overflow-hidden shadow-2xl h-[500px] border border-white/10 flex flex-col justify-end p-8 transition-all duration-700 hover:-translate-y-4">
      <Image src={img} alt={title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" referrerPolicy="no-referrer" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500"></div>
      
      <div className="relative z-10 space-y-6">
        <div className="flex items-center justify-between">
          <div className="bg-secondary/90 backdrop-blur-md text-primary text-[10px] font-black px-4 py-2 rounded-xl shadow-lg uppercase tracking-widest flex items-center gap-2">
            <Icon size={14} />
            {label}
          </div>
          <div className="text-secondary font-black text-xl tracking-tighter transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            {impact}
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl font-black text-white leading-tight mb-4 tracking-tight drop-shadow-lg">{title}</h3>
          <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-500">
            <p className="text-white/70 text-sm mb-6 leading-relaxed flex items-center gap-2">
              <CheckCircle size={16} className="text-secondary shrink-0" />
              Community-led programs creating sustainable long-term impact.
            </p>
          </div>
        </div>
        
        <button className="bg-white/10 backdrop-blur-xl border border-white/20 text-white font-bold py-4 rounded-2xl w-full flex items-center justify-center gap-3 hover:bg-secondary hover:text-primary transition-all cursor-pointer group/btn">
          Explore Program <ArrowRight size={18} className="transition-transform group-hover/btn:translate-x-2" />
        </button>
      </div>
      
      <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-secondary/40 transition-colors"></div>
    </div>
  );
}

export function TestimonialCard({ name, role, text, img, featured = false }: { name: string, role: string, text: string, img: string, featured?: boolean }) {
  return (
    <div className={`p-10 rounded-[2.5rem] shadow-xl border relative transition-all duration-500 hover:-translate-y-2 flex flex-col h-full ${featured ? 'bg-white dark:bg-gray-800 border-primary shadow-primary/5' : 'bg-white dark:bg-gray-800 border-gray-100 dark:border-gray-800 shadow-gray-200/50 dark:shadow-none hover:shadow-2xl'}`}>
       <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="#E5E149" className="text-secondary" />
          ))}
       </div>
       <p className="text-xl leading-relaxed mb-8 font-medium italic text-gray-700 dark:text-gray-200 flex-grow">&ldquo;{text}&rdquo;</p>
       <div className="flex items-center gap-4 pt-6 border-t border-gray-100 dark:border-gray-700/50 mt-auto">
          <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md relative shrink-0">
             <Image src={img} alt={name} fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div>
             <h4 className="font-black text-lg leading-none mb-1 text-gray-900 dark:text-white">{name}</h4>
             <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">{role}</p>
          </div>
          <div className="ml-auto opacity-10 text-primary">
             <Quote size={28} fill="currentColor" />
          </div>
       </div>
       {featured && <div className="absolute top-0 right-10 -translate-y-1/2 bg-secondary text-primary text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">Our Story of Success</div>}
    </div>
  );
}

export function BlogCard({ category, img, title, date, active = false }: { category: string, img: string, title: string, date: string, active?: boolean }) {
  return (
    <div className={`rounded-[3rem] overflow-hidden group shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 dark:border-gray-800 flex flex-col h-full bg-white dark:bg-gray-800`}>
       <div className="relative h-96 overflow-hidden">
          <Image src={img} alt={title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
          <div className="absolute top-8 left-8 bg-black/60 backdrop-blur-md text-white text-[10px] font-black px-6 py-2 rounded-xl shadow-lg uppercase tracking-[0.2em]">
             {category}
          </div>
       </div>
       <div className={`p-10 flex flex-col flex-grow transition-colors ${active ? 'bg-primary text-white' : 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white group-hover:bg-[#f8f9fa] dark:group-hover:bg-gray-800'}`}>
          <div className="flex items-center gap-2 mb-6 opacity-60 text-xs font-bold uppercase tracking-widest">
             <Calendar size={14} /> {date}
          </div>
          <h3 className="text-2xl font-black mb-8 leading-tight tracking-tight flex-grow">{title}</h3>
          <button className={`flex items-center gap-2 font-bold uppercase text-xs tracking-widest cursor-pointer ${active ? 'text-secondary' : 'text-primary dark:text-secondary'}`}>
             Read More <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
          </button>
       </div>
    </div>
  );
}

export function CourseCard({ icon, title, duration, lessons, desc }: { icon: React.ReactNode, title: string, duration: string, lessons: string, desc: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-[2.5rem] border border-gray-100 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
      <div className="w-16 h-16 bg-secondary text-primary rounded-2xl flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-secondary transition-colors">{title}</h3>
      <div className="flex items-center gap-4 text-sm font-bold text-gray-400 dark:text-gray-500 mb-6">
        <span className="flex items-center gap-1"><Clock size={14} /> {duration}</span>
        <span className="flex items-center gap-1"><BookOpen size={14} /> {lessons}</span>
      </div>
      <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium leading-relaxed">{desc}</p>
      <button className="flex items-center gap-2 font-black uppercase text-xs tracking-widest text-primary dark:text-secondary cursor-pointer hover:opacity-70 transition-opacity">
        Enroll Today <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
      </button>
    </div>
  );
}
