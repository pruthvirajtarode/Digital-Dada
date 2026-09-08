"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
      animate={{ opacity: 1, clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}
