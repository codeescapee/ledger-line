import type { Metadata } from "next";
import FadeIn from "@/components/motion/FadeIn";
import ContactForm from "@/components/ContactForm";
import Eyebrow from "@/components/ui/Eyebrow";
import { Clock, MessageSquare, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact - Docksmith",
  description:
    "Book a free call to discuss your system requirements and backend architecture needs.",
};

const nextSteps = [
  {
    icon: MessageSquare,
    title: "Discovery call",
    description:
      "We'll discuss your current operations, pain points, and what a system solution could look like.",
  },
  {
    icon: FileText,
    title: "Scope & proposal",
    description:
      "If there's a fit, you'll get a clear scope document with timeline, deliverables, and investment.",
  },
  {
    icon: Clock,
    title: "Build starts in days",
    description:
      "No long sales cycles. Once aligned, we start architecture work within the first week.",
  },
];

export default function ContactPage() {
  return (
    <div>
      {/* Dark Mini-Hero */}
      <section className="bg-gradient-hero pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-6">Contact</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Let&apos;s talk about your system.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg text-text-on-dark-muted leading-relaxed max-w-xl">
              Describe your project and we&apos;ll get back to you within 24
              hours to schedule a call.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Two Column: Form + What Happens Next */}
      <section className="py-16 md:py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form Column */}
            <div className="lg:col-span-3">
              <FadeIn>
                <ContactForm />
              </FadeIn>
            </div>

            {/* What Happens Next Column */}
            <div className="lg:col-span-2">
              <FadeIn delay={0.2}>
                <div className="lg:sticky lg:top-32">
                  <h2 className="text-xl font-semibold text-foreground mb-8">
                    What happens next
                  </h2>
                  <div className="space-y-8">
                    {nextSteps.map((step, index) => (
                      <div key={step.title} className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-lg bg-accent-glow flex items-center justify-center">
                            <step.icon className="w-5 h-5 text-accent-primary" />
                          </div>
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            {index + 1}. {step.title}
                          </h3>
                          <p className="text-sm text-text-secondary leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 p-5 bg-muted border border-border rounded-lg">
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Prefer email?{" "}
                      <a
                        href="mailto:jacob@docksmith.io"
                        className="text-accent-primary hover:text-accent-hover transition-colors font-medium"
                      >
                        jacob@docksmith.io
                      </a>
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
