"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-off-white text-dada-black" data-cursor="view">
      
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-24">
        
        <div className="max-w-6xl w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[12vw] uppercase tracking-tighter leading-[0.85] mb-24"
          >
            TELL US<br/>
            WHAT TO<br/>
            <span className="text-dada-gray">AUTOMATE.</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col"
            >
              <p className="text-2xl md:text-3xl font-light text-dada-gray leading-relaxed mb-12">
                We'll help you determine what can be automated, what should remain human, and what AI technology is appropriate.
              </p>
              <div className="flex flex-col gap-8 text-xl font-light">
                <a href="mailto:hello@digitaldada.com" className="hover:text-dada-gray transition-colors border-b border-dada-black/20 pb-2 inline-block max-w-max">hello@digitaldada.com</a>
                <span className="text-dada-gray border-b border-dada-black/20 pb-2 max-w-max">No AI expertise required.</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <form className="flex flex-col gap-8 w-full" onSubmit={(e) => e.preventDefault()}>
                <input type="text" placeholder="YOUR NAME" className="w-full bg-transparent border-b border-dada-black/20 pb-4 text-xl outline-none font-mono tracking-widest uppercase placeholder:text-dada-black/40 focus:border-dada-black transition-colors" />
                <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-b border-dada-black/20 pb-4 text-xl outline-none font-mono tracking-widest uppercase placeholder:text-dada-black/40 focus:border-dada-black transition-colors" />
                <textarea placeholder="WHAT IS COSTING YOUR FIRM TIME?" rows={4} className="w-full bg-transparent border-b border-dada-black/20 pb-4 text-xl outline-none font-mono tracking-widest uppercase placeholder:text-dada-black/40 focus:border-dada-black transition-colors resize-none"></textarea>
                <Button type="submit" className="bg-dada-black text-white hover:bg-dada-gray px-10 py-6 rounded-none text-sm font-bold tracking-widest uppercase self-start">
                  SUBMIT INQUIRY →
                </Button>
              </form>
            </motion.div>
          </div>

        </div>
      </section>

    </div>
  );
}
