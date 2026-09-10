"use client";

import { motion } from "framer-motion";

const systems = [
  "QuickBooks", "CRM platforms", "Email", "SMS",
  "Document management systems", "Calendars",
  "APIs", "Internal databases", "Custom business software"
];

export function Integrations() {
  return (
    <section className="bg-white text-dada-black py-32 lg:py-48" data-cursor="explore">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="max-w-3xl mb-24">
          <h2 className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter leading-[0.9] mb-12">
            AI THAT WORKS<br/>WITH THE SYSTEMS<br/>YOU ALREADY USE.
          </h2>
          <p className="text-xl md:text-2xl font-light text-dada-gray leading-relaxed max-w-xl">
            Your business doesn&apos;t need another disconnected application. Digital Dada builds AI systems that can connect with the technology already running your business.
          </p>
        </div>

        {/* Editorial Systems Visualization */}
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {systems.map((sys, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="px-6 py-4 border border-dada-black/10 hover:border-dada-black transition-colors rounded-none bg-dada-off-white"
            >
              <span className="font-mono text-xs tracking-widest uppercase">
                {sys}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
