"use client";

import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  dark?: boolean;
  className?: string;
}

export default function Card({
  children,
  hover = true,
  dark = false,
  className = "",
}: CardProps) {
  const bg = dark
    ? "bg-dark-surface border-border-dark"
    : "bg-white border-border";

  return (
    <motion.div
      whileHover={hover ? { y: -4 } : undefined}
      transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`rounded-lg border p-6 md:p-8 shadow-card ${
        hover ? "hover:shadow-card-hover" : ""
      } transition-shadow duration-300 ${bg} ${className}`}
    >
      {children}
    </motion.div>
  );
}
