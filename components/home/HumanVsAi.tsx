"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function HumanVsAi() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const listX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="bg-dada-near-black text-white py-32 overflow-hidden" data-cursor="explore">
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <h2 className="font-display font-black text-4xl md:text-6xl lg:text-8xl uppercase tracking-tighter leading-none mb-12">
          YOUR EMPLOYEES SHOULDN&apos;T<br/> BE DOING ROBOT WORK.
        </h2>
        <div className="max-w-3xl">
          <p className="text-xl md:text-3xl font-light text-dada-off-white leading-relaxed mb-6">
            Your best people should be solving problems, building relationships, making decisions and serving customers.
          </p>
          <p className="text-xl md:text-2xl font-light text-dada-gray leading-relaxed">
            They shouldn&apos;t spend their days:
          </p>
        </div>
      </div>

      {/* Scrolling List */}
      <div className="relative w-[200vw] mb-48 flex items-center">
        <motion.div style={{ x: listX }} className="flex gap-12 lg:gap-24 whitespace-nowrap pl-6">
          {[
            "sending reminders", "copying information", "chasing documents",
            "checking status", "searching databases", "following up",
            "updating systems", "repeating instructions"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-12 lg:gap-24">
              <span className="font-display font-black text-5xl md:text-7xl lg:text-9xl tracking-tighter text-dada-gray opacity-30 uppercase line-through decoration-white decoration-[4px] md:decoration-[8px]">
                {item}
              </span>
              <span className="text-3xl md:text-5xl text-dada-accent">{"\u2192"}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Huge Statement */}
      <div className="w-full px-6 flex flex-col items-center text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-huge uppercase tracking-tighter leading-[0.8] w-full"
        >
          <span className="block text-white">AI HANDLES</span>
          <span className="block text-dada-gray">THE REPETITION.</span>
        </motion.h2>
        
        <div className="h-24 md:h-48" /> {/* Spacer */}
        
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-huge uppercase tracking-tighter leading-[0.8] w-full"
        >
          <span className="block text-white">HUMANS HANDLE</span>
          <span className="block text-dada-gray">THE JUDGMENT.</span>
        </motion.h2>
      </div>
      <div className="h-32" />
    </section>
  );
}
