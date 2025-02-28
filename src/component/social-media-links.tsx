import AppLink from "@/component/app-link";
import IconFrontendMentor from "@/component/svg/icon-frontend-mentor";
import IconGitHub from "@/component/svg/icon-github";
import IconLinkedIn from "@/component/svg/icon-linkedin";
import IconX from "@/component/svg/icon-x";
import { cn } from "@/util/cn";
import { memo } from "react";

const LINKS = [
  {
    Icon: IconX,
    href: "https://x.com/username",
  },
  {
    Icon: IconGitHub,
    href: "https://github.com/username",
  },
  {
    Icon: IconLinkedIn,
    href: "https://www.linkedin.com/in/username",
  },
  {
    Icon: IconFrontendMentor,
    href: "https://www.frontendmentor.io/profile/username",
  },
] as const;

type Props = {
  ariaLabel?: string;
  className?: string;
  hasBackground?: true;
};

const SocialMediaLinks = ({ ariaLabel, className, hasBackground }: Props) => {
  return (
    <nav aria-label={ariaLabel ?? "Social media"} className={className}>
      <ul className={cn("flex", hasBackground ? "gap-150" : "gap-200")}>
        {LINKS.map(({ Icon, href }, index) => (
          <li key={index}>
            <AppLink
              className={cn(
                hasBackground
                  ? [
                      "grid h-10 w-10 place-items-center rounded-10",
                      "bg-neutral-0 transition-colors dark:bg-neutral-800",
                      "data-[hovered]:bg-neutral-200 dark:data-[hovered]:bg-neutral-600",
                      "border border-neutral-200 dark:border-neutral-700",
                      "data-[hovered]:border-neutral-300 dark:data-[hovered]:border-neutral-500",
                    ]
                  : [
                      "block h-4 rounded-2",
                      "transition-opacity data-[hovered]:opacity-70",
                    ],
              )}
              href={href}
            >
              <Icon className={cn(hasBackground ? "h-4" : "h-full")} />
            </AppLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(SocialMediaLinks);
