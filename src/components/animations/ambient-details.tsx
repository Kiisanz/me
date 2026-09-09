"use client";

import { useRef } from "react";
import { useInView } from "motion/react";

export function AmbientDetails({
  variant,
}: {
  variant: "grid" | "rings" | "lines" | "glow";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const visible = useInView(ref, { once: true, amount: 0.2 });
  return (
    <div
      ref={ref}
      aria-hidden="true"
      data-active={visible}
      className="ambient-details pointer-events-none absolute inset-0 hidden md:block"
    >
      {variant === "lines" && (
        <div className="absolute top-1/2 left-[8%] text-accent/30">
          <div className="ambient-turn grid size-16 place-items-center border border-current">
            <span className="size-5 border border-current" />
          </div>
          <span className="absolute top-24 left-1 font-mono text-[10px] tracking-[0.25em]">
            &lt; / &gt;
          </span>
        </div>
      )}
      {variant === "grid" && (
        <div className="absolute top-1/2 left-[10%] w-20 text-accent/35">
          <div className="relative h-px bg-current">
            <span className="ambient-signal absolute -top-1 left-0 size-2 rounded-full bg-accent/50" />
          </div>
          <div className="mt-5 h-px w-12 bg-current" />
          <div className="mt-5 h-px w-16 bg-current" />
        </div>
      )}
      {variant === "rings" && (
        <div className="absolute top-5 right-8 flex items-center gap-5 text-accent/30">
          <span className="ambient-turn text-3xl font-extralight">✳</span>
          <span className="ambient-float size-3 border border-current" />
        </div>
      )}
      {variant === "glow" && (
        <div className="absolute top-8 right-[7%] text-accent/25">
          <div className="ambient-float relative grid size-28 place-items-center rounded-full border border-current">
            <span className="text-3xl font-extralight">↗</span>
            <span className="absolute -top-1 left-1/2 size-2 rounded-full bg-accent/40" />
          </div>
          <span className="ambient-turn absolute -right-8 bottom-0 size-6 border border-current" />
        </div>
      )}
    </div>
  );
}
