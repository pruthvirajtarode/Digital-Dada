"use client";

import { Reveal } from "@/components/animations/Reveal";
import { Headline } from "@/components/typography/Headline";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="py-32 bg-dada-near-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-dada-accent/5" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <Reveal>
          <Headline text="What Would You Automate If You Could?" as="h2" className="text-4xl md:text-6xl font-bold justify-center mb-8" />
        </Reveal>
        
        <Reveal delay={0.2}>
          <p className="text-xl md:text-2xl text-dada-off-white/80 mb-12">
            Tell us what your employees spend too much time doing.
          </p>
        </Reveal>

        <div className="bg-dada-black border border-white/10 p-8 md:p-12 text-left mb-12">
          <Reveal delay={0.3}>
            <p className="text-lg font-medium mb-6">We’ll help you determine:</p>
            <ul className="space-y-4 text-dada-off-white/60">
              <li className="flex items-center gap-4">
                <span className="w-1 h-1 bg-dada-accent rounded-full" /> What can be automated
              </li>
              <li className="flex items-center gap-4">
                <span className="w-1 h-1 bg-dada-accent rounded-full" /> What should remain human
              </li>
              <li className="flex items-center gap-4">
                <span className="w-1 h-1 bg-dada-accent rounded-full" /> What AI technology is appropriate
              </li>
              <li className="flex items-center gap-4">
                <span className="w-1 h-1 bg-dada-accent rounded-full" /> What the potential savings could be
              </li>
              <li className="flex items-center gap-4">
                <span className="w-1 h-1 bg-dada-accent rounded-full" /> How the system could fit into your existing operation
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.5}>
          <div className="flex flex-col items-center gap-4">
            <Button href="/contact" size="lg" withArrow magnetic={true}>
              See What Your Firm Can Automate
            </Button>
            <span className="text-sm text-dada-off-white/40 tracking-widest uppercase mt-4">
              No AI expertise required.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
