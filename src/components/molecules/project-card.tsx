import Image from "next/image";
import { TechIcon } from "@/components/atoms/tech-icon";
import { ProjectMotion } from "@/components/animations/project-motion";
import { cn } from "@/lib/utils";
import { Users, Network, ArrowUpRight } from "lucide-react";
import { Badge, Heading, Icon, Text, TextLink } from "@/components/atoms";
import type { PortfolioProject } from "@/data/portfolio";

const artwork = {
  siempe: { icon: Network, color: "bg-[#d9e1e6] text-[#3d5364]" },
  hrms: { icon: Users, color: "bg-[#dedfd8] text-[#35443b]" },
};

export function ProjectCard({
  project,
  reverse = false,
}: {
  project: PortfolioProject;
  reverse?: boolean;
}) {
  const visual = artwork[project.style as keyof typeof artwork];
  return (
    <article className="group relative grid min-w-0 items-center gap-5 pl-5 sm:gap-8 sm:pl-8 md:grid-cols-2 md:gap-20 md:pl-0 lg:gap-28">
      <span className="absolute top-1/2 left-0 z-10 grid size-5 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line bg-background font-mono text-[8px] text-accent md:left-1/2">
        {project.number}
      </span>
      <div className={cn("min-w-0", reverse && "md:order-2")}>
        <ProjectMotion>
          {project.image ? (
            <figure className="border border-line bg-surface p-2 sm:p-3">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                sizes="(min-width: 1440px) 584px, (min-width: 768px) 45vw, 90vw"
                className="h-auto w-full"
              />
              <figcaption className="px-1 pt-3 pb-1 text-[10px] leading-relaxed text-muted">
                {project.image.caption}
              </figcaption>
            </figure>
          ) : (
            <div
              aria-hidden="true"
              className={`relative flex aspect-[1.15] flex-col items-center justify-center overflow-hidden sm:aspect-[1.3] ${visual.color}`}
            >
              <span className="absolute top-3 right-9 left-3 font-mono text-[10px] tracking-widest uppercase sm:top-5 sm:right-12 sm:left-5">
                {project.category}
              </span>
              <span className="absolute top-5 right-5 font-mono text-[10px]">
                {project.number}
              </span>
              <div className="absolute size-48 rounded-full border border-current opacity-10 transition-transform duration-700 group-hover:scale-110" />
              <Icon
                icon={visual.icon}
                size={28}
                strokeWidth={1}
                className="mb-5"
              />
              <span className="text-[clamp(1.75rem,7vw,3rem)] font-semibold tracking-[-0.06em]">
                {project.title}
              </span>
              <span className="absolute right-3 bottom-3 left-3 border-t border-current/20 pt-3 font-mono text-[9px] tracking-wider uppercase sm:right-5 sm:bottom-5 sm:left-5">
                {project.client}
              </span>
            </div>
          )}
        </ProjectMotion>
      </div>
      <div className="relative bg-background/95 py-4">
        <Heading as="h3" variant="subtitle" className="mt-5">
          {project.title}
        </Heading>
        <Text variant="small" tone="muted" className="mt-1">
          {project.category}
        </Text>
        <Text variant="small" tone="muted" className="mt-4">
          {project.description}
        </Text>
        <ul
          aria-label={`${project.title} features`}
          className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted"
        >
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2">
              <span
                aria-hidden="true"
                className="size-1 rounded-full bg-accent"
              />
              {feature}
            </li>
          ))}
        </ul>
        <ul
          aria-label={`${project.title} technologies`}
          className="mt-5 flex flex-wrap gap-2"
        >
          {project.stack.map((technology) => (
            <li key={technology}>
              <Badge className="gap-2 px-3 py-1.5">
                <TechIcon technology={technology} className="size-3.5" />
                {technology}
              </Badge>
            </li>
          ))}
        </ul>
        <TextLink
          href={`/projects/${project.slug}`}
          variant="underline"
          className="mt-6"
          aria-label={`View ${project.title} details`}
        >
          View details <Icon icon={ArrowUpRight} size={16} />
        </TextLink>
      </div>
    </article>
  );
}
