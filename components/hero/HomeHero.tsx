"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/images/hero_1.png",
    text: "WE BUILD INTELLIGENT AI SYSTEMS"
  },
  {
    id: 2,
    image: "/images/hero_2.png",
    text: "DESIGNED FOR ACCOUNTING FIRMS"
  },
  {
    id: 3,
    image: "/images/hero_3.png",
    text: "REPLACE REPETITIVE TASKS"
  },
  {
    id: 4,
    image: "/images/hero_4.png",
    text: "SCALE WITHOUT LIMITS"
  }
];

// Helper to render letter-by-letter blur hover effect (BBH signature effect)
function BlurText({ text }: { text: string }) {
  const chars = text.split("");
  return (
    <div className="flex flex-wrap justify-center">
      {chars.map((char, index) => (
        <span key={index} className="relative inline-block group mx-[-0.02em]">
          <span className="relative transition-opacity duration-150 group-hover:opacity-0">{char === " " ? "\u00A0" : char}</span>
          {char !== " " && (
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-75 opacity-0 blur-[2px] group-hover:opacity-100 group-hover:blur-none">
              {char}
            </span>
          )}
        </span>
      ))}
    </div>
  );
}

export function HomeHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] overflow-hidden bg-black flex items-center justify-center">
      
      {/* Carousel Image Backgrounds with Ken Burns zoom effect */}
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "linear" }}
          className="absolute inset-0"
        >
          <motion.img 
            src={slides[currentSlide].image} 
            alt="Hero Background"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            className="w-full h-full object-cover object-center grayscale opacity-80"
          />
        </motion.div>
      </AnimatePresence>

      {/* Massive Centered Text mimicking BBH's blur typography exactly */}
      <div className="absolute inset-0 flex items-center justify-center px-6 md:px-12 pointer-events-auto z-10 mix-blend-difference">
        <div className="text-center text-balance w-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="font-display uppercase text-white leading-[0.8] cursor-default"
              style={{ fontSize: "clamp(40px, 11vw, 200px)" }}
            >
              <BlurText text={slides[currentSlide].text} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Invisible Click Areas for Next/Prev */}
      <div className="absolute inset-0 flex z-20 pointer-events-auto mix-blend-normal">
        <button 
          onClick={prevSlide}
          className="w-1/2 h-full outline-none bg-transparent"
          style={{ cursor: 'url(/images/arrow-left.svg) 12 12, pointer' }}
          aria-label="Previous Slide"
        />
        <button 
          onClick={nextSlide}
          className="w-1/2 h-full outline-none bg-transparent"
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
