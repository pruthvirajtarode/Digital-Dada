"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { Headline } from "@/components/typography/Headline";

const steps = [
  { num: "01", title: "UNDERSTAND", desc: "We examine how your firm actually operates." },
  { num: "02", title: "IDENTIFY", desc: "We find repetitive, expensive, time-consuming work that can potentially be performed by AI." },
  { num: "03", title: "DESIGN", desc: "We determine what should be automated, what should remain human, and where AI can create the greatest economic impact." },
  { num: "04", title: "BUILD", desc: "Our engineers build the AI workforce around your actual business processes." },
  { num: "05", title: "CONNECT", desc: "We connect your AI employees to the systems your business already uses." },
  { num: "06", title: "IMPROVE", desc: "Your workflows continuously evolve as we identify new opportunities for efficiency." },
];

export function HowItWorks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="py-32 bg-dada-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-24">
          <Reveal>
            <Headline text="Don’t Automate Randomly. Automate Intelligently." as="h2" className="text-4xl md:text-6xl font-bold mb-8" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl text-dada-off-white/80 leading-relaxed">
              Most companies approach AI backwards.<br/>
              They find an AI tool and then try to figure out where it fits.<br/>
              <span className="text-dada-accent font-bold mt-4 block">We start with the work.</span>
            </p>
          </Reveal>
        </div>

        <div className="relative pl-8 md:pl-16">
          {/* Animated vertical line */}
          <div className="absolute left-[15px] md:left-[31px] top-4 bottom-4 w-[2px] bg-white/10">
            <motion.div style={{ height: lineHeight }} className="w-full bg-dada-accent origin-top" />
          </div>

          <div className="flex flex-col gap-16 md:gap-24 relative">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="relative">
                  {/* Node indicator */}
                  <div className="absolute -left-[45px] md:-left-[61px] top-2 w-4 h-4 rounded-full bg-dada-black border-2 border-white/20 z-10 flex items-center justify-center">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="w-2 h-2 rounded-full bg-dada-accent"
                    />
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start md:items-baseline">
                    <div className="flex gap-4 md:w-1/3 items-baseline">
                      <span className="text-dada-accent font-mono text-xl">{step.num}</span>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight">— {step.title}</h3>
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-xl text-dada-off-white/60 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
