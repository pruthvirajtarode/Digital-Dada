import { Headline } from "@/components/typography/Headline";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Employees | Digital Dada",
  description: "Meet the AI Workforce. Specialized AI employees for your business.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="pt-32 pb-16 px-6 bg-dada-near-black">
        <div className="max-w-7xl mx-auto">
          <Headline text="The AI Workforce." as="h1" className="text-5xl md:text-7xl font-bold mb-6" />
          <p className="text-xl text-dada-off-white/70 max-w-2xl">
            Specialized intelligent systems built to perform the repetitive work inside your business.
          </p>
        </div>
      </section>
      
      {/* We reuse the showcase from the homepage but it fits well here */}
      <ProductShowcase />
    </div>
  );
}
