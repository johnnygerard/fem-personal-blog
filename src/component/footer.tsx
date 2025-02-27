import AppLink from "@/component/app-link";
import IconFrontendMentor from "@/component/svg/icon-frontend-mentor";
import IconGitHub from "@/component/svg/icon-github";
import IconLinkedIn from "@/component/svg/icon-linkedin";
import IconX from "@/component/svg/icon-x";
import Text from "@/component/text";
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
  className: string;
};

const Footer = ({ className }: Props) => {
  return (
    <footer
      className={cn(
        "flex items-center justify-between gap-2.5 border-t pt-200",
        "border-neutral-200 dark:border-neutral-700",
        className,
      )}
    >
      <small>
        <Text variant="sm">Made with ❤️ and ☕️</Text>
      </small>
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
    </footer>
  );
};

export default memo(Footer);
