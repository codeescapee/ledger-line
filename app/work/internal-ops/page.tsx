import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Internal Operations System - LedgerLine",
  description: "Role-based internal tool with state-driven workflows and guardrails replacing spreadsheet-driven processes.",
};

export default function InternalOpsPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="text-accent-muted hover:text-foreground mb-8 inline-block">
          ← Back to all work
        </Link>

        <h1 className="text-4xl font-semibold text-foreground mb-6">
          Internal Operations System
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">The Problem</h2>
            <p className="text-accent-muted leading-relaxed mb-4">
              The organization was running on a combination of spreadsheets and email-driven handoffs. As the team grew, errors increased. Ownership was unclear. New team members struggled to understand the workflow, and there was no reliable way to track who did what or when.
            </p>
            <p className="text-accent-muted leading-relaxed mb-4">
              Critical business logic lived in undocumented Excel formulas and institutional knowledge. When mistakes happened, there was no audit trail to understand what went wrong.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">The System</h2>
            <p className="text-accent-muted leading-relaxed mb-4">
              We built a role-based internal tool that enforces state-driven workflows with clear permission boundaries. Each step in the process has defined inputs, validation rules, and handoff points.
            </p>
            <p className="text-accent-muted leading-relaxed mb-4">
              The system ensures users cannot skip required steps or enter invalid data. At the same time, it includes admin override capabilities for genuine exceptions—logged and attributed to specific users.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">System Design</h2>
            <p className="text-accent-muted leading-relaxed mb-4">
              The architecture centers on enforcing state transitions. Each record moves through a defined lifecycle, and the system prevents invalid state changes while logging every modification with full attribution.
            </p>
            <p className="text-accent-muted leading-relaxed mb-4">
              Permissions are granular and role-based. Team members see only the data and actions relevant to their role, reducing cognitive load and preventing accidental changes to areas outside their responsibility.
            </p>
            <p className="text-accent-muted leading-relaxed mb-4">
              Validation happens at the data layer, not just the UI. This ensures that even if business rules change, the system maintains data integrity.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">The Outcome</h2>
            <p className="text-accent-muted leading-relaxed mb-4">
              Errors dropped significantly. The team has clear ownership at every stage of the workflow. New hires onboard faster because the system itself guides them through the correct process.
            </p>
            <p className="text-accent-muted leading-relaxed mb-4">
              The audit trail provides confidence during reviews and investigations. The organization can now see exactly what happened, when, and who was responsible.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link href="/work/compliance-tracking" className="text-accent-primary hover:text-accent-muted font-medium">
            Next: Compliance & Lifecycle Tracking →
          </Link>
        </div>
      </div>
    </div>
  );
}
