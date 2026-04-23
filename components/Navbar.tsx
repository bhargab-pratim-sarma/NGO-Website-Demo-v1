'use client';

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ChevronDown, Heart, Moon, Sun, X } from "lucide-react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'motion/react';
import { useTheme } from "@/lib/theme-context";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 transition-colors"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className={`absolute inset-0 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background-warm/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 shadow-sm' 
          : 'bg-transparent'
      }`} />
      
      <div className={`relative flex justify-between items-center w-full px-4 md:px-6 max-w-[1400px] mx-auto transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}>

        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center p-1.5 shadow-md shrink-0">
             <Image
              alt="my-ngo-v1 Logo"
              width={40}
              height={40}
              className="w-full h-full object-contain brightness-0 invert"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASstzldcCW0MNH0vDCxS7OCvreRp5bbbFN6BtKxKt2fEwgC_HuS1SNiEixSwJZJf237X7sz86hBz7IGxs4BKNbG6di4sJURFSZQBhKJhOuYmzlLTbl6pjZN2A2Zq0WLjaSA1_CDSaTDaz-plTo7QEt0zmuYaeUCjHj27toIvAcx835eV5BhrT2SbZix4MuoJ2_PraoB3R1Ioyy2Q18Wc8vIYE_5GU38AjCG5FJVzgrP8c902ifsV4kx1pye3XvCG8MNx0OfGKZ9oY"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className={`text-xl font-black tracking-tight transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-white'}`}>my-ngo-v1</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-8 items-center">
          <NavLink href="#" active isScrolled={isScrolled}>Home</NavLink>
          <NavLink href="#" isScrolled={isScrolled}>About Us</NavLink>
          <NavLink href="#" isScrolled={isScrolled}>Services</NavLink>
          <NavLink href="#" isScrolled={isScrolled}>Blog</NavLink>
          <NavLink href="#" isScrolled={isScrolled}>Pages <ChevronDown size={14} className="inline ml-1 opacity-50" /></NavLink>
          <NavLink href="#" isScrolled={isScrolled}>Contact Us</NavLink>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button 
            onClick={toggleTheme}
            className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-colors overflow-hidden ${
              isScrolled 
                ? 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme === 'light' ? 'light' : 'dark'}
                initial={{ y: -20, opacity: 0, rotate: -90 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                exit={{ y: 20, opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
                className="absolute"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </motion.div>
            </AnimatePresence>
          </button>

          
          <button className="hidden sm:flex items-center gap-2 bg-secondary text-[#1d1d00] font-bold px-6 py-2.5 rounded-full hover:bg-[#d0cc35] dark:hover:bg-[#f2ee5a] transition-all shadow-md active:scale-95 text-sm">
            Donate Now <Heart size={16} fill="currentColor" />
          </button>
          
          <button 
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-primary dark:text-secondary' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-[100%] left-0 w-full bg-background-warm dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-6 shadow-xl animate-in slide-in-from-top duration-300">
          <NavLink href="#" active isScrolled={true} onClick={() => setIsMenuOpen(false)}>Home</NavLink>
          <NavLink href="#" isScrolled={true} onClick={() => setIsMenuOpen(false)}>About Us</NavLink>
          <NavLink href="#" isScrolled={true} onClick={() => setIsMenuOpen(false)}>Services</NavLink>
          <NavLink href="#" isScrolled={true} onClick={() => setIsMenuOpen(false)}>Blog</NavLink>
          <NavLink href="#" isScrolled={true} onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink>
          <button className="flex items-center justify-center gap-2 bg-secondary text-[#1d1d00] font-bold px-6 py-4 rounded-xl shadow-md active:scale-95 text-base">
            Donate Now <Heart size={20} fill="currentColor" />
          </button>
        </div>
      )}
    </motion.nav>
  );
}

function NavLink({ 
  href, 
  children, 
  active = false, 
  isScrolled = false,
  onClick 
}: { 
  href: string; 
  children: React.ReactNode; 
  active?: boolean;
  isScrolled?: boolean;
  onClick?: () => void;
}) {
  const getNavTextColor = () => {
    if (!isScrolled) {
      return active ? "text-secondary" : "text-white/80 hover:text-white";
    }
    return active 
      ? "text-primary dark:text-secondary" 
      : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary";
  };

  return (
    <Link 
      href={href} 
      onClick={onClick}
      className={`font-bold text-sm md:text-base lg:text-sm transition-all relative group py-2 ${getNavTextColor()}`}
    >
      {children}
      {active && (
        <motion.span 
          layoutId="underline"
          className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full ${
            !isScrolled ? "bg-secondary" : "bg-primary dark:bg-secondary"
          }`} 
        />
      )}
      {!active && <span className={`absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300 ${
        !isScrolled ? "bg-white" : "bg-primary dark:bg-secondary"
      }`} />}
    </Link>
  );
}
