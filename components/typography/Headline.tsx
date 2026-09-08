"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HeadlineProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  delay?: number;
}

export function Headline({ text, className, as: Component = "h2", delay = 0 }: HeadlineProps) {
  // Split words to animate them individually
  const words = text.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay * 0.1 },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={cn("flex flex-wrap", className)}
    >
      {/* We use a span as an intermediate wrapper if Component is not a display block, but motion component maps correctly */}
      <Component className={cn("flex flex-wrap m-0 p-0 w-full", className)}>
        {words.map((word, idx) => (
          <motion.span
            variants={child}
            key={idx}
            className="mr-[0.25em] inline-block"
          >
            {word}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
}
