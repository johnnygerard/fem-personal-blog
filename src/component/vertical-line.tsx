import { cn } from "@/util/cn";
import { memo } from "react";

type Props = {
  side: "left" | "right";
};

const VerticalLine = ({ side }: Props) => {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute top-10 bottom-0 -z-10 w-[1px]",
        "bg-neutral-200 dark:bg-neutral-700",
        side === "left" ? "left-5 tb:left-2.25" : "right-5 tb:right-2.25",
      )}
    />
  );
};

export default memo(VerticalLine);
