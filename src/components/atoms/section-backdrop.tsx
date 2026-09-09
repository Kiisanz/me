import { AmbientDetails } from "@/components/animations/ambient-details";
import { cn } from "@/lib/utils";

export function SectionBackdrop({
  variant = "grid",
}: {
  variant?: "grid" | "rings" | "lines" | "glow";
}) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className={cn(
          "section-texture absolute inset-0",
          variant === "grid" ? "section-texture-grid" : "section-texture-dots",
        )}
      />
      {variant === "rings" && (
        <div className="absolute top-1/2 -right-20 size-80 -translate-y-1/2 rounded-full border border-accent/10 shadow-[0_0_0_40px_var(--background),0_0_0_41px_var(--line)]" />
      )}
      {variant === "lines" && (
        <svg
          viewBox="0 0 400 400"
          fill="none"
          className="absolute -bottom-12 -left-24 hidden size-96 text-accent/15 md:block"
        >
          <path
            d="M0 300 Q200 80 400 300 M0 330 Q200 110 400 330 M0 360 Q200 140 400 360"
            stroke="currentColor"
          />
        </svg>
      )}
      {variant === "glow" && (
        <div className="absolute top-0 right-0 size-80 rounded-full bg-accent/10 blur-3xl" />
      )}
      {variant !== "rings" && <AmbientDetails variant={variant} />}
      <span className="absolute right-4 bottom-5 font-mono text-lg font-light text-accent/25">
        +
      </span>
      <span className="absolute top-6 left-0 h-px w-8 bg-accent/20" />
    </div>
  );
}
