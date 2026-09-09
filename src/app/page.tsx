import { SocialLinks } from "@/components/molecules/social-links";
import { SectionBackdrop } from "@/components/atoms/section-backdrop";
import { Experience } from "@/components/organisms/experience";
import { Skills } from "@/components/organisms/skills";
import { JourneyLine } from "@/components/animations/project-motion";
import { ProjectCard } from "@/components/molecules/project-card";
import { Hero } from "@/components/organisms/hero";
import {
  Badge,
  Container,
  Eyebrow,
  Heading,
  Icon,
  Text,
  TextLink,
} from "@/components/atoms";
import { ArrowUpRight, Asterisk, MoveUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { ThemeToggle } from "@/components/theme-toggle";
import { portfolio } from "@/data/portfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolio.name,
  url: portfolio.siteUrl,
  jobTitle: portfolio.role,
  email: portfolio.email,
  image: `${portfolio.siteUrl}/opengraph-image`,
  alumniOf: {
    "@type": "EducationalOrganization",
    name: portfolio.about.education.school,
  },
  knowsAbout: [
    ...portfolio.skills.groups.flatMap((group) => group.technologies),
    ...portfolio.skills.groups.flatMap((group) => group.featured),
  ],
  sameAs: portfolio.socials.map((social) => social.href),
};

export default function Home() {
  return (
    <Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TextLink
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-background focus:p-4"
      >
        Skip to content
      </TextLink>
      <header className="flex min-h-24 flex-wrap items-center justify-between gap-3 border-b border-line py-4 sm:py-5">
        <TextLink
          href="#"
          aria-label={`${portfolio.name} home`}
          className="flex items-center gap-2 text-xl font-semibold tracking-tight"
        >
          {portfolio.name.toLowerCase()}
          <Icon icon={Asterisk} size={20} className="text-accent" />
        </TextLink>
        <nav
          aria-label="Main navigation"
          className="flex w-full flex-wrap items-center justify-between gap-0.5 text-xs sm:w-auto sm:justify-start sm:gap-2 sm:text-sm"
        >
          <TextLink variant="nav" className="nav-rectangle" href="#work">
            Work
          </TextLink>
          <TextLink variant="nav" className="nav-rectangle" href="#about">
            About
          </TextLink>
          <TextLink
            variant="nav"
            className="nav-rectangle inline-flex"
            href="#contact"
          >
            Contact
          </TextLink>
          <TextLink variant="nav" className="nav-rectangle" href="#skills">
            Skills
          </TextLink>
          <ThemeToggle />
        </nav>
      </header>
      <main id="main">
        <div className="relative isolate">
          <Hero
            name={portfolio.name}
            cvHref={portfolio.cvUrl}
            {...portfolio.hero}
          />
          <section id="work" className="relative scroll-mt-8 py-10 sm:py-14">
            <JourneyLine />
            <div className="relative mb-6 flex flex-wrap items-center justify-between gap-4 bg-background py-4">
              <Heading variant="eyebrow">Selected work</Heading>
              <span className="text-xs text-muted">
                {portfolio.projects.length} projects / 01—
                {String(portfolio.projects.length).padStart(2, "0")}
              </span>
            </div>
            <div className="relative flex flex-col gap-12 pl-2 md:gap-20 md:pl-0">
              {portfolio.projects.map((project, index) => (
                <Reveal
                  key={project.number}
                  variant={index % 2 === 0 ? "left" : "right"}
                >
                  <ProjectCard project={project} reverse={index % 2 === 1} />
                </Reveal>
              ))}
            </div>
          </section>
        </div>
        <section
          id="about"
          className="relative isolate grid scroll-mt-8 gap-6 border-t border-line py-10 sm:gap-8 sm:py-14 md:grid-cols-[1fr_2fr]"
        >
          <SectionBackdrop variant="lines" />
          <Heading variant="eyebrow">A little about me</Heading>
          <Reveal variant="fade">
            <Heading as="h3" className="max-w-2xl">
              Frontend comes first.
              <br />
              <span className="font-serif text-muted italic">
                The full picture matters.
              </span>
            </Heading>
            <Text tone="muted" className="mt-7 max-w-lg">
              I’m {portfolio.name}, a frontend-first developer. My focus is on
              responsive layouts, accessible interactions, and reusable
              components that make the web feel intuitive. When a project needs
              it, I also build the APIs and database integrations behind the
              experience.
            </Text>
            <dl className="mt-8 grid gap-6 border-y border-line py-6 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[10px] tracking-widest text-muted uppercase">
                  Born
                </dt>
                <dd className="mt-2 text-sm">
                  <time dateTime={portfolio.about.birthDate}>
                    {portfolio.about.birthDateLabel}
                  </time>
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] tracking-widest text-muted uppercase">
                  Education
                </dt>
                <dd className="mt-2 text-sm">
                  <span className="block font-medium">
                    {portfolio.about.education.school}
                  </span>
                  <span className="mt-1 block text-muted">
                    {portfolio.about.education.program} · Graduated{" "}
                    {portfolio.about.education.graduationYear}
                  </span>
                </dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Frontend development",
                "Accessible interfaces",
                "Reusable components",
                "APIs & databases",
              ].map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Reveal>
        </section>
        <Experience entries={portfolio.experience} />
        <Skills skills={portfolio.skills} />
        <Reveal variant="scale">
          <section
            id="contact"
            className="relative isolate border-t border-line py-10 sm:py-14"
          >
            <SectionBackdrop variant="glow" />
            <Eyebrow className="mb-7">Have a web project in mind?</Eyebrow>
            <TextLink
              href={`mailto:${portfolio.email}`}
              className="group flex w-fit flex-wrap items-center gap-x-4 gap-y-2 text-[clamp(2.25rem,7vw,6.5rem)] leading-none tracking-[-0.06em]"
            >
              Let’s build <span className="font-serif italic">something.</span>
              <Icon
                icon={MoveUpRight}
                className="size-8 text-accent transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:size-14"
                strokeWidth={1}
              />
            </TextLink>
            <TextLink
              href={`mailto:${portfolio.email}`}
              className="mt-8 inline-flex min-h-11 max-w-full items-center gap-2 text-sm break-all text-muted"
            >
              {portfolio.email}
              <Icon icon={ArrowUpRight} size={14} />
            </TextLink>
            <SocialLinks links={portfolio.socials} />
          </section>
        </Reveal>
      </main>
      <Reveal variant="fade">
        <footer className="flex flex-wrap justify-between gap-4 border-t border-line py-7 text-xs text-muted">
          <span>
            © {new Date().getFullYear()} {portfolio.name}
          </span>
          <span>Made with intention.</span>
          <TextLink href="#" variant="nav">
            Back to top ↑
          </TextLink>
        </footer>
      </Reveal>
    </Container>
  );
}
