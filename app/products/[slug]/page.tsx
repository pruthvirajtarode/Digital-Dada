import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Headline } from "@/components/typography/Headline";
import { Metadata } from "next";

const productDetails: Record<string, any> = {
  "relentless-ai": {
    name: "RELENTLESS AI",
    label: "Your AI Executive Coach",
    description: "An intelligent executive-level advisor that helps business leaders analyze performance, identify opportunities, challenge assumptions, and make better decisions.",
    problem: "Executives make decisions based on delayed reporting and gut feelings.",
    outcome: "Real-time analysis, continuous challenge of assumptions, and databacked decision making.",
  },
  "yourinboxhero": {
    name: "YOURINBOXHERO",
    label: "Your AI Document Collection Employee",
    description: "Automatically helps collect the documents and information your firm needs from clients, reducing the endless back-and-forth that consumes employee time.",
    problem: "Staff spend up to 30% of their time chasing clients for documents.",
    outcome: "Zero time spent chasing documents. Files arrive organized and ready for work.",
  },
  "collectai": {
    name: "COLLECTAI",
    label: "Your AI Collections Employee",
    description: "Automates invoice follow-up and collections so your team spends less time chasing money and more time serving clients.",
    problem: "Unpaid invoices pile up because following up is awkward and time-consuming.",
    outcome: "Reduced days sales outstanding (DSO) and improved cash flow without human intervention.",
  },
  "sopbotai": {
    name: "SOPBOTAI",
    label: "Your AI Process Documentation Employee",
    description: "Turns the way your people actually work into documented, accessible business procedures.",
    problem: "Institutional knowledge leaves when employees leave because SOPs are never updated.",
    outcome: "Living, breathing documentation that updates as your workflows evolve.",
  },
  "workflowiq": {
    name: "WORKFLOWIQ",
    label: "Your AI Workflow Analyst",
    description: "Analyzes your business processes, identifies inefficiencies, and recommends where AI and automation can improve the way work gets done.",
    problem: "Businesses don't know what they don't know about their own inefficiencies.",
    outcome: "A clear, data-driven roadmap to an automated enterprise.",
  }
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const product = productDetails[resolvedParams.slug];
  
  if (!product) return { title: "Not Found" };
  
  return {
    title: `${product.name} - ${product.label} | Digital Dada`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const product = productDetails[resolvedParams.slug];

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-dada-near-black">
      <section className="pt-32 pb-24 px-6 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono tracking-widest text-dada-accent mb-6 uppercase">
            {product.label}
          </div>
          
          <Headline text={product.name} as="h1" className="text-5xl md:text-7xl font-bold mb-8 tracking-tight" />
          
          <p className="text-xl md:text-2xl text-dada-off-white/80 leading-relaxed mb-12">
            {product.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white/5 p-8 border border-white/10 rounded-sm">
              <h3 className="text-sm uppercase tracking-widest text-white/40 mb-4">The Problem</h3>
              <p className="text-lg text-dada-off-white/80">{product.problem}</p>
            </div>
            <div className="bg-dada-accent/10 p-8 border border-dada-accent/20 rounded-sm">
              <h3 className="text-sm uppercase tracking-widest text-dada-accent/60 mb-4">The Outcome</h3>
              <p className="text-lg text-white">{product.outcome}</p>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <Button href="/contact" size="lg" withArrow>
              Deploy {product.name}
            </Button>
            <Button href="/products" variant="ghost">
              View All Employees
            </Button>
          </div>
        </div>
        
        {/* Background glow */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-dada-accent/5 blur-[120px] rounded-full pointer-events-none" />
      </section>
    </div>
  );
}
