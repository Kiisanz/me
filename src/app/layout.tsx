import type { Metadata, Viewport } from "next";
import { Providers } from "@/components/providers";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(portfolio.siteUrl),
  title: {
    default: `${portfolio.name} — ${portfolio.role}`,
    template: `%s — ${portfolio.name}`,
  },
  description: portfolio.intro,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: portfolio.siteUrl,
    siteName: `${portfolio.name} — ${portfolio.role}`,
    title: `${portfolio.name} — ${portfolio.role}`,
    description: portfolio.intro,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolio.name} — ${portfolio.role}`,
    description: portfolio.intro,
  },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: `${portfolio.name} — Portfolio`,
  authors: [{ name: portfolio.name }],
  keywords: [
    "frontend developer",
    "React",
    "Next.js",
    "TypeScript",
    "web developer",
    "full-stack",
    "UI engineer",
    "portfolio",
  ],
  category: "Portfolio",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f6f2" },
    { media: "(prefers-color-scheme: dark)", color: "#191b17" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
