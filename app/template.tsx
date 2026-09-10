"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: "inset(10% 0% 10% 0%)", scale: 0.98 }}
      animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)", scale: 1 }}
      exit={{ opacity: 0, clipPath: "inset(0% 0% 10% 0%)", scale: 0.98 }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
