"use client";

import { useState } from "react";
import { Reveal } from "@/components/animations/Reveal";
import { motion, AnimatePresence } from "framer-motion";

export function CtaSection() {
  const [formState, setFormState] = useState<"idle" | "analyzing" | "identifying" | "ready">("idle");
  const [inputValue, setInputValue] = useState("");

  const handleAssessment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue) return;

    setFormState("analyzing");
    setTimeout(() => {
      setFormState("identifying");
      setTimeout(() => {
        setFormState("ready");
      }, 1500);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen py-32 bg-dada-black flex items-center justify-center overflow-hidden border-t border-white/5">
      {/* Background Graphic */}
      <div className="absolute inset-0 bg-dada-accent/5 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      <div className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-dada-accent/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full">
        <div className="text-center mb-16">
          <Reveal>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter uppercase text-white mb-6">
              START YOUR <span className="text-dada-accent">ASSESSMENT.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-dada-off-white/70 font-light max-w-2xl mx-auto">
              Tell us what your employees spend too much time doing. Our system will analyze the workflow for automation viability.
            </p>
          </Reveal>
        </div>

        <div className="bg-dada-near-black border border-white/10 p-1 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="bg-dada-black border border-white/5 p-8 md:p-16 relative z-10">
            <AnimatePresence mode="wait">
              {formState === "idle" && (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleAssessment}
                  className="flex flex-col gap-8"
                >
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono tracking-widest text-dada-accent uppercase">Describe the Repetitive Work</label>
                    <textarea 
                      required
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="e.g., We spend 15 hours a week chasing clients for missing tax documents, downloading them from email, renaming them, and uploading them to our document management system..."
                      className="w-full h-32 bg-transparent border-b border-white/20 focus:border-dada-accent outline-none resize-none text-xl md:text-2xl text-white font-light placeholder:text-white/20 transition-colors pt-2"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="self-end px-8 py-4 bg-white text-black font-bold tracking-widest uppercase text-sm hover:bg-dada-accent transition-colors"
                  >
                    Run Analysis
                  </button>
                </motion.form>
              )}

              {formState === "analyzing" && (
                <motion.div 
                  key="analyzing"
                  initial={{ opacity: 0, scale: 0.95 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, filter: "blur(10px)" }}
                  className="flex flex-col items-center justify-center h-48 text-center"
                >
                  <div className="w-12 h-12 border border-dada-accent rounded-full animate-spin mb-6 flex items-center justify-center">
                    <div className="w-2 h-2 bg-dada-accent rounded-full animate-ping" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-mono tracking-widest text-dada-accent uppercase animate-pulse">
                    Analyzing Workflow...
                  </h3>
                </motion.div>
              )}

              {formState === "identifying" && (
                <motion.div 
                  key="identifying"
                  initial={{ opacity: 0, filter: "blur(10px)" }} 
                  animate={{ opacity: 1, filter: "blur(0px)" }} 
                  exit={{ opacity: 0, y: -20 }}
                  className="flex flex-col items-center justify-center h-48 text-center"
                >
                  <div className="w-full max-w-sm h-1 bg-white/10 rounded-full mb-6 overflow-hidden">
                    <motion.div 
                      initial={{ width: "0%" }} 
                      animate={{ width: "100%" }} 
                      transition={{ duration: 1.5, ease: "linear" }}
                      className="h-full bg-dada-accent"
                    />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-mono tracking-widest text-white uppercase">
                    Identifying Robotic Tasks...
                  </h3>
                  <p className="text-white/50 font-mono text-sm mt-4 uppercase tracking-widest">
                    Cross-referencing Digital Dada Capabilities
                  </p>
                </motion.div>
              )}

              {formState === "ready" && (
                <motion.div 
                  key="ready"
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  className="flex flex-col items-center justify-center text-center"
                >
                  <div className="w-16 h-16 bg-dada-accent rounded-full flex items-center justify-center text-black mb-8">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tighter text-white uppercase mb-4">
                    Automation Viable.
                  </h3>
                  <p className="text-lg md:text-xl text-dada-off-white/70 font-light mb-8 max-w-lg">
                    This workflow can be executed by a Digital Dada AI Employee. Schedule a technical review to see the architecture.
                  </p>
                  <a href="mailto:hello@digitaldada.ai" className="px-8 py-4 bg-white text-black font-bold tracking-widest uppercase text-sm hover:bg-dada-accent transition-colors">
                    Schedule Technical Review
                  </a>
                  <button 
                    onClick={() => setFormState("idle")} 
                    className="mt-6 text-xs font-mono tracking-widest uppercase text-white/50 hover:text-white transition-colors"
                  >
                    Reset Analysis
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
