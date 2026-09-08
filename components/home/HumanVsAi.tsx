"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { Headline } from "@/components/typography/Headline";

const workflowItems = [
  "sending reminders",
  "copying information",
  "chasing documents",
  "checking status",
  "searching databases",
  "following up",
  "updating systems",
  "repeating instructions",
];

export function HumanVsAi() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const xPos = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  return (
    <section ref={containerRef} className="py-32 bg-dada-near-black overflow-hidden flex flex-col items-center justify-center min-h-[80vh]">
      <div className="max-w-4xl mx-auto px-6 text-center mb-24 z-10">
        <Reveal>
          <Headline text="Your Employees Shouldn’t Be Doing Robot Work." as="h2" className="text-4xl md:text-6xl font-bold mb-8 justify-center" />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl text-dada-off-white/70 leading-relaxed">
            Your best people should be solving problems, building relationships, making decisions and serving customers.
          </p>
        </Reveal>
      </div>

      {/* Marquee workflow text */}
      <div className="w-full relative py-12 flex flex-col gap-4 mb-24 z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-dada-near-black via-transparent to-dada-near-black z-10 pointer-events-none" />
        <motion.div style={{ x: xPos }} className="flex whitespace-nowrap gap-8">
          {[...workflowItems, ...workflowItems, ...workflowItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8 text-2xl md:text-4xl font-mono uppercase tracking-widest text-white/20">
              <span>{item}</span>
              <span className="text-dada-accent">→</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <Reveal>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 text-dada-off-white/60">
            AI handles the repetition.
          </h3>
        </Reveal>
        <Reveal delay={0.2}>
          <Headline text="HUMANS HANDLE THE JUDGMENT." as="h2" className="text-5xl md:text-8xl font-black tracking-tighter text-white justify-center" />
        </Reveal>
      </div>
    </section>
  );
}
