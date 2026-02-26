"use client";

import { motion } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;

const TEAL = "#2FB6D8";
const SURFACE = "#1E293B";
const FAINT = "rgba(47,182,216,0.08)";

function Line({
  x1,
  y1,
  x2,
  y2,
  delay,
  opacity = 0.28,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
  opacity?: number;
}) {
  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={TEAL}
      strokeOpacity={opacity}
      strokeWidth={1}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    />
  );
}

function Node({
  cx,
  cy,
  r = 14,
  delay,
}: {
  cx: number;
  cy: number;
  r?: number;
  delay: number;
}) {
  return (
    <motion.circle
      cx={cx}
      cy={cy}
      r={r}
      fill={SURFACE}
      stroke={TEAL}
      strokeWidth={1.4}
      strokeOpacity={0.7}
      initial={{ scale: 0.85, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay, ease: EASE }}
    />
  );
}

function Pulse({
  x1,
  y1,
  x2,
  y2,
  delay,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
}) {
  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;

  return (
    <motion.circle
      r={2.6}
      fill={TEAL}
      initial={{ cx: x1, cy: y1, opacity: 0 }}
      animate={{
        cx: [x1, midX, x2],
        cy: [y1, midY, y2],
        opacity: [0, 0.9, 0.9, 0],
      }}
      transition={{
        duration: 1.6,
        delay: 2.5 + delay,
        repeat: Infinity,
        repeatDelay: 3.5,
        ease: "easeInOut",
      }}
    />
  );
}

export default function HeroAnimation({ className }: { className?: string }) {
  const centerX = 360;
  const leftX = 180;
  const rightX = 540;

  const yTop = 80;
  const yMid = 160;
  const yBottom = 240;

  return (
    <div className={className}>
      <svg
        viewBox="0 0 720 320"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* subtle halo */}
        <motion.circle
          cx={centerX}
          cy={160}
          r={140}
          fill={FAINT}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: EASE }}
        />

        {/* vertical spine */}
        <Line x1={centerX} y1={yTop} x2={centerX} y2={yBottom} delay={0.2} opacity={0.35} />

        {/* horizontal channels */}
        <Line x1={leftX} y1={yTop} x2={rightX} y2={yTop} delay={0.3} />
        <Line x1={leftX} y1={yMid} x2={rightX} y2={yMid} delay={0.4} />
        <Line x1={leftX} y1={yBottom} x2={rightX} y2={yBottom} delay={0.5} />

        {/* vertical connectors left */}
        <Line x1={leftX} y1={yTop} x2={leftX} y2={yBottom} delay={0.6} opacity={0.25} />
        <Line x1={rightX} y1={yTop} x2={rightX} y2={yBottom} delay={0.7} opacity={0.25} />

        {/* nodes top */}
        <Node cx={leftX} cy={yTop} delay={0.8} />
        <Node cx={centerX} cy={yTop} r={18} delay={0.9} />
        <Node cx={rightX} cy={yTop} delay={1.0} />

        {/* nodes middle */}
        <Node cx={leftX} cy={yMid} delay={1.1} />
        <Node cx={centerX} cy={yMid} r={22} delay={1.2} />
        <Node cx={rightX} cy={yMid} delay={1.3} />

        {/* nodes bottom */}
        <Node cx={leftX} cy={yBottom} delay={1.4} />
        <Node cx={centerX} cy={yBottom} r={18} delay={1.5} />
        <Node cx={rightX} cy={yBottom} delay={1.6} />

        {/* pulses horizontal */}
        <Pulse x1={leftX} y1={yTop} x2={rightX} y2={yTop} delay={0} />
        <Pulse x1={leftX} y1={yMid} x2={rightX} y2={yMid} delay={1.2} />
        <Pulse x1={leftX} y1={yBottom} x2={rightX} y2={yBottom} delay={2.4} />

        {/* pulses vertical */}
        <Pulse x1={centerX} y1={yTop} x2={centerX} y2={yBottom} delay={0.6} />
        <Pulse x1={leftX} y1={yTop} x2={leftX} y2={yBottom} delay={1.8} />
        <Pulse x1={rightX} y1={yTop} x2={rightX} y2={yBottom} delay={3.0} />
      </svg>
    </div>
  );
}