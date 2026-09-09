import { Heading, Text } from "@/components/atoms";
import type { CaseStudy } from "@/data/case-studies";

export function ProjectCaseStudy({ study }: { study: CaseStudy }) {
  return (
    <div className="mt-12 space-y-12">
      {study.integrations && (
        <section aria-labelledby="integrations">
          <Heading id="integrations" variant="subtitle">
            Marketplace integrations
          </Heading>
          <ul className="mt-4 flex flex-wrap gap-3">
            {study.integrations.map((name) => (
              <li key={name} className="border border-line px-4 py-2 text-sm">
                {name}
              </li>
            ))}
          </ul>
        </section>
      )}
      <section aria-labelledby="contributions">
        <Heading id="contributions" variant="subtitle">
          My contributions
        </Heading>
        <Text tone="muted" variant="small" className="mt-3">
          {study.team}
        </Text>
        <div className="mt-6 space-y-6">
          {study.contributions.map((item, index) => (
            <div key={item.title} className="border-l border-line pl-5">
              <span
                aria-hidden="true"
                className="font-mono text-xs text-accent"
              >
                0{index + 1}
              </span>
              <Heading as="h3" variant="subtitle" className="mt-2 text-lg">
                {item.title}
              </Heading>
              <Text tone="muted" variant="small" className="mt-2">
                {item.description}
              </Text>
            </div>
          ))}
        </div>
      </section>
      <section aria-labelledby="challenge">
        <Heading id="challenge" variant="subtitle">
          {study.challengeTitle}
        </Heading>
        <Text tone="muted" className="mt-4">
          {study.challenge}
        </Text>
      </section>
      <section aria-labelledby="outcome">
        <Heading id="outcome" variant="subtitle">
          Outcome
        </Heading>
        <Text tone="muted" className="mt-4">
          {study.outcome}
        </Text>
      </section>
      <aside className="border border-line bg-surface/40 p-5">
        <Heading variant="eyebrow">Confidential project</Heading>
        <Text tone="muted" variant="small" className="mt-3">
          {study.confidentiality}
        </Text>
      </aside>
    </div>
  );
}
