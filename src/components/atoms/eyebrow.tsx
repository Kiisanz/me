import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ className, ...props }: ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "text-[10px] font-medium tracking-[0.16em] uppercase",
        className,
      )}
      {...props}
    />
  );
}
