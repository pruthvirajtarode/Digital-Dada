"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  magnetic?: boolean;
  withArrow?: boolean;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  href,
  magnetic = true,
  withArrow = false,
  children,
  ...props
}: ButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!magnetic || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles =
    "relative inline-flex items-center justify-center font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-dada-accent text-dada-black hover:bg-[#b3e600]",
    secondary: "bg-dada-off-white text-dada-black hover:bg-white",
    outline: "border border-dada-gray text-dada-warm-white hover:bg-dada-dark-gray",
    ghost: "text-dada-warm-white hover:bg-dada-dark-gray",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-12 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  const content = (
    <>
      {children}
      {withArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <Link href={href} passHref legacyBehavior>
        <motion.a
          ref={ref as any}
          onMouseMove={handleMouse}
          onMouseLeave={reset}
          animate={{ x: position.x, y: position.y }}
          transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
          className={cn(baseStyles, variants[variant], sizes[size], className)}
          {...props as any}
        >
          {content}
        </motion.a>
      </Link>
    );
  }

  return (
    <motion.button
      ref={ref as any}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props as any}
    >
      {content}
    </motion.button>
  );
}
