import Link from "next/link";
import Image from "next/image";
import TestimonialSlider from "@/components/TestimonialSlider";
import SystemDiagram from "@/components/SystemDiagram";

const testimonials = [
  {
    quote: "Docksmith replaced our spreadsheet chaos with enforced workflows. Handoffs are now systematic, not guesswork.",
    attribution: "Sarah M.",
    role: "Operations Director",
    industry: "Manufacturing"
  },
  {
    quote: "The system they built enforces our business rules at the data layer. No more bottlenecks from manual pricing.",
    attribution: "James K.",
    role: "Head of Sales",
    industry: "Logistics"
  },
  {
    quote: "They built state enforcement into the core logic. Our audit trail is now a system function, not a spreadsheet.",
    attribution: "Maria L.",
    role: "Operations Manager",
    industry: "Distribution"
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-6xl font-semibold text-foreground mb-6 leading-tight">
                Backend logic. System boundaries. Enforcement under scale.
              </h1>
              <p className="text-xl text-accent-muted leading-relaxed mb-8">
                Docksmith builds internal systems that orchestrate operations through enforced workflows and validated state transitions. We focus on backend architecture, data integrity, and system boundaries that hold under load.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-accent-primary text-foreground px-8 py-3 rounded-md hover:brightness-90 transition-all font-medium"
                >
                  Talk to us
                </Link>
                <Link
                  href="/work"
                  className="border border-border text-foreground px-8 py-3 rounded-md hover:bg-muted transition-all font-medium"
                >
                  View our work
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <Image
                src="/brand/images/system-architecture.png"
                alt="System workflow architecture"
                width={600}
                height={450}
                className="w-full h-auto opacity-90"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Approach Section */}
      <section className="py-28 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Backend Architecture</h3>
              <p className="text-accent-muted leading-relaxed">
                Data modeling and state logic come first. System integrity is enforced at the database layer, not the UI.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Enforced Workflows</h3>
              <p className="text-accent-muted leading-relaxed">
                State transitions are validated. Business rules are encoded as system constraints. Controlled overrides are logged and attributed.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Senior-Level Execution</h3>
              <p className="text-accent-muted leading-relaxed">
                The architect who designs your system delivers it. No handoffs to junior developers or offshore teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-foreground mb-16 text-center">Systems in Production</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/work/quoting-system" className="group">
              <div className="border-t-2 border-slate-200 border-x border-b border-border rounded-md p-8 hover:border-slate-300 transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent-primary transition-colors">
                  Manufacturing Quoting Engine
                </h3>
                <p className="text-accent-muted mb-6 leading-relaxed">
                  Enforced pricing logic with automatic order synchronization and production handoff.
                </p>
                <span className="text-sm text-accent-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read case study <span className="transition-transform">→</span>
                </span>
              </div>
            </Link>
            
            <Link href="/work/internal-ops" className="group">
              <div className="border-t-2 border-slate-200 border-x border-b border-border rounded-md p-8 hover:border-slate-300 transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent-primary transition-colors">
                  Operations Orchestration Platform
                </h3>
                <p className="text-accent-muted mb-6 leading-relaxed">
                  State-driven workflows with role enforcement and complete modification logging.
                </p>
                <span className="text-sm text-accent-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read case study <span className="transition-transform">→</span>
                </span>
              </div>
            </Link>
            
            <Link href="/work/compliance-tracking" className="group">
              <div className="border-t-2 border-slate-200 border-x border-b border-border rounded-md p-8 hover:border-slate-300 transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent-primary transition-colors">
                  Asset Lifecycle Management
                </h3>
                <p className="text-accent-muted mb-6 leading-relaxed">
                  Immutable state tracking with enforced documentation gates and automated deadline monitoring.
                </p>
                <span className="text-sm text-accent-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read case study <span className="transition-transform">→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-16 text-center">What clients say</h2>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      {/* Process Highlight Section */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-semibold text-foreground mb-6">How we build</h2>
              <p className="text-xl text-accent-muted leading-relaxed mb-8">
                Backend architecture comes first. We model your state logic and validation rules before touching the interface.
              </p>
              <Link
                href="/process"
                className="inline-block border border-border text-foreground px-8 py-3 rounded-md hover:bg-background transition-all font-medium"
              >
                See our full process
              </Link>
            </div>
            <div className="hidden md:block">
              <SystemDiagram />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
