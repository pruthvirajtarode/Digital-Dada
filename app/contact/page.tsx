import { Headline } from "@/components/typography/Headline";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Assessment | Digital Dada",
  description: "Start the conversation. Let's find the work.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-dada-black">
      <section className="pt-32 pb-16 px-6 relative text-center">
        <div className="max-w-4xl mx-auto relative z-10">
          <Headline text="Let’s Find the Work." as="h1" className="text-5xl md:text-7xl font-bold mb-6 justify-center tracking-tight" />
          <p className="text-xl text-dada-off-white/60 mb-8 max-w-2xl mx-auto">
            Take our Automation Opportunity Assessment to find out exactly where an AI employee could save your firm hundreds of hours.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 pb-32">
        <AssessmentForm />
      </section>
    </div>
  );
}
