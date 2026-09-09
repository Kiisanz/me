import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type TextProps = ComponentProps<"p"> & {
  as?: "p" | "span";
  variant?: "body" | "small" | "caption";
  tone?: "default" | "muted" | "accent";
};

export function Text({
  as: Tag = "p",
  variant = "body",
  tone = "default",
  className,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn(
        {
          body: "text-base leading-relaxed",
          small: "text-sm leading-relaxed",
          caption: "text-xs",
        }[variant],
        {
          default: "text-foreground",
          muted: "text-muted",
          accent: "text-accent",
        }[tone],
        className,
      )}
      {...props}
    />
  );
}
