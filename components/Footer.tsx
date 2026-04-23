import React from "react";
import { Mail, Instagram, Twitter, Facebook, Phone, MapPin, ArrowUpRight, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0a2e1d] text-white w-full pt-20 pb-10 relative overflow-hidden footer-texture">
      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-white/5 pb-16">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center p-2 shadow-md shrink-0">
                <Heart size={24} className="text-primary" fill="currentColor" />
              </div>
              <span className="text-3xl font-bold tracking-tight text-white">my-ngo-v1</span>
            </Link>
            <p className="text-white/70 text-base leading-relaxed max-w-xs font-medium">
              We&apos;ve gathered answers to the questions we hear most, making it easy for you to learn about our work, values, and the impact.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:pl-10">
            <h4 className="font-bold mb-8 text-xl tracking-wide text-white">Quick Links</h4>
            <ul className="space-y-4 text-white/80 font-medium">
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Our Services</FooterLink>
              <FooterLink href="#">Blogs</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Column 3: Our Programs */}
          <div>
            <h4 className="font-bold mb-8 text-xl tracking-wide text-white">Our Programs</h4>
            <ul className="space-y-4 text-white/80 font-medium">
              <FooterLink href="#">Health & Wellness Outreach</FooterLink>
              <FooterLink href="#">Human Rights Advocacy</FooterLink>
              <FooterLink href="#">Disaster Relief & Recovery</FooterLink>
              <FooterLink href="#">Clean Water & Sanitation</FooterLink>
              <FooterLink href="#">Environmental Awareness</FooterLink>
            </ul>
          </div>

          {/* Column 4: Location & Socials */}
          <div className="space-y-12">
            <div>
              <h4 className="font-bold mb-8 text-xl tracking-wide text-white">Our Location</h4>
              <div className="flex gap-4 items-start text-white/80 font-medium">
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-secondary" />
                </div>
                <span className="leading-relaxed pt-1">8502 Preston Rd. Inglewood, Maine 98380</span>
              </div>
            </div>
            
            <div className="pt-8 border-t border-white/5 space-y-6">
              <h4 className="font-bold text-xl tracking-wide text-white">Follow Us On Socials:</h4>
              <div className="flex gap-4">
                <SocialIcon icon={<Twitter size={18} />} />
                <SocialIcon icon={<Twitter size={18} />} /> {/* Pinterest placeholder */}
                <SocialIcon icon={<Facebook size={18} />} />
                <SocialIcon icon={<Instagram size={18} />} />
              </div>
            </div>
          </div>
        </div>

        {/* Middle Bar: Subscription & Contact Info */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 py-12 border-b border-white/5 mb-12">
          {/* Subscription */}
          <div className="w-full lg:w-auto flex-grow max-w-xl">
            <div className="bg-white/5 rounded-2xl p-1.5 flex flex-col sm:flex-row gap-2 border border-white/10 shadow-inner">
              <input 
                type="email" 
                placeholder="Enter Email Address*" 
                className="bg-transparent px-6 py-4 outline-none text-white font-medium flex-grow placeholder:text-white/30"
              />
              <button className="bg-secondary text-primary font-black px-10 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-white transition-all whitespace-nowrap cursor-pointer shadow-lg active:scale-95">
                Subscribe <ArrowUpRight size={18} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* Contact Details */}
          <div className="flex flex-wrap gap-8 md:gap-16 items-center">
            {/* Email */}
            <div className="flex items-center gap-5 group">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary shadow-2xl group-hover:scale-110 transition-transform shadow-black/40">
                <Mail size={28} />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-white/50 uppercase tracking-[0.2em]">Email Address</p>
                <p className="text-xl font-bold text-white">bhargabpratimsharma@gmail.com</p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center gap-5 group">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center text-primary shadow-2xl group-hover:scale-110 transition-transform shadow-black/40">
                <Phone size={28} />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-bold text-white/50 uppercase tracking-[0.2em]">Phone Number</p>
                <p className="text-xl font-bold text-white">+(123) 456-789</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright & Author */}
        <div className="text-center font-bold text-white/90 text-lg space-y-2">
          <div>Copyright © 2026 All Rights Reserved.</div>
          <div className="text-sm text-white/50 font-medium">
            Prepared by: <span className="text-secondary">Bhargav Pratim Sarma</span> | 
            GitHub: <Link href="https://github.com/bhargab-pratim-sarma" target="_blank" className="hover:text-secondary underline decoration-secondary/30 underline-offset-4 transition-all">@bhargab-pratim-sarma</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all cursor-pointer group hover:border-secondary">
      <div className="group-hover:scale-110 transition-transform">{icon}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link href={href} className="hover:text-secondary flex items-center gap-4 transition-all group">
        <div className="w-2 h-2 rounded-full bg-secondary shrink-0 opacity-80 group-hover:opacity-100 group-hover:scale-125 transition-all" />
        <span>{children}</span>
      </Link>
    </li>
  );
}
