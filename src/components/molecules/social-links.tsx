import { ArrowUpRight } from "lucide-react";
import {
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaGlobe,
} from "react-icons/fa";
import { Icon, TextLink } from "@/components/atoms";

export type SocialLink = {
  platform: "github" | "linkedin" | "instagram" | "facebook" | "website";
  label: string;
  href: string;
};

const icons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  facebook: FaFacebookF,
  website: FaGlobe,
};

export function SocialLinks({ links }: { links: SocialLink[] }) {
  if (!links.length) return null;
  return (
    <nav aria-label="Social profiles" className="mt-8">
      <ul className="flex flex-wrap gap-3">
        {links.map((link) => {
          const Logo = icons[link.platform];
          return (
            <li key={link.href}>
              <TextLink
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${link.label} (opens in a new tab)`}
                className="group inline-flex min-h-11 items-center gap-3 border border-line px-4 py-2.5 text-sm hover:border-accent hover:bg-surface focus-visible:border-accent"
              >
                <Logo aria-hidden="true" focusable="false" className="size-4" />
                <span>{link.label}</span>
                <Icon
                  icon={ArrowUpRight}
                  size={14}
                  className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </TextLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
