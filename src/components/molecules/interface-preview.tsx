"use client";

import { useId, useState } from "react";
import { Check, MousePointer2 } from "lucide-react";
import { Button, Icon } from "@/components/atoms";

const focuses = {
  interfaces: {
    label: "Frontend development",
    description:
      "Responsive layouts and reusable components, with care for the details.",
  },
  accessibility: {
    label: "Accessible interactions",
    description:
      "Clear labels, visible focus, and controls that work with a keyboard.",
  },
  integration: {
    label: "API integration",
    description:
      "Connecting interfaces to backend services and handling application state.",
  },
};

type Focus = keyof typeof focuses;

export function InterfacePreview() {
  const id = useId();
  const [focus, setFocus] = useState<Focus>("interfaces");
  const [saved, setSaved] = useState(false);
  return (
    <div className="mx-auto mt-6 w-full max-w-sm border border-line bg-background p-5">
      <div className="mb-4 flex items-center justify-between gap-3 border-b border-line pb-3">
        <span className="font-mono text-[10px] tracking-widest text-muted uppercase">
          A little interface, live
        </span>
        <span aria-hidden="true" className="font-mono text-xs text-accent">
          &lt;Select /&gt;
        </span>
      </div>
      <label htmlFor={id} className="mb-2 block text-xs font-medium">
        Explore my focus
      </label>
      <select
        id={id}
        value={focus}
        onChange={(event) => {
          setFocus(event.target.value as Focus);
          setSaved(false);
        }}
        aria-describedby={`${id}-description`}
        className="min-h-11 w-full rounded-none border border-line bg-background px-3 text-sm text-foreground transition-colors hover:border-accent focus-visible:border-accent"
      >
        {Object.entries(focuses).map(([value, item]) => (
          <option key={value} value={value}>
            {item.label}
          </option>
        ))}
      </select>
      <p
        id={`${id}-description`}
        className="mt-3 min-h-16 text-sm leading-relaxed text-muted"
      >
        {focuses[focus].description}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Button
          size="sm"
          onClick={() => setSaved((value) => !value)}
          aria-pressed={saved}
          className="min-h-11 rounded-sm transition-[background-color,transform] hover:-translate-y-0.5 active:translate-y-0"
        >
          <Icon icon={saved ? Check : MousePointer2} size={14} />
          {saved ? "Selected" : "Try selecting"}
        </Button>
        <span role="status" className="text-xs text-muted">
          {saved ? "Selection updated." : "Hover, focus, or click."}
        </span>
      </div>
      <p className="mt-4 border-t border-line pt-3 text-[10px] text-muted">
        Interactive preview · Selection stays on this page.
      </p>
    </div>
  );
}
