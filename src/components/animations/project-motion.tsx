"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

export function ProjectMotion({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    (value) => `calc(${1 - value * 2} * var(--project-travel))`,
  );
  return (
    <div
      ref={ref}
      className="[--project-travel:16px] md:[--project-travel:64px]"
    >
      <motion.div style={{ y: reduced ? 0 : y }}>{children}</motion.div>
    </div>
  );
}

export function JourneyLine() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute top-0 bottom-0 left-2 z-0 w-px md:left-1/2"
    >
      <div className="absolute inset-0 bg-line/60" />
      <motion.div
        className="absolute inset-0 origin-top bg-accent/50"
        style={{ scaleY: reduced ? 1 : scrollYProgress }}
      />
    </div>
  );
}
