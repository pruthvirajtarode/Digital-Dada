"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useSafeTransform } from "@/lib/useSafeTransform";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useRef } from "react";

export function HomeHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // The 3D object floats and scales up as user scrolls
  const scale = useSafeTransform(scrollYProgress, [0, 1], [0.8, 1.5]);
  const y = useSafeTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotate = useSafeTransform(scrollYProgress, [0, 1], [-10, 20]);
  
  // Background typography also moves slightly for parallax
  const textYBg = useSafeTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textYFg = useSafeTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={containerRef} style={{ minHeight: "200vh" }} className="relative bg-dada-black" data-cursor="explore">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center bg-dada-black">
        
        {/* Layer 1: Background Typography (z-0) */}
        <motion.div 
          style={{ y: textYBg }}
          className="absolute inset-0 z-0 flex flex-col justify-center px-4 md:px-12 w-full text-left pointer-events-none"
        >
          <div className="flex flex-col font-display font-black uppercase text-huge text-white">
            <span className="block translate-x-[5vw]">BUILD</span>
            <span className="block translate-x-[15vw] text-dada-gray">YOUR AI</span>
            <span className="block translate-x-[5vw]">WORKFORCE.</span>
          </div>
        </motion.div>

        {/* Layer 2: 3D Floating Object (z-10) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <motion.div 
            style={{ scale, y, rotate }} 
            className="relative w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] max-w-[1200px] max-h-[1200px] right-[-10vw] top-[-5vh]"
          >
             <Image 
               src="/hero-object.png" 
               alt="AI Workforce Core" 
               fill 
               className="object-contain" 
               priority 
             />
          </motion.div>
        </div>

        {/* Layer 3: Foreground Typography (z-20) */}
        {/* Only "BUILD" and "WORKFORCE" are opaque here to sit in front of the image, "YOUR AI" is hidden so the image covers it. Or vice versa. Let's make "BUILD" transparent, so the image covers it, and "YOUR AI" opaque so it covers the image. */}
        <motion.div 
          style={{ y: textYFg }}
          className="absolute inset-0 z-20 flex flex-col justify-center px-4 md:px-12 w-full text-left pointer-events-none mix-blend-normal"
        >
          <div className="flex flex-col font-display font-black uppercase text-huge text-white">
            <span className="block translate-x-[5vw] opacity-0">BUILD</span>
            <span className="block translate-x-[15vw] text-white">YOUR AI</span>
            <span className="block translate-x-[5vw] opacity-0">WORKFORCE.</span>
          </div>
        </motion.div>

        {/* Interactive Elements / Descriptions (z-30) */}
        <div className="absolute bottom-12 left-0 w-full z-30 px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md lg:max-w-xl"
          >
            <p className="text-xl md:text-2xl text-dada-off-white/80 leading-relaxed font-light mb-6 mix-blend-difference">
              AI employees that handle the repetitive work inside your accounting firm—so your people can focus on the work that actually requires people.
            </p>
            <p className="text-sm text-dada-off-white/60 font-sans tracking-wide leading-relaxed mix-blend-difference max-w-sm">
              Digital Dada builds, deploys, and manages intelligent AI systems that can collect documents, pursue unpaid invoices, document processes, analyze workflows, and help executives make better decisions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start md:items-end gap-6 pb-4"
          >
            <p className="text-xs text-dada-off-white/60 uppercase tracking-[0.2em] mix-blend-difference">
              Built for accounting firms. Powered by Dada AI.
            </p>
            <Button href="/contact" size="lg" className="bg-white text-black hover:bg-dada-gray hover:text-white border-none rounded-none text-xs font-bold tracking-widest px-8 py-5">
              SEE WHAT YOUR FIRM CAN AUTOMATE →
            </Button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
