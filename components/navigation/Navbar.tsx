"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Products", href: "/products" },
  { name: "Solutions", href: "/solutions" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="fixed top-0 left-0 z-[900] pointer-events-auto flex items-start p-0 md:p-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex bg-transparent">
        
        {/* Logo Block (88x88) */}
        <Link 
          href="/" 
          className="flex items-center justify-center w-[72px] h-[72px] md:w-[88px] md:h-[88px] bg-[#ededed]/95 backdrop-blur-sm transition-all duration-150 mr-[2px] mb-[2px] active:scale-95"
        >
          {/* Using a placeholder SVG mimicking the solid black icon style */}
          <svg className="w-[60%] h-[60%] text-black" viewBox="0 0 80 80" fill="currentColor">
            <rect x="20" y="20" width="40" height="40" rx="4" />
            <circle cx="40" cy="40" r="10" fill="white" />
          </svg>
        </Link>

        {/* Navigation Grid Cluster */}
        <div className="flex flex-wrap w-[216px] md:w-[264px] h-[72px] md:h-[88px]">
          {navLinks.map((link, idx) => (
            <div key={link.name} className="w-[72px] md:w-[88px] h-[36px] md:h-[44px] pr-[2px] pb-[2px]">
              <Link href={link.href} className="block w-full h-full relative group">
                <div className="absolute inset-0 bg-[#ededed]/95 backdrop-blur-sm flex items-start justify-start p-1 transition-all duration-150 group-hover:bg-black group-hover:text-white text-black">
                  <span className="text-[0.7rem] md:text-[0.8rem] font-bold uppercase tracking-tighter leading-none relative z-10">
                    {link.name}
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>

      {/* Extended Logotype Header (Shows on hover or desktop) */}
      <div className="hidden md:flex ml-[2px] h-[44px]">
        <div className="bg-white/90 px-6 py-px flex items-center justify-center backdrop-blur-sm">
          <span className="font-display font-black text-xl uppercase tracking-tighter text-black leading-none pt-1">
            DIGITAL DADA
          </span>
        </div>
      </div>
      
    </div>
  );
}
