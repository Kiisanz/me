import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "icon";
};

export function Button({
  className,
  type = "button",
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex shrink-0 items-center justify-center gap-2 rounded-full text-sm transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        {
          primary: "bg-foreground text-background enabled:hover:opacity-80",
          outline: "border border-line enabled:hover:bg-surface",
          ghost: "enabled:hover:bg-surface",
        }[variant],
        { sm: "min-h-9 px-4", md: "min-h-11 px-6", icon: "size-10" }[size],
        className,
      )}
      {...props}
    />
  );
}
