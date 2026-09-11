"use client";

import { motion } from "framer-motion";

export default function NewsPage() {
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
            LATEST<br/>
            NEWS &<br/>
            <span className="text-dada-gray">UPDATES.</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col"
          >
            <p className="text-2xl md:text-3xl font-light text-dada-gray leading-relaxed max-w-3xl">
              We are working on bringing you the latest insights, announcements, and stories from the frontlines of AI automation. Stay tuned.
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
