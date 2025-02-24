import { cn } from "@/util/cn";
import { memo } from "react";

const VARIANT = {
  SM: "sm",
} as const;

type Props = Readonly<{
  children: string;
  className?: string;
  variant: (typeof VARIANT)[keyof typeof VARIANT];
}>;

const Text = ({ children, className, variant }: Props) => {
  return (
    <span
      className={cn(
        {
          [VARIANT.SM]: "text-[1rem]/[1.3] -tracking-[0.0125rem]",
        }[variant],
        className,
      )}
    >
      {children}
    </span>
  );
};

export default memo(Text);
