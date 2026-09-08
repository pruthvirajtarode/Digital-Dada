"use client";

import { motion } from "framer-motion";

const focusAreas = [
  { text: "Client onboarding", top: "15%", left: "10%", delay: 0 },
  { text: "Document collection", top: "70%", left: "15%", delay: 1 },
  { text: "Invoice collections", top: "25%", left: "70%", delay: 2 },
  { text: "Workflow management", top: "80%", left: "65%", delay: 0.5 },
  { text: "SOP documentation", top: "45%", left: "80%", delay: 1.5 },
  { text: "Knowledge management", top: "50%", left: "5%", delay: 0.8 },
  { text: "Executive intelligence", top: "85%", left: "35%", delay: 2.5 },
];

export function AccountingFirmsSection() {
  return (
    <section className="relative h-[100vh] bg-dada-near-black overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
      
      {/* Central Core */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <motion.div 
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full border border-white/10 flex items-center justify-center"
        >
          <div className="w-1/2 h-1/2 rounded-full border border-dada-accent/20 animate-pulse bg-dada-accent/5 blur-3xl" />
        </motion.div>
      </div>

      {/* Floating Labels */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {focusAreas.map((area, i) => (
          <motion.div
            key={i}
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 5 + i, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: area.delay
            }}
            style={{ top: area.top, left: area.left }}
            className="absolute px-4 py-2 bg-black/80 border border-white/10 backdrop-blur-md rounded-full text-white/80 font-mono text-xs md:text-sm tracking-wider uppercase whitespace-nowrap"
          >
            {area.text}
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-dada-accent/10 border border-dada-accent/20 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-dada-accent animate-pulse" />
          <span className="text-xs font-bold tracking-widest uppercase text-dada-accent">Primary Market</span>
        </motion.div>
        
        <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-white uppercase max-w-5xl mx-auto">
          BUILT FOR<br/>
          <span className="text-dada-accent">ACCOUNTING FIRMS.</span>
        </h2>
      </div>

    </section>
  );
}
