"use client";

import { Moon, Sun } from "lucide-react";
import { Icon } from "@/components/atoms/icon";
import { IconButton } from "@/components/atoms/icon-button";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  return (
    <IconButton
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle color theme"
    >
      <Icon
        icon={Sun}
        size={16}
        strokeWidth={1.5}
        className="hidden dark:block"
      />
      <Icon icon={Moon} size={16} strokeWidth={1.5} className="dark:hidden" />
    </IconButton>
  );
}
