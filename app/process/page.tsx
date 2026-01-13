import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Process - LedgerLine",
  description: "Our approach prioritizes correctness, traceability, and systems that hold up over time.",
};

export default function ProcessPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-foreground mb-6">
            How we build.
          </h1>
          <p className="text-xl text-accent-muted max-w-3xl mx-auto leading-relaxed">
            Our approach prioritizes correctness, traceability, and systems that hold up over time.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-accent-primary text-white flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Discovery & Audit
                </h2>
                <p className="text-accent-muted leading-relaxed">
                  We begin by mapping the "logic of the shop." We dig into your current workflow—not just how it's supposed to work, but how it actually works when things get messy. We identify the edge cases, the "hidden" rules in your spreadsheets, and the manual handoffs where errors usually happen.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-accent-primary text-white flex items-center justify-center font-semibold">
                2
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Data Modeling & Architecture
                </h2>
                <p className="text-accent-muted leading-relaxed">
                  Before building any interface, we design the data structure. Most internal tools fail because their data models are too shallow. We build a foundation that ensures every action is traceable, every permission is enforced, and the system can handle exceptions without corrupting your data.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-accent-primary text-white flex items-center justify-center font-semibold">
                3
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Workflow Logic & Development
                </h2>
                <p className="text-accent-muted leading-relaxed">
                  We build the core logic in Bubble, focusing on the "guardrails" first. We implement the permissions, validation rules, and state-driven workflows that prevent users from making catastrophic mistakes while still allowing for the controlled overrides that real-world business requires.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-accent-primary text-white flex items-center justify-center font-semibold">
                4
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Stress-Testing & Hardening
                </h2>
                <p className="text-accent-muted leading-relaxed">
                  We don't just "check if it works." We try to break it. We test the system against the messy, real-world data and edge cases we found in Phase 1. We refine the logic until the system is bulletproof and the outcomes are predictable.
                </p>
              </div>
            </div>
          </section>

          <section>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-accent-primary text-white flex items-center justify-center font-semibold">
                5
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Handoff & Long-term Ownership
                </h2>
                <p className="text-accent-muted leading-relaxed">
                  We don't believe in vendor lock-in. We provide your team with a system that is documented, maintainable, and built for the long haul. We train your admins and ensure you have full ownership of the logic we've built together.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
