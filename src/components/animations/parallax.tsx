"use client";

import { useRef, type ReactNode } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

export type ParallaxProps = {
  children: ReactNode;
  distance?: number;
  className?: string;
};

/** Total decorative travel across the viewport; overscan keeps the edges covered. */
export function Parallax({
  children,
  distance = 120,
  className,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-distance / 2, distance / 2],
  );

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <motion.div
        className="absolute inset-x-0"
        style={{
          y: reducedMotion ? 0 : y,
          top: -Math.abs(distance),
          bottom: -Math.abs(distance),
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
