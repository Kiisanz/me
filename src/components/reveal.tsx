"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  variant = "rise",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "rise" | "left" | "right" | "fade" | "scale";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const show = () => {
      element.dataset.reveal = "visible";
      observer?.disconnect();
    };
    const setup = () => {
      observer?.disconnect();
      if (preference.matches || !("IntersectionObserver" in window)) {
        delete element.dataset.reveal;
        return;
      }
      element.dataset.reveal = "pending";
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) show();
        },
        { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
      );
      observer.observe(element);
    };
    setup();
    preference.addEventListener("change", setup);
    element.addEventListener("focusin", show);
    return () => {
      observer?.disconnect();
      preference.removeEventListener("change", setup);
      element.removeEventListener("focusin", show);
      delete element.dataset.reveal;
    };
  }, []);

  return (
    <div
      ref={ref}
      data-variant={variant}
      className={cn("scroll-reveal", className)}
      style={{ "--reveal-delay": `${delay}s` } as CSSProperties}
    >
      {children}
    </div>
  );
}
