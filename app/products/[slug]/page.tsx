import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

const productDetails: Record<string, any> = {
  "relentless-ai": {
    name: "RELENTLESS AI",
    label: "Your AI Executive Coach",
    description: "An intelligent executive-level advisor that helps business leaders analyze performance, identify opportunities, challenge assumptions, and make better decisions.",
    problem: "Executives make decisions based on delayed reporting and gut feelings.",
    outcome: "Real-time analysis, continuous challenge of assumptions, and data-backed decision making.",
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
    <div className="flex flex-col min-h-screen bg-dada-off-white text-dada-black" data-cursor="view">
      
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-24 pt-32 pb-24 border-b border-dada-black/10">
        
        <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="font-mono text-sm tracking-widest text-dada-gray uppercase border border-dada-black/20 px-4 py-2 inline-block">
            {product.label}
          </span>
        </div>

        <h1 className="font-display font-black text-[12vw] md:text-[10vw] uppercase tracking-tighter leading-[0.85] mb-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 fill-mode-both">
          {product.name}
        </h1>
        
        <div className="max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-both">
          <p className="text-2xl md:text-5xl font-light text-dada-black leading-[1.2] tracking-tight">
            {product.description}
          </p>
        </div>

      </section>

      <section className="py-32 px-6 md:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-24">
          
          <div className="md:w-1/2 flex flex-col">
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-8 text-dada-gray">
              THE PROBLEM.
            </h2>
            <p className="text-xl md:text-3xl font-light leading-relaxed">
              {product.problem}
            </p>
          </div>

          <div className="md:w-1/2 flex flex-col">
            <h2 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tighter mb-8 text-dada-black">
              THE OUTCOME.
            </h2>
            <p className="text-xl md:text-3xl font-light leading-relaxed">
              {product.outcome}
            </p>
          </div>

        </div>

        <div className="mt-32 max-w-7xl mx-auto flex flex-col sm:flex-row gap-8">
          <Button href="/contact" className="bg-dada-black text-white hover:bg-dada-gray px-10 py-6 rounded-none text-sm font-bold tracking-widest uppercase border-0">
            DEPLOY {product.name} →
          </Button>
          <Button href="/products" className="bg-transparent text-dada-black border border-dada-black hover:bg-dada-black hover:text-white px-10 py-6 rounded-none text-sm font-bold tracking-widest uppercase">
            VIEW ALL EMPLOYEES
          </Button>
        </div>
      </section>

    </div>
  );
}
