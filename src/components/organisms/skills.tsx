import { InterfacePreview } from "@/components/molecules/interface-preview";
import { SectionBackdrop } from "@/components/atoms/section-backdrop";
import { Reveal } from "@/components/reveal";
import { TechIcon } from "@/components/atoms/tech-icon";
import { TechSolarSystem } from "@/components/animations/tech-solar-system";
import { Eyebrow, Heading, Text } from "@/components/atoms";
import type { portfolio } from "@/data/portfolio";

export function Skills({ skills }: { skills: typeof portfolio.skills }) {
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      className="relative isolate scroll-mt-8 border-t border-line py-10 sm:py-14"
    >
      <SectionBackdrop variant="rings" />
      <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
        <div>
          <Eyebrow className="mb-6 text-muted">
            Skills / Technology stack
          </Eyebrow>
          <Heading id="skills-title">{skills.title}</Heading>
          <Text tone="muted" className="mt-6 max-w-md">
            {skills.intro}
          </Text>
          <div className="mt-8 space-y-6">
            {skills.groups.map((group, index) => (
              <Reveal key={group.title} variant="fade" delay={index * 0.04}>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-medium">
                  <span
                    aria-hidden="true"
                    className={`size-2 rounded-full ${index === 0 ? "bg-accent" : "bg-muted"}`}
                  />
                  {group.title}
                </h3>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted">
                  {group.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="inline-flex items-center gap-2"
                    >
                      <TechIcon technology={technology} />
                      {technology}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
        <Reveal variant="scale" delay={0.1}>
          <TechSolarSystem groups={skills.groups} />
          <InterfacePreview />
        </Reveal>
      </div>
    </section>
  );
}
