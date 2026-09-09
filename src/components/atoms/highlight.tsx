import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type HighlightProps = ComponentProps<"span">;

export function Highlight({ className, ...props }: HighlightProps) {
  return (
    <span
      className={cn(
        "bg-foreground box-decoration-clone px-2.5 py-1 text-background",
        className,
      )}
      {...props}
    />
  );
}
