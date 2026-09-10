"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop",
    text: "WE BUILD INTELLIGENT AI SYSTEMS"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2000&auto=format&fit=crop",
    text: "DESIGNED FOR ACCOUNTING FIRMS"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1618044733300-9472054094ee?q=80&w=2000&auto=format&fit=crop",
    text: "REPLACE REPETITIVE TASKS"
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
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black flex items-center justify-center">
      
      {/* Carousel Backgrounds */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="absolute inset-0"
        >
          <img 
            src={slides[currentSlide].image} 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center grayscale opacity-60"
          />
        </motion.div>
      </AnimatePresence>

      {/* Massive Centered Text matching BBH font size and spacing */}
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-24 pointer-events-none z-10">
        <div className="text-center text-balance max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="font-display font-black text-[12vw] md:text-[8vw] uppercase tracking-tighter leading-[0.85] text-white"
            >
              {slides[currentSlide].text}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>

      {/* Invisible Click Areas for Next/Prev */}
      <div className="absolute inset-0 flex z-20">
        <button 
          onClick={prevSlide}
          className="w-1/2 h-full outline-none"
          style={{ cursor: 'url(/images/arrow-left.svg) 12 12, pointer' }}
          aria-label="Previous Slide"
        />
        <button 
          onClick={nextSlide}
          className="w-1/2 h-full outline-none"
          style={{ cursor: 'url(/images/arrow-right.svg) 12 12, pointer' }}
          aria-label="Next Slide"
        />
      </div>

      {/* Pagination Squares (Bottom Right) */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-30 px-6">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className="w-2 h-2 bg-white transition-opacity duration-150"
            style={{ opacity: currentSlide === idx ? 1 : 0.5 }}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
