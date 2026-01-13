import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compliance & Lifecycle Tracking - LedgerLine",
  description: "Centralized lifecycle management with enforced states and full audit trail.",
};

export default function ComplianceTrackingPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="text-accent-muted hover:text-foreground mb-8 inline-block">
          ← Back to all work
        </Link>

        <h1 className="text-4xl font-semibold text-foreground mb-6">
          Compliance & Lifecycle Tracking System
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">The Problem</h2>
            <p className="text-accent-muted leading-relaxed mb-4">
              The organization needed to track compliance across multiple assets and locations, but the process was entirely manual. Data lived in disconnected spreadsheets, email chains, and local files.
            </p>
            <p className="text-accent-muted leading-relaxed mb-4">
              There was no reliable audit trail. When regulators asked for proof of compliance, teams scrambled to reconstruct timelines from fragmented records. The risk of missing critical deadlines was high, and data confidence was low.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">The System</h2>
            <p className="text-accent-muted leading-relaxed mb-4">
              We built a centralized lifecycle management system that enforces state-driven compliance workflows. Each asset moves through defined states with mandatory documentation and approval gates.
            </p>
            <p className="text-accent-muted leading-relaxed mb-4">
              The system prevents state transitions without required documentation and ensures that all compliance activities are logged with full attribution and timestamps.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">System Design</h2>
            <p className="text-accent-muted leading-relaxed mb-4">
              The core design principle is traceability. Every change to an asset's state, every document upload, and every approval is logged and immutable. Users cannot delete or modify historical records—they can only add new information.
            </p>
            <p className="text-accent-muted leading-relaxed mb-4">
              The system enforces lifecycle rules at the database level. Validation ensures that assets cannot skip required steps or enter invalid states. Automated reminders notify teams of upcoming deadlines before they become compliance issues.
            </p>
            <p className="text-accent-muted leading-relaxed mb-4">
              Role-based access controls ensure that only authorized users can approve state transitions, while still providing visibility across the organization.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">The Outcome</h2>
            <p className="text-accent-muted leading-relaxed mb-4">
              Manual effort dropped significantly. The team now has absolute confidence in their data during audits. When regulators request documentation, the system generates complete compliance reports in minutes.
            </p>
            <p className="text-accent-muted leading-relaxed mb-4">
              Missed deadlines are virtually eliminated through automated tracking and reminders. The organization has clear visibility into compliance status across all assets and locations.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link href="/work/quoting-system" className="text-accent-primary hover:text-accent-muted font-medium">
            Next: Automated Manufacturing Quoting System →
          </Link>
        </div>
      </div>
    </div>
  );
}
