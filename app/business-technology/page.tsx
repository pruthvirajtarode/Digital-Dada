"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function BusinessTechnologyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-off-white text-dada-black" data-cursor="view">
      
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-[12vw] uppercase tracking-tighter leading-[0.85] mb-12"
        >
          BUSINESS<br/>
          TECHNOLOGY<br/>
          <span className="text-dada-gray">SERVICES.</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="text-xl md:text-3xl font-light text-dada-gray leading-relaxed mb-12">
            In addition to our AI Workforce solutions, Digital Dada continues to provide foundational business technology services, consulting, and digital infrastructure management for our existing clients.
          </p>

          <Button href="/contact" className="bg-dada-black text-white hover:bg-dada-gray px-10 py-6 rounded-none text-sm font-bold tracking-widest uppercase border-0">
            CONTACT OUR SERVICES TEAM →
          </Button>
        </motion.div>
      </section>

    </div>
  );
}
