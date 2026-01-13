import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About - LedgerLine",
  description: "A specialized studio focused on building serious internal systems for complex workflows.",
};

export default function AboutPage() {
  return (
    <div className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-semibold text-foreground mb-6">
            Small studio. Personal touch. Clear accountability.
          </h1>
        </div>

        <div className="prose prose-lg max-w-none space-y-8">
          <p className="text-xl text-accent-muted leading-relaxed">
            LedgerLine is a specialized studio, not a high-volume agency. We work with a limited number of clients at a time to ensure that every system we build receives senior-level attention.
          </p>

          <p className="text-accent-muted leading-relaxed">
            Our work is for teams where reliability, traceability, and maintainability matter more than surface polish. We build systems for people who need their data to be correct and their workflows to be enforceable. You work directly with the person responsible for your system's architecture—from the first discovery meeting to the final handoff.
          </p>

          <div className="bg-muted rounded-md p-8 my-12">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Studio Philosophy</h2>
            <p className="text-accent-muted leading-relaxed mb-4">
              Most internal tools fail because they prioritize speed over structure. They're built quickly, look good in demos, but collapse under the weight of real-world complexity.
            </p>
            <p className="text-accent-muted leading-relaxed mb-4">
              We believe that internal systems should be invisible—they should just work, preventing errors and providing a clear trail of what happened and why. We value reliability, maintainability, and data integrity above all else.
            </p>
            <p className="text-accent-muted leading-relaxed">
              When you need a system that will hold up over time, that can handle exceptions without breaking, and that your team can actually trust—that's when you need LedgerLine.
            </p>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/contact"
              className="inline-block bg-accent-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all font-medium"
            >
              Work with us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
