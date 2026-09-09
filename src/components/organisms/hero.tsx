import { ScrollIndicator } from "@/components/animations/scroll-indicator";
import {
  ArrowUpRight,
  ArrowDown,
  CodeXml,
  PanelsTopLeft,
  Braces,
  Database,
  Download,
} from "lucide-react";
import { Eyebrow, Heading, Icon, Text, TextLink } from "@/components/atoms";
import { Parallax } from "@/components/animations/parallax";
import { PageEntrance } from "@/components/animations/page-entrance";
import { AnimatedLine, DrawPath } from "@/components/animations/animated-line";
import { RotatingHighlight } from "@/components/atoms/rotating-highlight";
import { cn } from "@/lib/utils";

export type HeroProps = {
  name: string;
  eyebrow: string;
  specialties: readonly [string, ...string[]];
  specialtyIcons?: React.ComponentProps<typeof RotatingHighlight>["icons"];
  description: string;
  primaryAction: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  cvHref?: string;
  className?: string;
};

export function Hero({
  name,
  eyebrow,
  specialties,
  specialtyIcons,
  description,
  primaryAction,
  secondaryAction,
  cvHref,
  className,
}: HeroProps) {
  return (
    <section
      aria-label="Introduction"
      className={cn(
        "relative isolate flex min-h-[520px] items-center overflow-hidden border-b border-line px-2 pt-16 pb-28 sm:min-h-[580px] sm:px-8 sm:pt-16 sm:pb-24 lg:min-h-[620px] lg:px-12",
        className,
      )}
    >
      <Parallax distance={180} className="-z-20">
        <div className="hero-grid absolute inset-0" />
      </Parallax>
      <Parallax distance={-240} className="-z-10 hidden md:block">
        <div className="absolute top-[28%] right-[8%] size-44 rounded-full border border-accent/20 lg:size-60" />
        <div className="absolute top-[28%] right-[8%] grid size-44 place-items-center lg:size-60">
          <span className="text-3xl font-light text-accent/40">+</span>
        </div>
      </Parallax>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="none"
        fill="none"
        className="pointer-events-none absolute inset-0 -z-10 hidden h-full w-full text-accent/35 md:block"
      >
        <DrawPath
          d="M1000 80 C760 80 760 190 890 290 C1040 400 980 540 820 580 C680 620 620 740 550 830 C500 895 500 940 500 1000"
          delay={0.2}
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <svg
        aria-hidden="true"
        focusable="false"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        fill="none"
        className="pointer-events-none absolute bottom-0 left-2 -z-10 h-20 w-[calc(100%-0.5rem)] text-accent/35 md:hidden"
      >
        <DrawPath
          d="M100 0 C45 0 0 25 0 100"
          delay={0.2}
          stroke="currentColor"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <div className="w-full">
        <PageEntrance delay={0.1}>
          <Eyebrow className="mb-6 flex items-center gap-3 font-mono text-muted">
            <Icon icon={CodeXml} size={18} className="shrink-0 text-accent" />
            {eyebrow}
          </Eyebrow>
        </PageEntrance>
        <PageEntrance delay={0.2} variant="headline">
          <Heading
            as="h1"
            variant="display"
            className="max-w-4xl text-[clamp(2.75rem,7.5vw,6.75rem)] leading-[1.02] font-bold tracking-[-0.065em] [overflow-wrap:anywhere] uppercase"
          >
            {name}
          </Heading>
        </PageEntrance>
        <div className="@container mt-8 max-w-3xl sm:mt-10">
          <PageEntrance delay={0.45}>
            <Text className="flex flex-nowrap items-center gap-[0.3em] text-[clamp(0.875rem,4.3cqw,2.5rem)] leading-tight font-semibold tracking-[-0.04em] whitespace-nowrap">
              <span className="shrink-0">I build</span>{" "}
              <RotatingHighlight words={specialties} icons={specialtyIcons} />
            </Text>
          </PageEntrance>
          <PageEntrance delay={0.6}>
            <Text tone="muted" className="mt-6 max-w-lg">
              {description}
            </Text>
            <ul
              aria-label="Development focus"
              className="mt-6 flex flex-wrap gap-x-5 gap-y-3 text-xs text-muted"
            >
              {[
                { icon: PanelsTopLeft, label: "Interface craft" },
                { icon: Braces, label: "Clean components" },
                { icon: Database, label: "Connected systems" },
              ].map(({ icon, label }) => (
                <li key={label} className="inline-flex items-center gap-2">
                  <Icon icon={icon} size={14} className="text-accent" />
                  {label}
                </li>
              ))}
            </ul>
          </PageEntrance>
          <PageEntrance
            delay={0.75}
            className="mt-7 flex flex-wrap items-center gap-2 sm:gap-4"
          >
            <TextLink
              href={primaryAction.href}
              className="group inline-flex min-h-11 items-center justify-center gap-3 border border-foreground bg-foreground px-3 py-3 font-mono text-xs font-semibold text-background uppercase transition-transform duration-200 hover:-translate-y-0.5 focus-visible:-translate-y-0.5 active:translate-y-0 sm:px-5"
            >
              {primaryAction.label}
              <Icon
                icon={ArrowDown}
                size={16}
                className="cta-scroll-arrow transition-transform group-hover:translate-y-1 group-focus-visible:translate-y-1"
              />
            </TextLink>
            {secondaryAction && (
              <TextLink
                href={secondaryAction.href}
                className="inline-flex min-h-11 items-center justify-center gap-3 border border-line bg-background px-3 py-3 font-mono text-xs font-semibold uppercase hover:bg-surface sm:px-5"
              >
                {secondaryAction.label}
                <Icon icon={ArrowUpRight} />
              </TextLink>
            )}
            {cvHref && (
              <TextLink
                href={cvHref}
                download
                className="inline-flex min-h-11 items-center justify-center gap-3 border border-line bg-background px-3 py-3 font-mono text-xs font-semibold uppercase hover:bg-surface sm:px-5"
              >
                Download CV
                <Icon icon={Download} />
              </TextLink>
            )}
          </PageEntrance>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-7 right-7 font-mono text-xs text-muted"
      >
        &lt;/&gt;
      </div>
      <div className="absolute right-2 bottom-5 left-2 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 pt-3 font-mono text-[10px] tracking-widest text-muted uppercase sm:right-7 sm:left-7">
        <AnimatedLine delay={0.9} className="absolute top-0 right-0 left-0" />
        <span className="hidden sm:inline">Design → Code → Experience</span>
        <ScrollIndicator href={primaryAction.href} />
      </div>
    </section>
  );
}
