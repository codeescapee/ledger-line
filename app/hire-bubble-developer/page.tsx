import type { Metadata } from "next";
import FadeIn from "@/components/motion/FadeIn";
import TextReveal from "@/components/motion/TextReveal";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import CountUp from "@/components/motion/CountUp";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import {
  Blocks,
  Settings,
  ShieldCheck,
  AlertTriangle,
  Workflow,
  Bug,
  Users,
  DollarSign,
  CheckCircle2,
  Cpu,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Bubble Developer & Systems Architect | Docksmith",
  description:
    "Custom Bubble Applications \u2022 Backend Architecture \u2022 Workflow Refactors \u2022 Production-Ready Builds",
};

const services = [
  {
    icon: Blocks,
    title: "Custom Bubble App Development",
    bullets: [
      "Full application builds",
      "Multi-role platforms",
      "SaaS products",
      "Internal operations systems",
    ],
  },
  {
    icon: Settings,
    title: "Backend Architecture & Refactoring",
    bullets: [
      "Data model redesign",
      "Workflow restructuring",
      "Permission logic cleanup",
      "State & lifecycle enforcement",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Stabilization & Scale Preparation",
    bullets: [
      "Performance improvements",
      "Technical debt cleanup",
      "Backend organization",
      "Production hardening",
    ],
  },
];

const painPoints = [
  {
    icon: AlertTriangle,
    text: "Your Bubble app has grown quickly and feels fragile",
  },
  {
    icon: Workflow,
    text: "Backend workflows are hard to manage or reason about",
  },
  {
    icon: Bug,
    text: "New features keep creating unintended side effects",
  },
  {
    icon: Users,
    text: "Multiple user roles depend on clean, consistent logic",
  },
  {
    icon: DollarSign,
    text: "The system is starting to matter financially or operationally",
  },
];

const approachPoints = [
  "Clear data structure",
  "Defined workflow ownership",
  "Permission boundaries",
  "Lifecycle logic",
];

const experienceAreas = [
  "Regulated workflow platforms",
  "Transaction-driven applications",
  "Multi-role SaaS environments",
  "AI-integrated backend systems",
];

const fitChecks = [
  "Your app is more than a landing page",
  "You expect real user volume",
  "Workflows affect revenue or compliance",
  "You want the backend to stay manageable long-term",
];

export default function HireBubbleDeveloper() {
  return (
    <div>
      {/* ── Hero Section ── */}
      <section className="bg-gradient-hero pt-32 md:pt-40 lg:pt-48 pb-20 md:pb-28">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <Eyebrow className="mb-6">Bubble Development</Eyebrow>
          </FadeIn>

          <TextReveal
            text="Production-Ready Bubble Applications"
            as="h1"
            className="text-4xl md:text-5xl lg:text-display font-bold text-white mb-6 leading-tight"
          />

          <FadeIn delay={0.3}>
            <p className="text-lg md:text-body-lg text-text-on-dark-muted leading-relaxed mb-4 max-w-2xl">
              I design, build, and refactor Bubble apps that need to handle real
              users, real workflows, and real operational logic.
            </p>
            <p className="text-lg md:text-body-lg text-text-on-dark-muted leading-relaxed mb-8 max-w-2xl">
              From clean MVP builds to backend-heavy refactors, the focus is
              always on structure, stability, and long-term maintainability.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Button href="/contact" variant="primary" size="lg">
              Book a Consultation
            </Button>
          </FadeIn>
        </div>
      </section>

      {/* ── What I Do ── */}
      <Section>
        <FadeIn>
          <Eyebrow className="mb-4">What We Do</Eyebrow>
          <h2 className="text-h2 text-foreground mb-12">
            Bubble development for systems that matter
          </h2>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {services.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <Card className="h-full flex flex-col">
                <item.icon className="w-12 h-12 text-accent-primary mb-6" />
                <h3 className="text-h3 text-foreground mb-4">{item.title}</h3>
                <ul className="space-y-2 text-text-secondary leading-relaxed">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="text-accent-primary mt-1.5 text-xs">
                        &#9679;
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ── When Clients Call ── */}
      <Section className="bg-muted">
        <FadeIn>
          <Eyebrow className="mb-4">Sound Familiar?</Eyebrow>
          <h2 className="text-h2 text-foreground mb-12 max-w-2xl">
            When clients usually{" "}
            <span className="text-accent-primary">call me</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point) => (
            <StaggerItem key={point.text} className="h-full">
              <div className="bg-white border-l-4 border-l-accent-primary rounded-md p-6 flex items-center gap-4 h-full hover:shadow-card transition-shadow duration-300">
                <point.icon className="w-6 h-6 text-accent-primary flex-shrink-0" />
                <p className="text-text-secondary text-body-lg leading-relaxed">
                  {point.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ── Approach ── */}
      <Section>
        <div className="max-w-3xl">
          <FadeIn>
            <Eyebrow className="mb-4">Our Approach</Eyebrow>
            <h2 className="text-h2 text-foreground mb-6">
              Bubble as a real application platform
            </h2>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8">
              We treat Bubble like a real application platform, not just a visual
              builder. Every project starts with:
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="bg-muted rounded-lg p-6 md:p-8 mb-8">
              <ul className="grid sm:grid-cols-2 gap-4">
                {approachPoints.map((point) => (
                  <li key={point} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl font-semibold text-foreground">
              UI follows{" "}
              <span className="text-accent-primary">architecture.</span>
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* ── Experience Snapshot ── */}
      <Section dark>
        <FadeIn>
          <Eyebrow className="mb-4">Track Record</Eyebrow>
          <h2 className="text-h2 text-white mb-12">Experience Snapshot</h2>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <FadeIn delay={0.1}>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <CountUp end={14} suffix="+" />
              </div>
              <p className="text-text-on-dark-muted">
                Years building operational software
              </p>
            </div>
          </FadeIn>
          {experienceAreas.map((area, i) => (
            <FadeIn key={area} delay={0.2 + i * 0.1}>
              <div className="border-l border-white/10 pl-6">
                <p className="text-white font-medium mb-1">{area}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.5}>
          <p className="text-text-on-dark-muted text-body-lg max-w-2xl">
            Built both with traditional engineering teams and directly inside
            Bubble.
          </p>
        </FadeIn>
      </Section>

      {/* ── AI Acceleration ── */}
      <Section compact>
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <Eyebrow className="mb-4">Structured Acceleration</Eyebrow>
            <h2 className="text-h2 text-foreground mb-6">
              AI-Assisted System Refinement
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-4">
              I use internal tooling to safely accelerate backend cleanup,
              workflow restructuring, and logic validation.
            </p>
            <p className="text-foreground font-semibold flex items-center justify-center gap-2">
              <Cpu className="w-5 h-5 text-accent-primary" />
              This is not template automation &mdash; it&apos;s structured
              system refinement.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* ── Who I'm Best For ── */}
      <Section className="bg-muted">
        <FadeIn>
          <Eyebrow className="mb-4">Ideal Fit</Eyebrow>
          <h2 className="text-h2 text-foreground mb-12">
            Who we&apos;re best for
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <p className="text-body-lg text-text-secondary mb-6">
              You&apos;re a strong fit if:
            </p>
            <ul className="space-y-4">
              {fitChecks.map((check) => (
                <li key={check} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground text-body-lg">{check}</span>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="bg-white">
              <p className="text-text-secondary leading-relaxed">
                If you&apos;re looking for a quick demo app, there are many
                capable builders who specialize in that. I focus on systems that
                need to hold up under real-world use.
              </p>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* ── Bottom CTA ── */}
      <section className="py-20 md:py-28 px-6 bg-gradient-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-h2 md:text-h1 text-white mb-6">
              Let&apos;s review your system
            </h2>
            <p className="text-body-lg text-text-on-dark-muted mb-10 max-w-xl mx-auto">
              If you need a Bubble app that works reliably under real-world use,
              I&apos;d be glad to discuss your project.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Book a Consultation
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
