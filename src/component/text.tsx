import { cn } from "@/util/cn";
import { memo } from "react";

const VARIANT = {
  H6: "h6",
  BASE: "base",
  SM: "sm",
} as const;

type Props = Readonly<{
  children: string;
  className?: string;
  variant?: (typeof VARIANT)[keyof typeof VARIANT];
}>;

const Text = ({ children, className, variant = VARIANT.BASE }: Props) => {
  return (
    <span
      className={cn(
        {
          [VARIANT.H6]:
            "text-[1.125rem]/[1.5] font-medium -tracking-[0.03125rem]",
          [VARIANT.BASE]: "", // Use typography style inherited from root
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
