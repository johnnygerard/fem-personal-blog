"use client";
import { cn } from "@/util/cn";
import { useThemeContext } from "next-theme-provider";
import Image from "next/image";
import { memo } from "react";

type Props = {
  className: string;
};

const BackgroundPattern = ({ className }: Props) => {
  const { isDark } = useThemeContext();

  return isDark !== null ? (
    <Image
      className={cn("absolute max-dt:hidden", className)}
      src={`/asset/image/pattern-${isDark ? "dark" : "light"}.svg`}
      width="423"
      height="423"
      alt=""
    />
  ) : null;
};

export default memo(BackgroundPattern);
