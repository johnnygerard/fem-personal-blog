"use client";
import AppFocusRing from "@/component/app-focus-ring";
import Text from "@/component/text";
import { cn } from "@/util/cn";
import { memo } from "react";
import { Link, LinkProps } from "react-aria-components";

type Props = LinkProps & {
  variant?: "bare" | "primary";
};

const AppLink = ({
  children,
  className,
  variant = "bare",
  ...props
}: Props) => {
  return variant === "bare" ? (
    <AppFocusRing>
      <Link className={className} {...props}>
        {children}
      </Link>
    </AppFocusRing>
  ) : (
    <Text
      className={cn(
        "text-neutral-700 dark:text-neutral-0",
        "underline decoration-[0.1875rem] [text-underline-position:under]",
        "decoration-blue-500 dark:decoration-blue-700",
        className,
      )}
      variant="h6"
    >
      <AppFocusRing>
        <Link
          className="rounded-8 transition-opacity data-[hovered]:opacity-70"
          {...props}
        >
          {children}
        </Link>
      </AppFocusRing>
    </Text>
  );
};

export default memo(AppLink);
