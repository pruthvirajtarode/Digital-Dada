"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useSafeTransform } from "@/lib/useSafeTransform";
import { useRef } from "react";
import Image from "next/image";

const tasks = [
  { text: "DOCUMENTS", top: "10%", left: "10%" },
  { text: "FOLLOW-UPS", top: "20%", left: "70%" },
  { text: "DATA ENTRY", top: "70%", left: "15%" },
  { text: "STATUS CHECKS", top: "80%", left: "65%" },
  { text: "EMAIL", top: "40%", left: "80%" },
  { text: "REPORTING", top: "50%", left: "5%" },
];

function TaskItem({ task, scrollYProgress, tasksOpacity, tasksScale }: { task: any, scrollYProgress: MotionValue<number>, tasksOpacity: MotionValue<number>, tasksScale: MotionValue<number> }) {
  const xOffset = useSafeTransform(scrollYProgress, [0.5, 0.7], ["0px", task.left.startsWith("7") || task.left.startsWith("8") ? "-20vw" : "20vw"]);
  const yOffset = useSafeTransform(scrollYProgress, [0.5, 0.7], ["0px", task.top.startsWith("1") || task.top.startsWith("2") ? "20vh" : "-20vh"]);
  
  return (
    <motion.div
      style={{ 
        opacity: tasksOpacity, 
        scale: tasksScale,
        x: xOffset,
        y: yOffset,
        position: "absolute",
        top: task.top,
        left: task.left
      }}
      className="px-4 py-2 border border-white/20 bg-black/50 backdrop-blur-md text-white/80 font-mono text-xs md:text-sm tracking-widest rounded-sm"
    >
      {task.text}
    </motion.div>
  );
}

export function ProblemSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Animation values
  // Phase 1: Object enters (0 - 0.2)
  const objectScale = useSafeTransform(scrollYProgress, [0, 0.2, 0.7, 0.9], [0, 1, 1, 1.5]);
  const objectOpacity = useSafeTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  // Phase 2: Tasks appear (0.3 - 0.5)
  const tasksOpacity = useSafeTransform(scrollYProgress, [0.2, 0.3, 0.6, 0.7], [0, 1, 1, 0]);
  const tasksScale = useSafeTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0.8, 1, 1, 0]);
  
  // Phase 3: Consolidation text appears (0.7 - 0.9)
  const finalOpacity = useSafeTransform(scrollYProgress, [0.7, 0.8], [0, 1]);
  const finalScale = useSafeTransform(scrollYProgress, [0.7, 0.9], [0.8, 1]);

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-dada-near-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center p-6">
        
        {/* Headline */}
        <div className="absolute top-20 left-6 lg:left-16 z-20">
          <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tighter leading-[0.9] text-white">
            YOUR NEXT<br/>
            EMPLOYEES<br/>
            DON&apos;T NEED<br/>
            <span className="text-dada-accent">DESKS.</span>
          </h2>
        </div>

        {/* The AI Object */}
        <motion.div 
          style={{ scale: objectScale, opacity: objectOpacity }}
          className="relative z-10 w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] max-w-[500px] max-h-[500px]"
        >
          <Image src="/product-executive.png" alt="AI Employee" fill className="object-contain mix-blend-screen" />
        </motion.div>

        {/* The Repetitive Tasks */}
        <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
          {tasks.map((task, i) => (
            <TaskItem key={i} task={task} scrollYProgress={scrollYProgress} tasksOpacity={tasksOpacity} tasksScale={tasksScale} />
          ))}
        </div>

        {/* Final Consolidated State */}
        <motion.div 
          style={{ opacity: finalOpacity, scale: finalScale }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none mix-blend-difference"
        >
          <h3 className="text-[10vw] md:text-[8vw] font-bold tracking-tighter leading-none text-white text-center">
            ONE<br/>
            INTELLIGENT<br/>
            SYSTEM
          </h3>
        </motion.div>

      </div>
    </section>
  );
}
