"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { Headline } from "@/components/typography/Headline";

const systems = [
  "QuickBooks",
  "CRM platforms",
  "Email",
  "SMS",
  "Document management systems",
  "Calendars",
  "APIs",
  "Internal databases",
  "Custom business software",
];

export function Integrations() {
  return (
    <section className="py-32 bg-dada-near-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <Headline text="AI That Works With the Systems You Already Use" as="h2" className="text-4xl md:text-5xl font-bold mb-8" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-dada-off-white/80 leading-relaxed mb-6">
              Your business doesn’t need another disconnected application.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-lg text-dada-off-white/60 leading-relaxed mb-12">
              Digital Dada builds AI systems that can connect with the technology already running your business.
            </p>
          </Reveal>
        </div>

        <div className="relative border border-white/10 rounded-xl p-8 bg-dada-black flex flex-col items-center justify-center min-h-[500px]">
          {/* Ecosystem Visualization */}
          
          <div className="flex flex-col items-center w-full gap-12 relative z-10">
            {/* Top Layer */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="px-6 py-3 border border-dada-accent bg-dada-accent/10 rounded-sm w-64 text-center text-dada-accent font-bold tracking-widest uppercase text-sm"
            >
              AI Workforce
            </motion.div>

            {/* Down Arrow */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-12 w-[1px] bg-gradient-to-b from-dada-accent to-dada-off-white/20"
            />

            {/* Middle Layer */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="px-6 py-3 border border-white/20 bg-white/5 rounded-sm w-72 text-center text-dada-off-white font-medium tracking-widest uppercase text-xs"
            >
              Business Intelligence Layer
            </motion.div>

            {/* Down Arrows - Multiple */}
            <div className="flex justify-between w-64">
               <motion.div animate={{ height: [20, 48, 20] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="w-[1px] bg-white/20 h-12" />
               <motion.div animate={{ height: [20, 48, 20] }} transition={{ duration: 2, repeat: Infinity, delay: 0.5 }} className="w-[1px] bg-white/20 h-12" />
               <motion.div animate={{ height: [20, 48, 20] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }} className="w-[1px] bg-white/20 h-12" />
            </div>

            {/* Bottom Layer - Grid of Systems */}
            <div className="flex flex-wrap justify-center gap-3 w-full">
              {systems.map((sys, idx) => (
                <motion.div
                  key={sys}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (idx * 0.05) }}
                  className="px-3 py-2 border border-white/10 bg-dada-near-black rounded-sm text-xs text-white/50"
                >
                  {sys}
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-dada-accent/5 rounded-full blur-[80px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
