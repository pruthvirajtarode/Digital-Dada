"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const solutions = [
  { name: "Accounting Firms", desc: "Automate collections, onboarding, and SOPs.", link: "/accounting-firms" },
  { name: "Executive Intelligence", desc: "Real-time AI advising for business leaders.", link: "/products/relentless-ai" },
  { name: "Workflow Analysis", desc: "Discover bottlenecks and inefficiencies across your organization.", link: "/products/workflowiq" },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-black text-white" data-cursor="view">
      
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-[12vw] uppercase tracking-tighter leading-[0.85] mb-24"
        >
          SOLUTIONS.
        </motion.h1>

        <div className="max-w-7xl w-full border-t border-white/10">
          {solutions.map((sol, i) => (
            <motion.div 
              key={sol.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col md:flex-row items-baseline justify-between py-12 border-b border-white/10 hover:bg-white/5 transition-colors group px-6"
            >
              <div className="flex flex-col md:w-2/3">
                <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-4 text-white">
                  {sol.name}
                </h2>
                <p className="text-xl font-light text-dada-off-white leading-relaxed">
                  {sol.desc}
                </p>
              </div>
              <div className="mt-8 md:mt-0">
                <Button href={sol.link} className="bg-white text-black hover:bg-dada-gray hover:text-white px-8 py-5 rounded-none text-xs font-bold tracking-widest uppercase border-0">
                  VIEW SOLUTION →
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
