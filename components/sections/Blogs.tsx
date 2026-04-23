'use client';

import React from 'react';
import { BlogCard } from '@/components/ui/Cards';

export function Blogs() {
  return (
    <section className="py-32 bg-background-warm dark:bg-gray-950 px-4 md:px-6">
       <div className="container mx-auto text-center mb-20">
          <div className="text-primary font-bold uppercase tracking-widest mb-4">Latest Blogs</div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-[1.1] tracking-tighter">Insights, Stories & Impact</h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-lg">Read real stories from the field, community experiences, and thought-provoking perspectives that reflect our mission and impact.</p>
       </div>
       
       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <BlogCard 
            category="Social Impact" 
            img="https://picsum.photos/seed/b1/600/800" 
            title="Empowering Women: A Journey of Self-Reliance and Leadership" 
            date="March 12, 2024"
          />
          <BlogCard 
            category="Education" 
            img="https://picsum.photos/seed/b2/600/800" 
            title="Why Education Remains the Foundation of Sustainable Change" 
            date="Feb 28, 2024"
            active
          />
          <BlogCard 
            category="Sustainability" 
            img="https://picsum.photos/seed/b3/600/800" 
            title="Building Resilient Futures Through Community Led Green Action" 
            date="Jan 15, 2024"
          />
       </div>
    </section>
  );
}
