'use client';

import { motion, useScroll } from 'motion/react';
import { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-secondary origin-left z-[100]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
