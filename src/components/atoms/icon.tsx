import type { LucideIcon, LucideProps } from "lucide-react";

export type IconProps = Omit<
  LucideProps,
  "ref" | "aria-label" | "aria-hidden" | "role"
> & {
  icon: LucideIcon;
  label?: string;
};

export function Icon({
  icon: Glyph,
  label,
  size = 16,
  strokeWidth = 1.5,
  ...props
}: IconProps) {
  return (
    <Glyph
      {...props}
      size={size}
      strokeWidth={strokeWidth}
      focusable="false"
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
    />
  );
}
