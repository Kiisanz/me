import type { ComponentProps, CSSProperties } from "react";
import { cn } from "@/lib/utils";

type PageEntranceProps = ComponentProps<"div"> & {
  delay?: number;
  variant?: "rise" | "headline";
};

/** Delay is in seconds. CSS keeps content visible without JavaScript. */
export function PageEntrance({
  delay = 0,
  variant = "rise",
  className,
  style,
  ...props
}: PageEntranceProps) {
  return (
    <div
      className={cn(
        "page-entrance",
        variant === "headline" && "page-entrance-headline",
        className,
      )}
      style={{ ...style, "--entrance-delay": `${delay}s` } as CSSProperties}
      {...props}
    />
  );
}
