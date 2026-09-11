"use client";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-off-white text-dada-black" data-cursor="view">
      <section className="min-h-screen flex flex-col px-6 md:px-24 pt-48 pb-24 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-[8vw] md:text-[6vw] uppercase tracking-tighter leading-[0.85] mb-12"
        >
          TERMS OF<br/>
          <span className="text-dada-gray">SERVICE.</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 text-lg font-light text-dada-gray leading-relaxed"
        >
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>Please read these Terms of Service carefully before using our website and services operated by Digital Dada.</p>
          <h2 className="text-2xl font-bold text-dada-black uppercase mt-8">1. Acceptance of Terms</h2>
          <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.</p>
          <h2 className="text-2xl font-bold text-dada-black uppercase mt-8">2. Services</h2>
          <p>Digital Dada provides AI workforce solutions and automation services for accounting firms. We reserve the right to modify or discontinue, temporarily or permanently, the service with or without notice.</p>
          <p className="mt-12 text-sm">For detailed terms, please contact our legal team.</p>
        </motion.div>
      </section>
    </div>
  );
}
