"use client";
import { motion } from "framer-motion";

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-off-white text-dada-black" data-cursor="view">
      <section className="min-h-screen flex flex-col px-6 md:px-24 pt-48 pb-24 max-w-4xl">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-[8vw] md:text-[6vw] uppercase tracking-tighter leading-[0.85] mb-12"
        >
          COOKIE<br/>
          <span className="text-dada-gray">POLICY.</span>
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 text-lg font-light text-dada-gray leading-relaxed"
        >
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          <p>This Cookie Policy explains how Digital Dada uses cookies and similar technologies to recognize you when you visit our website.</p>
          <h2 className="text-2xl font-bold text-dada-black uppercase mt-8">What are cookies?</h2>
          <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website. They are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.</p>
          <h2 className="text-2xl font-bold text-dada-black uppercase mt-8">How we use cookies</h2>
          <p>We use essential cookies to make our site work. We may also use non-essential cookies to improve user experience and analyze website traffic.</p>
        </motion.div>
      </section>
    </div>
  );
}
