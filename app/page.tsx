'use client';

import React from 'react';
import { CustomCursor } from '@/components/CustomCursor';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { AIChatBot } from '@/components/AIChatBot';
import { HistoryTimeline } from '@/components/HistoryTimeline';

// Sections
import { Hero } from '@/components/sections/Hero';
import { Ticker } from '@/components/sections/Ticker';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { Stats } from '@/components/sections/Stats';
import { Initiatives } from '@/components/sections/Initiatives';
import { Causes } from '@/components/sections/Causes';
import { Process } from '@/components/sections/Process';
import { FocusedActions } from '@/components/sections/FocusedActions';
import { Courses } from '@/components/sections/Courses';
import { Testimonials } from '@/components/sections/Testimonials';
import { Volunteer } from '@/components/sections/Volunteer';
import { Blogs } from '@/components/sections/Blogs';
import { FinalCTA } from '@/components/sections/FinalCTA';

export default function Page() {
  return (
    <div className="min-h-screen bg-background-warm dark:bg-gray-950 transition-colors">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <WhyChooseUs />
        <Stats />
        <Initiatives />
        <Causes />
        <Process />
        <FocusedActions />
        <Courses />
        <Testimonials />
        <Volunteer />
        <Blogs />
        <FinalCTA />
      </main>

      <Footer />
      <AIChatBot />
    </div>
  );
}
