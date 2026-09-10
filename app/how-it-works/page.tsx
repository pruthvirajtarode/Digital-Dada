"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";

const steps = [
  { num: "01", title: "SHOW US THE WORK.", desc: "Tell us what your employees spend their time doing." },
  { num: "02", title: "WE FIND THE OPPORTUNITIES.", desc: "We analyze your workflows and identify work that AI can potentially perform." },
  { num: "03", title: "WE BUILD YOUR AI EMPLOYEE.", desc: "Our engineers create the system around your actual business requirements." },
  { num: "04", title: "WE CONNECT IT TO YOUR BUSINESS.", desc: "Your AI employee works with your existing systems." },
  { num: "05", title: "WE PUT IT TO WORK.", desc: "The AI begins performing the assigned workflow." },
  { num: "06", title: "WE KEEP IMPROVING IT.", desc: "AI isn't a one-time installation. We monitor performance and identify new opportunities." }
];

export default function HowItWorksPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    return scrollYProgress.onChange((latest) => {
      const index = Math.min(Math.floor(latest * steps.length), steps.length - 1);
      setActiveIndex(index);
    });
  }, [scrollYProgress]);

  return (
    <div className="flex flex-col min-h-screen bg-dada-off-white text-dada-black" data-cursor="view">
      
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-huge uppercase tracking-tighter leading-[0.85] mb-12"
        >
          WE DON&apos;T SELL<br/>YOU AI.<br/>
          <span className="text-dada-gray">WE PUT AI TO WORK.</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-mono text-sm tracking-widest text-dada-gray uppercase mb-8 block">
            The Digital Dada Process ↓
          </span>
        </motion.div>
      </section>

      {/* Scroll-driven Steps Sequence */}
      <section ref={containerRef} className="relative h-[600vh] bg-dada-black text-white">
        <div className="sticky top-0 h-screen w-full flex flex-col items-start justify-center px-6 md:px-24 overflow-hidden">
          
          <div className="w-full relative z-10 flex flex-col h-full justify-center">
            {steps.map((step, i) => {
              const isActive = i === activeIndex;
              
              return (
                <div 
                  key={step.num}
                  className={`absolute inset-0 flex flex-col justify-center transition-all duration-1000 ease-[0.16,1,0.3,1] ${
                    isActive 
                      ? "opacity-100 scale-100 pointer-events-auto" 
                      : i < activeIndex 
                        ? "opacity-0 scale-110 pointer-events-none -translate-y-[20%]" 
                        : "opacity-0 scale-90 pointer-events-none translate-y-[20%]"
                  }`}
                >
                  <span className="font-mono text-xl tracking-widest text-dada-gray mb-8">
                    {step.num} / 06
                  </span>
                  <h2 className="font-display font-black text-5xl md:text-7xl lg:text-9xl uppercase tracking-tighter leading-[0.85] mb-12 max-w-6xl">
                    {step.title}
                  </h2>
                  <p className="text-2xl md:text-4xl font-light text-dada-off-white max-w-3xl leading-relaxed border-l-4 border-white pl-8">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Progress Indicator */}
          <div className="absolute bottom-12 left-6 md:left-24 w-[calc(100%-3rem)] md:w-[calc(100%-12rem)] h-1 bg-white/10 overflow-hidden">
            <motion.div 
              className="h-full bg-white"
              style={{ width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            />
          </div>

        </div>
      </section>

      {/* CTA section after sequence */}
      <section className="py-48 px-6 md:px-24 bg-dada-off-white flex flex-col items-center text-center">
        <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-12 max-w-4xl">
          READY TO START WITH ONE WORKFLOW?
        </h2>
        <Button href="/contact" className="bg-dada-black text-white hover:bg-dada-gray px-10 py-6 rounded-none text-sm font-bold tracking-widest uppercase">
          SEE WHAT YOUR FIRM CAN AUTOMATE →
        </Button>
      </section>

    </div>
  );
}
