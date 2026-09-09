import { Button, type ButtonProps } from "./button";

export type IconButtonProps = Omit<
  ButtonProps,
  "size" | "aria-label" | "aria-labelledby"
> & {
  "aria-label": string;
};

export function IconButton({ variant = "outline", ...props }: IconButtonProps) {
  return <Button variant={variant} size="icon" {...props} />;
}
