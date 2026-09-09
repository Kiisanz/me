import { ArrowDown } from "lucide-react";
import { Icon, TextLink } from "@/components/atoms";

export function ScrollIndicator({ href = "#work" }: { href?: string }) {
  return (
    <TextLink
      href={href}
      className="group inline-flex min-h-11 items-center gap-3 rounded-sm font-mono text-[10px] tracking-widest uppercase hover:text-foreground"
    >
      <span
        aria-hidden="true"
        className="relative flex h-9 w-5 justify-center overflow-hidden rounded-full border border-muted/50 transition-colors group-hover:border-accent"
      >
        <span className="scroll-wheel absolute top-2 h-1.5 w-0.5 rounded-full bg-accent" />
      </span>
      <span>Scroll to explore</span>
      <Icon
        icon={ArrowDown}
        size={14}
        className="text-accent transition-transform group-hover:translate-y-1"
      />
    </TextLink>
  );
}
