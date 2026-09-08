import { Headline } from "@/components/typography/Headline";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Digital Dada",
  description: "Choose Your AI Workforce plan.",
};

const plans = [
  {
    name: "AI STARTER",
    subtitle: "1 AI Employee",
    description: "For firms ready to automate their first major workflow.",
    features: [
      "AI employee",
      "Workflow analysis",
      "System integration",
      "Deployment",
      "Monitoring",
      "Support"
    ],
    cta: "Get Started"
  },
  {
    name: "AI GROWTH",
    subtitle: "3 AI Employees",
    description: "For firms ready to automate multiple operational functions.",
    features: [
      "3 AI employees",
      "Workflow analysis",
      "Multiple integrations",
      "AI workforce management",
      "Monitoring",
      "Ongoing optimization"
    ],
    cta: "Build Your Workforce",
    highlighted: true
  },
  {
    name: "AI ENTERPRISE",
    subtitle: "Custom AI Workforce",
    description: "For firms looking to fundamentally transform their operations.",
    features: [
      "Custom AI employees",
      "Multi-agent workflows",
      "Advanced integrations",
      "Custom business intelligence",
      "Human approval systems",
      "Ongoing AI optimization"
    ],
    cta: "Talk to Us"
  }
];

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-near-black">
      <section className="pt-32 pb-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <Headline text="Choose Your AI Workforce" as="h1" className="text-5xl md:text-7xl font-bold mb-6 justify-center tracking-tight" />
          <p className="text-xl text-dada-off-white/60">
            No per-seat licenses. You are hiring digital employees, not buying software tools.
          </p>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name} 
              className={`p-8 md:p-12 border flex flex-col ${
                plan.highlighted 
                  ? "border-dada-accent bg-dada-black/80 relative" 
                  : "border-white/10 bg-white/5"
              } rounded-sm`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dada-accent text-dada-black text-xs font-bold tracking-widest px-4 py-1 uppercase">
                  Most Popular
                </div>
              )}
              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <div className="text-dada-accent font-mono text-sm tracking-widest uppercase mb-6">
                {plan.subtitle}
              </div>
              <p className="text-dada-off-white/60 mb-8 flex-grow">
                {plan.description}
              </p>
              
              <ul className="space-y-4 mb-12">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-dada-off-white/80">
                    <span className="w-1.5 h-1.5 bg-dada-accent rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button 
                href="/contact" 
                variant={plan.highlighted ? "primary" : "outline"} 
                className="w-full"
                withArrow
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
