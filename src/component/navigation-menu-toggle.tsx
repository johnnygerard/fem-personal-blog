"use client";
import AppFocusRing from "@/component/app-focus-ring";
import IconClose from "@/component/svg/icon-close";
import IconMenu from "@/component/svg/icon-menu";
import { cn } from "@/util/cn";
import { memo, useState } from "react";
import { ToggleButton } from "react-aria-components";

const NavigationMenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppFocusRing>
      <ToggleButton
        aria-label="Menu"
        className={cn(
          "h-10 w-10 rounded-10 bg-transparent p-2.5 transition-[background-color]",
          isOpen && "bg-neutral-700 dark:bg-neutral-0",
        )}
        isSelected={isOpen}
        onChange={setIsOpen}
      >
        {isOpen ? (
          <IconClose className="animate-fade-in text-neutral-0 dark:text-neutral-900" />
        ) : (
          <IconMenu className="animate-fade-in text-neutral-700 dark:text-neutral-0" />
        )}
      </ToggleButton>
    </AppFocusRing>
  );
};

export default memo(NavigationMenuToggle);
