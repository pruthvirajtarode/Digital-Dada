"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { useSafeTransform } from "@/lib/useSafeTransform";

const tasks = [
  { text: "Chasing clients for documents", top: "20%", left: "10%" },
  { text: "Following up on unpaid invoices", top: "40%", left: "55%" },
  { text: "Repeating the same instructions", top: "60%", left: "15%" },
  { text: "Searching for information", top: "75%", left: "50%" },
  { text: "Training employees on procedures", top: "25%", left: "60%" },
  { text: "Managing repetitive workflows", top: "85%", left: "20%" },
];

export function ProblemSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Intro Fades
  const introOpacity = useSafeTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const introY = useSafeTransform(scrollYProgress, [0, 0.25], ["0%", "-50%"]);

  // Tasks Fade In/Out
  // Each task appears sequentially between 0.3 and 0.7, then all fade out at 0.75
  const tasksOpacity = useSafeTransform(scrollYProgress, [0.25, 0.3, 0.7, 0.75], [0, 1, 1, 0]);

  // Outro Fades
  const outroOpacity = useSafeTransform(scrollYProgress, [0.75, 0.85, 1], [0, 1, 1]);
  const outroScale = useSafeTransform(scrollYProgress, [0.75, 0.85, 1], [0.8, 1, 1]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-dada-off-white text-dada-black" data-cursor="view">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">
        
        {/* Intro */}
        <motion.div 
          style={{ opacity: introOpacity, y: introY }}
          className="absolute inset-0 flex flex-col justify-center px-6 md:px-24 w-full"
        >
          <h2 className="font-display font-black text-6xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-none mb-12 max-w-5xl">
            YOUR NEXT EMPLOYEES DON&apos;T NEED DESKS.
          </h2>
          <p className="text-xl md:text-3xl font-light max-w-3xl leading-relaxed text-dada-gray">
            Every accounting firm has work that consumes valuable employee time:
          </p>
        </motion.div>

        {/* Floating Tasks Container */}
        <motion.div 
          style={{ opacity: tasksOpacity }}
          className="absolute inset-0 z-10 pointer-events-none"
        >
          {tasks.map((task, idx) => {
            // Calculate individual task timing based on idx
            const startFadeIn = 0.3 + (idx * 0.05);
            const endFadeIn = startFadeIn + 0.05;
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const itemOpacity = useSafeTransform(
              scrollYProgress, 
              [startFadeIn, endFadeIn], 
              [0, 1]
            );
            
            // eslint-disable-next-line react-hooks/rules-of-hooks
            const itemY = useSafeTransform(
              scrollYProgress, 
              [startFadeIn, endFadeIn], 
              ["50px", "0px"]
            );

            return (
              <motion.div
                key={idx}
                style={{ 
                  opacity: itemOpacity,
                  y: itemY,
                  top: task.top,
                  left: task.left
                }}
                className="absolute font-display font-black text-3xl md:text-5xl lg:text-7xl uppercase tracking-tighter text-dada-black max-w-lg leading-[0.9]"
              >
                {task.text}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Outro */}
        <motion.div 
          style={{ opacity: outroOpacity, scale: outroScale }}
          className="absolute inset-0 z-20 flex flex-col justify-center items-center px-6 md:px-24 w-full text-center bg-dada-black text-white"
        >
          <p className="text-xl md:text-2xl font-light text-dada-gray mb-12">
            That work doesn&apos;t necessarily need another employee.
          </p>
          <h2 className="font-display font-black text-huge uppercase tracking-tighter leading-[0.8] mb-12">
            IT MAY NEED<br/>
            <span className="text-dada-gray">AN AI</span><br/>
            EMPLOYEE.
          </h2>
          <p className="text-sm md:text-base font-sans max-w-2xl text-dada-gray leading-relaxed uppercase tracking-widest">
            Digital Dada identifies the work, builds the AI system, connects it to your existing technology, and puts it to work.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
