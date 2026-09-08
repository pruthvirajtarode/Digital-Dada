"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Headline } from "@/components/typography/Headline";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const repetitiveTasks = [
  "Chasing clients for documents",
  "Following up on unpaid invoices",
  "Repeating the same instructions",
  "Searching for information",
  "Training employees on procedures",
  "Managing repetitive administrative workflows",
  "Answering questions that have already been answered",
  "Finding inefficiencies in the way work gets done",
];

export function ProblemSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-32 bg-dada-near-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <Reveal>
          <Headline
            text="Your Next Employees Don’t Need Desks."
            as="h2"
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-16"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <Reveal delay={0.2}>
              <p className="text-xl text-dada-off-white/80 mb-8 font-medium">
                The repetitive work accounting firms deal with every day:
              </p>
            </Reveal>
            <ul className="space-y-4">
              {repetitiveTasks.map((task, idx) => (
                <Reveal key={idx} delay={0.1 * idx}>
                  <li className="flex items-start gap-4 text-dada-off-white/60 text-lg group">
                    <span className="w-1.5 h-1.5 bg-white/20 mt-2.5 rounded-full group-hover:bg-dada-accent transition-colors" />
                    <span className="group-hover:text-white transition-colors">{task}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-center">
            <Reveal delay={0.4}>
              <p className="text-2xl text-dada-off-white/80 leading-relaxed mb-12">
                That work doesn’t necessarily need another employee.
              </p>
            </Reveal>
            
            <motion.div style={{ y, opacity }} className="py-12 border-l-4 border-dada-accent pl-8 my-8">
              <h3 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
                It may need an <br/><span className="text-dada-accent">AI employee.</span>
              </h3>
            </motion.div>

            <Reveal delay={0.6}>
              <p className="text-xl text-dada-off-white/60 leading-relaxed">
                Digital Dada identifies the work, builds the AI system, connects it to your existing technology, and puts it to work.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
      
      {/* Background typographic noise */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 opacity-[0.05] pointer-events-none whitespace-nowrap font-bold text-[20vw] leading-none overflow-hidden uppercase text-white">
        Repetition Elimination
      </div>
    </section>
  );
}
