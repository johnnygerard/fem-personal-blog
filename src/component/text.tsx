import { cn } from "@/util/cn";
import { memo } from "react";

const VARIANT = {
  CODE: "code",
  H1: "h1",
  H2: "h2",
  H3: "h3",
  H4: "h4",
  H5: "h5",
  H6: "h6",
  BASE: "base",
  SM: "sm",
} as const;

type Props = Readonly<{
  children: string;
  className?: string;
  variant?: (typeof VARIANT)[keyof typeof VARIANT];
}>;

// Note: While variants h1-h6 are named just like the HTML heading elements, they
// do not always match the HTML heading levels in this application.
const Text = ({ children, className, variant = VARIANT.BASE }: Props) => {
  return (
    <span
      className={cn(
        {
          [VARIANT.CODE]: "font-mono text-[1rem]/[1.46] -tracking-[0.025rem]",
          [VARIANT.H1]:
            "text-[2.5rem]/[1.3] font-extrabold -tracking-[0.0625rem]",
          [VARIANT.H2]:
            "text-[2rem]/[1.3] font-extrabold -tracking-[0.03125rem]",
          [VARIANT.H3]: "text-[1.75rem]/[1.3] font-bold -tracking-[0.03125rem]",
          [VARIANT.H4]:
            "text-[1.5rem]/[1.3] font-semibold -tracking-[0.03125rem]",
          [VARIANT.H5]:
            "text-[1.25rem]/[1.3] font-semibold -tracking-[0.03125rem]",
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
