import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "About - Docksmith",
  description: "Systems and automation studio focused on backend architecture, workflow orchestration, and operational control.",
};

export default function AboutPage() {
  return (
    <div>
      <PageHero
        eyebrow="ABOUT"
        title="Backend-focused. Senior-level execution."
        subtitle="Docksmith is a systems studio focused on backend architecture and workflow enforcement. The architect who designs your system delivers it."
        imageSrc="/brand/images/system-architecture.png"
      />

      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            <p className="text-lg text-accent-muted leading-relaxed">
              Docksmith builds internal operations systems where state enforcement and data integrity are non-negotiable. Our work centers on backend architecture, workflow orchestration, and system boundaries that hold under operational load.
            </p>

            <p className="text-lg text-accent-muted leading-relaxed">
              You work directly with the senior engineer responsible for your system architecture—from initial state modeling through to production deployment and handoff documentation.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 my-12">
              <h2 className="text-2xl font-semibold text-foreground mb-4">Approach</h2>
              <p className="text-accent-muted leading-relaxed mb-4">
                Most internal tools fail because data models are shallow and business logic lives in the UI layer. They work for demos but break under real operational complexity.
              </p>
              <p className="text-accent-muted leading-relaxed mb-4">
                We architect systems where validation happens at the database layer, state transitions are explicitly modeled, and workflow logic is enforced through system constraints—not user discipline.
              </p>
              <p className="text-accent-muted leading-relaxed">
                Systems are built for your team to operate and maintain. You receive complete backend access, schema documentation, and no proprietary abstractions.
              </p>
            </div>

            <div className="text-center mt-12">
              <Link
                href="/contact"
                className="inline-block bg-accent-primary text-foreground px-8 py-3 rounded-md hover:brightness-90 transition-all font-medium"
              >
                Work with us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
