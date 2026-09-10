"use client";

import { motion } from "framer-motion";
import { ProductShowcase } from "@/components/home/ProductShowcase";

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-off-white text-dada-black" data-cursor="view">
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-huge uppercase tracking-tighter leading-[0.85] mb-12"
        >
          THE AI<br/>
          WORKFORCE.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-2xl md:text-4xl font-light text-dada-gray max-w-3xl leading-relaxed"
        >
          Specialized intelligent systems built to perform the repetitive work inside your business.
        </motion.p>
      </section>
      
      <ProductShowcase />
    </div>
  );
}
