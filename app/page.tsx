import Link from "next/link";
import Image from "next/image";
import TestimonialSlider from "@/components/TestimonialSlider";
import SystemDiagram from "@/components/SystemDiagram";
import HeroAnimation from "@/components/HeroAnimation";
import SocialProofBar from "@/components/SocialProofBar";
import FadeIn from "@/components/motion/FadeIn";
import TextReveal from "@/components/motion/TextReveal";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Eyebrow from "@/components/ui/Eyebrow";
import { caseStudies } from "@/lib/caseStudies";
import {
  AlertTriangle,
  Unlink,
  Clock,
  FileWarning,
  Database,
  Shield,
  User,
} from "lucide-react";

const featuredWork = caseStudies;

const testimonials = [
  {
    quote:
      "Docksmith replaced our spreadsheet chaos with enforced workflows. Handoffs are now systematic, not guesswork.",
    attribution: "Sarah M.",
    role: "Operations Director",
    industry: "Manufacturing",
  },
  {
    quote:
      "The system they built enforces our business rules at the data layer. No more bottlenecks from manual pricing.",
    attribution: "James K.",
    role: "Head of Sales",
    industry: "Logistics",
  },
  {
    quote:
      "They built state enforcement into the core logic. Our audit trail is now a system function, not a spreadsheet.",
    attribution: "Maria L.",
    role: "Operations Manager",
    industry: "Distribution",
  },
  {
    quote:
      "We went from a 3-week quoting cycle to same-day. The system handles the pricing logic we used to manage by hand.",
    attribution: "David R.",
    role: "VP of Engineering",
    industry: "Manufacturing",
  },
  {
    quote:
      "The audit trail alone was worth it. We can now show regulators exactly what happened and when, without scrambling.",
    attribution: "Patricia N.",
    role: "Compliance Manager",
    industry: "Water Utilities",
  },
  {
    quote:
      "Jacob understood the business side before writing a line of code. The system he built reflects how we actually operate.",
    attribution: "Tom H.",
    role: "CEO",
    industry: "FinTech",
  },
];

const painPoints = [
  {
    icon: AlertTriangle,
    text: "Your 'senior dev' handed off to juniors mid-project",
  },
  {
    icon: Unlink,
    text: "Business logic lives in the frontend and breaks under edge cases",
  },
  {
    icon: Clock,
    text: "Your system can't handle concurrent users or complex state",
  },
  {
    icon: FileWarning,
    text: "Nobody can explain how the backend actually works",
  },
];

const approach = [
  {
    icon: Database,
    title: "Data Layer First",
    description:
      "Schema and state logic are modeled before any UI work begins. Integrity is enforced at the database, not the page.",
  },
  {
    icon: Shield,
    title: "Enforced Workflows",
    description:
      "State transitions are validated. Business rules are system constraints. Overrides are logged and attributed.",
  },
  {
    icon: User,
    title: "Architect-Delivered",
    description:
      "The person who designs your system architecture builds it. No handoffs. No offshore teams. No surprises.",
  },
];

