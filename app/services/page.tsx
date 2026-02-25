import type { Metadata } from "next";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import {
  Database,
  Shield,
  Cpu,
  Plug,
  Bot,
  ArrowRightLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services - Docksmith",
  description:
    "Backend architecture, AI agent systems, Bubble development, and migration services for operational control.",
};

const services = [
  {
    icon: Database,
    title: "Backend Systems & Operations",
    description:
      "Backend platforms that orchestrate multi-step workflows with state validation, role-based permissions, and complete audit trails. Built to replace spreadsheet processes with enforced system logic.",
  },
  {
    icon: Shield,
    title: "State Enforcement Engines",
    description:
      "Workflow logic encoded as database constraints. State transitions validated before execution. Controlled overrides logged with full attribution. Business rules enforced at the data layer.",
  },
  {
    icon: Bot,
    title: "AI Agent Systems",
    description:
      "Multi-agent production frameworks with governance-first architecture. Concurrent agent lanes, automated verification, and self-improving systems that turn AI scaffolding into production-ready infrastructure.",
  },
  {
    icon: Cpu,
    title: "Data Architecture & Modeling",
    description:
      "Schema design that enforces referential integrity and system boundaries. Data models built for scale, with proper indexing and query optimization from the start.",
  },
  {
    icon: Plug,
    title: "System Integration & APIs",
    description:
      "API orchestration that coordinates data flow between core systems. Built for reliability with retry logic, error handling, and dead letter queues where needed.",
  },
  {
    icon: ArrowRightLeft,
    title: "Migration & Modernization",
    description:
      "Moving teams off legacy systems or outgrown platforms. We assess what to keep, what to rebuild, and what to retire, then execute the migration without disrupting operations.",
  },
];

const pricingTiers = [
  {
    name: "Focused Build",
    starting: "$5k",
    description:
      "Single workflow, automation, or module. Ideal for a specific pain point or proof of concept.",
    timeline: "2–4 weeks",
    examples: ["One workflow automation", "API integration", "Data pipeline"],
  },
  {
    name: "Core System",
    starting: "$15k",
    description:
      "Full backend system with integrations, role-based access, and enforced state logic.",
    timeline: "4–10 weeks",
    examples: [
      "Operations platform",
      "Multi-step workflow engine",
      "Compliance system",
    ],
    featured: true,
  },
  {
    name: "Platform",
    starting: "$40k+",
    description:
      "Multi-module platform with AI components, multi-tenant architecture, or complex domain logic.",
    timeline: "10+ weeks",
    examples: [
      "AI agent framework",
      "Multi-tenant SaaS",
      "Fintech platform",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* Dark Hero */}
      <section className="bg-gradient-hero pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-6">Services</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-display font-bold text-white mb-6 leading-tight max-w-3xl">
              Three lanes. One architect.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-body-lg text-text-on-dark-muted leading-relaxed max-w-2xl">
              Bubble development for complex backend systems. Migration off
              Bubble when you outgrow it. AI agentic coding for multi-agent
              production systems. Every engagement is architect-led from start to
              finish.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <Section>
        <FadeIn>
          <Eyebrow className="mb-4">What We Build</Eyebrow>
          <h2 className="text-h2 text-foreground mb-12">
            Systems that enforce their own rules.
          </h2>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <Card className="h-full">
                <service.icon className="w-10 h-10 text-accent-primary mb-4" />
                <h3 className="text-h3 text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Stack Section */}
      <Section className="bg-muted">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <Eyebrow className="mb-4">Stack & Execution</Eyebrow>
            <h2 className="text-h2 text-foreground mb-6">
              You own what we build.
            </h2>
            <div className="space-y-4 text-text-secondary text-body-lg leading-relaxed">
              <p>
                We build on Bubble for rapid backend development with full
                database control and API orchestration. For AI and migration
                work, we use modern frameworks matched to your requirements.
              </p>
              <p>
                Systems are designed for your team to own. Full access to the
                database structure, business logic, and API integrations. No
                vendor lock-in, no hidden abstractions.
              </p>
            </div>
          </FadeIn>
          <FadeIn direction="right">
            <div className="bg-white border border-border rounded-xl p-8 shadow-card">
              <div className="space-y-4">
                {[
                  "Full backend & database access",
                  "Complete schema documentation",
                  "API integration docs & credentials",
                  "Admin procedures & runbooks",
                  "No proprietary dependencies",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent-primary flex-shrink-0" />
                    <span className="text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section>
        <FadeIn>
          <Eyebrow className="mb-4">Investment</Eyebrow>
          <h2 className="text-h2 text-foreground mb-4">
            Typical engagement ranges.
          </h2>
          <p className="text-text-secondary text-body-lg mb-12 max-w-2xl">
            Every project is different. These are starting points. We&apos;ll
            scope yours on our first call.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier) => (
            <StaggerItem key={tier.name}>
              <Card
                hover={false}
                className={`h-full ${
                  tier.featured
                    ? "!border-accent-primary !shadow-glow-sm"
                    : ""
                }`}
              >
                {tier.featured && (
                  <span className="inline-block text-xs font-mono uppercase tracking-wider text-accent-primary bg-accent-glow px-2 py-1 rounded mb-4">
                    Most Common
                  </span>
                )}
                <h3 className="text-h3 text-foreground mb-1">{tier.name}</h3>
                <p className="text-3xl font-bold text-accent-primary mb-1">
                  {tier.starting}
                </p>
                <p className="text-sm text-text-tertiary mb-4">
                  {tier.timeline}
                </p>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {tier.description}
                </p>
                <div className="space-y-2">
                  {tier.examples.map((example) => (
                    <div key={example} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-primary flex-shrink-0" />
                      <span className="text-sm text-text-secondary">
                        {example}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn>
          <p className="text-center text-text-tertiary text-sm">
            Ongoing advisory and development work billed at $150/hr.
          </p>
        </FadeIn>
      </Section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 px-6 bg-gradient-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-h2 md:text-h1 text-white mb-6">
              Let&apos;s scope your project.
            </h2>
            <p className="text-body-lg text-text-on-dark-muted mb-10 max-w-xl mx-auto">
              Walk us through what you&apos;re building. We&apos;ll discuss
              requirements, estimate scope, and outline what working together
              looks like.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Discuss your project
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
