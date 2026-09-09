import { ArrowLeft } from "lucide-react";
import { Container, Heading, Icon, TextLink } from "@/components/atoms";
import { ThemeToggle } from "@/components/theme-toggle";

export default function NotFound() {
  return (
    <Container>
      <header className="flex min-h-24 items-center justify-between border-b border-line">
        <TextLink
          href="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm"
        >
          <Icon icon={ArrowLeft} />
          Back home
        </TextLink>
        <ThemeToggle />
      </header>
      <main className="flex min-h-[60vh] flex-col items-start justify-center py-16 sm:py-24">
        <p className="font-mono text-xs tracking-widest text-muted uppercase">
          Error 404
        </p>
        <Heading
          as="h1"
          variant="display"
          className="mt-6 text-[clamp(2.75rem,10vw,8rem)] break-words"
        >
          Page not found
        </Heading>
        <TextLink variant="underline" href="/" className="mt-10">
          Return to selected work
        </TextLink>
      </main>
    </Container>
  );
}
