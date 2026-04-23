'use client';

import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area,
  Cell
} from 'recharts';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const data = [
  { year: '2019', lives: 1200, projects: 25 },
  { year: '2020', lives: 2800, projects: 65 },
  { year: '2021', lives: 5400, projects: 140 },
  { year: '2022', lives: 8100, projects: 210 },
  { year: '2023', lives: 10500, projects: 290 },
  { year: '2024', lives: 12000, projects: 350 },
];

export function ImpactCharts() {
  const [activeTab, setActiveTab] = useState(0);

  const metrics = [
    {
      id: 'growth',
      title: 'Growth Over Time',
      subtitle: 'Tracking our journey of social empowerment',
      content: (
        <div className="h-[400px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorLives" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffce2e" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#ffce2e" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorProjects" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ffffff" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ffffff" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
              <XAxis 
                dataKey="year" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 'bold' }}
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 'bold' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1a4332', 
                  border: '1px solid rgba(255,255,255,0.1)', 
                  borderRadius: '16px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                }}
                itemStyle={{ color: '#fff', fontWeight: 'bold' }}
                labelStyle={{ color: '#ffce2e', marginBottom: '8px', fontWeight: 'black' }}
              />
              <Area 
                type="monotone" 
                dataKey="lives" 
                stroke="#ffce2e" 
                strokeWidth={4}
                fillOpacity={1} 
                fill="url(#colorLives)" 
                name="Lives Impacted"
              />
              <Area 
                type="monotone" 
                dataKey="projects" 
                stroke="#ffffff" 
                strokeWidth={2}
                strokeDasharray="5 5"
                fillOpacity={1} 
                fill="url(#colorProjects)" 
                name="Projects Done"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )
    },
    {
      id: 'distribution',
      title: 'Project Distribution',
      subtitle: 'Focus areas of our global initiatives',
      content: (
        <div className="h-[400px] w-full flex flex-col items-center justify-center">
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={[
              { name: 'Education', value: 120 },
              { name: 'Health', value: 85 },
              { name: 'Skills', value: 95 },
              { name: 'Relief', value: 50 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} />
              <Tooltip 
                 cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                 contentStyle={{ backgroundColor: '#1a4332', border: 'none', borderRadius: '12px' }}
              />
              <Bar dataKey="value" radius={[15, 15, 0, 0]}>
                {
                  [0,1,2,3].map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#ffce2e' : 'rgba(255,255,255,0.2)'} />
                  ))
                }
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      )
    },
    {
      id: 'reach',
      title: 'Social Reach & Impact',
      subtitle: 'Quantifying community satisfaction',
      content: (
        <div className="h-[400px] w-full flex flex-col items-center justify-center space-y-12 max-w-xl mx-auto">
            <div className="text-center">
              <div className="text-8xl font-black text-secondary tracking-tight mb-4 drop-shadow-[0_0_15px_rgba(255,206,46,0.3)]">92%</div>
              <h4 className="text-white text-2xl font-black uppercase tracking-widest">Satisfaction Rate</h4>
            </div>
            
            <div className="w-full space-y-6">
              <p className="text-white/60 text-lg font-medium text-center">Community satisfaction and positive feedback rate across all 250+ active projects worldwide.</p>
              <div className="w-full bg-white/10 h-4 rounded-full overflow-hidden border border-white/5 shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '92%' }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="bg-secondary h-full rounded-full shadow-[0_0_20px_rgba(255,206,46,0.5)]"
                  />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-8 w-full">
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center">
                <div className="text-2xl font-black text-white">12k+</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Lives Touched</div>
              </div>
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10 text-center">
                <div className="text-2xl font-black text-white">45+</div>
                <div className="text-xs font-bold text-white/40 uppercase tracking-widest">Communities</div>
              </div>
            </div>
        </div>
      )
    }
  ];

  const nextMetric = () => setActiveTab((prev) => (prev + 1) % metrics.length);
  const prevMetric = () => setActiveTab((prev) => (prev - 1 + metrics.length) % metrics.length);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="relative bg-white/5 backdrop-blur-md rounded-[3.5rem] p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden min-h-[600px]">
        {/* Navigation Controls */}
        <div className="absolute top-8 right-8 flex gap-3 z-20">
          <button 
            onClick={prevMetric}
            className="w-12 h-12 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white transition-all active:scale-95"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextMetric}
            className="w-12 h-12 rounded-2xl bg-secondary text-primary hover:bg-[#d0cc35] flex items-center justify-center transition-all active:scale-95 shadow-lg shadow-secondary/20"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Header Text */}
        <div className="relative z-10 mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-none mb-4">
                {metrics[activeTab].title}
              </h3>
              <p className="text-white/60 text-lg font-medium">{metrics[activeTab].subtitle}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Area */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              {metrics[activeTab].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {metrics.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`h-2 rounded-full transition-all duration-500 ${
                activeTab === idx ? 'w-12 bg-secondary' : 'w-2 bg-white/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

