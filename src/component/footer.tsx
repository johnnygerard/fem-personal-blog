import SocialMediaLinks from "@/component/social-media-links";
import Text from "@/component/text";
import { cn } from "@/util/cn";
import { memo } from "react";

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
      <SocialMediaLinks ariaLabel="footer" />
    </footer>
  );
};

export default memo(Footer);
