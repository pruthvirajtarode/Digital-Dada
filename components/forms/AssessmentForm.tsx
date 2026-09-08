"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";

const questions = [
  {
    id: "businessType",
    title: "What type of business are you?",
    options: ["Accounting Firm", "Bookkeeping Firm", "Tax Practice", "CFO / Advisory Firm", "Other"],
  },
  {
    id: "timeConsumingWork",
    title: "What work consumes the most employee time?",
    options: [
      "Document collection", "Invoice collections", "Client onboarding", 
      "Data entry", "Workflow management", "Reporting", 
      "SOP documentation", "Email follow-up", "Other"
    ],
  },
  {
    id: "employeesInvolved",
    title: "How many employees are involved?",
    options: ["1–5", "6–20", "21–50", "51–100", "100+"],
  },
  {
    id: "frequency",
    title: "How often does this work happen?",
    options: ["Daily", "Weekly", "Monthly", "Continuously", "Other"],
  }
];

export function AssessmentForm() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const handleSelect = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
    nextStep();
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, questions.length + 2));
  const prevStep = () => setStep((s) => Math.max(s - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setStep(questions.length + 2); // Move to final summary screen
    }, 1500);
  };

  const getRecommendation = () => {
    const work = formData.timeConsumingWork || "";
    if (work.includes("Document")) return { ai: "YourInboxHero", impact: "High", nextStep: "Workflow Discovery" };
    if (work.includes("Invoice")) return { ai: "CollectAI", impact: "High", nextStep: "Workflow Discovery" };
    if (work.includes("SOP")) return { ai: "SOPBotAI", impact: "Medium", nextStep: "Process Analysis" };
    return { ai: "WorkflowIQ", impact: "High", nextStep: "Workflow Discovery" };
  };

  return (
    <div className="w-full max-w-2xl mx-auto min-h-[500px] relative flex flex-col justify-center">
      {/* Progress indicator */}
      {step < questions.length + 2 && (
        <div className="mb-12 flex gap-2">
          {Array.from({ length: questions.length + 2 }).map((_, i) => (
            <div key={i} className="h-1 flex-grow bg-white/10 relative overflow-hidden rounded-full">
              {i <= step && (
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: i < step ? "100%" : "50%" }}
                  className="absolute top-0 left-0 h-full bg-dada-accent" 
                />
              )}
            </div>
          ))}
        </div>
      )}

      <AnimatePresence mode="wait">
        {step < questions.length && (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              {questions[step].title}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions[step].options.map((opt) => (
                <button
                  key={opt}
                  onClick={() => handleSelect(questions[step].id, opt)}
                  className="p-4 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-dada-accent text-left transition-colors rounded-sm group text-dada-off-white"
                >
                  <span className="group-hover:text-white group-hover:translate-x-1 inline-block transition-transform">
                    {opt}
                  </span>
                </button>
              ))}
            </div>
            {step > 0 && (
               <button onClick={prevStep} className="text-sm text-white/40 hover:text-white self-start">← Back</button>
            )}
          </motion.div>
        )}

        {step === questions.length && (
          <motion.div
            key="workflow-desc"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Describe the workflow.
            </h2>
            <textarea
              className="w-full h-40 bg-dada-black border border-white/20 rounded-sm p-4 text-white focus:outline-none focus:border-dada-accent resize-none"
              placeholder="Briefly explain what happens today..."
              value={formData.workflowDesc || ""}
              onChange={(e) => setFormData({ ...formData, workflowDesc: e.target.value })}
            />
            <div className="flex items-center justify-between">
              <button onClick={prevStep} className="text-sm text-white/40 hover:text-white">← Back</button>
              <Button onClick={nextStep} variant="primary">Continue</Button>
            </div>
          </motion.div>
        )}

        {step === questions.length + 1 && (
          <motion.form
            key="contact-details"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="flex flex-col gap-6"
            onSubmit={handleSubmit}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
              Where should we send your assessment?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input required type="text" placeholder="Name" className="w-full bg-dada-black border border-white/20 p-4 text-white focus:outline-none focus:border-dada-accent rounded-sm" />
              <input required type="text" placeholder="Company" className="w-full bg-dada-black border border-white/20 p-4 text-white focus:outline-none focus:border-dada-accent rounded-sm" />
              <input required type="email" placeholder="Work Email" className="w-full bg-dada-black border border-white/20 p-4 text-white focus:outline-none focus:border-dada-accent rounded-sm md:col-span-2" />
              <input required type="tel" placeholder="Phone" className="w-full bg-dada-black border border-white/20 p-4 text-white focus:outline-none focus:border-dada-accent rounded-sm md:col-span-2" />
            </div>

            <div className="flex items-center justify-between mt-4">
              <button type="button" onClick={prevStep} className="text-sm text-white/40 hover:text-white">← Back</button>
              <Button type="submit" variant="primary" disabled={isSubmitting}>
                {isSubmitting ? "Processing..." : "View Assessment"}
              </Button>
            </div>
          </motion.form>
        )}

        {step === questions.length + 2 && isSuccess && (
          <motion.div
            key="success-summary"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="border border-dada-accent/50 bg-dada-accent/5 p-8 md:p-12 rounded-sm"
          >
            <div className="inline-block px-3 py-1 bg-dada-accent/10 border border-dada-accent/20 rounded-sm text-xs font-mono tracking-widest text-dada-accent mb-8 uppercase">
              Assessment Complete
            </div>
            
            <h2 className="text-3xl font-bold tracking-tight text-white mb-12">
              Your AI Workforce Opportunity
            </h2>

            <div className="space-y-6 mb-12">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white/40 uppercase tracking-widest text-xs">Potential automation area</span>
                <span className="text-white font-medium">{formData.timeConsumingWork || "Workflow Optimization"}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white/40 uppercase tracking-widest text-xs">Potential AI employee</span>
                <span className="text-dada-accent font-bold">{getRecommendation().ai}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white/40 uppercase tracking-widest text-xs">Potential impact</span>
                <span className="text-white font-medium">{getRecommendation().impact}</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="text-white/40 uppercase tracking-widest text-xs">Recommended next step</span>
                <span className="text-white font-medium">{getRecommendation().nextStep}</span>
              </div>
            </div>

            <p className="text-sm text-white/40 mb-8">
              Based on your inputs, this is an estimate. Our team will contact you shortly to review this workflow in detail.
            </p>

            <Button href="/" variant="outline" className="w-full">
              Return Home
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
