# Aras — portfolio starter

A minimal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, Motion (formerly Framer Motion), and Lucide icons.

## Start

Requires Node.js 22.13+ (Node 24 LTS recommended) and npm.

```sh
npm install
npm run dev
```

Open http://localhost:3000.

## Customize

- `src/data/portfolio.ts`: name, email, introduction, and sample projects. Replace the example email and concept projects before publishing.
- `src/app/page.tsx`: page sections and about copy.
- `src/app/globals.css`: light/dark palette, typography, and artwork.
- `src/app/layout.tsx`: page metadata.
- `src/components/`: theme provider, theme toggle, and reduced-motion-aware animation.
- `src/lib/utils.ts`: `cn()` combines conditional classes and resolves Tailwind conflicts.

Lucide icons use a restrained outline style. `next-themes` follows the system theme and persists manual changes. The starter uses system fonts and CSS artwork, so no font service or image API is needed. Contact links use your email client; no backend is required.

## Checks and production

```sh
npm run lint
npm run typecheck
npm run format:check
npm run build
npm start
```

Use `npm run format` to format files and sort Tailwind classes. Deploy to a Next.js-compatible host using the build/start scripts. No environment variables are required.
