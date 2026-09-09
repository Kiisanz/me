import type { ComponentProps, CSSProperties } from "react";
import { cn } from "@/lib/utils";

export function AnimatedLine({
  delay = 0,
  className,
}: {
  delay?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn("line-entrance block h-px origin-left bg-line", className)}
      style={{ "--entrance-delay": `${delay}s` } as CSSProperties}
    />
  );
}

export function DrawPath({
  delay = 0,
  className,
  style,
  ...props
}: ComponentProps<"path"> & { delay?: number }) {
  return (
    <path
      {...props}
      pathLength={1}
      className={cn("path-entrance", className)}
      style={{ ...style, "--entrance-delay": `${delay}s` } as CSSProperties}
    />
  );
}
