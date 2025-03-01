"use client";
import { useAppTheme } from "@/hook/use-app-theme";
import { THEME } from "@/type/theme";
import { cn } from "@/util/cn";
import Image from "next/image";
import { memo } from "react";

type Props = {
  className: string;
};

const BackgroundPattern = ({ className }: Props) => {
  const { systemTheme, theme } = useAppTheme();
  const isDark =
    (theme === THEME.SYSTEM && systemTheme === THEME.DARK) ||
    theme === THEME.DARK;

  return (
    <Image
      className={cn("absolute max-dt:hidden", className)}
      src={`/asset/image/pattern-${isDark ? "dark" : "light"}.svg`}
      width="423"
      height="423"
      alt=""
    />
  );
};

export default memo(BackgroundPattern);
