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
  hasBackground?: true;
};

const SocialMediaLinks = ({ hasBackground }: Props) => {
  return (
    <nav aria-label="Social media">
      <ul className="flex gap-200">
        {LINKS.map(({ Icon, href }, index) => (
          <li key={index}>
            <AppLink
              className={cn(
                "block h-4 rounded-2",
                "transition-opacity data-[hovered]:opacity-70",
              )}
              href={href}
            >
              <Icon className="h-full" />
            </AppLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default memo(SocialMediaLinks);
