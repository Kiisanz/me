"use client";

import { ScrollProgress } from "@/components/animations/scroll-progress";

import { MotionConfig } from "motion/react";
import { ThemeProvider } from "next-themes";
import { CustomCursor } from "@/components/custom-cursor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <MotionConfig reducedMotion="user">
        {children}
        <CustomCursor />
        <ScrollProgress />
      </MotionConfig>
    </ThemeProvider>
  );
}
