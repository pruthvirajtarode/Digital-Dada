"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-black text-white" data-cursor="view">
      
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-24 border-b border-white/10">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-huge uppercase tracking-tighter leading-[0.85] mb-12"
        >
          WE&apos;RE NOT BUILDING<br/>
          ANOTHER AI TOOL.
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <p className="text-3xl md:text-5xl font-light text-dada-off-white leading-[1.2] tracking-tight">
            We&apos;re building the infrastructure for the next generation of work.
          </p>
        </motion.div>
      </section>

      {/* Philosophy Section - Editorial Composition */}
      <section className="py-32 lg:py-48 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col gap-32">
          
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/10 pb-32">
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter w-full md:w-1/3">
              AI BUILT BY PEOPLE WHO UNDERSTAND BUSINESS.
            </h2>
            <div className="w-full md:w-1/2 flex flex-col gap-8 text-xl md:text-2xl font-light text-dada-gray leading-relaxed">
              <p>Digital Dada was founded by entrepreneurs with 30 years of real-world business experience.</p>
              <p>We don&apos;t start with: <span className="text-white italic">"Here's a cool AI technology. Where can we use it?"</span></p>
              <p>We start with: <span className="text-white italic">"What is costing this business time, money and opportunity—and can technology eliminate it?"</span></p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-32">
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter w-full md:w-1/3">
              THE FUTURE WON&apos;T BE ENTIRELY DIGITAL.
            </h2>
            <div className="w-full md:w-1/2 flex flex-col gap-8 text-xl md:text-2xl font-light text-dada-gray leading-relaxed">
              <p>AI is beginning to move beyond screens.</p>
              <p>Computer vision, robotics and physical AI are opening a new frontier where intelligent systems can interact with the physical world.</p>
              <p>Digital Dada is exploring that frontier as well. Our long-term vision extends from digital employees to intelligent systems capable of coordinating digital and physical work.</p>
              <p className="text-white mt-8 font-medium">The AI workforce is only the beginning.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
