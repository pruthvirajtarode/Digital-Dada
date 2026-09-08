import { Headline } from "@/components/typography/Headline";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accounting Firms | Digital Dada",
  description: "Your Accounting Firm Deserves an AI Workforce.",
};

export default function AccountingFirmsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-near-black">
      <section className="pt-32 pb-24 px-6 relative overflow-hidden text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <Headline text="Your Accounting Firm Deserves an AI Workforce." as="h1" className="text-5xl md:text-7xl font-bold mb-8 tracking-tight justify-center" />
          
          <p className="text-xl md:text-2xl text-dada-off-white/80 leading-relaxed mb-8">
            Stop asking your highest-paid employees to spend their days doing work that software can increasingly perform.
          </p>

          <p className="text-lg md:text-xl text-dada-off-white/60 mb-12">
            Digital Dada builds specialized AI employees for accounting firms.
          </p>

          <Button href="/contact" size="lg" withArrow>
            See What Your Firm Can Automate
          </Button>
        </div>
      </section>

      <section className="py-24 bg-dada-black px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">The AI Workforce for Accounting</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { id: "01", title: "Document Collection", product: "YourInboxHero" },
              { id: "02", title: "Invoice Collections", product: "CollectAI" },
              { id: "03", title: "SOP Documentation", product: "SOPBotAI" },
              { id: "04", title: "Workflow Intelligence", product: "WorkflowIQ" },
              { id: "05", title: "Executive Intelligence", product: "Relentless AI" },
            ].map((item) => (
              <div key={item.id} className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors rounded-sm group">
                <span className="text-dada-accent font-mono text-sm tracking-widest mb-4 block">
                  {item.id} — {item.title}
                </span>
                <h3 className="text-2xl font-bold text-white group-hover:text-dada-accent transition-colors">
                  {item.product}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
