"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "80+", label: "BUSINESSES SERVED" },
  { value: "90%", label: "RECURRING REVENUE" },
  { value: "HUNDREDS", label: "OF HOURS OF WORK AUTOMATED" }
];

export function MetricsSection() {
  return (
    <section className="bg-dada-black text-white py-32 lg:py-48 overflow-hidden" data-cursor="view">
      <div className="max-w-[100vw] mx-auto px-6 flex flex-col gap-32">
        {metrics.map((metric, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col ${i % 2 !== 0 ? "items-end text-right pr-6 lg:pr-24" : "items-start text-left pl-6 lg:pl-24"}`}
          >
            <span className="font-display font-black text-[25vw] md:text-[20vw] lg:text-[15vw] leading-[0.8] tracking-tighter">
              {metric.value}
            </span>
            <span className="font-mono text-sm md:text-base tracking-widest text-dada-gray mt-6 max-w-sm">
              {metric.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
