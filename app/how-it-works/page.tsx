import { Headline } from "@/components/typography/Headline";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Digital Dada",
  description: "We Don’t Sell You AI. We Put AI to Work.",
};

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-black">
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Headline text="We Don’t Sell You AI." as="h1" className="text-5xl md:text-7xl font-bold justify-center" />
          <Headline text="We Put AI to Work." as="h1" className="text-5xl md:text-7xl font-bold justify-center text-dada-accent mb-8" />
        </div>
      </section>
      
      {/* We reuse the interactive component from the homepage */}
      <HowItWorks />
    </div>
  );
}
