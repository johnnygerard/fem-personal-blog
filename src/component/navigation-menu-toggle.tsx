"use client";
import AppFocusRing from "@/component/app-focus-ring";
import IconClose from "@/component/svg/icon-close";
import IconMenu from "@/component/svg/icon-menu";
import { cn } from "@/util/cn";
import { ButtonHTMLAttributes, memo, RefObject } from "react";

type Props = {
  isExpanded: boolean;
  triggerRef: RefObject<HTMLButtonElement | null>;
  triggerProps: ButtonHTMLAttributes<HTMLButtonElement>;
};

const NavigationMenuToggle = ({
  isExpanded,
  triggerRef,
  triggerProps,
}: Props) => {
  const NavigationMenuIcon = isExpanded ? IconClose : IconMenu;

  return (
    <AppFocusRing>
      <button
        ref={triggerRef}
        {...triggerProps}
        aria-label="Navigation menu"
        type="button"
        className={cn(
          "h-10 w-10 rounded-10 bg-transparent p-2.5 transition-[background-color]",
          isExpanded && "bg-neutral-700 dark:bg-neutral-0",
        )}
      >
        <NavigationMenuIcon
          aria-hidden="true"
          className={cn(
            "animate-fade-in",
            isExpanded
              ? "text-neutral-0 dark:text-neutral-900"
              : "text-neutral-700 dark:text-neutral-0",
          )}
        />
      </button>
    </AppFocusRing>
  );
};

export default memo(NavigationMenuToggle);
