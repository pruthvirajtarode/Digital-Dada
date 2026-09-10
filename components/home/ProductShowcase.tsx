"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const works = [
  {
    title: "Relentless AI",
    category: "Executive Coach",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
    link: "/products/relentless-ai",
    aspect: "aspect-[4/3]"
  },
  {
    title: "YourInboxHero",
    category: "Document Collection",
    image: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?q=80&w=1000&auto=format&fit=crop",
    link: "/products/yourinboxhero",
    aspect: "aspect-[3/4]"
  },
  {
    title: "CollectAI",
    category: "Invoice Collections",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop",
    link: "/products/collectai",
    aspect: "aspect-[4/5]"
  },
  {
    title: "SOPBotAI",
    category: "Process Documentation",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop",
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

        {/* Masonry-style Grid */}
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
