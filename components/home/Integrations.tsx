"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/animations/Reveal";
import { Headline } from "@/components/typography/Headline";

const nodes = [
  { name: "QuickBooks", x: "-30%", y: "-30%" },
  { name: "Xero", x: "30%", y: "-40%" },
  { name: "Karbon", x: "-40%", y: "10%" },
  { name: "Salesforce", x: "40%", y: "20%" },
  { name: "Outlook", x: "-20%", y: "40%" },
  { name: "SharePoint", x: "20%", y: "40%" },
];

export function Integrations() {
  return (
    <section className="py-32 bg-dada-near-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10">
          <Reveal>
            <Headline text="AI That Works With the Systems You Already Use" as="h2" className="text-4xl md:text-6xl font-bold mb-8" />
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-xl md:text-2xl text-dada-off-white/80 leading-relaxed mb-6 font-light">
              Your business doesn’t need another disconnected application.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-lg md:text-xl text-dada-off-white/60 leading-relaxed mb-12">
              Digital Dada builds AI systems that plug directly into the technology already running your business—processing data, sending emails, and updating records just like a human employee would.
            </p>
          </Reveal>
        </div>

        {/* Network Visualization */}
        <div className="relative w-full aspect-square max-w-[600px] mx-auto flex items-center justify-center">
          
          {/* SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
            {nodes.map((node, i) => {
              const nx = parseFloat(node.x);
              const ny = parseFloat(node.y);
              // Map percentage offsets (-40% to 40%) to SVG coordinates (10 to 90), where center is 50,50
              const endX = 50 + (nx * 1.5);
              const endY = 50 + (ny * 1.5);
              
              return (
                <g key={i}>
                  <path 
                    d={`M 50 50 L ${endX} ${endY}`} 
                    stroke="rgba(255,255,255,0.1)" 
                    strokeWidth="0.5"
                    fill="none"
                  />
                  {/* Pulsing data dot */}
                  <motion.circle
                    r="1"
                    fill="#ccff00"
                    animate={{
                      cx: [50, 50 + (endX - 50) / 2, endX],
                      cy: [50, 50 + (endY - 50) / 2, endY],
                      opacity: [0, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.4
                    }}
                  />
                </g>
              );
            })}
          </svg>

          {/* Central Core */}
          <div className="absolute z-20 w-32 h-32 bg-dada-black border border-dada-accent flex items-center justify-center rounded-full shadow-[0_0_50px_rgba(204,255,0,0.2)]">
            <motion.div 
              animate={{ scale: [1, 1.05, 1] }} 
              transition={{ duration: 2, repeat: Infinity }}
              className="text-center"
            >
              <span className="block text-dada-accent font-bold tracking-widest text-xs uppercase">Dada</span>
              <span className="block text-white font-bold tracking-widest text-xs uppercase">Core</span>
            </motion.div>
          </div>

          {/* Orbiting Nodes */}
          {nodes.map((node, i) => (
            <motion.div
              key={node.name}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.5 }}
              style={{
                x: node.x,
                y: node.y,
              }}
              className="absolute z-10 px-4 py-2 bg-white/5 border border-white/20 backdrop-blur-md rounded-sm text-xs font-mono tracking-widest text-white uppercase whitespace-nowrap"
            >
              {node.name}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
