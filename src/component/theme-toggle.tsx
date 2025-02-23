"use client";
import IconMoon from "@/component/svg/icon-moon";
import IconSun from "@/component/svg/icon-sun";
import { useAppTheme } from "@/hook/use-app-theme";
import { THEME } from "@/type/theme";
import { cn } from "@/util/cn";
import { memo } from "react";
import { ToggleButton } from "react-aria-components";

const ThemeToggle = () => {
  const { systemTheme, theme, setTheme } = useAppTheme();
  const isDark =
    theme === THEME.DARK ||
    (theme === THEME.SYSTEM && systemTheme === THEME.DARK);

  return (
    <ToggleButton
      className={cn(
        "grid place-items-center",
        "h-10 w-10 rounded-8 border border-neutral-200 bg-neutral-100",
        "dark:border-neutral-700 dark:bg-neutral-900",
      )}
      isSelected={isDark}
      onChange={() => {
        setTheme(isDark ? THEME.LIGHT : THEME.DARK);
      }}
      aria-label="Dark theme"
    >
      {({ isSelected }) => {
        const Icon = isSelected ? IconSun : IconMoon;

        return <Icon aria-hidden="true" className="h-4 w-4" />;
      }}
    </ToggleButton>
  );
};

export default memo(ThemeToggle);
