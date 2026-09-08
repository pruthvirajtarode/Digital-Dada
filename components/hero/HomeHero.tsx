"use client";

import { motion } from "framer-motion";
import { Headline } from "@/components/typography/Headline";
import { Button } from "@/components/ui/Button";

export function HomeHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
      {/* Abstract Background Node Visualization */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-end overflow-hidden right-[-20%]">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="w-[800px] h-[800px] border-2 border-white/20 rounded-full border-dashed opacity-40"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.1, 1] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute w-[600px] h-[600px] border border-dada-accent/30 rounded-full opacity-60"
        />
        <div className="absolute w-[800px] h-[800px] bg-dada-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-8 flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-dada-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-dada-accent"></span>
              </span>
              <span className="text-xs font-bold tracking-widest uppercase text-dada-accent">
                Dada Signal Active
              </span>
            </div>
          </motion.div>

          <Headline
            text="Build Your AI Workforce."
            as="h1"
            className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-dada-off-white/80 max-w-2xl leading-relaxed mb-6"
          >
            AI employees that handle the repetitive work inside your accounting firm—so your people can focus on the work that actually requires people.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base text-dada-off-white/60 max-w-2xl mb-12"
          >
            Digital Dada builds, deploys, and manages intelligent AI systems that can collect documents, pursue unpaid invoices, document processes, analyze workflows, and help executives make better decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Button href="/contact" size="lg" withArrow>
              See What Your Firm Can Automate
            </Button>
            <span className="text-sm text-dada-off-white/40">
              Built for accounting firms. Powered by Dada AI.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
