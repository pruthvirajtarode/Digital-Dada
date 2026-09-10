"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutPage() {
  const containerRef = useRef(null);
  
  // Parallax for the "ZIG ZAG" section
  const { scrollYProgress: zigZagProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  
  const bgTextY = useTransform(zigZagProgress, [0, 1], ["-20%", "20%"]);
  
  // Parallax for floating gallery
  const { scrollYProgress: galleryProgress } = useScroll();

  return (
    <div className="flex flex-col min-h-screen bg-[#0f0f0f] text-white" data-cursor="view">
      
      {/* 1. Zig Zag 3D Intersecting Text Section */}
      <section ref={containerRef} className="relative h-[200vh] bg-[#0f0f0f] w-full overflow-hidden flex flex-col justify-center">
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
          
          {/* Background Text Layer */}
          <motion.div 
            style={{ y: bgTextY }}
            className="absolute inset-0 flex flex-col justify-center items-center z-0 whitespace-nowrap text-center select-none"
          >
            <h2 className="font-display font-black text-[22vw] uppercase leading-[0.85] tracking-tighter mix-blend-normal opacity-90">
              WHEN<br/>
              <span className="text-[18vw]">THE WORLD</span><br/>
              ZIGS,<br/>
              <span className="text-[20vw]">ZAG</span>
            </h2>
          </motion.div>

          {/* Center 3D Object / Image Layer */}
          <div className="relative z-10 w-[70vw] h-[70vw] md:w-[40vw] md:h-[40vw] max-w-[600px] max-h-[600px] mix-blend-normal">
            {/* We use a placeholder DIV styled to look like an intersecting object for layout proofing */}
            <div className="w-full h-full bg-gradient-to-tr from-[#3f2a1b] to-[#8a5b3a] rounded-full shadow-[0_0_100px_rgba(0,0,0,0.8)] rotate-12 flex items-center justify-center border-[8px] border-[#22150d] overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
            </div>
          </div>

          {/* Foreground Text Layer (Intersecting) */}
          <motion.div 
            style={{ y: bgTextY }}
            className="absolute inset-0 flex flex-col justify-center items-center z-20 whitespace-nowrap text-center select-none pointer-events-none"
            style={{ clipPath: 'polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)' }} // Crops the text so it appears to go behind and in front
          >
            <h2 className="font-display font-black text-[22vw] uppercase leading-[0.85] tracking-tighter mix-blend-normal">
              WHEN<br/>
              <span className="text-[18vw]">THE WORLD</span><br/>
              ZIGS,<br/>
              <span className="text-[20vw]">ZAG</span>
            </h2>
          </motion.div>

        </div>
      </section>

      {/* 2. Massive Centered Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-24 bg-[#0f0f0f] pt-32 pb-32">
        <div className="max-w-[90vw] lg:max-w-7xl mx-auto text-center flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[12vw] md:text-[10vw] uppercase tracking-tighter leading-[0.85] text-white"
          >
            WE'RE NOT<br/>
            BUILDING<br/>
            ANOTHER AI<br/>
            TOOL.
          </motion.h1>
        </div>
      </section>

      {/* 3. Centered Stacking Philosophy Text */}
      <section className="py-32 bg-[#0f0f0f] px-6 md:px-24">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <h3 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white">Start with the business problem.</h3>
            <h3 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white">Use AI where it creates an advantage.</h3>
            <h3 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white">Keep humans where humans create value.</h3>
            <h3 className="font-display font-bold text-3xl md:text-5xl tracking-tight text-white">Measure the outcome.</h3>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <p className="text-2xl md:text-4xl font-display font-bold text-white/90">We build, rebuild and reinvent workflows.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <p className="text-2xl md:text-4xl font-display font-bold text-white/80 max-w-3xl leading-snug">
              Document Collection. Invoice Collections. Executive Intelligence. Process Documentation. Everything in-between.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2 mt-8"
          >
            <p className="text-2xl md:text-4xl font-display font-bold text-white">Every workflow. Same answer.</p>
            <p className="text-2xl md:text-4xl font-display font-bold text-white">We find your efficiency.</p>
          </motion.div>

        </div>
      </section>

      {/* 4. Floating Image Gallery with Massive Background Text */}
      <section className="relative min-h-[150vh] bg-[#0f0f0f] py-48 overflow-hidden w-full">
        
        {/* Background Massive Text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <motion.h2 
            className="font-display font-black text-[18vw] uppercase leading-[0.8] tracking-tighter text-white/90 text-center whitespace-nowrap"
            style={{ y: useTransform(galleryProgress, [0, 1], ["0%", "30%"]) }}
          >
            THE AI<br/>
            WORKFORCE
          </motion.h2>
        </div>

        {/* Floating Images Container */}
        <div className="relative z-10 w-full h-[100vh] max-w-[1400px] mx-auto px-6">
          
          {/* Staggered BBH Images mimicking the screenshot layout */}
          
          <motion.div 
            className="absolute top-[10%] left-[30%] w-64 h-40 bg-[#1a1a1a] flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
            style={{ y: useTransform(galleryProgress, [0, 1], ["0%", "-50%"]) }}
          >
            <img src="https://cdn.sanity.io/images/ohqqe8j0/production/82288d8ab2b3062f3268b3e9d341fbdc608f0a3d-2785x2089.jpg?rect=85,68,2488,1860&q=100&fit=min&auto=format" alt="BBH 1983" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white/80 text-xs font-mono opacity-0 hover:opacity-100 transition-opacity">1983</div>
          </motion.div>

          <motion.div 
            className="absolute top-[5%] right-[25%] w-56 h-48 bg-[#111111] flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
            style={{ y: useTransform(galleryProgress, [0, 1], ["0%", "-80%"]) }}
          >
            <img src="https://cdn.sanity.io/images/ohqqe8j0/production/0397c50214d3f96ce5e1198b04206a68c81e8b0c-6720x4480.jpg?q=100&fit=min&auto=format" alt="BBH 1983" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white/80 text-xs font-mono opacity-0 hover:opacity-100 transition-opacity">1983</div>
          </motion.div>

          <motion.div 
            className="absolute top-[15%] right-[5%] w-72 h-44 bg-[#222222] flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
            style={{ y: useTransform(galleryProgress, [0, 1], ["0%", "-40%"]) }}
          >
            <video src="https://player.vimeo.com/progressive_redirect/playback/1151928962/rendition/540p/file.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white/80 text-xs font-mono opacity-0 hover:opacity-100 transition-opacity">1985</div>
          </motion.div>

          <motion.div 
            className="absolute bottom-[20%] left-[5%] w-72 h-48 bg-[#161616] flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
            style={{ y: useTransform(galleryProgress, [0, 1], ["0%", "-90%"]) }}
          >
             <img src="https://cdn.sanity.io/images/ohqqe8j0/production/9a0e0d4b8f8ae2874cbac78ba9ebd11f4f0b6346-4448x3096.tif?q=100&fit=min&auto=format" alt="BBH 1991" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white/80 text-xs font-mono opacity-0 hover:opacity-100 transition-opacity">1991</div>
          </motion.div>

          <motion.div 
            className="absolute bottom-[30%] left-[35%] w-80 h-56 bg-[#1f1f1f] flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
            style={{ y: useTransform(galleryProgress, [0, 1], ["0%", "-120%"]) }}
          >
             <video src="https://player.vimeo.com/progressive_redirect/playback/1158780074/rendition/540p/file.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white/80 text-xs font-mono opacity-0 hover:opacity-100 transition-opacity">1991</div>
          </motion.div>

          <motion.div 
            className="absolute bottom-[10%] right-[15%] w-60 h-64 bg-[#0a0a0a] flex items-center justify-center overflow-hidden grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
            style={{ y: useTransform(galleryProgress, [0, 1], ["0%", "-70%"]) }}
          >
             <img src="https://cdn.sanity.io/images/ohqqe8j0/production/d5a58229bf46702d8e754f87770a7be753cac85d-1200x630.png" alt="BBH 1992" className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white/80 text-xs font-mono opacity-0 hover:opacity-100 transition-opacity">1992</div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}
