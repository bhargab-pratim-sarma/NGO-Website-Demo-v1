'use client';

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

const timelineEvents = [
  {
    year: "2015",
    title: "The Beginning",
    desc: "Started as a small group of volunteers organizing weekend teaching camps.",
    img: "https://picsum.photos/seed/hist1/600/400"
  },
  {
    year: "2017",
    title: "First Community Center",
    desc: "Opened our first permanent learning hub in rural areas, reaching 500+ children.",
    img: "https://picsum.photos/seed/hist2/600/400"
  },
  {
    year: "2019",
    title: "Healthcare Initiative",
    desc: "Launched mobile medical clinics targeting remote villages lacking basic care.",
    img: "https://picsum.photos/seed/hist3/600/400"
  },
  {
    year: "2021",
    title: "Pandemic Relief",
    desc: "Pivoted massive resources to distribute food kits and medical supplies during COVID-19.",
    img: "https://picsum.photos/seed/hist4/600/400"
  },
  {
    year: "2023",
    title: "Vocational Expansion",
    desc: "Introduced digital literacy and handloom weaving courses for sustainable livelihoods.",
    img: "https://picsum.photos/seed/hist5/600/400"
  },
  {
    year: "2025",
    title: "Global Recognition",
    desc: "Recognized as a leading grassroots NGO, ready to scale our impact further.",
    img: "https://picsum.photos/seed/hist6/600/400"
  }
];

export function HistoryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeEvent, setActiveEvent] = useState(0);

  // For horizontal scrolling effect internally
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-32 bg-white dark:bg-gray-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 dark:bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 mb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-1.5 rounded-full text-primary font-bold text-xs uppercase tracking-widest border border-primary/10 mb-6">
             <span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
             Our Timeline
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white leading-[1.1] tracking-tighter mb-6">
            Our Journey of Impact
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
            Explore how a small initiative grew into a community movement over the years, focusing on creating sustainable impact.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start hidden-scrollbar">
          
          {/* Timeline Nav */}
          <div className="w-full lg:w-1/3 flex flex-row lg:flex-col overflow-x-auto lg:overflow-visible gap-4 pb-8 lg:pb-0 relative">
            <div className="absolute left-[23px] top-[10%] bottom-[10%] w-[2px] bg-gray-200 dark:bg-gray-800 hidden lg:block rounded-full"></div>
            {timelineEvents.map((event, idx) => (
              <button
                key={event.year}
                onClick={() => setActiveEvent(idx)}
                className={`flex flex-col lg:flex-row items-center lg:items-start gap-4 p-4 rounded-xl transition-all min-w-[120px] lg:min-w-0 text-left relative z-10 
                  ${activeEvent === idx ? 'bg-primary/5 dark:bg-white/10 shadow-sm' : 'hover:bg-primary/5 dark:hover:bg-white/5 opacity-60 hover:opacity-100'}`}
              >
                <div className={`w-12 h-12 rounded-full shrink-0 flex items-center justify-center font-black transition-colors shadow-sm ${activeEvent === idx ? 'bg-secondary text-primary' : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-white border border-gray-200 dark:border-gray-700'}`}>
                  {event.year.slice(-2)}
                </div>
                <div className="hidden lg:block pt-2">
                  <div className={`text-xl font-black transition-colors ${activeEvent === idx ? 'text-primary dark:text-secondary' : 'text-gray-900 dark:text-white'}`}>{event.year}</div>
                  <div className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{event.title}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Content Display */}
          <div className="w-full lg:w-2/3 relative h-[520px]">
             {timelineEvents.map((event, idx) => (
                <motion.div
                  key={event.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ 
                    opacity: activeEvent === idx ? 1 : 0, 
                    x: activeEvent === idx ? 0 : 20,
                    pointerEvents: activeEvent === idx ? 'auto' : 'none'
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  <div className="relative w-full h-[350px] rounded-[3rem] overflow-hidden shadow-2xl mb-8 border border-white/50 dark:border-white/10">
                     <Image src={event.img} alt={event.title} fill className="object-cover" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                     <div className="absolute bottom-10 left-10 text-white pr-10">
                        <div className="text-secondary font-bold text-lg mb-2">{event.year}</div>
                        <h3 className="text-4xl font-black leading-tight mb-4">{event.title}</h3>
                     </div>
                  </div>
                  <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium px-6 border-l-4 border-secondary">
                    {event.desc}
                  </p>
                </motion.div>
             ))}
          </div>

        </div>
      </div>
    </section>
  );
}
