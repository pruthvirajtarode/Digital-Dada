"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function WorkPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-off-white text-dada-black" data-cursor="view">
      
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-24">
        
        <div className="max-w-6xl w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[12vw] md:text-[10vw] uppercase tracking-tighter leading-[0.85] mb-12"
          >
            OUR<br/>
            <span className="text-dada-gray">WORK.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <p className="text-2xl md:text-3xl font-light text-dada-gray leading-relaxed max-w-3xl mb-12">
              We rebuild and reinvent workflows for accounting firms. Explore our AI workforce to see how we tackle repetitive tasks.
            </p>
            <div className="flex flex-col gap-8 text-xl font-light">
              <Link href="/products" className="hover:text-dada-gray transition-colors border-b border-dada-black/20 pb-2 inline-block max-w-max uppercase font-bold tracking-widest text-sm">
                View our AI Workforce →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
