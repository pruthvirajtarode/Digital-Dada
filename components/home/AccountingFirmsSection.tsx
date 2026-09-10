"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const areas = [
  "Client onboarding",
  "Document collection",
  "Invoice collections",
  "Workflow management",
  "SOP documentation",
  "Knowledge management",
  "Executive intelligence"
];

export function AccountingFirmsSection() {
  return (
    <section className="bg-dada-off-white text-dada-black py-32 lg:py-48" data-cursor="view">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24">
          
          {/* Left: Editorial statements */}
          <div className="lg:w-1/2 flex flex-col">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-display font-black text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-16"
            >
              BUILT FOR<br/>ACCOUNTING<br/>FIRMS.
            </motion.h2>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6 text-2xl md:text-4xl font-light tracking-tight text-dada-gray mb-16"
            >
              <p>Your firm already has the data.</p>
              <p>Your firm already has the processes.</p>
              <p>Your firm already has the software.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl md:text-2xl font-medium text-dada-black mb-8 leading-relaxed max-w-lg">
                The opportunity is connecting them with intelligence.
              </p>
              <p className="text-lg md:text-xl font-light text-dada-gray leading-relaxed max-w-lg mb-12">
                Digital Dada is building an AI workforce specifically around the operational realities of accounting firms.
              </p>
              
              <Button href="/accounting-firms" className="bg-dada-black text-white hover:bg-dada-gray hover:text-white px-8 py-5 rounded-none text-xs font-bold tracking-widest uppercase">
                SEE WHAT YOUR FIRM CAN AUTOMATE →
              </Button>
            </motion.div>
          </div>

          {/* Right: List of areas */}
          <div className="lg:w-1/2 w-full flex flex-col pt-12 lg:pt-0">
            {areas.map((area, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="py-8 border-b border-dada-black/10 hover:border-dada-black hover:pl-4 transition-all duration-300"
              >
                <span className="font-display font-black text-3xl md:text-4xl lg:text-5xl uppercase tracking-tighter">
                  {area}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
