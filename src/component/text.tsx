import { TEXT_VARIANT as TV, TextVariant } from "@/type/text-variant";
import { cn } from "@/util/cn";
import { memo, ReactNode } from "react";

type Props = Readonly<{
  children: ReactNode;
  className?: string;
  variant?: TextVariant;
}>;

const Text = ({ children, className, variant = TV.BASE }: Props) => {
  return (
    <span
      className={cn(
        {
          [TV.CODE]: "font-mono text-[1rem]/[1.46] -tracking-[0.025rem]",
          [TV.H1]: "text-[2.5rem]/[1.3] font-extrabold -tracking-[0.0625rem]",
          [TV.H2]: "text-[2rem]/[1.3] font-extrabold -tracking-[0.03125rem]",
          [TV.H3]: "text-[1.75rem]/[1.3] font-bold -tracking-[0.03125rem]",
          [TV.H4]: "text-[1.5rem]/[1.3] font-semibold -tracking-[0.03125rem]",
          [TV.H5]: "text-[1.25rem]/[1.3] font-semibold -tracking-[0.03125rem]",
          [TV.H6]: "text-[1.125rem]/[1.5] font-medium -tracking-[0.03125rem]",
          [TV.BASE]: "", // Use typography style inherited from root
          [TV.SM]: "text-[1rem]/[1.3] -tracking-[0.0125rem]",
        }[variant],
        className,
      )}
    >
      {children}
    </span>
  );
};

export default memo(Text);
