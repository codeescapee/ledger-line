"use client";

import CountUp from "@/components/motion/CountUp";
import StaggerContainer from "@/components/motion/StaggerContainer";
import StaggerItem from "@/components/motion/StaggerItem";

const stats = [
  { end: 14, suffix: "+", label: "Years Experience" },
  { end: 15, suffix: "+", label: "Systems Delivered" },
  { end: 100, suffix: "%", label: "Architect-Led" },
  { start: 10, end: 0, suffix: "", label: "Junior Handoffs", prefix: "" },
];

export default function SocialProofBar() {
  return (
    <div className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <StaggerContainer
          staggerDelay={0.15}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat) => (
            <StaggerItem key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <CountUp
                  start={stat.start}
                  end={stat.end}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  duration={2}
                />
              </div>
              <div className="text-sm text-text-on-dark-muted uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </div>
  );
}
