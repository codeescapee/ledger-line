import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Automated Manufacturing Quoting System - LedgerLine",
  description: "Self-serve quoting engine with complex pricing logic, automated file parsing, and Stripe integration.",
};

export default function QuotingSystemPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/work" className="text-accent-muted hover:text-foreground mb-8 inline-block">
          ← Back to all work
        </Link>

        <h1 className="text-4xl font-semibold text-foreground mb-6">
          Automated Manufacturing Quoting System
        </h1>

        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">The Problem</h2>
            <p className="text-accent-muted leading-relaxed mb-4">
              Manual quoting was taking days and causing significant bottlenecks in the sales cycle. Sales teams were waiting on engineering for quotes, leading to inconsistent pricing and under-quoting risk. The process involved multiple handoffs, manual calculations, and no standardized pricing logic.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">The System</h2>
            <p className="text-accent-muted leading-relaxed mb-4">
              We built a self-serve quoting engine that allows customers to upload CAD files, receive instant pricing based on complex manufacturing logic, and complete checkout directly.
            </p>
            <p className="text-accent-muted leading-relaxed mb-4">
              The system parses uploaded files, applies tiered pricing rules based on quantity, material, finishing options, and manufacturing complexity. It integrates with Paperless Parts for file processing, Stripe for payment, and shipping providers for real-time freight calculations.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">System Design</h2>
            <p className="text-accent-muted leading-relaxed mb-4">
              The core challenge was ensuring data integrity from file upload to production sync. We designed a state-driven workflow where each quote progresses through validation stages, ensuring that pricing logic is consistently applied and that no orders enter production without complete information.
            </p>
            <p className="text-accent-muted leading-relaxed mb-4">
              Role-based permissions ensure sales teams can manage quotes, while engineering retains oversight on custom pricing exceptions. The system maintains a complete audit trail of all pricing decisions and modifications.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Key Integrations</h2>
            <ul className="list-disc list-inside text-accent-muted leading-relaxed space-y-2">
              <li>Paperless Parts for CAD file parsing and manufacturing analysis</li>
              <li>Stripe for payment processing and subscription management</li>
              <li>Shipping providers for real-time freight calculations</li>
              <li>Production systems for automatic order synchronization</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">The Outcome</h2>
            <p className="text-accent-muted leading-relaxed mb-4">
              Quotes that previously took days now generate instantly. The risk of under-quoting has been eliminated through standardized pricing logic. Orders sync automatically with production systems, removing manual data entry and the errors that came with it.
            </p>
            <p className="text-accent-muted leading-relaxed mb-4">
              The sales team can now focus on customer relationships rather than chasing quotes, and the engineering team is freed from routine pricing requests.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <Link href="/work/internal-ops" className="text-accent-primary hover:text-accent-muted font-medium">
            Next: Internal Operations System →
          </Link>
        </div>
      </div>
    </div>
  );
}
