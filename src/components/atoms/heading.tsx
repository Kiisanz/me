import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type HeadingProps = ComponentProps<"h2"> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  variant?: "display" | "title" | "subtitle" | "eyebrow";
};

export function Heading({
  as: Tag = "h2",
  variant = "title",
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag
      className={cn(
        {
          display:
            "text-[clamp(3.5rem,8.6vw,8rem)] leading-[0.98] font-medium tracking-[-0.075em]",
          title: "text-3xl leading-tight tracking-tight sm:text-5xl",
          subtitle: "text-2xl tracking-tight",
          eyebrow: "text-[10px] font-medium tracking-[0.16em] uppercase",
        }[variant],
        className,
      )}
      {...props}
    />
  );
}
