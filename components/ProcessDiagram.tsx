"use client";

import { motion } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
const TEAL = "#2FB6D8";

const STEPS = [
  { num: 1, label: "Workflow Analysis" },
  { num: 2, label: "Schema Design" },
  { num: 3, label: "State Enforcement" },
  { num: 4, label: "Load Testing" },
  { num: 5, label: "Documentation" },
];

const NODE_START_Y = 20;
const NODE_SPACING = 40;
const CIRCLE_R = 11;

function nodeY(index: number) {
  return NODE_START_Y + index * NODE_SPACING;
}

export default function ProcessDiagram({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 220 196"
        className="w-full h-auto max-w-[260px] mx-auto md:mx-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Connector lines between nodes */}
        {STEPS.slice(0, -1).map((_, i) => {
          const y1 = nodeY(i) + CIRCLE_R + 2;
          const y2 = nodeY(i + 1) - CIRCLE_R - 2;
          return (
            <motion.line
              key={`line-${i}`}
              x1={26}
              y1={y1}
              x2={26}
              y2={y2}
              stroke={TEAL}
              strokeWidth={1.5}
              strokeOpacity={0.18}
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: 0.15 + i * 0.15,
                ease: EASE,
              }}
            />
          );
        })}

        {/* Step nodes */}
        {STEPS.map((step, i) => {
          const y = nodeY(i);
          const delay = i * 0.15;

          return (
            <motion.g
              key={step.num}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay, ease: EASE }}
            >
              {/* Number circle */}
              <circle cx={26} cy={y} r={CIRCLE_R} fill={TEAL} />
              <text
                x={26}
                y={y + 1}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#fff"
                fontSize={10}
                fontWeight={600}
                fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
              >
                {step.num}
              </text>

              {/* Step label */}
              <text
                x={48}
                y={y}
                fill="#1E293B"
                fontSize={13}
                fontWeight={500}
                dominantBaseline="central"
                fontFamily="ui-sans-serif, system-ui, -apple-system, sans-serif"
              >
                {step.label}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}
