"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const employees = [
  { num: "01", title: "Document Collection", name: "YourInboxHero" },
  { num: "02", title: "Invoice Collections", name: "CollectAI" },
  { num: "03", title: "SOP Documentation", name: "SOPBotAI" },
  { num: "04", title: "Workflow Intelligence", name: "WorkflowIQ" },
  { num: "05", title: "Executive Intelligence", name: "Relentless AI" }
];

export default function AccountingFirmsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-black text-white" data-cursor="view">
      
      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-24">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display font-black text-huge uppercase tracking-tighter leading-[0.85] mb-12"
        >
          YOUR ACCOUNTING<br/>
          FIRM DESERVES AN<br/>
          <span className="text-dada-gray">AI WORKFORCE.</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl flex flex-col items-start gap-8"
        >
          <p className="text-xl md:text-3xl font-light text-dada-off-white leading-relaxed">
            Stop asking your highest-paid employees to spend their days doing work that software can increasingly perform.
          </p>
          <p className="text-lg md:text-xl font-light text-dada-gray leading-relaxed max-w-2xl mb-4">
            Digital Dada builds specialized AI employees for accounting firms.
          </p>
          <Button href="/contact" className="bg-white text-black hover:bg-dada-gray hover:text-white px-8 py-5 rounded-none text-xs font-bold tracking-widest uppercase border-0">
            SEE WHAT YOUR FIRM CAN AUTOMATE →
          </Button>
        </motion.div>
      </section>

      {/* Roster Section */}
      <section className="py-32 px-6 md:px-24 bg-dada-off-white text-dada-black">
        <div className="max-w-7xl mx-auto">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-32"
          >
            <h2 className="font-display font-black text-5xl md:text-7xl lg:text-[7rem] uppercase tracking-tighter leading-[0.85]">
              FIVE AI EMPLOYEES.<br/>
              ONE SMARTER FIRM.
            </h2>
          </motion.div>

          <div className="flex flex-col">
            {employees.map((emp, i) => (
              <motion.div 
                key={emp.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-baseline gap-6 md:gap-16 py-12 border-b border-dada-black/10 hover:border-dada-black transition-colors"
              >
                <span className="font-mono text-sm tracking-widest text-dada-gray uppercase shrink-0">
                  {emp.num}
                </span>
                <h3 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter leading-none shrink-0 w-full md:w-[40%]">
                  {emp.title}
                </h3>
                <span className="text-xl md:text-2xl font-light text-dada-gray">
                  {emp.name}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
