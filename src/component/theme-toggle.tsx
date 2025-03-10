"use client";
import AppFocusRing from "@/component/app-focus-ring";
import IconMoon from "@/component/svg/icon-moon";
import IconSun from "@/component/svg/icon-sun";
import { cn } from "@/util/cn";
import { useThemeContext } from "next-theme-provider";
import { memo } from "react";
import { ToggleButton } from "react-aria-components";

const ThemeToggle = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <AppFocusRing>
      <ToggleButton
        className={cn(
          "grid place-items-center",
          "h-10 w-10 rounded-8 border border-neutral-200 bg-neutral-100",
          "dark:border-neutral-700 dark:bg-neutral-900",
        )}
        onChange={toggleTheme}
        aria-label="Dark theme"
      >
        {[IconSun, IconMoon].map((Icon, index) => (
          <Icon
            key={index}
            aria-hidden
            className={cn(
              "size-4 animate-fade-in",
              Icon === IconSun ? "hidden dark:block" : "dark:hidden",
            )}
          />
        ))}
      </ToggleButton>
    </AppFocusRing>
  );
};

export default memo(ThemeToggle);
