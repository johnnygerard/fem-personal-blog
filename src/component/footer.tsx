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

const Footer = () => {
  return (
    <footer
      className={cn(
        "flex items-center justify-between gap-2.5 border-t pt-200",
        "border-neutral-200 dark:border-neutral-700",
      )}
    >
      <small>
        <Text variant="sm">Made with ❤️ and ☕️</Text>
      </small>
      <nav aria-label="Social media">
        <ul className="flex gap-200">
          {LINKS.map(({ Icon, href }, index) => (
            <li key={index}>
              <AppLink className="block h-4 rounded-2" href={href}>
                <Icon className="h-full transition-opacity hover:opacity-70" />
              </AppLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default memo(Footer);
