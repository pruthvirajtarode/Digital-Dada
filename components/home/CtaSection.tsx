"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="bg-dada-black text-white min-h-screen flex flex-col items-center justify-center py-32 lg:py-48 px-6 overflow-hidden relative" data-cursor="view">
      
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none" />

      <div className="max-w-5xl w-full text-center relative z-10 flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-5xl md:text-7xl lg:text-[7rem] uppercase tracking-tighter leading-[0.85] mb-16"
        >
          WHAT WOULD YOU<br/>
          AUTOMATE<br/>
          <span className="text-dada-gray">IF YOU COULD?</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-12 max-w-2xl"
        >
          <p className="text-xl md:text-3xl font-light text-dada-off-white leading-relaxed">
            Tell us what your employees spend too much time doing.
          </p>

          <div className="text-left w-full border-t border-b border-white/10 py-8 my-4 flex flex-col gap-4 text-dada-gray font-light">
            <p className="uppercase text-xs font-bold tracking-widest text-white mb-2">We&apos;ll help you determine:</p>
            <p>→ What can be automated</p>
            <p>→ What should remain human</p>
            <p>→ What AI technology is appropriate</p>
            <p>→ What the potential savings could be</p>
            <p>→ How the system could fit into your existing operation</p>
          </div>

          <div className="flex flex-col items-center gap-6 mt-8">
            <Button href="/contact" className="bg-white text-black hover:bg-dada-gray hover:text-white px-10 py-6 rounded-none text-sm font-bold tracking-widest uppercase">
              SEE WHAT YOUR FIRM CAN AUTOMATE →
            </Button>
            <span className="font-mono text-xs text-dada-gray uppercase tracking-widest">
              No AI expertise required.
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
