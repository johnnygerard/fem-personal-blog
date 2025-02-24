import NavigationMenu from "@/component/navigation-menu";
import NavigationMenuToggle from "@/component/navigation-menu-toggle";
import ThemeToggle from "@/component/theme-toggle";
import { cn } from "@/util/cn";
import Image from "next/image";
import { memo } from "react";

const Header = () => {
  return (
    <header>
      <div
        className={cn(
          "flex gap-75 rounded-10 p-75",
          "border border-neutral-200 dark:border-neutral-700",
          "bg-neutral-0 dark:bg-neutral-800",
          "shadow-[0_6px_10px_rgba(123,123,123,0.03)]",
        )}
      >
        <Image
          className="me-auto"
          src="/asset/image/avatar.png"
          alt="avatar"
          width="40"
          height="40"
          priority
        />
        <NavigationMenuToggle />
        <ThemeToggle />
      </div>
      <NavigationMenu className="mt-150" />
    </header>
  );
};

export default memo(Header);
