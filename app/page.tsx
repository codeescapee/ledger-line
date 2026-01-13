import Link from "next/link";
import Image from "next/image";
import TestimonialSlider from "@/components/TestimonialSlider";

const testimonials = [
  {
    quote: "LedgerLine took our messy spreadsheet process and turned it into a rock-solid operations tool. We haven't missed a handoff since.",
    attribution: "Sarah M.",
    role: "Operations Director",
    industry: "Manufacturing"
  },
  {
    quote: "The quoting system they built has completely removed the bottleneck in our sales cycle. It's fast, accurate, and reliable.",
    attribution: "James K.",
    role: "Head of Sales",
    industry: "Logistics"
  },
  {
    quote: "They understood our compliance requirements better than we did. The audit trail they built saved us during our last review.",
    attribution: "Maria L.",
    role: "Compliance Manager",
    industry: "Healthcare Operations"
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
                Serious systems for complex workflows.
              </h1>
              <p className="text-xl text-accent-muted leading-relaxed mb-8">
                LedgerLine designs and builds backend-heavy internal systems in Bubble for teams operating in real-world environments. Our work focuses on workflow design, data modeling, and guardrails that reduce user-caused errors while still allowing controlled exceptions.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="bg-accent-primary text-white px-8 py-3 rounded-md hover:bg-opacity-90 transition-all font-medium"
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
                src="/brand/images/hero-system-flow.png"
                alt="System workflow architecture"
                width={600}
                height={450}
                className="rounded-lg opacity-90"
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
              <h3 className="text-xl font-semibold text-foreground mb-4">Architecture First</h3>
              <p className="text-accent-muted leading-relaxed">
                We lead with data modeling and system design. A tool is only as strong as its underlying logic.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Workflow Guardrails</h3>
              <p className="text-accent-muted leading-relaxed">
                We build systems that reduce user error while allowing for controlled exceptions. We prioritize reliability over surface polish.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Direct Accountability</h3>
              <p className="text-accent-muted leading-relaxed">
                You work directly with the senior person responsible for architecture and delivery. No agency handoffs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold text-foreground mb-16 text-center">Proven Systems</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/work/quoting-system" className="group">
              <div className="border-t-2 border-slate-200 border-x border-b border-border rounded-md p-8 hover:border-slate-300 transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent-primary transition-colors">
                  Automated Manufacturing Quoting System
                </h3>
                <p className="text-accent-muted mb-6 leading-relaxed">
                  Instant, error-free quotes and automatic order sync.
                </p>
                <span className="text-sm text-accent-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read case study <span className="transition-transform">→</span>
                </span>
              </div>
            </Link>
            
            <Link href="/work/internal-ops" className="group">
              <div className="border-t-2 border-slate-200 border-x border-b border-border rounded-md p-8 hover:border-slate-300 transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent-primary transition-colors">
                  Internal Operations System
                </h3>
                <p className="text-accent-muted mb-6 leading-relaxed">
                  Clearer ownership and significant reduction in manual handoff errors.
                </p>
                <span className="text-sm text-accent-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Read case study <span className="transition-transform">→</span>
                </span>
              </div>
            </Link>
            
            <Link href="/work/compliance-tracking" className="group">
              <div className="border-t-2 border-slate-200 border-x border-b border-border rounded-md p-8 hover:border-slate-300 transition-all">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent-primary transition-colors">
                  Compliance & Lifecycle Tracking
                </h3>
                <p className="text-accent-muted mb-6 leading-relaxed">
                  Reduced manual effort and absolute data confidence for audits.
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
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold text-foreground mb-6">How we operate</h2>
          <p className="text-xl text-accent-muted leading-relaxed mb-8">
            We start with your logic, not your UI. We map the nuances of your workflow before building.
          </p>
          <Link
            href="/process"
            className="inline-block border border-border text-foreground px-8 py-3 rounded-md hover:bg-background transition-all font-medium"
          >
            See our full process
          </Link>
        </div>
      </section>
    </div>
  );
}
