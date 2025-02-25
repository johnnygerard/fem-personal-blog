import { cn } from "@/util/cn";
import { memo } from "react";

type Props = {
  className?: string;
};

const Divider = ({ className }: Props) => (
  <hr
    className={cn(
      "my-300 border-neutral-200 first:border-8 dark:border-neutral-700",
      className,
    )}
  />
);

export default memo(Divider);
