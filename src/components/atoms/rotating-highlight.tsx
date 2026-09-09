"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  Pause,
  Play,
  PanelsTopLeft,
  MonitorSmartphone,
  Accessibility,
  Layers,
} from "lucide-react";
import { Icon } from "./icon";
import { IconButton } from "./icon-button";

const specialtyIcons = {
  interface: PanelsTopLeft,
  responsive: MonitorSmartphone,
  accessibility: Accessibility,
  fullstack: Layers,
};

export type RotatingHighlightProps = {
  words: readonly [string, ...string[]];
  interval?: number;
  icons?: readonly (keyof typeof specialtyIcons)[];
};

export function RotatingHighlight({
  words,
  interval = 3000,
  icons,
}: RotatingHighlightProps) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reducedMotion = useReducedMotion();
  const active = reducedMotion ? 0 : index % words.length;

  useEffect(() => {
    if (reducedMotion !== false || paused || words.length < 2) return;
    const timer = window.setInterval(
      () => {
        setIndex((current) => (current + 1) % words.length);
      },
      Math.max(1000, interval),
    );
    return () => window.clearInterval(timer);
  }, [interval, paused, reducedMotion, words.length]);

  return (
    <span className="inline-flex shrink-0 items-center gap-1 align-bottom whitespace-nowrap sm:gap-2">
      <span className="sr-only">{words.join(", ")}</span>
      <motion.span
        aria-hidden="true"
        layout={reducedMotion ? false : "size"}
        className="relative inline-flex min-w-0 border border-accent bg-transparent px-[0.25em] py-1 font-bold text-foreground"
        transition={{
          layout: {
            duration: reducedMotion ? 0 : 0.35,
            ease: [0.22, 1, 0.36, 1],
          },
        }}
      >
        {[
          "top-0 left-0",
          "top-0 left-1/2",
          "top-0 left-full",
          "top-1/2 left-0",
          "top-1/2 left-full",
          "top-full left-0",
          "top-full left-1/2",
          "top-full left-full",
        ].map((position) => (
          <span
            key={position}
            className={`pointer-events-none absolute z-10 size-[5px] -translate-x-1/2 -translate-y-1/2 border border-accent bg-background sm:size-1.5 ${position}`}
          />
        ))}
        <span className="relative inline-flex overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.span
              key={active}
              layout={reducedMotion ? false : "position"}
              className="flex items-center gap-[0.25em] whitespace-nowrap"
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : "45%",
                filter: reducedMotion ? "blur(0px)" : "blur(4px)",
              }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{
                opacity: 0,
                y: reducedMotion ? 0 : "-45%",
                filter: reducedMotion ? "blur(0px)" : "blur(4px)",
              }}
              transition={{
                duration: reducedMotion ? 0 : 0.22,
                ease: "easeOut",
              }}
            >
              {icons?.[active] && (
                <Icon
                  icon={specialtyIcons[icons[active]]}
                  className="size-[0.65em] shrink-0"
                />
              )}
              <span className="min-w-0">{words[active]}</span>
            </motion.span>
          </AnimatePresence>
        </span>
      </motion.span>
      {words.length > 1 && !reducedMotion && (
        <IconButton
          aria-label={paused ? "Resume rotating text" : "Pause rotating text"}
          onClick={() => setPaused((value) => !value)}
          variant="ghost"
          className="size-8 text-muted"
        >
          <Icon icon={paused ? Play : Pause} size={13} />
        </IconButton>
      )}
    </span>
  );
}
