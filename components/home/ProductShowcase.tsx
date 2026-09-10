"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const works = [
  {
    title: "Relentless AI",
    category: "Executive Coach",
    image: "https://cdn.sanity.io/images/ohqqe8j0/production/82288d8ab2b3062f3268b3e9d341fbdc608f0a3d-2785x2089.jpg?rect=85,68,2488,1860&q=100&fit=min&auto=format",
    link: "/products/relentless-ai",
    aspect: "aspect-[4/3]"
  },
  {
    title: "YourInboxHero",
    category: "Document Collection",
    image: "https://cdn.sanity.io/images/ohqqe8j0/production/0397c50214d3f96ce5e1198b04206a68c81e8b0c-6720x4480.jpg?q=100&fit=min&auto=format",
    link: "/products/yourinboxhero",
    aspect: "aspect-[3/4]"
  },
  {
    title: "CollectAI",
    category: "Invoice Collections",
    image: "https://cdn.sanity.io/images/ohqqe8j0/production/9a0e0d4b8f8ae2874cbac78ba9ebd11f4f0b6346-4448x3096.tif?q=100&fit=min&auto=format",
    link: "/products/collectai",
    aspect: "aspect-[4/5]"
  },
  {
    title: "SOPBotAI",
    category: "Process Documentation",
    image: "https://cdn.sanity.io/images/ohqqe8j0/production/d5a58229bf46702d8e754f87770a7be753cac85d-1200x630.png",
    link: "/products/sopbotai",
    aspect: "aspect-[4/3]"
  }
];

export function ProductShowcase() {
  return (
    <section className="bg-dada-off-white text-dada-black py-32 px-6 md:px-12 w-full">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Header */}
        <div className="flex justify-between items-end mb-16 gap-4">
          <h2 className="font-display font-black text-6xl md:text-8xl uppercase tracking-tighter leading-none">
            THE WORKFORCE
          </h2>
          <Link href="/products" className="text-sm font-bold tracking-widest uppercase border-b border-dada-black/20 hover:border-dada-black pb-1 transition-colors whitespace-nowrap mb-2">
            View all employees
          </Link>
        </div>

        {/* Masonry-style Grid using BBH precise imagery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-24">
          {works.map((work, idx) => (
            <motion.div 
              key={work.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`w-full relative group block ${idx % 2 !== 0 ? 'md:mt-32' : ''}`}
            >
              <Link href={work.link} className="block w-full">
                <div className={`w-full overflow-hidden bg-dada-gray/10 ${work.aspect}`}>
                  <img 
                    src={work.image} 
                    alt={work.title}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:scale-[1.03] group-hover:opacity-100 group-hover:-rotate-[1deg] transition-all duration-700 ease-out"
                  />
                </div>
                <div className="flex flex-col gap-1 mt-6">
                  <h3 className="font-display font-bold text-3xl uppercase tracking-tight">{work.title}</h3>
                  <p className="text-lg text-dada-gray">{work.category}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
