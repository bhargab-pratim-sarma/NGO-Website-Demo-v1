'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function ImpactCalculator() {
  const [amount, setAmount] = useState<number>(50);

  const getImpact = (val: number) => {
    if (val < 25) return { title: 'Provides 2 School Kits', desc: 'Equips children with essential supplies like notebooks, pencils, and bags.' };
    if (val < 50) return { title: 'Feeds a Family for a Week', desc: 'Supplies a nutritional food package consisting of grains, pulses, and cooking oil.' };
    if (val < 100) return { title: 'Funds a Health Checkup', desc: 'Covers the cost of a full medical screening and basic medicines for 5 individuals.' };
    if (val < 250) return { title: 'Sponsors 1 Month of Training', desc: 'Provides vocational training materials and instructor fees for one adult learner.' };
    if (val < 500) return { title: 'Builds a Clean Water Source', desc: 'Funds the materials to install a community handpump providing safe drinking water.' };
    return { title: 'Empowers a Whole Community', desc: 'Transforms villages with comprehensive health, education, and livelihood interventions.' };
  };

  const impact = getImpact(amount);

  return (
    <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-gray-700 relative group">
      <div className="absolute inset-0 overflow-hidden rounded-[3rem]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      </div>
      
      <div className="absolute -top-4 -left-4 bg-primary text-white text-xs font-bold px-6 py-2 rounded-xl shadow-lg uppercase tracking-widest z-10">Donate</div>
      
      <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-2 relative z-10">Calculate Your Impact</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-8 font-medium">See exactly how your donation changes lives.</p>
      
      <div className="mb-10 relative z-10">
        <div className="flex justify-between text-secondary font-black text-2xl md:text-4xl mb-4">
          <span>${amount}</span>
        </div>
        <input 
          type="range" 
          min="10" 
          max="500" 
          step="10"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-secondary"
        />
        <div className="flex justify-between text-xs text-gray-400 font-bold uppercase mt-2">
          <span>$10</span>
          <span>$500+</span>
        </div>
      </div>

      <div className="bg-primary/5 dark:bg-gray-900/50 p-6 rounded-3xl mb-8 min-h-[140px] flex items-center shadow-inner relative z-10 border border-primary/10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={impact.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-primary dark:text-secondary font-black text-xl mb-2 leading-tight">{impact.title}</div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-medium leading-relaxed">{impact.desc}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <button className="w-full bg-secondary text-primary font-black py-5 rounded-2xl hover:scale-[1.02] active:scale-95 transition-all shadow-xl text-xl uppercase cursor-pointer relative z-10">
         Donate ${amount} Now
      </button>
    </div>
  );
}
