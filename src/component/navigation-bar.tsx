"use client";
import AppLink from "@/component/app-link";
import Text from "@/component/text";
import { LINKS } from "@/constants";
import { cn } from "@/util/cn";
import { usePathname } from "next/navigation";
import { memo } from "react";

const NavigationBar = () => {
  const pathname = usePathname();

  return (
    <nav className="max-tb:hidden">
      <ul className="flex h-full items-center gap-300">
        {LINKS.map(({ href, label }) => (
          <li key={href}>
            <AppLink href={href}>
              <Text
                className={cn(
                  "underline-offset-[0.0625rem] [text-decoration-skip-ink:none]",
                  "decoration-blue-500 decoration-[0.1875rem] dark:decoration-blue-700",
                  pathname === href &&
                    "text-neutral-700 underline dark:text-neutral-0",
                )}
                variant="sm"
              >
                {label}
              </Text>
            </AppLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(NavigationBar);
