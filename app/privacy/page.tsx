"use client";
import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-off-white text-dada-black" data-cursor="view">
      <section className="min-h-screen flex flex-col px-6 md:px-24 pt-48 pb-24 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-[8vw] md:text-[6vw] uppercase tracking-tighter leading-[0.85] mb-12"
        >
          PRIVACY<br/>
          <span className="text-dada-gray">POLICY.</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 text-lg font-light text-dada-gray leading-relaxed"
        >
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>Digital Dada ("we", "our", or "us") respects your privacy and is committed to protecting it through our compliance with this policy.</p>
          <h2 className="text-2xl font-bold text-dada-black uppercase mt-8">1. Information We Collect</h2>
          <p>We may collect personal information that you provide directly to us, such as when you fill out an assessment form, request support, or communicate with us.</p>
          <h2 className="text-2xl font-bold text-dada-black uppercase mt-8">2. How We Use Information</h2>
          <p>We use the information we collect to provide, maintain, and improve our services, as well as to communicate with you regarding your AI workforce deployments.</p>
          <p className="mt-12 text-sm">For our full privacy policy, please contact our privacy officer.</p>
        </motion.div>
      </section>
    </div>
  );
}
