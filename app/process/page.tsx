import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Process - Docksmith",
  description: "Backend architecture, state modeling, and enforcement logic designed for reliability under scale.",
};

export default function ProcessPage() {
  return (
    <div>
      <PageHero
        eyebrow="PROCESS"
        title="Model the state. Enforce the rules. Build for scale."
        subtitle="Backend architecture comes first. We design your data model and state logic before touching the interface. Systems built to enforce workflow boundaries and maintain integrity under load."
        imageSrc="/brand/images/system-architecture.png"
      />

      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
          <section>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-md bg-accent-primary text-white flex items-center justify-center font-semibold">
                1
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  Workflow Analysis & State Mapping
                </h2>
                <p className="text-accent-muted leading-relaxed">
                  We audit your current operations to extract the actual state logic—not documented procedures, but the real business rules embedded in spreadsheets and manual handoffs. We identify state transitions, validation points, and the edge cases where processes currently break.
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
                  Schema Design & Backend Architecture
                </h2>
                <p className="text-accent-muted leading-relaxed">
                  Database schema is designed for referential integrity and proper indexing from the start. State machines are modeled explicitly. Permissions are enforced at the data layer. Every state transition is validated against defined rules before execution.
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
                  State Enforcement & Business Logic
                </h2>
                <p className="text-accent-muted leading-relaxed">
                  Business rules are encoded as database constraints and API-level validation. State transitions trigger defined actions. Controlled overrides are permitted through explicit pathways with full audit logging. The system prevents invalid states at the data layer.
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
                  Load Testing & Edge Case Validation
                </h2>
                <p className="text-accent-muted leading-relaxed">
                  Systems are tested against real operational data and edge cases identified during discovery. We validate state transitions under concurrent load, test error handling pathways, and verify that constraints hold when multiple users operate simultaneously.
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
                  Documentation & System Ownership
                </h2>
                <p className="text-accent-muted leading-relaxed">
                  Your team receives complete system documentation: database schema, state transition logic, API endpoints, and administrative procedures. You have full access to the backend, business logic, and integrations. No proprietary abstractions, no vendor dependencies.
                </p>
              </div>
            </div>
          </section>
          </div>
        </div>
      </section>
    </div>
  );
}
