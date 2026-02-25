"use client";

import { motion } from "framer-motion";

const EASE = [0.21, 0.47, 0.32, 0.98] as const;
const TEAL = "#2FB6D8";
const SURFACE = "#1E293B";
const MUTED = "#94a3b8";

// ── Background dot grid ──
function DotGrid() {
  const dots: { cx: number; cy: number }[] = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      dots.push({ cx: 50 + col * 44, cy: 25 + row * 50 });
    }
  }
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={1} fill={SURFACE} />
      ))}
    </motion.g>
  );
}

// ── Animated path that draws itself ──
function DrawPath({
  d,
  delay,
  duration = 0.5,
  stroke = TEAL,
  strokeOpacity = 0.25,
  strokeWidth = 1,
  dashed = false,
}: {
  d: string;
  delay: number;
  duration?: number;
  stroke?: string;
  strokeOpacity?: number;
  strokeWidth?: number;
  dashed?: boolean;
}) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeOpacity={strokeOpacity}
      strokeDasharray={dashed ? "4 6" : undefined}
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration, delay, ease: EASE }}
    />
  );
}

// ── Node that scales in ──
function NodeGroup({
  delay,
  children,
  x,
  y,
}: {
  delay: number;
  children: React.ReactNode;
  x: number;
  y: number;
}) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay, ease: EASE }}
      style={{ transformOrigin: `${x}px ${y}px` }}
    >
      {children}
    </motion.g>
  );
}

// ── Tier label ──
function TierLabel({
  text,
  x,
  y,
  delay,
}: {
  text: string;
  x: number;
  y: number;
  delay: number;
}) {
  return (
    <motion.text
      x={x}
      y={y}
      fill={TEAL}
      fillOpacity={0.6}
      fontSize={9}
      fontFamily="monospace"
      fontWeight={600}
      letterSpacing={2}
      initial={{ opacity: 0, y: y + 8 }}
      animate={{ opacity: 1, y }}
      transition={{ duration: 0.4, delay, ease: EASE }}
    >
      {text}
    </motion.text>
  );
}

// ── Node inner label ──
function NodeLabel({ x, y, text }: { x: number; y: number; text: string }) {
  return (
    <text
      x={x}
      y={y}
      fill={MUTED}
      fontSize={8}
      fontFamily="monospace"
      textAnchor="middle"
      dominantBaseline="central"
    >
      {text}
    </text>
  );
}

// ── Data pulse traveling upward ──
function DataPulse({
  startX,
  startY,
  endX,
  endY,
  delay,
  repeatDelay = 3,
}: {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay: number;
  repeatDelay?: number;
}) {
  const midX = (startX + endX) / 2 + (endX - startX) * 0.3;
  return (
    <motion.circle
      r={2.5}
      fill={TEAL}
      initial={{ cx: startX, cy: startY, opacity: 0 }}
      animate={{
        cx: [startX, midX, endX],
        cy: [startY, (startY + endY) / 2, endY],
        opacity: [0, 0.8, 0.8, 0],
      }}
      transition={{
        duration: 1.5,
        delay: 3.2 + delay,
        repeat: Infinity,
        repeatDelay,
        ease: "easeInOut",
      }}
    />
  );
}

// ── Hexagon path helper ──
function hexPath(cx: number, cy: number, r: number) {
  const pts = [];
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i - Math.PI / 2;
    pts.push(`${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`);
  }
  return `M${pts.join("L")}Z`;
}

