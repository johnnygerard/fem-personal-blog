"use client";
import AppFocusRing from "@/component/app-focus-ring";
import Text from "@/component/text";
import { cn } from "@/util/cn";
import { memo } from "react";
import { Button, ButtonProps } from "react-aria-components";

const AppButton = ({ children, className, ...props }: ButtonProps) => {
  return (
    <Text className={cn(className)} variant="h6">
      <AppFocusRing>
        <Button
          className={cn(
            "bg-blue-500 text-neutral-900 data-[hovered]:bg-blue-700",
            "rounded-10 px-300 py-150",
          )}
          {...props}
        >
          {children}
        </Button>
      </AppFocusRing>
    </Text>
  );
};

export default memo(AppButton);
