"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function GlobalCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorText, setCursorText] = useState("");

  useEffect(() => {
    // Only run on desktop
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const cursorElement = target.closest('[data-cursor]');
      
      if (cursorElement) {
        const variant = cursorElement.getAttribute('data-cursor') || "default";
        const text = cursorElement.getAttribute('data-cursor-text') || "";
        setCursorVariant(variant);
        setCursorText(text);
      } else if (target.closest('a') || target.closest('button')) {
        setCursorVariant("link");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };
    
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: { 
      x: mousePosition.x - 6, 
      y: mousePosition.y - 6, 
      height: 12, 
      width: 12,
      backgroundColor: "#ccff00",
      mixBlendMode: "difference" as any,
      border: "0px solid transparent"
    },
    link: { 
      x: mousePosition.x - 24, 
      y: mousePosition.y - 24, 
      height: 48, 
      width: 48,
      backgroundColor: "transparent",
      border: "1px solid #ccff00",
      mixBlendMode: "normal" as any
    },
    explore: {
      x: mousePosition.x - 40, 
      y: mousePosition.y - 40, 
      height: 80, 
      width: 80,
      backgroundColor: "#ccff00",
      mixBlendMode: "normal" as any,
      border: "0px solid transparent"
    }
  };

  // Do not render on mobile to save performance
  if (typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches) return null;

  return (
    <motion.div
      variants={variants}
      animate={cursorVariant}
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:flex items-center justify-center text-black font-bold text-[10px] tracking-widest uppercase"
      transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.5 }}
    >
      <AnimatePresence>
        {cursorText && (
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }} 
            exit={{ opacity: 0, scale: 0.5 }}
          >
            {cursorText}
          </motion.span>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
