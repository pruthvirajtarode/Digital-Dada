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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end relative z-10">
          <div className="lg:col-span-7">
            <Reveal>
              <Headline text="Don’t Automate Randomly." as="h2" className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-2" />
            </Reveal>
            <Reveal delay={0.1}>
              <Headline text="Automate Intelligently." as="h2" className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-dada-accent" />
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pl-12 lg:border-l border-white/10 pb-4">
            <Reveal delay={0.3}>
              <p className="text-xl md:text-2xl text-dada-off-white/80 leading-relaxed font-light">
                Most companies approach AI backwards. They find an AI tool and then try to figure out where it fits.
                <span className="text-white font-bold mt-6 block text-2xl">We start with the work.</span>
              </p>
            </Reveal>
          </div>
        </div>

        <div className="relative pl-8 md:pl-24">
          {/* Animated vertical line */}
          <div className="absolute left-[15px] md:left-[31px] top-4 bottom-4 w-[2px] bg-white/5">
            <motion.div style={{ height: lineHeight }} className="w-full bg-dada-accent origin-top" />
          </div>

          <div className="flex flex-col gap-24 relative">
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 0.1}>
                <div className="relative group">
                  {/* Node indicator */}
                  <div className="absolute -left-[45px] md:-left-[85px] top-4 w-4 h-4 rounded-full bg-dada-black border-2 border-white/20 z-10 flex items-center justify-center group-hover:border-dada-accent transition-colors">
                    <motion.div 
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "0px" }}
                      transition={{ delay: 0.3 + (i * 0.1) }}
                      className="w-2 h-2 rounded-full bg-dada-accent"
                    />
                  </div>
                  
                  <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start">
                    <div className="flex flex-col gap-2 lg:w-5/12">
                      <span className="text-dada-accent font-mono text-sm tracking-widest uppercase opacity-80">Phase {step.num}</span>
                      <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase group-hover:text-dada-accent transition-colors">{step.title}</h3>
                    </div>
                    <div className="lg:w-7/12 lg:pt-8">
                      <p className="text-2xl md:text-3xl lg:text-4xl text-dada-off-white/60 leading-tight font-light group-hover:text-white transition-colors">
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
