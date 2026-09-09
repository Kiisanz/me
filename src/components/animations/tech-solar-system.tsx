"use client";

import { useState, type CSSProperties } from "react";
import { CodeXml, Pause, Play } from "lucide-react";
import { TechIcon } from "@/components/atoms/tech-icon";
import { Icon, Button } from "@/components/atoms";

type Group = { title: string; technologies: string[]; featured: string[] };

export function TechSolarSystem({ groups }: { groups: Group[] }) {
  const [paused, setPaused] = useState(false);
  return (
    <div className="min-w-0 overflow-clip">
      <div
        aria-hidden="true"
        data-paused={paused}
        className="solar-system relative mx-auto aspect-square w-full max-w-[480px] scale-[0.85] sm:scale-95"
      >
        <div className="absolute inset-[36%] rounded-full bg-accent/10 blur-xl" />
        <div className="absolute top-1/2 left-1/2 grid size-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-accent/40 bg-surface sm:size-20">
          <Icon
            icon={CodeXml}
            className="size-5 text-accent sm:size-8"
            strokeWidth={1}
          />
        </div>
        {groups
          .filter((group) => group.featured.length > 0)
          .map((group, orbit) => {
            const radius = 22 + orbit * 11;
            return (
              <div
                key={group.title}
                className="absolute inset-0"
                style={
                  {
                    "--orbit-duration": `${110 + orbit * 30}s`,
                    "--orbit-direction": orbit % 2 ? "reverse" : "normal",
                    "--counter-direction": orbit % 2 ? "normal" : "reverse",
                  } as CSSProperties
                }
              >
                <div
                  className={`absolute rounded-full border ${orbit === 0 ? "border-accent/30" : "border-dashed border-muted/25"}`}
                  style={{ inset: `${50 - radius}%` }}
                />
                <div className="solar-orbit absolute inset-0">
                  {group.featured.map((technology, index) => {
                    const angle =
                      (index / group.featured.length) * Math.PI * 2 -
                      Math.PI / 2;
                    return (
                      <div
                        key={technology}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{
                          left: `${50 + Math.cos(angle) * radius}%`,
                          top: `${50 + Math.sin(angle) * radius}%`,
                        }}
                      >
                        <div
                          className="solar-counter relative"
                          title={technology}
                        >
                          <span
                            className={`grid size-6 place-items-center rounded-full border bg-background font-mono text-[8px] font-semibold shadow-sm sm:size-10 sm:text-[10px] ${orbit === 0 ? "border-accent/60 text-accent" : "border-muted/40 text-muted"}`}
                          >
                            <TechIcon
                              technology={technology}
                              className="size-3.5 sm:size-5"
                            />
                          </span>
                          <span className="absolute top-full left-1/2 mt-0.5 -translate-x-1/2 rounded-sm bg-background/95 px-1 text-[8px] whitespace-nowrap sm:text-[10px]">
                            {technology}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
        <span className="font-mono text-[9px] tracking-widest text-muted uppercase">
          Frontend / Backend / Data
        </span>
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setPaused((value) => !value)}
          aria-label={
            paused ? "Resume orbital animation" : "Pause orbital animation"
          }
          className="gap-2 text-xs text-muted motion-reduce:hidden"
        >
          <Icon icon={paused ? Play : Pause} size={12} />
          {paused ? "Resume" : "Pause"}
        </Button>
      </div>
    </div>
  );
}
