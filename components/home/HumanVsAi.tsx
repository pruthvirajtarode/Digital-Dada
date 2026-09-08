"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HumanVsAi() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Phase 1 (0 - 0.3): "YOUR EMPLOYEES SHOULDN'T BE DOING ROBOT WORK"
  const phase1Opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0]);
  const phase1Scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.2]);

  // Phase 2 (0.3 - 0.6): Chaotic blinking tasks
  const chaosOpacity = useTransform(scrollYProgress, [0.3, 0.35, 0.6, 0.65], [0, 1, 1, 0]);
  
  // Phase 3 (0.7 - 1.0): Simplified massive text
  const phase3Opacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const phase3Scale = useTransform(scrollYProgress, [0.7, 1.0], [0.9, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-dada-near-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center p-6 bg-dada-black">
        
        {/* Phase 1 */}
        <motion.div 
          style={{ opacity: phase1Opacity, scale: phase1Scale }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <h2 className="text-4xl md:text-6xl lg:text-[6rem] font-bold tracking-tighter leading-[0.9] text-white text-center max-w-6xl">
            YOUR EMPLOYEES<br/>
            SHOULDN'T BE DOING<br/>
            <span className="text-dada-accent">ROBOT WORK.</span>
          </h2>
        </motion.div>

        {/* Phase 2: Chaos */}
        <motion.div 
          style={{ opacity: chaosOpacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        >
          {/* We'll use CSS animations for the rapid flashing when this container is visible to save React re-renders */}
          <div className="relative w-full h-full flex items-center justify-center text-white/50 font-mono text-2xl md:text-5xl font-bold uppercase overflow-hidden">
            <motion.span style={{ y: useTransform(scrollYProgress, [0.3, 0.6], ["-100vh", "100vh"]), x: "-20vw" }} className="absolute">sending reminders</motion.span>
            <motion.span style={{ y: useTransform(scrollYProgress, [0.3, 0.6], ["100vh", "-100vh"]), x: "20vw" }} className="absolute">copying information</motion.span>
            <motion.span style={{ x: useTransform(scrollYProgress, [0.3, 0.6], ["-100vw", "100vw"]), y: "-20vh" }} className="absolute">chasing documents</motion.span>
            <motion.span style={{ x: useTransform(scrollYProgress, [0.3, 0.6], ["100vw", "-100vw"]), y: "20vh" }} className="absolute text-dada-accent">checking status</motion.span>
            <motion.span style={{ scale: useTransform(scrollYProgress, [0.3, 0.6], [0, 5]), opacity: useTransform(scrollYProgress, [0.3, 0.45, 0.6], [1, 0, 1]) }} className="absolute">searching databases</motion.span>
            <motion.span style={{ rotate: useTransform(scrollYProgress, [0.3, 0.6], [0, 360]), scale: useTransform(scrollYProgress, [0.3, 0.6], [3, 0]) }} className="absolute">following up</motion.span>
          </div>
        </motion.div>

        {/* Phase 3: Final Resolution */}
        <motion.div 
          style={{ opacity: phase3Opacity, scale: phase3Scale }}
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none bg-dada-black"
        >
          <div className="text-center px-6">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-dada-off-white/60 mb-6 uppercase tracking-widest">
              AI HANDLES THE REPETITION.
            </h3>
            <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-black tracking-tighter text-white leading-[0.8] uppercase">
              HUMANS HANDLE<br/>
              <span className="text-dada-accent">THE JUDGMENT.</span>
            </h2>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
