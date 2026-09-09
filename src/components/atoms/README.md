# Atoms

Small visual primitives, built from the shared color and typography tokens in `src/app/globals.css`. Import from `@/components/atoms` or an individual file. These components do not require a client boundary; interactive callers supply their own `"use client"` boundary.

| Atom         | Purpose                                          | Options                                                                        |
| ------------ | ------------------------------------------------ | ------------------------------------------------------------------------------ |
| `Button`     | Native button for actions                        | `variant`: primary, outline, ghost; `size`: sm, md, icon                       |
| `IconButton` | Compact action with a required accessible name   | Required `aria-label`; button variants                                         |
| `TextLink`   | Next.js link for navigation, anchors, and email  | `variant`: plain, nav, underline                                               |
| `Heading`    | Semantic headings, with independent visual sizes | `as`: h1–h6; `variant`: display, title, subtitle, eyebrow                      |
| `Text`       | Body and supporting copy                         | `as`: p, span; `variant`: body, small, caption; `tone`: default, muted, accent |
| `Eyebrow`    | Short uppercase introductory copy                | Native paragraph props                                                         |
| `Icon`       | Consistent Lucide size and stroke                | `icon`, optional `label`, Lucide styling props                                 |
| `Badge`      | Noninteractive tag                               | Native span props                                                              |
| `Container`  | Responsive page width and gutters                | Native div props                                                               |

```tsx
import { Badge, Heading, Text, TextLink } from "@/components/atoms";

export function Introduction() {
  return (
    <>
      <Badge>Independent developer</Badge>
      <Heading as="h1" variant="display">
        Made with care.
      </Heading>
      <Text tone="muted">Design and development for thoughtful ideas.</Text>
      <TextLink href="#work" variant="underline">
        Explore work
      </TextLink>
    </>
  );
}
```

Use buttons for actions and links for navigation. `Button` defaults to `type="button"`; use `type="submit"` explicitly in forms. Native `disabled` behavior is supported. `Icon` is decorative by default; supply `label` only when the icon conveys meaning without nearby text. In an `IconButton`, label the button and leave its icon decorative.

All atoms accept `className` overrides through `cn()`. Keep layout spacing at the call site. Choose heading levels for document structure, independently of their visual variant. Native props, including React 19 refs, pass through to the underlying element (the icon wrapper exposes Lucide styling props without a ref).

As the design grows, place combinations of atoms in `molecules/`, full sections in `organisms/`, and reusable page arrangements in `templates/`. Create these layers when actual components need them. Atoms should not import those layers, portfolio data, or theme state. The existing theme toggle composes atoms while owning its theme behavior.
