"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed bottom-12 right-12 z-[9000] flex-col items-center gap-4 hidden lg:flex pointer-events-none mix-blend-difference text-white">
      <div className="w-px h-24 bg-white/20 relative overflow-hidden">
        <motion.div 
          className="absolute top-0 left-0 w-full bg-dada-accent origin-top"
          style={{ height: "100%", scaleY: scrollYProgress }}
        />
      </div>
      <span className="text-[10px] font-mono tracking-widest uppercase writing-vertical-rl rotate-180 mt-4 opacity-60">
        Digital Dada
      </span>
    </div>
  );
}
