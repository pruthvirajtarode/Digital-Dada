"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-12 py-12 md:py-24">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 md:gap-24">
        
        {/* Huge Logotype (BBH Style) */}
        <div className="w-full md:w-1/2">
          <h2 className="font-display font-black text-[10vw] md:text-[6vw] uppercase tracking-tighter leading-[0.85] mb-8">
            DIGITAL<br />DADA
          </h2>
          <div className="text-sm font-mono opacity-60">
            © {new Date().getFullYear()} Digital Dada. All rights reserved.
          </div>
        </div>

        {/* Links Grid */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-8 text-sm uppercase tracking-widest font-bold">
          <div className="flex flex-col gap-4">
            <Link href="/work" className="hover:opacity-60 transition-opacity">Work</Link>
            <Link href="/about" className="hover:opacity-60 transition-opacity">About</Link>
            <Link href="/offices" className="hover:opacity-60 transition-opacity">Offices</Link>
            <Link href="/news" className="hover:opacity-60 transition-opacity">News</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link href="/contact" className="hover:opacity-60 transition-opacity">Contact</Link>
            <Link href="/privacy" className="hover:opacity-60 transition-opacity">Privacy Policy</Link>
            <Link href="/terms" className="hover:opacity-60 transition-opacity">Terms of Service</Link>
            <Link href="/cookies" className="hover:opacity-60 transition-opacity">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
