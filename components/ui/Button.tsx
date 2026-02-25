"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "outline-light";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const variants = {
  primary:
    "bg-accent-primary text-white font-medium hover:bg-accent-hover",
  secondary:
    "bg-dark text-white font-medium hover:bg-dark-surface",
  outline:
    "border border-border text-foreground font-medium hover:bg-muted",
  "outline-light":
    "border border-white/20 text-white font-medium hover:bg-white/10",
};

const sizes = {
  sm: "px-4 py-2 text-sm rounded-md",
  md: "px-6 py-3 text-base rounded-md",
  lg: "px-8 py-4 text-lg rounded-md",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  onClick,
  children,
  className = "",
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={classes}
    >
      {children}
    </motion.button>
  );
}
