'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const IMAGES = [
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuRbb7LVvkXeGb9p38hRu8UCyMYx8VEWXOTMoELhVo5zDty1ID9xZh8hZjHPMw7A-16lwAvxlSbxdVP2fMVCVo7w-KSu0iBKXKNtiGdeZwa82AvWMvLp1dHQqWaJCpd5eFBEaXAoHwjOwO-3-wASqyivwB5RS9timogQ5A6zoWSNsgJbTgWTe6T9iawIljWrqprUHIqyJJnm150CYHjZElWmWwHFbrCxYjIN9tSazAy9cSVQf4_6dbbWZwKZEPv-RYKnNZAH4cw_A',
    caption: 'Community Assembly 2024'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCenhQQxA0cOYpGy6dFVxpyQYKi9-ijdK-er_QlzTJ7BcbMICMjOlt1TBXxrJEnLzp4wjWnEooocfbUv-jn70pAYJjI9y6ki02LVZsZd9rXCH5ah3ctkd31uGOyH246MC92ke7WK7H6_wxISdRT-fkewD5HT9_B-xj8W1mmlC6fKpjo-l-hg6pTvkK-ovSJ_lZzR3oEmraJnqu3MmFUoprfC-A0sIzM1DHh2rNtpnx0q4GK3ACN39J4luqC8LfD0ufYYia9c_ZEFGM',
    caption: 'Education & Empowerment Workshop'
  },
  {
    url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDBBjcLXa6XIljIQVG5AVlEGt-YOf4GI_Nxsv61oWhlf_AURZFV79szMfMMUcvEkd_wobEekmlI8vdfvLQixI_qvCfabtQYwvQpqfabqTrHgx2TQPCFHwLKe7ENWOd4c7oR-rhBZCVqR2PAJY5deF2KKPLW5mmgqIPlNb8921YHUwIKplKypci7TveuAqUCt20mvQWDsCUk8tKWJaREUnXlvehcZaClQDIhKtBq7Dc4ntlJB_0gRjwYMDVW4EVzd4WRkYI0VFDKVwY',
    caption: 'Sustainable Livelihood Initiatives'
  }
];

export function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      transition: {
        x: { type: 'spring' as const, stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      },
    }),
  };

  const skipToImage = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const nextImage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % IMAGES.length);
  };

  const prevImage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + IMAGES.length) % IMAGES.length);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full group">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[#398B44] rounded-[2.5rem] transform translate-x-6 translate-y-6 opacity-10 blur-xl"></div>
      
      {/* Main Container */}
      <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border-8 border-white bg-gray-200 aspect-[4/3] md:aspect-[16/11]">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <Image
              src={IMAGES[currentIndex].url}
              alt={IMAGES[currentIndex].caption}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
              priority
            />
            
            {/* Caption overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-8 md:p-12">
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-white"
              >
                <h4 className="text-xl md:text-2xl font-black uppercase tracking-widest flex items-center gap-3">
                  <Camera size={24} /> {IMAGES[currentIndex].caption}
                </h4>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={(e) => { e.stopPropagation(); prevImage(); }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-[#398B44] z-20"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); nextImage(); }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-[#398B44] z-20"
        >
          <ChevronRight size={28} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); skipToImage(i); }}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === currentIndex ? 'bg-[#E5E149] w-8' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
