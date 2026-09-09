import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      className={cn("mx-auto max-w-[1440px] px-4 sm:px-12 lg:px-20", className)}
      {...props}
    />
  );
}
