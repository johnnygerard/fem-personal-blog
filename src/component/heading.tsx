import Text from "@/component/text";
import { cn } from "@/util/cn";
import { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  level: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading = ({ children, className, level }: Props) => {
  const Tag = `h${level}` as const;

  return (
    <Tag
      className={cn(
        level > 1 && "mt-150",
        "text-neutral-700 dark:text-neutral-0",
        className,
      )}
    >
      <Text variant={Tag}>{children}</Text>
    </Tag>
  );
};

export default memo(Heading);
