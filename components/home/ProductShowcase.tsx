"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const products = [
  {
    num: "01",
    name: "RELENTLESS AI",
    title: "YOUR AI\nEXECUTIVE\nCOACH.",
    desc: "An intelligent executive-level advisor that helps business leaders analyze performance, identify opportunities, challenge assumptions, and make better decisions.",
    img: "/product-executive.png",
    bg: "bg-dada-near-black",
    textColor: "text-white"
  },
  {
    num: "02",
    name: "YOURINBOXHERO",
    title: "YOUR AI\nDOCUMENT\nCOLLECTION\nEMPLOYEE.",
    desc: "A relentless AI employee that chases clients for missing files, automatically organizes uploads, and ensures your team has everything they need to start work.",
    img: "/product-inbox.png",
    bg: "bg-dada-black",
    textColor: "text-white"
  },
  {
    num: "03",
    name: "COLLECTAI",
    title: "YOUR AI\nCOLLECTIONS\nEMPLOYEE.",
    desc: "An AI employee dedicated to following up on unpaid invoices, sending polite reminders, and managing the delicate process of getting your firm paid.",
    img: "/product-collect.png",
    bg: "bg-white",
    textColor: "text-dada-black"
  },
  {
    num: "04",
    name: "SOPBOTAI",
    title: "YOUR AI\nPROCESS\nDOCUMENTATION\nEMPLOYEE.",
    desc: "An intelligent system that watches how work gets done, writes step-by-step procedures, and instantly answers staff questions based on your firm's exact processes.",
    img: "/product-sop.png",
    bg: "bg-dada-near-black",
    textColor: "text-white"
  },
  {
    num: "05",
    name: "WORKFLOWIQ",
    title: "YOUR AI\nWORKFLOW\nANALYST.",
    desc: "An analytical AI that examines your firm's operational data, identifies bottlenecks, measures efficiency, and recommends improvements to how work flows through your team.",
    img: "/product-workflow.png",
    bg: "bg-dada-black",
    textColor: "text-white"
  }
];

export function ProductShowcase() {
  return (
    <section className="relative w-full">
      {/* Intro Section */}
      <div className="min-h-screen flex flex-col justify-center px-6 md:px-24 bg-dada-black text-white py-32">
        <h2 className="font-display font-black text-huge uppercase tracking-tighter leading-none mb-12">
          MEET YOUR AI<br/>
          WORKFORCE
        </h2>
        <p className="text-xl md:text-3xl font-light max-w-3xl leading-relaxed text-dada-gray mb-16">
          Instead of giving you another collection of disconnected AI tools, Digital Dada gives your business specialized AI capabilities designed to work together.
        </p>
      </div>

      {/* Sticky Stacking Product Sections */}
      <div className="relative">
        {products.map((product, i) => (
          <div 
            key={product.num}
            className={`sticky top-0 h-screen w-full flex items-center overflow-hidden ${product.bg} ${product.textColor}`}
            style={{ zIndex: i + 10 }}
            data-cursor="view"
          >
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-24 w-full">
              
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full h-full py-24 gap-12 relative z-20">
                {/* Left Side: Typography */}
                <div className="flex-1 flex flex-col">
                  <span className="font-mono text-sm tracking-widest mb-6 opacity-60">
                    {product.num} — {product.name}
                  </span>
                  <h3 className="font-display font-black text-display uppercase tracking-tighter leading-[0.85] mb-8 whitespace-pre-line mix-blend-difference">
                    {product.title}
                  </h3>
                  <p className="text-lg md:text-xl font-light max-w-md leading-relaxed opacity-80 mb-12 mix-blend-difference">
                    {product.desc}
                  </p>
                  <div>
                    <Button href={`/products#${product.name.toLowerCase()}`} className="bg-transparent border border-current hover:bg-current hover:text-dada-black mix-blend-difference px-8 py-4 rounded-none text-xs font-bold tracking-widest uppercase">
                      LEARN MORE →
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Right Side / Background: Image */}
              <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 flex items-center justify-center lg:justify-end z-10 pointer-events-none opacity-40 lg:opacity-100">
                <div className="relative w-[150vw] h-[150vw] md:w-[80vw] md:h-[80vw] lg:w-[50vw] lg:h-[50vw] max-w-[800px] max-h-[800px] right-[-10vw] mix-blend-normal">
                   <Image 
                     src={product.img} 
                     alt={product.name} 
                     fill 
                     className="object-contain" 
                   />
                </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
