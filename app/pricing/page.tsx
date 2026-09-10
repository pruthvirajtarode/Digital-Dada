"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const plans = [
  {
    name: "AI STARTER",
    employees: "1 AI Employee",
    desc: "For firms ready to automate their first major workflow.",
    includes: [
      "AI employee",
      "Workflow analysis",
      "System integration",
      "Deployment",
      "Monitoring",
      "Support"
    ],
    cta: "GET STARTED"
  },
  {
    name: "AI GROWTH",
    employees: "3 AI Employees",
    desc: "For firms ready to automate multiple operational functions.",
    includes: [
      "3 AI employees",
      "Workflow analysis",
      "Multiple integrations",
      "AI workforce management",
      "Monitoring",
      "Ongoing optimization"
    ],
    cta: "BUILD YOUR WORKFORCE"
  },
  {
    name: "AI ENTERPRISE",
    employees: "Custom AI Workforce",
    desc: "For firms looking to fundamentally transform their operations.",
    includes: [
      "Custom AI employees",
      "Multi-agent workflows",
      "Advanced integrations",
      "Custom business intelligence",
      "Human approval systems",
      "Ongoing AI optimization"
    ],
    cta: "TALK TO US"
  }
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-black text-white" data-cursor="view">
      
      <section className="pt-48 pb-24 px-6 md:px-24">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-huge uppercase tracking-tighter leading-[0.85] mb-24 max-w-6xl"
        >
          CHOOSE YOUR<br/>
          <span className="text-dada-gray">AI WORKFORCE.</span>
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-t border-l border-white/10">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col border-b border-r border-white/10 p-12 lg:p-16 hover:bg-white/5 transition-colors group"
            >
              <h2 className="font-display font-black text-3xl md:text-5xl uppercase tracking-tighter mb-4 text-white">
                {plan.name}
              </h2>
              <span className="font-mono text-sm tracking-widest text-dada-gray uppercase mb-8 pb-8 border-b border-white/10 inline-block">
                {plan.employees}
              </span>
              <p className="text-lg font-light text-dada-off-white leading-relaxed mb-16 h-20">
                {plan.desc}
              </p>
              
              <div className="mb-24 flex-1">
                <span className="font-mono text-xs tracking-widest text-dada-gray uppercase block mb-8">Includes:</span>
                <ul className="flex flex-col gap-4">
                  {plan.includes.map(item => (
                    <li key={item} className="text-white font-light text-lg flex items-start gap-4">
                      <span className="text-dada-gray">→</span> {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button href="/contact" className="w-full bg-white text-black hover:bg-dada-gray hover:text-white px-8 py-5 rounded-none text-xs font-bold tracking-widest uppercase border-0">
                {plan.cta} →
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
