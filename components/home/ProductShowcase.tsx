"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "01",
    name: "RELENTLESS AI",
    label: "Executive Coach",
    href: "/products/relentless-ai",
    image: "/product-executive.png",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-4 lg:col-start-2 mt-0",
  },
  {
    id: "02",
    name: "YOURINBOXHERO",
    label: "Document Collection",
    href: "/products/yourinboxhero",
    image: "/product-inbox.png",
    gridClass: "col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-7 mt-24 md:mt-48",
  },
  {
    id: "03",
    name: "COLLECTAI",
    label: "Collections",
    href: "/products/collectai",
    image: "/product-collect.png",
    gridClass: "col-span-12 md:col-span-8 lg:col-span-5 lg:col-start-1 mt-32 md:mt-64",
  },
  {
    id: "04",
    name: "SOPBOTAI",
    label: "Process Docs",
    href: "/products/sopbotai",
    image: "/product-sop.png",
    gridClass: "col-span-12 md:col-span-5 lg:col-span-4 lg:col-start-8 mt-24 md:mt-32",
  },
  {
    id: "05",
    name: "WORKFLOWIQ",
    label: "Workflow Analyst",
    href: "/products/workflowiq",
    image: "/product-workflow.png",
    gridClass: "col-span-12 md:col-span-7 lg:col-span-6 lg:col-start-4 mt-32 md:mt-64 mb-32",
  },
];

export function ProductShowcase() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  return (
    <section className="py-32 bg-dada-near-black text-white relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-24">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">The AI Workforce.</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl text-dada-off-white/80 max-w-2xl font-light">
            Instead of giving you another collection of disconnected software tools, we give your business specialized AI capabilities designed to do actual work.
          </p>
        </Reveal>
      </div>

      <div className="relative w-full">
        {/* Sticky Center Typography */}
        <div className="sticky top-1/2 -translate-y-1/2 w-full text-center z-20 pointer-events-none mix-blend-difference px-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: hoveredProduct ? 1 : 0.3 }}
            className="text-[12vw] md:text-[8vw] lg:text-[7vw] font-bold uppercase tracking-tighter leading-none text-white transition-opacity duration-500"
          >
            {hoveredProduct || "THE EMPLOYEES"}
          </motion.h2>
        </div>

        {/* Scattered Collage Grid */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-12 gap-6 relative z-10 collage-grid pb-32">
          {products.map((product) => (
            <Link 
              key={product.id} 
              href={product.href}
              className={`block relative group ${product.gridClass}`}
              onMouseEnter={() => setHoveredProduct(product.name)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="relative w-full aspect-[4/5] md:aspect-[3/4] overflow-hidden bg-dada-black transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={`object-cover transition-all duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100 ${
                    hoveredProduct && hoveredProduct !== product.name ? "opacity-30 grayscale blur-sm" : ""
                  }`}
                />
                
                {/* Overlay UI */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                  <span className="text-dada-accent font-mono text-sm tracking-widest mb-2 uppercase">
                    {product.id} — {product.label}
                  </span>
                  <div className="flex items-center gap-4">
                    <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </span>
                    <span className="text-white font-bold tracking-widest uppercase text-sm">View Employee</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
