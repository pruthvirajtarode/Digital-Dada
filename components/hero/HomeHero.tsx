"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSafeTransform } from "@/lib/useSafeTransform"; // If needed, but maybe not for simple carousel

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
    text: (
      <>
        WE BUILD <br />
        <span className="text-dada-gray">INTELLIGENT</span> <br />
        AI SYSTEMS
      </>
    )
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop",
    text: (
      <>
        DESIGNED FOR <br />
        <span className="text-dada-gray">ACCOUNTING</span> <br />
        FIRMS
      </>
    )
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2000&auto=format&fit=crop",
    text: (
      <>
        REPLACE <br />
        <span className="text-dada-gray">REPETITIVE</span> <br />
        TASKS
      </>
    )
  }
];

export function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-dada-near-black">
      
      {/* Carousel Backgrounds */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img 
            src={slides[currentSlide].image} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center grayscale opacity-30 mix-blend-screen"
          />
        </motion.div>
      </AnimatePresence>

      {/* Massive Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center px-6 pointer-events-none z-10">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[12vw] uppercase tracking-tighter leading-[0.85] text-center text-white mix-blend-difference"
          >
            {slides[currentSlide].text}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Invisible Click Areas for Next/Prev */}
      <div className="absolute inset-0 flex z-20">
        <button 
          onClick={prevSlide}
          className="w-1/2 h-full cursor-w-resize outline-none"
          aria-label="Previous Slide"
        />
        <button 
          onClick={nextSlide}
          className="w-1/2 h-full cursor-e-resize outline-none"
          aria-label="Next Slide"
        />
      </div>

      {/* Pagination Dots (Bottom Right) */}
      <div className="absolute bottom-12 right-12 flex gap-4 z-30">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`h-2 transition-all duration-300 rounded-none bg-white ${
              currentSlide === idx ? "w-12 opacity-100" : "w-4 opacity-40 hover:opacity-80"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
