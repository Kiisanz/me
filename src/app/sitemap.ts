import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: portfolio.siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...portfolio.projects.map((project) => ({
      url: `${portfolio.siteUrl}/projects/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
