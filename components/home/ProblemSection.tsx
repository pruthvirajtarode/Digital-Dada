"use client";

import { Reveal } from "@/components/animations/Reveal";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ProblemSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 bg-dada-near-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Signature / Brand Element on Left */}
          <div className="lg:col-span-4 sticky top-32 flex justify-center lg:justify-start">
            <Reveal>
              <div className="font-[family-name:var(--font-signature)] text-5xl md:text-7xl lg:text-[6rem] text-white/80 rotate-[-4deg] opacity-90 select-none">
                Digital Dada
              </div>
            </Reveal>
          </div>

          {/* Massive Typography on Right */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            <Reveal>
              <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-bold tracking-tighter leading-[0.9] text-white uppercase mb-12">
                We don’t build software tools. We build the infrastructure for the next generation of work.
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="space-y-6 max-w-2xl text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                <p>
                  The repetitive work accounting firms deal with every day doesn’t necessarily need another employee. It may just need an AI system.
                </p>
                <p>
                  Digital Dada identifies the work, builds the AI system, connects it to your existing technology, and puts it to work.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
      
      {/* Background typographic noise */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.04] pointer-events-none whitespace-nowrap font-bold text-[20vw] leading-none overflow-hidden uppercase text-white mix-blend-overlay">
        Repetition Elimination
      </div>
    </section>
  );
}
