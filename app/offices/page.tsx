"use client";

import { motion } from "framer-motion";

export default function OfficesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-off-white text-dada-black" data-cursor="view">
      
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-24">
        
        <div className="max-w-6xl w-full">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[12vw] md:text-[10vw] uppercase tracking-tighter leading-[0.85] mb-16"
          >
            GLOBAL<br/>
            <span className="text-dada-gray">PRESENCE.</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4"
            >
              <h3 className="font-display font-bold text-3xl uppercase tracking-tight">NEW YORK</h3>
              <p className="text-xl font-light text-dada-gray leading-relaxed">
                Primary Headquarters<br/>
                Serving North American markets and leading our global strategy.
              </p>
              <a href="mailto:hello@digitaldada.com" className="mt-4 hover:text-dada-gray transition-colors border-b border-dada-black/20 pb-1 inline-block max-w-max text-sm font-bold tracking-widest uppercase">Contact NY Office</a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4"
            >
              <h3 className="font-display font-bold text-3xl uppercase tracking-tight">LONDON</h3>
              <p className="text-xl font-light text-dada-gray leading-relaxed">
                European Hub<br/>
                Driving AI integrations and systems across the EMEA region.
              </p>
              <a href="mailto:hello@digitaldada.com" className="mt-4 hover:text-dada-gray transition-colors border-b border-dada-black/20 pb-1 inline-block max-w-max text-sm font-bold tracking-widest uppercase">Contact UK Office</a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4"
            >
              <h3 className="font-display font-bold text-3xl uppercase tracking-tight">REMOTE</h3>
              <p className="text-xl font-light text-dada-gray leading-relaxed">
                Global Talent<br/>
                Our engineers and AI specialists operate fully remotely worldwide.
              </p>
              <a href="mailto:hello@digitaldada.com" className="mt-4 hover:text-dada-gray transition-colors border-b border-dada-black/20 pb-1 inline-block max-w-max text-sm font-bold tracking-widest uppercase">Get in touch</a>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
