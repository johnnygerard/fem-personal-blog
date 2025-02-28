import { cn } from "@/util/cn";
import { memo, ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  isOrdered: boolean;
};

const List = ({ children, className, isOrdered }: Props) => {
  const Tag = isOrdered ? "ol" : "ul";

  return (
    <Tag
      className={cn(
        "flex list-outside flex-col gap-150 ps-7 marker:font-bold",
        isOrdered ? "list-decimal" : "list-disc",
        className,
      )}
    >
      {children}
    </Tag>
  );
};

export default memo(List);