export default function Home() {
  return (
    <div>
      {/* ── Hero Section ── */}
      <section className="bg-gradient-hero pt-32 md:pt-40 lg:pt-48 pb-0">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center pb-20 md:pb-28">
            <div>
              <FadeIn>
                <Eyebrow className="mb-6">Product Engineering Studio</Eyebrow>
              </FadeIn>

              <TextReveal
                text="Complex systems. Delivered by the architect who designed them."
                as="h1"
                className="text-4xl md:text-5xl lg:text-display font-bold text-white mb-6 leading-tight"
              />

              <FadeIn delay={0.3}>
                <p className="text-lg md:text-body-lg text-text-on-dark-muted leading-relaxed mb-8 max-w-lg">
                  We build backend-heavy systems, from Bubble apps to AI agents
                  to full-stack migrations. State machines, enforced workflows,
                  and architecture that holds under scale.
                </p>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="flex flex-wrap gap-4">
                  <Button href="/contact" variant="primary" size="lg">
                    Book a free call
                  </Button>
                  <Button href="/work" variant="outline-light" size="lg">
                    See our work
                  </Button>
                </div>
              </FadeIn>
            </div>

            <div className="hidden md:block">
              <FadeIn direction="right" delay={0.2}>
                <HeroAnimation className="w-full aspect-square max-w-md mx-auto" />
              </FadeIn>
            </div>
          </div>
        </div>

        {/* Social Proof Metrics */}
        <SocialProofBar />
      </section>

      {/* ── Problem Section: "Sound Familiar?" ── */}
      <Section>
        <FadeIn>
          <Eyebrow className="mb-4">Sound Familiar?</Eyebrow>
          <h2 className="text-h2 text-foreground mb-12 max-w-2xl">
            Most agencies build features.{" "}
            <span className="text-accent-primary">You need systems.</span>
          </h2>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 gap-6 mb-12">
          {painPoints.map((point) => (
            <StaggerItem key={point.text} className="h-full">
              <div className="bg-muted border-l-4 border-l-accent-primary rounded-md p-6 flex items-center gap-4 h-full hover:shadow-card transition-shadow duration-300">
                <point.icon className="w-6 h-6 text-accent-primary flex-shrink-0" />
                <p className="text-text-secondary text-body-lg leading-relaxed">
                  {point.text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn>
          <p className="text-xl text-foreground font-semibold">
            We build differently.{" "}
            <Link
              href="/process"
              className="text-accent-primary hover:text-accent-hover transition-colors link-underline"
            >
              See how →
            </Link>
          </p>
        </FadeIn>
      </Section>

      {/* ── Approach Section ── */}
      <Section className="bg-muted">
        <FadeIn>
          <Eyebrow className="mb-4">How We Work</Eyebrow>
          <h2 className="text-h2 text-foreground mb-12">
            Backend architecture first. Always.
          </h2>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8">
          {approach.map((item) => (
            <StaggerItem key={item.title} className="h-full">
              <Card className="h-full flex flex-col">
                <item.icon className="w-12 h-12 text-accent-primary mb-6" />
                <h3 className="text-h3 text-foreground mb-3">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Section>

      {/* ── Featured Work Section ── */}
      <Section>
        <FadeIn>
          <h2 className="text-h2 text-foreground mb-4 text-center">
            Systems in Production
          </h2>
          <p className="text-text-secondary text-body-lg text-center mb-12 max-w-2xl mx-auto">
            Complex backend systems running real operations daily.
          </p>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredWork.map((study) => (
            <StaggerItem key={study.slug} className="h-full">
              <Link href={`/work/${study.slug}`} className="group block h-full">
                <Card className="h-full flex flex-col">
                  <span className="inline-block text-xs font-mono uppercase tracking-wider text-accent-primary bg-accent-glow px-2 py-1 rounded mb-4 self-start">
                    {study.industry}
                  </span>
                  <div className={`flex items-start mb-3${study.iconImage ? " gap-4" : ""}`}>
                    {study.iconImage && (
                      <Image
                        src={study.iconImage.src}
                        alt={study.iconImage.alt}
                        width={64}
                        height={64}
                        className="rounded-xl flex-shrink-0 shadow-md"
                      />
                    )}
                    <h3 className="text-h3 text-foreground group-hover:text-accent-primary transition-colors">
                      {study.title}
                    </h3>
                  </div>
                  <p className="text-text-secondary mb-6 leading-relaxed flex-1">
                    {study.featuredDescription || study.summary}
                  </p>
                  <span className="text-sm text-accent-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Read case study <span>→</span>
                  </span>
                </Card>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeIn className="text-center mt-12">
          <Button href="/work" variant="outline">
            View all work
          </Button>
        </FadeIn>
      </Section>

      {/* ── Testimonials Section ── */}
      <section className="py-20 md:py-28 px-6 bg-gradient-dark">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-h2 text-white mb-16 text-center">
              What clients say
            </h2>
          </FadeIn>
          <TestimonialSlider items={testimonials} />
        </div>
      </section>

      {/* ── Process Highlight Section ── */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn>
            <Eyebrow className="mb-4">Our Process</Eyebrow>
            <h2 className="text-h2 text-foreground mb-6">How we build</h2>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8">
              Backend architecture comes first. We model your state logic and
              validation rules before touching the interface.
            </p>
            <Button href="/process" variant="outline">
              See our full process
            </Button>
          </FadeIn>
          <div className="hidden md:block">
            <FadeIn direction="right">
              <SystemDiagram />
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* ── Bottom CTA Section ── */}
      <section className="py-20 md:py-28 px-6 bg-gradient-dark">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-h2 md:text-h1 text-white mb-6">
              Ready to build something that works?
            </h2>
            <p className="text-body-lg text-text-on-dark-muted mb-10 max-w-xl mx-auto">
              Describe your project and we&apos;ll tell you honestly if
              we&apos;re the right fit. No pressure, no sales pitch.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Tell us about your project
              </Button>
              <Button href="/process" variant="outline-light" size="lg">
                View our process
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
