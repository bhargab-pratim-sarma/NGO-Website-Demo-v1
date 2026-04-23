'use client';

import { motion, useInView } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

export function AnimatedCounter({ value, duration = 2 }: { value: number, duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const stepTime = Math.abs(Math.floor(duration * 1000 / value));
      const timer = setInterval(() => {
        start += Math.ceil(value / 50); // Count up in chunks
        if (start >= value) {
          setCurrent(value);
          clearInterval(timer);
        } else {
          setCurrent(start);
        }
      }, stepTime > 10 ? stepTime : 20); // Limit refresh rate
      
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{current.toLocaleString()}{value > 500 && '+'}</span>;
}
