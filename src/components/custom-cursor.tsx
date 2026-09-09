"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 450, damping: 35, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 450, damping: 35, mass: 0.5 });
  const [visible, setVisible] = useState(false);
  const [interactive, setInteractive] = useState(false);
  const [pressed, setPressed] = useState(false);

  useEffect(() => {
    const allowed = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference) and (forced-colors: none)",
    );
    const root = document.documentElement;
    const hide = () => {
      root.classList.remove("custom-cursor-active");
      setVisible(false);
      setPressed(false);
    };
    const move = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (
        !allowed.matches ||
        event.pointerType !== "mouse" ||
        target?.closest(
          "input, textarea, select, [contenteditable]:not([contenteditable='false']), iframe",
        )
      ) {
        hide();
        return;
      }
      x.set(event.clientX);
      y.set(event.clientY);
      if (!root.classList.contains("custom-cursor-active")) {
        ringX.jump(event.clientX);
        ringY.jump(event.clientY);
      }
      root.classList.add("custom-cursor-active");
      setVisible(true);
      setInteractive(
        Boolean(
          target?.closest(
            "a[href], button:not(:disabled), [role='button']:not([aria-disabled='true']), summary",
          ),
        ),
      );
    };
    const down = () => setPressed(true);
    const up = () => setPressed(false);
    const key = (event: KeyboardEvent) => {
      if (event.key === "Tab") hide();
    };
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", hide);
    window.addEventListener("blur", hide);
    window.addEventListener("keydown", key);
    window.addEventListener("scroll", hide, { passive: true });
    document.documentElement.addEventListener("pointerleave", hide);
    document.addEventListener("visibilitychange", hide);
    allowed.addEventListener("change", hide);
    return () => {
      root.classList.remove("custom-cursor-active");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", hide);
      window.removeEventListener("blur", hide);
      window.removeEventListener("keydown", key);
      window.removeEventListener("scroll", hide);
      root.removeEventListener("pointerleave", hide);
      document.removeEventListener("visibilitychange", hide);
      allowed.removeEventListener("change", hide);
    };
  }, [x, y, ringX, ringY]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[100] overflow-hidden"
    >
      <motion.span className="absolute top-0 left-0" style={{ x, y }}>
        <span
          className="block size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
          style={{ opacity: visible ? 1 : 0 }}
        />
      </motion.span>
      <motion.span
        className="absolute top-0 left-0"
        style={{ x: ringX, y: ringY }}
      >
        <motion.span
          className="block size-8 rounded-full border border-accent"
          style={{ x: "-50%", y: "-50%" }}
          animate={{
            opacity: visible ? 0.7 : 0,
            scale: pressed ? 0.8 : interactive ? 1.5 : 1,
          }}
          transition={{ duration: 0.18 }}
        />
      </motion.span>
    </div>
  );
}
