import type { MetadataRoute } from "next";
import { portfolio } from "@/data/portfolio";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${portfolio.name} — ${portfolio.role}`,
    short_name: portfolio.name,
    description: portfolio.intro,
    start_url: "/",
    display: "standalone",
    background_color: "#191b17",
    theme_color: "#191b17",
    icons: [
      { src: "/icon", sizes: "256x256", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
