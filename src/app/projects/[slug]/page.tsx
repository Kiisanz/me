import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { caseStudies } from "@/data/case-studies";
import { ProjectCaseStudy } from "@/components/organisms/project-case-study";
import { TechIcon } from "@/components/atoms/tech-icon";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import {
  Badge,
  Container,
  Eyebrow,
  Heading,
  Icon,
  Text,
  TextLink,
} from "@/components/atoms";
import { PageEntrance } from "@/components/animations/page-entrance";
import { ThemeToggle } from "@/components/theme-toggle";
import { portfolio } from "@/data/portfolio";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolio.projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = portfolio.projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const pageUrl = `${portfolio.siteUrl}/projects/${project.slug}`;
  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      type: "website",
      url: pageUrl,
      title: `${project.title} — ${portfolio.name}`,
      description: project.description,
      images: [
        {
          url: project.image
            ? `${portfolio.siteUrl}${project.image.src}`
            : `${portfolio.siteUrl}/opengraph-image`,
          width: project.image?.width ?? 1200,
          height: project.image?.height ?? 630,
          alt: project.image?.alt ?? project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${portfolio.name}`,
      description: project.description,
      images: [
        project.image
          ? `${portfolio.siteUrl}${project.image.src}`
          : `${portfolio.siteUrl}/opengraph-image`,
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = portfolio.projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const study = caseStudies[slug];
  const next =
    portfolio.projects[
      (portfolio.projects.indexOf(project) + 1) % portfolio.projects.length
    ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${portfolio.siteUrl}/projects/${project.slug}`,
    image: project.image
      ? `${portfolio.siteUrl}${project.image.src}`
      : `${portfolio.siteUrl}/opengraph-image`,
    genre: project.category,
    keywords: project.stack,
    author: {
      "@type": "Person",
      name: portfolio.name,
      url: portfolio.siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: project.client,
    },
  };

  return (
    <Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="flex min-h-24 items-center justify-between border-b border-line">
        <TextLink
          href="/#work"
          className="inline-flex min-h-11 items-center gap-2 text-sm"
        >
          <Icon icon={ArrowLeft} />
          All projects
        </TextLink>
        <ThemeToggle />
      </header>
      <main className="py-16 sm:py-24">
        <PageEntrance>
          <Eyebrow className="mb-5 text-muted">
            Project {project.number} / {project.category}
          </Eyebrow>
          <Heading
            as="h1"
            variant="display"
            className="text-[clamp(2.75rem,10vw,8rem)] break-words"
          >
            {project.title}
          </Heading>
          <Text tone="muted" className="mt-6">
            {project.client}
          </Text>
        </PageEntrance>
        {project.image && (
          <figure className="mt-10 border border-line bg-surface p-2 sm:p-4">
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              sizes="(min-width: 1440px) 1280px, 95vw"
              priority
              className="h-auto w-full"
            />
            <figcaption className="px-1 pt-3 text-xs leading-relaxed text-muted">
              {project.image.caption}
            </figcaption>
          </figure>
        )}
        {study && (
          <dl className="mt-10 grid gap-6 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Timeline", study.period],
              ["Role", study.role],
              ["Users", study.audience],
              ["Status", study.status],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="font-mono text-[10px] tracking-widest text-muted uppercase">
                  {label}
                </dt>
                <dd className="mt-2 text-sm">{value}</dd>
              </div>
            ))}
          </dl>
        )}
        <div className="mt-14 grid gap-12 border-t border-line pt-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <Reveal>
            <section aria-labelledby="overview">
              <Heading id="overview" variant="subtitle">
                Overview
              </Heading>
              <Text tone="muted" className="mt-5 max-w-2xl">
                {study?.overview ?? project.description}
              </Text>
              {project.contribution && !study && (
                <div className="mt-8 border-l-2 border-accent pl-5">
                  <Heading as="h2" variant="eyebrow">
                    My contribution
                  </Heading>
                  <Text tone="muted" variant="small" className="mt-3">
                    {project.contribution}
                  </Text>
                </div>
              )}
              <Heading id="features" variant="subtitle" className="mt-12">
                Features
              </Heading>
              <ul
                aria-labelledby="features"
                className="mt-5 divide-y divide-line"
              >
                {project.features.map((feature, index) => (
                  <li key={feature} className="flex items-center gap-4 py-4">
                    <span
                      aria-hidden="true"
                      className="font-mono text-xs text-accent"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              {study && <ProjectCaseStudy study={study} />}
            </section>
          </Reveal>
          <Reveal delay={0.1}>
            <section
              aria-labelledby="stack"
              className="h-fit border border-line p-6"
            >
              <Heading id="stack" variant="eyebrow">
                Technology stack
              </Heading>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <li key={technology}>
                    <Badge className="gap-2">
                      <TechIcon technology={technology} />
                      {technology}
                    </Badge>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>
        {project.gallery && (
          <section
            aria-labelledby="screens-title"
            className="mt-12 border-t border-line pt-8"
          >
            <Heading id="screens-title" variant="subtitle">
              More interface previews
            </Heading>
            <div className="mt-6 space-y-8">
              {project.gallery.map((image) => (
                <figure
                  key={image.src}
                  className="border border-line bg-surface p-2 sm:p-4"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    sizes="(min-width: 1440px) 1280px, 95vw"
                    className="h-auto w-full"
                  />
                  <figcaption className="px-1 pt-3 text-xs leading-relaxed text-muted">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </section>
        )}
      </main>
      <footer className="flex flex-wrap items-center justify-between gap-6 border-t border-line py-8">
        <TextLink href="/#work" variant="nav" className="text-sm">
          Back to selected work
        </TextLink>
        <TextLink
          href={`/projects/${next.slug}`}
          className="inline-flex items-center gap-3 text-sm"
        >
          Next project: {next.title}
          <Icon icon={ArrowUpRight} />
        </TextLink>
      </footer>
    </Container>
  );
}
