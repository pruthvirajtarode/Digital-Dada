"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

const footerLinks = [
  { name: "AI Workforce", href: "/products" },
  { name: "Accounting Firms", href: "/accounting-firms" },
  { name: "Solutions", href: "/solutions" },
  { name: "Products", href: "/products" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "About Digital Dada", href: "/about" },
  { name: "Business Technology Services", href: "/business-technology-services" },
  { name: "Contact", href: "/contact" },
];

export function Footer() {
  return (
    <footer className="bg-dada-near-black border-t border-white/5 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16 mb-24">
        
        <div className="max-w-md">
          <Link href="/" className="inline-flex items-center gap-2 mb-6 group">
            <div className="w-5 h-5 bg-dada-accent rounded-sm" />
            <span className="font-bold text-2xl tracking-tight uppercase group-hover:text-dada-accent transition-colors">
              Digital Dada
            </span>
          </Link>
          <h3 className="text-xl font-medium mb-4">
            The AI Workforce for Accounting Firms
          </h3>
          <p className="text-dada-off-white/60 leading-relaxed mb-8">
            We build intelligent systems that perform repetitive business work, improve workflows, and help companies operate more efficiently.
          </p>
          <Button href="/contact" variant="primary" withArrow>
            See What Your Firm Can Automate
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
          {footerLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-dada-off-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-dada-off-white/50">
        <div>
          © {new Date().getFullYear()} Digital Dada. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
          <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
          <Link href="/legal" className="hover:text-white transition-colors">Legal</Link>
        </div>
      </div>
    </footer>
  );
}
