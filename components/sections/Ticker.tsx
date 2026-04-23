'use client';

import React from 'react';
import { Star } from 'lucide-react';

export function Ticker() {
  return (
    <div className="bg-secondary py-4 relative z-20 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee gap-10 items-center justify-around font-black text-primary uppercase text-sm tracking-widest">
        {[...Array(5)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="flex items-center gap-2"><Star size={16} fill="currentColor" /> Impact</span>
            <span className="flex items-center gap-2"><Star size={16} fill="currentColor" /> Future Ready</span>
            <span className="flex items-center gap-2"><Star size={16} fill="currentColor" /> Community Support</span>
            <span className="flex items-center gap-2"><Star size={16} fill="currentColor" /> Health Support</span>
            <span className="flex items-center gap-2"><Star size={16} fill="currentColor" /> Volunteer Impact</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
