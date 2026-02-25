import type { Metadata } from "next";
import Image from "next/image";
import FadeIn from "@/components/motion/FadeIn";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import { Scale, Cpu, Wrench, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About - Docksmith",
  description:
    "Product engineering studio built on 14 years of experience across law, fintech, and complex system architecture.",
};

const whySections = [
  {
    icon: Cpu,
    title: "Backend-First",
    description:
      "Schema and state logic are modeled before any UI work begins. Integrity is enforced at the database layer, not the page. Systems that work in demos and under real operational load.",
  },
  {
    icon: Users,
    title: "Senior-Only Delivery",
    description:
      "The person who designs your system architecture builds it. No handoffs to junior teams. No offshore surprises. You work directly with the architect from kickoff to production.",
  },
  {
    icon: Wrench,
    title: "Three Lanes",
    description:
      "Bubble development for complex backend systems. Migration off Bubble when you outgrow it. AI agentic coding for multi-agent production systems. One studio, full lifecycle.",
  },
  {
    icon: Scale,
    title: "Product Thinking",
    description:
      "14 years across law, fintech, and engineering means I don't just build what you spec. I help you figure out what to build. Technical decisions informed by business context.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Dark Hero */}
      <section className="bg-gradient-hero pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Eyebrow className="mb-6">About</Eyebrow>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-display font-bold text-white mb-6 leading-tight max-w-3xl">
              Both a builder and a thought partner.
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-lg md:text-body-lg text-text-on-dark-muted leading-relaxed max-w-2xl">
              Docksmith is a product engineering studio that combines product
              strategy with technical execution. I help you figure out what to
              build, then I forge the system myself.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Founder Section */}
      <Section>
        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Photo Column */}
          <div className="md:col-span-2">
            <FadeIn>
              <div className="bg-muted border border-border rounded-xl p-3 shadow-card">
                <Image
                  src="/brand/jacob-headshot.jpg"
                  alt="Jacob Singer, Founder and Lead Architect"
                  width={500}
                  height={600}
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
              <div className="mt-4 text-center">
                <p className="font-semibold text-foreground text-lg">
                  Jacob Singer
                </p>
                <p className="text-text-secondary text-sm">
                  Founder & Lead Architect
                </p>
              </div>
            </FadeIn>
          </div>

          {/* Bio Column */}
          <div className="md:col-span-3">
            <FadeIn delay={0.1}>
              <h2 className="text-h2 text-foreground mb-6">
                From courtroom to codebase.
              </h2>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-5 text-text-secondary text-body-lg leading-relaxed">
                <p>
                  I started my career as a consumer debt attorney, spending
                  years inside broken systems where one missed rule or bad
                  handoff meant real consequences for real people. That
                  experience shaped how I think about software: every edge case
                  matters, every state transition needs to be intentional, and
                  systems should enforce their own rules.
                </p>
                <p>
                  I went on to co-found a fintech company building
                  credit-building automation, designing the product
                  architecture, managing the engineering, and learning firsthand
                  what it takes to ship complex systems that handle sensitive
                  data under regulatory scrutiny.
                </p>
                <p>
                  Today I run Docksmith, where I combine that product thinking
                  with hands-on engineering. I work across three lanes: Bubble
                  development for complex backend systems, migration off Bubble
                  when teams outgrow it, and AI agentic coding for multi-agent
                  production systems.
                </p>
                <p>
                  What makes this work different: I&apos;m not just the engineer.
                  I&apos;m a thought partner who understands both the business logic
                  and the architecture. I explain technical decisions in plain
                  language, think about edge cases before they become production
                  incidents, and design systems built to last a decade, not just
                  pass a demo.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 flex items-center gap-4">
                <Button href="/contact" variant="primary">
                  Get in touch
                </Button>
                <a
                  href="https://www.linkedin.com/in/jacobmsinger/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-primary hover:text-accent-hover transition-colors text-sm font-medium inline-flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Why Docksmith */}
      <Section className="bg-muted">
        <FadeIn>
          <Eyebrow className="mb-4">Why Docksmith</Eyebrow>
          <h2 className="text-h2 text-foreground mb-12">
            What makes this studio different.
          </h2>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-8">
          {whySections.map((item) => (
            <StaggerItem key={item.title}>
              <Card hover={false}>
                <item.icon className="w-10 h-10 text-accent-primary mb-4" />
                <h3 className="text-h3 text-foreground mb-3">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-28 px-6 bg-gradient-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-h2 md:text-h1 text-white mb-6">
              Let&apos;s talk about your system.
            </h2>
            <p className="text-body-lg text-text-on-dark-muted mb-10 max-w-xl mx-auto">
              I&apos;ll tell you honestly if I&apos;m the right fit. If
              I&apos;m not, I&apos;ll point you in the right direction.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Let&apos;s talk
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
