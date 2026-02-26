import type { Metadata } from "next";
import FadeIn from "@/components/motion/FadeIn";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Eyebrow from "@/components/ui/Eyebrow";
import {
  Search,
  Database,
  Shield,
  TestTubeDiagonal,
  FileText,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Process - Docksmith",
  description:
    "Backend architecture, state modeling, and enforcement logic designed for reliability under scale.",
};

const steps = [
  {
    number: 1,
    icon: Search,
    title: "Workflow Analysis & State Mapping",
    duration: "Week 1–2",
    description:
      "We map how your operations actually work today, not the documented version. We dig into spreadsheets, manual handoffs, and workarounds to find where things break and which edge cases cause the most pain.",
    deliverables: [
      "Current-state workflow map",
      "State transition inventory",
      "Edge case catalog",
      "Gap analysis document",
    ],
  },
  {
    number: 2,
    icon: Database,
    title: "Schema Design & Backend Architecture",
    duration: "Week 2–4",
    description:
      "We design the data structure and core logic before building any screens. This means defining what data connects to what, who can do what, and what steps must happen in what order. The rules are built into the foundation so they can't be bypassed.",
    deliverables: [
      "Database schema design",
      "State machine definitions",
      "Permission model",
      "Architecture document",
    ],
  },
  {
    number: 3,
    icon: Shield,
    title: "State Enforcement & Business Logic",
    duration: "Week 3–8",
    description:
      "Your business rules become part of the system itself. The software enforces what can happen, in what order, and by whom. If someone needs to make an exception, there's a clear path for that with a full record of who did what and why.",
    deliverables: [
      "Enforced state transitions",
      "Validation rules",
      "Audit trail system",
      "Override workflows",
    ],
  },
  {
    number: 4,
    icon: TestTubeDiagonal,
    title: "Load Testing & Edge Case Validation",
    duration: "Week 7–9",
    description:
      "We test with real-world scenarios and the edge cases found during discovery. We make sure everything works when multiple people use it simultaneously and that errors are handled gracefully.",
    deliverables: [
      "Load test results",
      "Edge case verification",
      "Concurrency validation",
      "Error handling audit",
    ],
  },
  {
    number: 5,
    icon: FileText,
    title: "Documentation & System Ownership",
    duration: "Week 9–10",
    description:
      "Your team gets complete documentation: data structure, business rules, connections to other tools, and step-by-step admin guides. You own everything. No black boxes, no vendor lock-in.",
    deliverables: [
      "Schema documentation",
      "State logic reference",
      "API docs & credentials",
      "Admin runbook",
    ],
  },
];

export default function ProcessPage() {
  return (
    <div>
      {/* Dark Hero */}
      <section className="bg-gradient-hero pt-32 pb-14 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-6">Process</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-display font-bold text-white mb-6 leading-tight max-w-3xl">
              Model the state. Enforce the rules. Build for scale.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-body-lg text-text-on-dark-muted leading-relaxed max-w-2xl">
              Backend architecture comes first. We design your data model and
              state logic before touching the interface. Systems built to enforce
              workflow boundaries and maintain integrity under load.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <FadeIn key={step.number} delay={index * 0.1}>
                <div className="relative flex gap-6 md:gap-8">
                  {/* Timeline line + dot */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent-primary text-white flex items-center justify-center font-bold text-lg shadow-glow-sm">
                      {step.number}
                    </div>
                    <div className="w-px flex-1 bg-border my-4" />
                  </div>

                  {/* Content */}
                  <div className={`flex-1 pt-1 ${index < steps.length - 1 ? 'pb-[102px]' : 'pb-16'}`}>
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                        {step.title}
                      </h2>
                      <span className="inline-block text-xs font-mono uppercase tracking-wider text-accent-primary bg-accent-glow px-2 py-1 rounded">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Deliverables */}
                    <div className="bg-muted border border-border rounded-lg p-5">
                      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-text-tertiary mb-3">
                        What You Get
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {step.deliverables.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                            <span className="text-sm text-text-secondary">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 px-6 bg-gradient-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-h2 md:text-h1 text-white mb-6">
              Ready to start?
            </h2>
            <p className="text-body-lg text-text-on-dark-muted mb-10 max-w-xl mx-auto">
              Walk us through your current setup and we&apos;ll outline
              what an engagement would look like. No pressure, just clarity.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              See if we&apos;re a fit
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
