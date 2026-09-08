"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { Headline } from "@/components/typography/Headline";
import { Button } from "@/components/ui/Button";

const products = [
  {
    id: "01",
    name: "RELENTLESS AI",
    label: "Your AI Executive Coach",
    description: "An intelligent executive-level advisor that helps business leaders analyze performance, identify opportunities, challenge assumptions, and make better decisions.",
    href: "/products/relentless-ai",
    status: "ACTIVE",
    metrics: { tasks: 42, docs: 28, received: 21 },
  },
  {
    id: "02",
    name: "YOURINBOXHERO",
    label: "Your AI Document Collection Employee",
    description: "Automatically helps collect the documents and information your firm needs from clients, reducing the endless back-and-forth that consumes employee time.",
    href: "/products/yourinboxhero",
    status: "WAITING FOR APPROVAL",
    metrics: { tasks: 124, docs: 300, received: 156 },
  },
  {
    id: "03",
    name: "COLLECTAI",
    label: "Your AI Collections Employee",
    description: "Automates invoice follow-up and collections so your team spends less time chasing money and more time serving clients.",
    href: "/products/collectai",
    status: "PROCESSING",
    metrics: { tasks: 8, docs: 0, received: 0 },
  },
  {
    id: "04",
    name: "SOPBOTAI",
    label: "Your AI Process Documentation Employee",
    description: "Turns the way your people actually work into documented, accessible business procedures.",
    href: "/products/sopbotai",
    status: "ACTIVE",
    metrics: { tasks: 12, docs: 5, received: 5 },
  },
  {
    id: "05",
    name: "WORKFLOWIQ",
    label: "Your AI Workflow Analyst",
    description: "Analyzes your business processes, identifies inefficiencies, and recommends where AI and automation can improve the way work gets done.",
    href: "/products/workflowiq",
    status: "ANALYZING",
    metrics: { tasks: 1, docs: 100, received: 100 },
  },
];

export function ProductShowcase() {
  const [activeProduct, setActiveProduct] = useState(0);

  return (
    <section className="py-32 bg-dada-black text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <Headline text="Meet Your AI Workforce" as="h2" className="text-4xl md:text-6xl font-bold mb-6" />
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xl text-dada-off-white/60 max-w-2xl mb-24">
            Instead of giving you another collection of disconnected AI tools, Digital Dada gives your business specialized AI capabilities designed to work together.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Product Navigation */}
          <div className="lg:col-span-5 flex flex-col gap-2">
            {products.map((product, idx) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(idx)}
                className={`text-left p-6 border-l-2 transition-all duration-300 group ${
                  activeProduct === idx ? "border-dada-accent bg-white/5" : "border-white/10 hover:border-white/30 hover:bg-white-[0.02]"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-sm font-mono tracking-widest ${activeProduct === idx ? "text-dada-accent" : "text-white/40"}`}>
                    PRODUCT {product.id}
                  </span>
                  {activeProduct === idx && (
                    <motion.span layoutId="activeDot" className="w-2 h-2 rounded-full bg-dada-accent" />
                  )}
                </div>
                <h3 className={`text-2xl font-bold tracking-tight mb-2 transition-colors ${
                  activeProduct === idx ? "text-white" : "text-white/60 group-hover:text-white/80"
                }`}>
                  {product.name}
                </h3>
                <p className={`text-sm transition-colors ${
                  activeProduct === idx ? "text-white/80" : "text-white/40"
                }`}>
                  {product.label}
                </p>
              </button>
            ))}
          </div>

          {/* Product Detail / Interface Simulation */}
          <div className="lg:col-span-7 bg-dada-near-black border border-white/10 rounded-lg p-8 md:p-12 relative overflow-hidden flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="flex flex-col h-full z-10 relative"
              >
                <div className="flex items-center justify-between mb-12 pb-6 border-b border-white/10">
                  <div>
                    <h4 className="text-3xl font-bold mb-2">{products[activeProduct].name}</h4>
                    <span className="text-dada-accent font-mono text-xs uppercase tracking-widest px-2 py-1 bg-dada-accent/10 rounded-sm">
                      {products[activeProduct].label}
                    </span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-white/40 uppercase tracking-widest mb-1">Status</span>
                    <span className="text-xs font-mono text-white/80 flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full ${activeProduct % 2 === 0 ? "bg-green-500 animate-pulse" : "bg-yellow-500"}`} />
                      {products[activeProduct].status}
                    </span>
                  </div>
                </div>

                <p className="text-xl leading-relaxed text-white/80 mb-12 flex-grow">
                  {products[activeProduct].description}
                </p>

                {/* Dashboard Demo Data */}
                <div className="grid grid-cols-3 gap-6 mb-12">
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-white/40 uppercase tracking-wider">Tasks Today</span>
                    <span className="text-3xl font-light font-mono">{products[activeProduct].metrics.tasks}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-white/40 uppercase tracking-wider">Docs Requested</span>
                    <span className="text-3xl font-light font-mono">{products[activeProduct].metrics.docs}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-xs text-white/40 uppercase tracking-wider">Docs Received</span>
                    <span className="text-3xl font-light font-mono text-dada-accent">{products[activeProduct].metrics.received}</span>
                  </div>
                </div>

                <div className="mt-auto">
                  <Button href={products[activeProduct].href} variant="outline" withArrow>
                    Learn More About {products[activeProduct].name}
                  </Button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Abstract Background for the card */}
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-[0.03]">
              <div className="absolute w-96 h-96 bg-dada-accent rounded-full blur-[120px] top-[-20%] right-[-10%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
