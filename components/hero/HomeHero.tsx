"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { useRef } from "react";

export function HomeHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const rotateImage = useTransform(scrollYProgress, [0, 1], [0, 15]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-dada-black pt-20">
      
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

      {/* 3D Floating Object (z-10) */}
      <motion.div 
        style={{ y: yImage, rotate: rotateImage, scale: scaleImage }}
        className="absolute inset-0 z-10 flex items-center justify-center lg:justify-end lg:pr-32 pointer-events-none opacity-90"
      >
        <div className="relative w-[120vw] h-[120vw] md:w-[60vw] md:h-[60vw] max-w-[800px] max-h-[800px]">
           <Image 
             src="/hero-object.png" 
             alt="Abstract AI Core" 
             fill 
             className="object-contain mix-blend-screen"
             priority
           />
        </div>
      </motion.div>

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
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 mt-16 lg:mt-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
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

    </section>
  );
}
