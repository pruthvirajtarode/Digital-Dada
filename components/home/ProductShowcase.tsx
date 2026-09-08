"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "01",
    name: "RELENTLESS AI",
    label: "Your AI Executive Coach",
    desc: "Provides real-time strategic insights, processes complex business data, and flags operational bottlenecks before they become critical.",
    workflow: "DATA → DECISION → ACTION",
    href: "/products/relentless-ai",
    image: "/product-executive.png",
  },
  {
    id: "02",
    name: "YOURINBOXHERO",
    label: "Your AI Document Collection Employee",
    desc: "Relentlessly chases clients for missing documents, verifies uploads, and organizes files automatically without human intervention.",
    workflow: "REQUEST → CLIENT UPLOAD → VERIFIED",
    href: "/products/yourinboxhero",
    image: "/product-inbox.png",
  },
  {
    id: "03",
    name: "COLLECTAI",
    label: "Your AI Collections Employee",
    desc: "Manages accounts receivable with perfect consistency, sending perfectly timed follow-ups and processing payments autonomously.",
    workflow: "INVOICE → REMINDER → PAYMENT",
    href: "/products/collectai",
    image: "/product-collect.png",
  },
  {
    id: "04",
    name: "SOPBOTAI",
    label: "Your AI Process Documentation Employee",
    desc: "Observes how your top performers work and automatically generates flawless, continuously updated Standard Operating Procedures.",
    workflow: "OBSERVATION → PROCESS → SOP",
    href: "/products/sopbotai",
    image: "/product-sop.png",
  },
  {
    id: "05",
    name: "WORKFLOWIQ",
    label: "Your AI Workflow Analyst",
    desc: "Analyzes every step of your firm's internal operations to identify precise inefficiencies and recommend immediate automation opportunities.",
    workflow: "BOTTLENECK → ANALYSIS → OPPORTUNITY",
    href: "/products/workflowiq",
    image: "/product-workflow.png",
  },
];

export function ProductShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={containerRef} className="relative h-[500vh] bg-dada-near-black">
      
      {/* Intro Overlay Text */}
      <div className="absolute top-10 left-6 lg:left-16 z-50 pointer-events-none">
        <h2 className="text-2xl md:text-4xl font-bold tracking-widest uppercase text-white mix-blend-difference">
          MEET YOUR AI WORKFORCE.
        </h2>
      </div>

      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center bg-dada-black">
        <motion.div style={{ x }} className="flex h-full w-[500vw]">
          
          {products.map((product, i) => (
            <div key={product.id} className="relative w-[100vw] h-full flex flex-col lg:flex-row items-center justify-center p-6 lg:p-24 group">
              
              {/* Product Info (Left) */}
              <div className="w-full lg:w-1/2 flex flex-col justify-center z-20 pr-0 lg:pr-12">
                <span className="text-dada-accent font-mono text-xl md:text-2xl tracking-widest mb-4 block">
                  {product.id}
                </span>
                <h3 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-none text-white mb-6 uppercase">
                  {product.name}
                </h3>
                <h4 className="text-2xl md:text-4xl text-dada-off-white/80 font-light mb-8">
                  {product.label}
                </h4>
                <p className="text-lg md:text-xl text-dada-off-white/60 mb-12 max-w-xl leading-relaxed">
                  {product.desc}
                </p>

                <div className="flex flex-col gap-8">
                  <div className="inline-block px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-sm w-fit font-mono text-xs tracking-widest text-dada-accent uppercase">
                    {product.workflow}
                  </div>
                  
                  <Link href={product.href} className="flex items-center gap-4 group/link w-fit" data-cursor="explore">
                    <span className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white group-hover/link:bg-white group-hover/link:text-black transition-all">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                    </span>
                    <span className="text-white font-bold tracking-widest uppercase text-sm group-hover/link:text-dada-accent transition-colors">
                      Learn More
                    </span>
                  </Link>
                </div>
              </div>

              {/* Product Visual (Right) */}
              <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative flex items-center justify-center pointer-events-none">
                {/* Visual hover effect - slight scale and float */}
                <div className="relative w-full h-full max-w-[800px] max-h-[800px] transition-transform duration-1000 group-hover:scale-105 group-hover:-translate-y-4">
                  <Image 
                    src={product.image} 
                    alt={product.name} 
                    fill 
                    className="object-contain mix-blend-screen"
                  />
                </div>
                {/* Hover Metadata */}
                <div className="absolute bottom-10 right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 font-mono text-xs text-dada-accent text-right tracking-widest uppercase hidden lg:block">
                  <p>AI EMPLOYEE ACTIVE</p>
                  <p>TASKS: {24 + i * 13}</p>
                  <p>WORKFLOWS: 0{i + 3}</p>
                </div>
              </div>

            </div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
