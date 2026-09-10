"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const steps = [
  { num: "01", title: "UNDERSTAND", desc: "We examine how your firm actually operates." },
  { num: "02", title: "IDENTIFY", desc: "We find repetitive, expensive, time-consuming work that can potentially be performed by AI." },
  { num: "03", title: "DESIGN", desc: "We determine what should be automated, what should remain human, and where AI can create the greatest economic impact." },
  { num: "04", title: "BUILD", desc: "Our engineers build the AI workforce around your actual business processes." },
  { num: "05", title: "CONNECT", desc: "We connect your AI employees to the systems your business already uses." },
  { num: "06", title: "IMPROVE", desc: "Your workflows continuously evolve as we identify new opportunities for efficiency." }
];

export function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      // 6 steps total, divide progress into 6 chunks
      const index = Math.min(Math.floor(latest * 6), 5);
      setActiveIndex(index);
    });
  }, [scrollYProgress]);

  return (
    <section ref={containerRef} className="relative h-[600vh] bg-dada-off-white" data-cursor="explore">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col pt-24 pb-12 px-6 md:px-24">
        
        {/* Intro */}
        <div className="mb-16 lg:mb-24 shrink-0">
          <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter text-dada-black mb-4">
            DON&apos;T AUTOMATE RANDOMLY.<br/>
            AUTOMATE INTELLIGENTLY.
          </h2>
          <p className="text-lg md:text-xl font-light text-dada-gray max-w-xl">
            Most companies approach AI backwards. They find an AI tool and then try to figure out where it fits. We start with the work.
          </p>
        </div>

        {/* Steps Container */}
        <div className="flex-1 relative flex flex-col justify-center">
          <div className="flex flex-col gap-8 md:gap-4 relative z-10">
            {steps.map((step, i) => {
              const isActive = i === activeIndex;
              const isPast = i < activeIndex;

              return (
                <div 
                  key={step.num}
                  className={`flex flex-col md:flex-row md:items-center gap-2 md:gap-12 transition-all duration-700 ease-in-out ${
                    isActive ? "opacity-100 translate-x-0" : isPast ? "opacity-20 -translate-y-8" : "opacity-20 translate-y-8"
                  }`}
                >
                  <span className={`font-mono tracking-widest transition-all duration-700 ${isActive ? "text-dada-black text-xl" : "text-dada-gray text-sm"}`}>
                    {step.num}
                  </span>
                  <div className="flex-1 flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-8">
                    <h3 className={`font-display font-black uppercase tracking-tighter transition-all duration-700 ${isActive ? "text-5xl md:text-7xl lg:text-8xl text-dada-black" : "text-2xl md:text-4xl text-dada-gray"}`}>
                      {step.title}
                    </h3>
                    <div className={`overflow-hidden transition-all duration-700 ${isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                      <p className="text-lg md:text-xl font-light text-dada-gray max-w-2xl mt-2 lg:mt-0">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Background Progress Visual */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full max-h-[60vh] w-1 bg-dada-gray/20 hidden md:block z-0">
             <motion.div 
               className="w-full bg-dada-black"
               style={{ height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
             />
          </div>

        </div>

      </div>
    </section>
  );
}
