import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type TextLinkProps = ComponentProps<typeof Link> & {
  variant?: "plain" | "nav" | "underline";
};

export function TextLink({
  variant = "plain",
  className,
  target,
  rel,
  ...props
}: TextLinkProps) {
  return (
    <Link
      target={target}
      rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
      className={cn(
        "transition-[color,background-color,border-color,transform,opacity] duration-300 ease-out",
        {
          plain: "",
          nav: "hover:text-accent",
          underline:
            "inline-flex w-fit items-center gap-5 border-b border-foreground pb-3 text-sm transition-[gap,color,border-color] hover:gap-6 hover:border-accent hover:text-accent",
        }[variant],
        className,
      )}
      {...props}
    />
  );
}
