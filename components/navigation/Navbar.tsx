"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

const navLinks = [
  { name: "AI Workforce", href: "/products" },
  { name: "Solutions", href: "/business-technology" },
  { name: "Accounting Firms", href: "/accounting-firms" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <>
      {/* Compact Modular Navigation Blocks */}
      <div className="fixed top-6 left-6 z-[100] flex items-center justify-between w-[calc(100%-3rem)] pointer-events-none">
        
        {/* Logo Block */}
        <Link 
          href="/" 
          className="pointer-events-auto bg-dada-near-black text-white px-5 py-3 hover:bg-white hover:text-black transition-colors duration-300 tracking-wider font-bold text-sm uppercase mix-blend-normal"
          onClick={() => setMenuOpen(false)}
        >
          DIGITAL DADA
        </Link>

        {/* Menu Toggle Block */}
        <button
          className="pointer-events-auto bg-dada-near-black text-white px-5 py-3 hover:bg-white hover:text-black transition-colors duration-300 tracking-wider font-bold text-sm uppercase flex items-center gap-2"
          onClick={() => setMenuOpen(true)}
        >
          <span className="hidden sm:inline">MENU</span>
          <div className="flex flex-col gap-1 w-4">
            <span className="w-full h-[2px] bg-current"></span>
            <span className="w-full h-[2px] bg-current"></span>
          </div>
        </button>

      </div>

      {/* Full Screen Menu Reveal */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%", transition: { delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] } }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[110] bg-dada-black flex flex-col"
          >
            {/* Header of Menu */}
            <div className="flex items-center justify-between p-6">
              <Link 
                href="/" 
                className="text-white tracking-wider font-bold text-sm uppercase"
                onClick={() => setMenuOpen(false)}
              >
                DIGITAL DADA
              </Link>
              
              <button
                className="text-white hover:text-dada-gray transition-colors flex items-center gap-2 font-bold text-sm uppercase tracking-wider"
                onClick={() => setMenuOpen(false)}
              >
                CLOSE <X size={18} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col justify-center px-6 lg:px-24">
              <div className="flex flex-col gap-2 lg:gap-4">
                {navLinks.map((link, i) => (
                  <div key={link.name} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: "0%" }}
                      exit={{ y: "-100%" }}
                      transition={{ duration: 0.5, delay: 0.1 + (i * 0.05), ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        href={link.href}
                        className="font-display font-black text-4xl sm:text-6xl lg:text-8xl text-white hover:text-dada-gray transition-colors uppercase block leading-none py-2"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer of Menu */}
            <div className="p-6 lg:px-24 pb-12 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 overflow-hidden">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="text-dada-gray max-w-sm text-sm leading-relaxed"
              >
                Digital Dada builds, deploys, and manages intelligent AI systems that handle the repetitive work inside your business.
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button 
                  href="/contact" 
                  onClick={() => setMenuOpen(false)}
                  className="bg-white text-black hover:bg-dada-gray hover:text-white border-0"
                >
                  SEE WHAT YOUR FIRM CAN AUTOMATE →
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
