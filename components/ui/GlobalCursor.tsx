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
      x: mousePosition.x - 4, 
      y: mousePosition.y - 4, 
      height: 8, 
      width: 8,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference" as any,
      border: "0px solid transparent"
    },
    link: { 
      x: mousePosition.x - 16, 
      y: mousePosition.y - 16, 
      height: 32, 
      width: 32,
      backgroundColor: "transparent",
      border: "1px solid rgba(255, 255, 255, 0.5)",
      mixBlendMode: "difference" as any
    },
    explore: {
      x: mousePosition.x - 32, 
      y: mousePosition.y - 32, 
      height: 64, 
      width: 64,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference" as any,
      border: "0px solid transparent"
    },
    view: {
      x: mousePosition.x - 32, 
      y: mousePosition.y - 32, 
      height: 64, 
      width: 64,
      backgroundColor: "#ffffff",
      mixBlendMode: "difference" as any,
      border: "0px solid transparent"
    }
  };

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
