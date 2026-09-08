"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useSafeTransform } from "@/lib/useSafeTransform";
import { useRef } from "react";
import Image from "next/image";

const steps = [
  { num: "01", title: "UNDERSTAND", desc: "We examine how your firm actually operates.", image: "/hero-object.png" },
  { num: "02", title: "IDENTIFY", desc: "We find repetitive work that can potentially be performed by AI.", image: "/product-inbox.png" },
  { num: "03", title: "DESIGN", desc: "We determine what should be automated and what should remain human.", image: "/product-collect.png" },
  { num: "04", title: "BUILD", desc: "Our engineers build the AI workforce around your business processes.", image: "/product-sop.png" },
  { num: "05", title: "CONNECT", desc: "We connect your AI employees to the systems your business uses.", image: "/product-workflow.png" },
  { num: "06", title: "IMPROVE", desc: "Your workflows continuously evolve as we identify new efficiency.", image: "/product-executive.png" },
];

function StepItem({ step, i, totalSteps, scrollYProgress }: { step: any, i: number, totalSteps: number, scrollYProgress: MotionValue<number> }) {
  const stepStart = i / totalSteps;
  const stepEnd = (i + 1) / totalSteps;
  const stepCenter = (stepStart + stepEnd) / 2;
  
  const opacity = useSafeTransform(
    scrollYProgress,
    [stepStart - 0.05, stepCenter, stepEnd + 0.05],
    [0, 1, 0]
  );

  const yImg = useSafeTransform(
    scrollYProgress,
    [stepStart, stepEnd],
    ["10%", "-10%"]
  );

  return (
    <motion.div 
      style={{ opacity }}
      className="absolute inset-0 flex flex-col md:flex-row items-center justify-between p-6 lg:p-24 pointer-events-none"
    >
      {/* Left side: Huge Numeric Progress */}
      <div className="w-full md:w-1/4 h-full flex flex-col justify-center lg:justify-end pb-0 lg:pb-24 z-20 order-2 md:order-1 mt-12 md:mt-0">
        <span className="text-[20vw] md:text-[15vw] lg:text-[12vw] font-black tracking-tighter leading-none text-white/10 uppercase">
          {step.num}
        </span>
        <div className="w-full h-px bg-white/20 mt-4 mb-4" />
        <span className="text-dada-accent font-mono text-sm tracking-widest uppercase">
          PHASE {step.num} / 06
        </span>
      </div>

      {/* Center: Text Content */}
      <div className="w-full md:w-2/4 h-full flex flex-col justify-center px-0 md:px-12 z-20 order-1 md:order-2">
        <h3 className="text-5xl md:text-6xl lg:text-[7rem] font-bold tracking-tighter leading-[0.8] text-white uppercase mb-8">
          {step.title}
        </h3>
        <p className="text-2xl md:text-3xl lg:text-4xl text-dada-off-white/70 font-light leading-tight max-w-2xl">
          {step.desc}
        </p>
      </div>

      {/* Right: Visual */}
      <div className="w-full md:w-1/4 h-[30vh] md:h-full relative flex items-center justify-center z-10 order-3 md:order-3">
        <motion.div style={{ y: yImg }} className="relative w-[80vw] h-[80vw] md:w-[30vw] md:h-[30vw] max-w-[500px] max-h-[500px]">
          <Image src={step.image} alt={step.title} fill className="object-contain mix-blend-screen opacity-80" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function HowItWorks() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={containerRef} style={{ minHeight: "600vh" }} className="relative h-[600vh] bg-dada-near-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col md:flex-row items-center justify-between p-6 lg:p-24 bg-dada-black">
        
        {/* Intro Overlay Text */}
        <div className="absolute top-10 left-6 lg:left-16 z-50 pointer-events-none">
          <h2 className="text-2xl md:text-4xl font-bold tracking-widest uppercase text-dada-off-white/50 mix-blend-difference">
            HOW IT WORKS.
          </h2>
        </div>

        {/* Global Progress Line */}
        <div className="absolute left-0 top-0 w-2 h-full bg-white/5 z-0">
          <motion.div style={{ scaleY: scrollYProgress }} className="w-full h-full bg-dada-accent origin-top" />
        </div>

        {steps.map((step, i) => (
          <StepItem key={step.num} step={step} i={i} totalSteps={steps.length} scrollYProgress={scrollYProgress} />
        ))}

      </div>
    </section>
  );
}
