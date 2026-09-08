"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { Headline } from "@/components/typography/Headline";

const metrics = [
  { value: "80+", label: "Businesses Served" },
  { value: "90%", label: "Recurring Revenue" },
  { value: "Hundreds", label: "of Hours of Work Automated" },
];

export function MetricsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 bg-dada-accent text-dada-black" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <Reveal>
            <Headline 
              text="What Could Your Firm Do With Hundreds of Hours Back?" 
              as="h2" 
              className="text-4xl md:text-6xl font-bold tracking-tight text-center justify-center mb-6" 
            />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-black/10">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center text-center pt-12 md:pt-0">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4"
              >
                {metric.value}
              </motion.div>
              <Reveal delay={idx * 0.2 + 0.3}>
                <p className="text-xl md:text-2xl font-medium tracking-tight uppercase">
                  {metric.label}
                </p>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
