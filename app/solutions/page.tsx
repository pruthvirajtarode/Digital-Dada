import { Headline } from "@/components/typography/Headline";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Digital Dada",
  description: "Business problems solved by the AI Workforce.",
};

const solutions = [
  "Document Collection",
  "Invoice Collections",
  "Client Onboarding",
  "Workflow Automation",
  "SOP Documentation",
  "Knowledge Management",
  "Executive Intelligence",
  "Business Process Analysis"
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-near-black">
      <section className="pt-32 pb-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <Headline text="Solutions." as="h1" className="text-5xl md:text-7xl font-bold mb-8 tracking-tight" />
          <p className="text-xl md:text-2xl text-dada-off-white/80 max-w-2xl mb-16 leading-relaxed">
            We don’t sell generic AI services. We build intelligent systems that solve specific business problems.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => (
              <div key={idx} className="p-8 border border-white/10 bg-dada-black group hover:border-dada-accent/30 transition-colors">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-dada-accent transition-colors">{solution}</h3>
                <div className="w-8 h-[1px] bg-white/20 group-hover:bg-dada-accent group-hover:w-16 transition-all duration-300 mb-6" />
                <Button href="/contact" variant="ghost" className="px-0 hover:bg-transparent hover:text-white" withArrow>
                  Explore Solution
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
