"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialCard from "./TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  quote: string;
  attribution: string;
  role: string;
  industry: string;
}

interface TestimonialSliderProps {
  items: Testimonial[];
  interval?: number;
}

export default function TestimonialSlider({
  items,
  interval = 7000,
}: TestimonialSliderProps) {
  // Show pairs: [0,1], [2,3], [4,5], etc.
  const pairCount = Math.ceil(items.length / 2);
  const [activePair, setActivePair] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setActivePair((prev) => (prev + 1) % pairCount);
  }, [pairCount]);

  const prev = useCallback(() => {
    setActivePair((prev) => (prev - 1 + pairCount) % pairCount);
  }, [pairCount]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [isPaused, next, interval]);

  const currentPair = [
    items[activePair * 2],
    items[activePair * 2 + 1],
  ].filter(Boolean);

  return (
    <div
      className="relative max-w-5xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Prev/Next Arrows */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14 text-white/30 hover:text-white transition-colors hidden lg:block"
        aria-label="Previous testimonials"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14 text-white/30 hover:text-white transition-colors hidden lg:block"
        aria-label="Next testimonials"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Two-up card layout with crossfade */}
      <div className="min-h-[220px] flex items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePair}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="w-full grid md:grid-cols-2 gap-6"
          >
            {currentPair.map((item, i) => (
              <TestimonialCard key={`${activePair}-${i}`} {...item} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Dots — one per pair */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: pairCount }).map((_, index) => (
          <button
            key={index}
            onClick={() => setActivePair(index)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === activePair
                ? "bg-accent-primary w-8"
                : "bg-white/30 hover:bg-white/50 w-2.5"
            }`}
            aria-label={`Go to testimonials ${index * 2 + 1}-${index * 2 + 2}`}
          />
        ))}
      </div>
    </div>
  );
}
