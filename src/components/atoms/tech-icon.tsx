import {
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiGit,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiVite,
  SiWebpack,
  SiTailwindcss,
  SiShadcnui,
  SiBootstrap,
  SiGo,
  SiNestjs,
  SiExpress,
  SiLaravel,
  SiCodeigniter,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiTypeorm,
  SiSequelize,
} from "react-icons/si";
import type { IconType } from "react-icons";
import { Boxes } from "lucide-react";
import { cn } from "@/lib/utils";

const logos: Record<string, IconType> = {
  Docker: SiDocker,
  "GitHub Actions": SiGithubactions,
  NGINX: SiNginx,
  Git: SiGit,
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  Vite: SiVite,
  Webpack: SiWebpack,
  "Tailwind CSS": SiTailwindcss,
  "shadcn/ui": SiShadcnui,
  "Bootstrap 5": SiBootstrap,
  Go: SiGo,
  NestJS: SiNestjs,
  Express: SiExpress,
  Laravel: SiLaravel,
  CodeIgniter: SiCodeigniter,
  MySQL: SiMysql,
  PostgreSQL: SiPostgresql,
  Redis: SiRedis,
  TypeORM: SiTypeorm,
  Sequelize: SiSequelize,
};

/** Decorative alongside a visible technology name; unknown brands use a neutral tool icon. */
export function TechIcon({
  technology,
  className,
}: {
  technology: string;
  className?: string;
}) {
  const Logo = logos[technology] ?? Boxes;
  return (
    <Logo
      aria-hidden="true"
      focusable="false"
      className={cn("size-4 shrink-0", className)}
    />
  );
}
