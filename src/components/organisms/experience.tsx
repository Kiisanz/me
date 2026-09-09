import { SectionBackdrop } from "@/components/atoms/section-backdrop";
import { BriefcaseBusiness, ArrowUpRight } from "lucide-react";
import { Badge, Heading, Icon, Text, TextLink } from "@/components/atoms";
import { Reveal } from "@/components/reveal";
import type { portfolio } from "@/data/portfolio";

export function Experience({
  entries,
}: {
  entries: typeof portfolio.experience;
}) {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="relative isolate grid scroll-mt-8 gap-6 border-t border-line py-10 sm:gap-8 sm:py-14 md:grid-cols-[1fr_2fr]"
    >
      <SectionBackdrop variant="grid" />
      <Heading id="experience-title" variant="eyebrow">
        Work experience
      </Heading>
      <ol className="ml-2 border-l border-line">
        {entries.map((entry) => (
          <li
            key={`${entry.company}-${entry.startDate}`}
            className="relative pl-8 sm:pl-10"
          >
            <span
              aria-hidden="true"
              className="absolute top-1 -left-1.5 size-3 rounded-full border border-accent bg-background"
            />
            <Reveal variant="left">
              <Text variant="caption" tone="muted" className="font-mono">
                <time dateTime={entry.startDate}>{entry.startLabel}</time> —{" "}
                {entry.endLabel}
              </Text>
              <Heading as="h3" variant="subtitle" className="mt-4">
                {entry.role}
              </Heading>
              <Text className="mt-3 flex items-center gap-2">
                <Icon icon={BriefcaseBusiness} className="text-accent" />
                {entry.company}
              </Text>
              <Badge className="mt-4 px-3 py-1.5">{entry.employmentType}</Badge>
              <ul
                aria-label="Main contributions"
                className="mt-6 space-y-3 text-sm leading-relaxed text-muted"
              >
                {entry.contributions.map((contribution) => (
                  <li key={contribution} className="flex items-start gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                    />
                    {contribution}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-6">
                {entry.projects.map((project) => (
                  <TextLink
                    key={project.href}
                    href={project.href}
                    variant="underline"
                    aria-label={`View ${project.title} details`}
                  >
                    {project.title}
                    <Icon icon={ArrowUpRight} size={14} />
                  </TextLink>
                ))}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
