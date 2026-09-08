"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { Headline } from "@/components/typography/Headline";
import { Button } from "@/components/ui/Button";

const focusAreas = [
  "Client onboarding",
  "Document collection",
  "Invoice collections",
  "Workflow management",
  "SOP documentation",
  "Knowledge management",
  "Executive intelligence",
];

export function AccountingFirmsSection() {
  return (
    <section className="py-32 bg-dada-black border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-dada-accent/10 border border-dada-accent/20 rounded-full mb-8">
              <span className="w-2 h-2 rounded-full bg-dada-accent animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-dada-accent">Primary Market</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Headline text="Built for Accounting Firms" as="h2" className="text-4xl md:text-6xl font-bold mb-12" />
          </Reveal>

          <div className="space-y-6 text-2xl text-dada-off-white/70 font-light mb-12">
            <Reveal delay={0.2}>
              <p>Your firm already has the data.</p>
            </Reveal>
            <Reveal delay={0.3}>
              <p>Your firm already has the processes.</p>
            </Reveal>
            <Reveal delay={0.4}>
              <p>Your firm already has the software.</p>
            </Reveal>
            <Reveal delay={0.5}>
              <p className="text-white font-medium">The opportunity is connecting them with intelligence.</p>
            </Reveal>
          </div>

          <Reveal delay={0.6}>
            <Button href="/accounting-firms" size="lg" withArrow>
              See What Your Firm Can Automate
            </Button>
          </Reveal>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={area}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 p-6 rounded-sm hover:bg-white/10 hover:border-dada-accent/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="text-dada-accent font-mono text-sm">0{idx + 1}</span>
                  <span className="font-medium text-lg">{area}</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="absolute -z-10 w-full h-full top-0 right-0 bg-gradient-to-tr from-dada-accent/5 to-transparent blur-[100px] pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
