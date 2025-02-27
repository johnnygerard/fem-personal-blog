import Text from "@/component/text";
import { cn } from "@/util/cn";
import { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  hasDecoration?: true;
  level: 1 | 2 | 3 | 4 | 5 | 6;
  styleLevel?: 1 | 2 | 3 | 4 | 5 | 6;
};

const Heading = ({
  children,
  className,
  hasDecoration,
  level,
  styleLevel = level,
}: Props) => {
  const Tag = `h${level}` as const;

  return (
    <Tag className={cn("text-neutral-700 dark:text-neutral-0", className)}>
      <Text
        className={cn(hasDecoration && "relative")}
        variant={`h${styleLevel}`}
      >
        {children}
        {hasDecoration && (
          <span
            aria-hidden="true"
            className={cn(
              "h-0.75 w-10 bg-blue-500",
              "absolute -end-2.5 bottom-2 translate-x-full rtl:-translate-x-full",
            )}
          />
        )}
      </Text>
    </Tag>
  );
};

export default memo(Heading);
