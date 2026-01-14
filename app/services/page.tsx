import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Services - Docksmith",
  description: "Backend architecture, workflow orchestration, and enforced system boundaries for operational control.",
};

export default function ServicesPage() {
  return (
    <div>
      <PageHero
        eyebrow="SERVICES"
        title="Backend architecture for operational control."
        subtitle="State enforcement at the data layer. Workflow orchestration through validated transitions. System boundaries that hold under load."
        imageSrc="/brand/images/system-architecture.png"
      />

      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Internal Operations Systems
              </h2>
              <p className="text-accent-muted leading-relaxed">
                Backend platforms that orchestrate multi-step workflows with state validation, role-based permissions, and complete modification logging. Built to replace spreadsheet processes with enforced system logic.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                State Enforcement Engine
              </h2>
              <p className="text-accent-muted leading-relaxed">
                Workflow logic encoded as database constraints. State transitions validated before execution. Controlled overrides logged with full attribution. Business rules enforced at the data layer.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Data Architecture & Modeling
              </h2>
              <p className="text-accent-muted leading-relaxed">
                Schema design that enforces referential integrity and system boundaries. Data models built for scale, with proper indexing and query optimization from the start.
              </p>
            </div>

            <div className="bg-white border border-slate-200 rounded-lg p-8 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                System Integration & Orchestration
              </h2>
              <p className="text-accent-muted leading-relaxed">
                API orchestration that coordinates data flow between core systems. Built for reliability and error handling, with retry logic and dead letter queues where needed.
              </p>
            </div>
          </div>

        <div className="bg-muted rounded-md p-8 mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Stack & Execution
          </h2>
          <p className="text-accent-muted leading-relaxed mb-4">
            We build on Bubble for rapid backend development with full database control and API orchestration. The platform provides the infrastructure while we architect the system logic, state enforcement, and data model.
          </p>
          <p className="text-accent-muted leading-relaxed">
            Systems are designed for your team to own. You get full access to the database structure, business logic, and API integrations. No vendor lock-in, no hidden abstractions.
          </p>
        </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="inline-block bg-accent-primary text-foreground px-8 py-3 rounded-md hover:brightness-90 transition-all font-medium"
            >
              Talk to us about your system
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