// ── Main component ──
export default function HeroAnimation({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Background grid ── */}
        <DotGrid />

        {/* ════════════════════════════════════════
            TIER 4: DATA (bottom) y=295–345
        ════════════════════════════════════════ */}

        {/* Tier divider */}
        <DrawPath
          d="M50 290 L350 290"
          delay={0.3}
          duration={0.5}
          stroke={SURFACE}
          strokeOpacity={0.4}
          dashed
        />

        {/* Tier label */}
        <TierLabel text="DATA" x={18} y={324} delay={0.4} />

        {/* Database node (cylinder) */}
        <NodeGroup delay={0.5} x={125} y={320}>
          <rect
            x={93}
            y={306}
            width={64}
            height={32}
            rx={3}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.8}
            strokeWidth={1.5}
          />
          <ellipse
            cx={125}
            cy={306}
            rx={32}
            ry={6}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.8}
            strokeWidth={1.5}
          />
          <ellipse
            cx={125}
            cy={338}
            rx={32}
            ry={6}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.6}
            strokeWidth={1}
          />
          <NodeLabel x={125} y={322} text="schema" />
        </NodeGroup>

        {/* Schema table node B */}
        <NodeGroup delay={0.65} x={225} y={320}>
          <rect
            x={197}
            y={304}
            width={56}
            height={32}
            rx={3}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.5}
            strokeWidth={1}
          />
          <NodeLabel x={225} y={320} text="records" />
        </NodeGroup>

        {/* Schema table node C */}
        <NodeGroup delay={0.8} x={310} y={320}>
          <rect
            x={282}
            y={304}
            width={56}
            height={32}
            rx={3}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.5}
            strokeWidth={1}
          />
          <NodeLabel x={310} y={320} text="state" />
        </NodeGroup>

        {/* Horizontal connections in DATA tier */}
        <DrawPath
          d="M157 320 L197 320"
          delay={0.9}
          duration={0.3}
          strokeOpacity={0.3}
          dashed
        />
        <DrawPath
          d="M253 320 L282 320"
          delay={0.95}
          duration={0.3}
          strokeOpacity={0.3}
          dashed
        />

        {/* ════════════════════════════════════════
            TIER 3: LOGIC  y=210–260
        ════════════════════════════════════════ */}

        <DrawPath
          d="M50 205 L350 205"
          delay={1.0}
          duration={0.5}
          stroke={SURFACE}
          strokeOpacity={0.4}
          dashed
        />

        <TierLabel text="LOGIC" x={18} y={240} delay={1.1} />

        {/* Hexagon: validate */}
        <NodeGroup delay={1.2} x={105} y={235}>
          <path
            d={hexPath(105, 235, 24)}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.7}
            strokeWidth={1.5}
          />
          <NodeLabel x={105} y={235} text="validate" />
        </NodeGroup>

        {/* Hexagon: enforce */}
        <NodeGroup delay={1.35} x={205} y={235}>
          <path
            d={hexPath(205, 235, 24)}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.7}
            strokeWidth={1.5}
          />
          <NodeLabel x={205} y={235} text="enforce" />
        </NodeGroup>

        {/* Hexagon: compute */}
        <NodeGroup delay={1.5} x={305} y={235}>
          <path
            d={hexPath(305, 235, 24)}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.7}
            strokeWidth={1.5}
          />
          <NodeLabel x={305} y={235} text="compute" />
        </NodeGroup>

        {/* Arrows between hexagons */}
        <DrawPath d="M129 235 L181 235" delay={1.6} duration={0.3} strokeOpacity={0.4} />
        <DrawPath d="M229 235 L281 235" delay={1.65} duration={0.3} strokeOpacity={0.4} />
        {/* Arrow heads */}
        <motion.polygon
          points="178,231 185,235 178,239"
          fill={TEAL}
          fillOpacity={0.4}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7, duration: 0.2 }}
        />
        <motion.polygon
          points="278,231 285,235 278,239"
          fill={TEAL}
          fillOpacity={0.4}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.75, duration: 0.2 }}
        />

        {/* Vertical paths: DATA → LOGIC */}
        <DrawPath d="M125 304 C125 280, 105 262, 105 259" delay={1.3} duration={0.5} />
        <DrawPath d="M225 304 C225 280, 205 262, 205 259" delay={1.4} duration={0.5} />
        <DrawPath d="M310 304 C310 280, 305 262, 305 259" delay={1.5} duration={0.5} />

        {/* ════════════════════════════════════════
            TIER 2: WORKFLOW  y=125–175
        ════════════════════════════════════════ */}

        <DrawPath
          d="M50 120 L350 120"
          delay={1.7}
          duration={0.5}
          stroke={SURFACE}
          strokeOpacity={0.4}
          dashed
        />

        <TierLabel text="WORKFLOW" x={18} y={155} delay={1.8} />

        {/* Workflow node: draft */}
        <NodeGroup delay={1.9} x={100} y={150}>
          <rect
            x={64}
            y={137}
            width={72}
            height={26}
            rx={6}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.6}
            strokeWidth={1.5}
          />
          <NodeLabel x={100} y={150} text="draft" />
        </NodeGroup>

        {/* Workflow node: review */}
        <NodeGroup delay={2.05} x={200} y={150}>
          <rect
            x={164}
            y={137}
            width={72}
            height={26}
            rx={6}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.6}
            strokeWidth={1.5}
          />
          <NodeLabel x={200} y={150} text="review" />
        </NodeGroup>

        {/* Workflow node: approved */}
        <NodeGroup delay={2.2} x={305} y={150}>
          <rect
            x={266}
            y={137}
            width={78}
            height={26}
            rx={6}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.6}
            strokeWidth={1.5}
          />
          <NodeLabel x={305} y={150} text="approved" />
        </NodeGroup>

        {/* Curved arrows between workflow nodes */}
        <DrawPath
          d="M136 145 Q150 132, 164 145"
          delay={2.3}
          duration={0.3}
          strokeOpacity={0.5}
        />
        <DrawPath
          d="M236 145 Q251 132, 266 145"
          delay={2.35}
          duration={0.3}
          strokeOpacity={0.5}
        />
        <motion.polygon
          points="162,141 168,145 162,149"
          fill={TEAL}
          fillOpacity={0.5}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.2 }}
        />
        <motion.polygon
          points="264,141 270,145 264,149"
          fill={TEAL}
          fillOpacity={0.5}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.45, duration: 0.2 }}
        />

        {/* Vertical paths: LOGIC → WORKFLOW */}
        <DrawPath d="M105 211 C105 190, 100 173, 100 163" delay={2.0} duration={0.5} />
        <DrawPath d="M205 211 C205 190, 200 173, 200 163" delay={2.1} duration={0.5} />
        <DrawPath d="M305 211 C305 190, 305 173, 305 163" delay={2.2} duration={0.5} />

        {/* ════════════════════════════════════════
            TIER 1: INTERFACE (top)  y=40–90
        ════════════════════════════════════════ */}

        <DrawPath
          d="M50 35 L350 35"
          delay={2.4}
          duration={0.5}
          stroke={SURFACE}
          strokeOpacity={0.4}
          dashed
        />

        <TierLabel text="INTERFACE" x={18} y={68} delay={2.5} />

        {/* Interface node: dashboard */}
        <NodeGroup delay={2.6} x={130} y={62}>
          <rect
            x={84}
            y={52}
            width={92}
            height={22}
            rx={4}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.4}
            strokeWidth={1}
          />
          {/* Mini UI decoration dots */}
          <circle cx={96} cy={63} r={2} fill={TEAL} fillOpacity={0.3} />
          <circle cx={104} cy={63} r={2} fill={TEAL} fillOpacity={0.2} />
          <circle cx={112} cy={63} r={2} fill={TEAL} fillOpacity={0.15} />
          <NodeLabel x={148} y={63} text="dashboard" />
        </NodeGroup>

        {/* Interface node: api */}
        <NodeGroup delay={2.75} x={280} y={62}>
          <rect
            x={244}
            y={52}
            width={72}
            height={22}
            rx={4}
            fill={SURFACE}
            stroke={TEAL}
            strokeOpacity={0.4}
            strokeWidth={1}
          />
          <NodeLabel x={280} y={63} text="api" />
        </NodeGroup>

        {/* Vertical paths: WORKFLOW → INTERFACE */}
        <DrawPath d="M100 137 C100 110, 120 85, 125 74" delay={2.7} duration={0.5} />
        <DrawPath d="M200 137 C200 110, 270 85, 275 74" delay={2.8} duration={0.5} />

        {/* ── Brand mark ── */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.0, duration: 0.4, ease: EASE }}
        >
          <circle
            cx={370}
            cy={18}
            r={14}
            fill="rgba(47,182,216,0.12)"
            stroke={TEAL}
            strokeOpacity={0.35}
            strokeWidth={1}
          />
          <text
            x={370}
            y={19}
            fill={TEAL}
            fillOpacity={0.75}
            fontSize={9}
            fontWeight={600}
            fontFamily="monospace"
            textAnchor="middle"
            dominantBaseline="central"
          >
            DS
          </text>
        </motion.g>

        {/* ════════════════════════════════════════
            DATA FLOW PULSES (loop after build)
        ════════════════════════════════════════ */}

        {/* DATA → LOGIC pulses */}
        <DataPulse startX={125} startY={304} endX={105} endY={259} delay={0} repeatDelay={4} />
        <DataPulse startX={225} startY={304} endX={205} endY={259} delay={1.3} repeatDelay={4} />
        <DataPulse startX={310} startY={304} endX={305} endY={259} delay={2.6} repeatDelay={4} />

        {/* LOGIC → WORKFLOW pulses */}
        <DataPulse startX={105} startY={211} endX={100} endY={163} delay={1.5} repeatDelay={4} />
        <DataPulse startX={205} startY={211} endX={200} endY={163} delay={2.8} repeatDelay={4} />
        <DataPulse startX={305} startY={211} endX={305} endY={163} delay={0.8} repeatDelay={4} />

        {/* WORKFLOW → INTERFACE pulses */}
        <DataPulse startX={100} startY={137} endX={125} endY={74} delay={2.0} repeatDelay={5} />
        <DataPulse startX={200} startY={137} endX={275} endY={74} delay={3.5} repeatDelay={5} />
      </svg>
    </div>
  );
}
