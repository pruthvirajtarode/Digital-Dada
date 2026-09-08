"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useRef } from "react";

export function HomeHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // State 1: Hero Core (0 - 0.2)
  const o1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
  const s1 = useTransform(scrollYProgress, [0, 0.2], [1, 2]);
  const r1 = useTransform(scrollYProgress, [0, 0.2], [0, 45]);
  const y1 = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"]);

  // State 2: Document Inbox (0.15 - 0.4)
  const o2 = useTransform(scrollYProgress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0]);
  const s2 = useTransform(scrollYProgress, [0.15, 0.3, 0.4], [0.5, 1, 1.5]);
  const r2 = useTransform(scrollYProgress, [0.15, 0.4], [-45, 0]);
  const x2 = useTransform(scrollYProgress, [0.15, 0.4], ["50%", "-50%"]);

  // State 3: Collection (0.35 - 0.6)
  const o3 = useTransform(scrollYProgress, [0.35, 0.4, 0.55, 0.6], [0, 1, 1, 0]);
  const s3 = useTransform(scrollYProgress, [0.35, 0.5, 0.6], [0.5, 1, 1.5]);
  const r3 = useTransform(scrollYProgress, [0.35, 0.6], [45, -45]);
  const y3 = useTransform(scrollYProgress, [0.35, 0.6], ["50%", "-50%"]);

  // State 4: Workflow (0.55 - 0.8)
  const o4 = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
  const s4 = useTransform(scrollYProgress, [0.55, 0.7, 0.8], [0.5, 1, 1.5]);
  const r4 = useTransform(scrollYProgress, [0.55, 0.8], [-90, 0]);
  const x4 = useTransform(scrollYProgress, [0.55, 0.8], ["-50%", "50%"]);

  // State 5: Executive Intelligence (0.75 - 1.0)
  const o5 = useTransform(scrollYProgress, [0.75, 0.8, 1], [0, 1, 1]);
  const s5 = useTransform(scrollYProgress, [0.75, 0.9, 1], [0.5, 1, 1.2]);
  const r5 = useTransform(scrollYProgress, [0.75, 1], [45, 0]);
  const y5 = useTransform(scrollYProgress, [0.75, 1], ["50%", "0%"]);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-dada-black" data-cursor="explore">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center pt-20">
        
        {/* Background Text Layer (z-0) */}
        <div className="absolute inset-0 z-0 flex flex-col justify-center px-6 lg:pl-16 w-full max-w-[100vw] text-center lg:text-left pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col uppercase font-bold tracking-tighter leading-[0.8] text-[18vw] md:text-[14vw] lg:text-[12vw] text-white"
          >
            <span className="block text-left">BUILD</span>
            <span className="block text-center md:text-left md:pl-[20vw] opacity-0">YOUR AI</span>
            <span className="block text-right lg:text-left lg:pl-[5vw] text-dada-accent">WORKFORCE.</span>
          </motion.div>
        </div>

        {/* 3D Floating Object Container (z-10) */}
        <div className="absolute inset-0 z-10 flex items-center justify-center lg:justify-end lg:pr-32 pointer-events-none opacity-90">
          <div className="relative w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] max-w-[800px] max-h-[800px]">
             
             {/* State 1 */}
             <motion.div style={{ opacity: o1, scale: s1, rotate: r1, y: y1 }} className="absolute inset-0">
               <Image src="/hero-object.png" alt="Core" fill className="object-contain mix-blend-screen" priority />
             </motion.div>

             {/* State 2 */}
             <motion.div style={{ opacity: o2, scale: s2, rotate: r2, x: x2 }} className="absolute inset-0">
               <Image src="/product-inbox.png" alt="Inbox" fill className="object-contain mix-blend-screen" priority />
             </motion.div>

             {/* State 3 */}
             <motion.div style={{ opacity: o3, scale: s3, rotate: r3, y: y3 }} className="absolute inset-0">
               <Image src="/product-collect.png" alt="Collect" fill className="object-contain mix-blend-screen" priority />
             </motion.div>

             {/* State 4 */}
             <motion.div style={{ opacity: o4, scale: s4, rotate: r4, x: x4 }} className="absolute inset-0">
               <Image src="/product-workflow.png" alt="Workflow" fill className="object-contain mix-blend-screen" priority />
             </motion.div>

             {/* State 5 */}
             <motion.div style={{ opacity: o5, scale: s5, rotate: r5, y: y5 }} className="absolute inset-0">
               <Image src="/product-executive.png" alt="Executive" fill className="object-contain mix-blend-screen" priority />
             </motion.div>

          </div>
        </div>

        {/* Foreground Text Layer (z-20) */}
        <div className="relative z-20 w-full max-w-[100vw] px-6 text-center lg:text-left lg:pl-16 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col uppercase font-bold tracking-tighter leading-[0.8] text-[18vw] md:text-[14vw] lg:text-[12vw] text-white"
          >
            <span className="block text-left opacity-0">BUILD</span>
            <span className="block text-center md:text-left md:pl-[20vw]">YOUR AI</span>
            <span className="block text-right lg:text-left lg:pl-[5vw] opacity-0">WORKFORCE.</span>
          </motion.div>
        </div>

        {/* Interactive Elements / Descriptions */}
        <div className="absolute bottom-12 w-full z-30 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-xl"
          >
            <p className="text-xl md:text-2xl text-dada-off-white/80 leading-relaxed mb-6 font-light">
              AI employees that handle the repetitive work inside your accounting firm—so your people can focus on the work that actually requires people.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col items-start lg:items-end gap-6"
          >
            <Button href="/contact" size="lg" withArrow>
              See What Your Firm Can Automate
            </Button>
            <span className="text-sm text-dada-off-white/40 font-mono tracking-widest uppercase">
              Dada Signal Active
            </span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
