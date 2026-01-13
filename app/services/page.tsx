import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services - LedgerLine",
  description: "We specialize in the systems that run your business: data, logic, and workflow.",
};

export default function ServicesPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-foreground mb-6">
            Operations Infrastructure.
          </h1>
          <p className="text-xl text-accent-muted max-w-3xl mx-auto leading-relaxed">
            We specialize in the systems that run your business.
          </p>
        </div>

        <div className="space-y-12 mb-16">
          <div className="border border-border rounded-md p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Custom Internal Tools
            </h2>
            <p className="text-accent-muted leading-relaxed">
              Purpose-built apps that replace fragile spreadsheets and email-driven processes. We design for the people who need to use the system daily, with clear workflows and enforced data integrity.
            </p>
          </div>

          <div className="border border-border rounded-md p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              State-Driven Workflows
            </h2>
            <p className="text-accent-muted leading-relaxed">
              Systems that enforce your business rules and provide a clear audit trail for every action. We build workflows that prevent errors while allowing for controlled exceptions when needed.
            </p>
          </div>

          <div className="border border-border rounded-md p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Operations Dashboards
            </h2>
            <p className="text-accent-muted leading-relaxed">
              Real-time visibility into complex processes with data you can actually trust. Role-based views ensure teams see what's relevant to them without overwhelming noise.
            </p>
          </div>

          <div className="border border-border rounded-md p-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Workflow Automation
            </h2>
            <p className="text-accent-muted leading-relaxed">
              Integrating your core systems to ensure data moves correctly without manual intervention. We focus on reliability and traceability over clever integrations that break.
            </p>
          </div>
        </div>

        <div className="bg-muted rounded-md p-8 mb-16">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            The Approach
          </h2>
          <p className="text-accent-muted leading-relaxed mb-4">
            We use Bubble to build your backend logic and internal interfaces. It allows us to deliver complex business rules with the architectural rigor of a custom-coded system, at a fraction of the time and cost.
          </p>
          <p className="text-accent-muted leading-relaxed">
            We prioritize long-term maintainability over platform-specific gimmicks. The systems we build are designed to be owned and managed by your team, not locked into vendor dependencies.
          </p>
        </div>

        <div className="text-center">
          <Link
            href="/contact"
            className="inline-block bg-accent-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all font-medium"
          >
            Talk to us about your system
          </Link>
        </div>
      </div>
    </div>
  );
}
