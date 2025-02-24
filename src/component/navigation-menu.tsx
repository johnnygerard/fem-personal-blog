import AppLink from "@/component/app-link";
import { LINKS } from "@/constants";
import { cn } from "@/util/cn";
import { memo } from "react";

type Props = {
  className?: string;
};

const NavigationMenu = ({ className }: Props) => {
  return (
    <nav
      className={cn(
        "rounded-10 p-150",
        "border border-neutral-200 dark:border-neutral-700",
        "bg-neutral-0 dark:bg-neutral-800",
        "shadow-[0px_8px_15px_rgba(8,6,25,0.06)]",
        className,
      )}
    >
      <ul className="divide-y">
        {LINKS.map(({ href, label }) => (
          <li
            key={href}
            className={cn(
              "py-75 first:pt-0 last:pb-0",
              "border-neutral-200 dark:border-neutral-700",
            )}
          >
            <AppLink href={href}>{label}</AppLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(NavigationMenu);
