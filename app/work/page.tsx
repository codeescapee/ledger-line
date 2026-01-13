import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Work - LedgerLine",
  description: "Internal tools and operations systems where correctness, traceability, and maintainability matter more than speed.",
};

export default function WorkPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-foreground mb-6">
            Proven Systems
          </h1>
          <p className="text-xl text-accent-muted max-w-3xl mx-auto leading-relaxed">
            Internal tools and operations systems where correctness, traceability, and maintainability matter more than speed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Link href="/work/quoting-system" className="group">
            <div className="border border-border rounded-md p-8 hover:shadow-lg transition-shadow h-full">
              <h2 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-accent-primary transition-colors">
                Automated Manufacturing Quoting System
              </h2>
              <p className="text-accent-muted mb-6 leading-relaxed">
                A self-serve quoting engine with complex pricing logic, automated file parsing, and Stripe integration.
              </p>
              <div className="mb-4">
                <span className="text-sm font-medium text-foreground">Outcome:</span>
                <p className="text-accent-muted mt-1">
                  Instant, error-free quotes and automatic order sync.
                </p>
              </div>
              <span className="text-sm text-accent-primary font-medium">Read case study →</span>
            </div>
          </Link>

          <Link href="/work/internal-ops" className="group">
            <div className="border border-border rounded-md p-8 hover:shadow-lg transition-shadow h-full">
              <h2 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-accent-primary transition-colors">
                Internal Operations System
              </h2>
              <p className="text-accent-muted mb-6 leading-relaxed">
                Role-based internal tool with state-driven workflows and guardrails replacing spreadsheet-driven processes.
              </p>
              <div className="mb-4">
                <span className="text-sm font-medium text-foreground">Outcome:</span>
                <p className="text-accent-muted mt-1">
                  Clearer ownership and significant reduction in manual handoff errors.
                </p>
              </div>
              <span className="text-sm text-accent-primary font-medium">Read case study →</span>
            </div>
          </Link>

          <Link href="/work/compliance-tracking" className="group">
            <div className="border border-border rounded-md p-8 hover:shadow-lg transition-shadow h-full">
              <h2 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-accent-primary transition-colors">
                Compliance & Lifecycle Tracking
              </h2>
              <p className="text-accent-muted mb-6 leading-relaxed">
                Centralized lifecycle management with enforced states and full audit trail.
              </p>
              <div className="mb-4">
                <span className="text-sm font-medium text-foreground">Outcome:</span>
                <p className="text-accent-muted mt-1">
                  Reduced manual effort and absolute data confidence for audits.
                </p>
              </div>
              <span className="text-sm text-accent-primary font-medium">Read case study →</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
