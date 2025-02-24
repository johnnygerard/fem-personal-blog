"use client";
import NavigationBar from "@/component/navigation-bar";
import NavigationMenu from "@/component/navigation-menu";
import NavigationMenuToggle from "@/component/navigation-menu-toggle";
import ThemeToggle from "@/component/theme-toggle";
import { cn } from "@/util/cn";
import { useDisclosureState } from "@react-stately/disclosure";
import Image from "next/image";
import { memo, useRef } from "react";
import { useButton, useDisclosure } from "react-aria";

const Header = () => {
  const disclosureProps = { defaultExpanded: false };
  const disclosureState = useDisclosureState(disclosureProps);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const { buttonProps, panelProps } = useDisclosure(
    disclosureProps,
    disclosureState,
    panelRef,
  );
  const { buttonProps: triggerProps } = useButton(buttonProps, triggerRef);

  return (
    <header>
      <div
        className={cn(
          "flex gap-75 rounded-10 p-75 tb:gap-250",
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
        <NavigationMenuToggle
          isExpanded={disclosureState.isExpanded}
          triggerRef={triggerRef}
          triggerProps={triggerProps}
        />
        <NavigationBar />
        <ThemeToggle />
      </div>
      <div className="tb:hidden" ref={panelRef} {...panelProps}>
        <NavigationMenu className="mt-150" />
      </div>
    </header>
  );
};

export default memo(Header);
