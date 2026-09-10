"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Footer() {
  return (
    <footer className="bg-dada-black text-white py-24 border-t border-white/10" data-cursor="default">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-24 mb-32">
          
          <div className="max-w-md">
            <h2 className="font-display font-black text-3xl md:text-4xl uppercase tracking-tighter mb-4">
              DIGITAL DADA
            </h2>
            <p className="font-mono text-xs tracking-widest text-dada-gray uppercase mb-8">
              The AI Workforce for Accounting Firms
            </p>
            <p className="text-lg font-light text-dada-off-white leading-relaxed">
              We build intelligent systems that perform repetitive business work, improve workflows, and help companies operate more efficiently.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-16 lg:gap-32">
            <div className="flex flex-col gap-4">
              <span className="font-mono text-xs tracking-widest text-dada-gray uppercase mb-4">Navigation</span>
              <Link href="/products" className="text-sm font-bold uppercase tracking-wider hover:text-dada-gray transition-colors">AI Workforce</Link>
              <Link href="/accounting-firms" className="text-sm font-bold uppercase tracking-wider hover:text-dada-gray transition-colors">Accounting Firms</Link>
              <Link href="/business-technology" className="text-sm font-bold uppercase tracking-wider hover:text-dada-gray transition-colors">Solutions</Link>
              <Link href="/products" className="text-sm font-bold uppercase tracking-wider hover:text-dada-gray transition-colors">Products</Link>
              <Link href="/how-it-works" className="text-sm font-bold uppercase tracking-wider hover:text-dada-gray transition-colors">How It Works</Link>
              <Link href="/about" className="text-sm font-bold uppercase tracking-wider hover:text-dada-gray transition-colors">About Digital Dada</Link>
              <Link href="/contact" className="text-sm font-bold uppercase tracking-wider hover:text-dada-gray transition-colors">Contact</Link>
            </div>
            
            <div className="flex flex-col gap-8">
              <span className="font-mono text-xs tracking-widest text-dada-gray uppercase">Action</span>
              <Button href="/contact" className="bg-white text-black hover:bg-dada-gray hover:text-white px-8 py-5 rounded-none text-xs font-bold tracking-widest uppercase border-0">
                SEE WHAT YOUR FIRM CAN AUTOMATE →
              </Button>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs font-mono tracking-widest text-dada-gray uppercase">
          <span>© {new Date().getFullYear()} Digital Dada</span>
          <span className="mt-4 md:mt-0">All Rights Reserved</span>
        </div>

      </div>
    </footer>
  );
}
