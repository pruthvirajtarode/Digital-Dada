"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: "80+", label: "Businesses Served" },
  { value: "90%", label: "Recurring Revenue" },
  { value: "500+", label: "Hours Automated" },
];

export function MetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-dada-near-black text-white relative overflow-hidden" ref={ref}>
      {/* Background Graphic */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10 flex items-center justify-center">
        <h2 className="text-[30vw] font-black tracking-tighter text-white whitespace-nowrap mix-blend-overlay">
          METRICS
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tighter leading-[0.9] uppercase text-dada-off-white/80">
            What Could Your Firm Do With <span className="text-dada-accent">Hundreds</span> of Hours Back?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center pt-16 md:pt-0 group">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: idx * 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="text-7xl md:text-8xl lg:text-[8rem] font-black tracking-tighter mb-6 text-white group-hover:text-dada-accent transition-colors duration-500"
              >
                {metric.value}
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 1, delay: idx * 0.2 + 0.4 }}
              >
                <p className="text-xl md:text-2xl font-mono tracking-widest uppercase text-white/50">
                  {metric.label}
                </p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
