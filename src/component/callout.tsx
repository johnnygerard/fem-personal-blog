import IconInfo from "@/component/svg/icon-info";
import IconLightBulb from "@/component/svg/icon-light-bulb";
import IconWarning from "@/component/svg/icon-warning";
import Text from "@/component/text";
import { cn } from "@/util/cn";
import { memo } from "react";

type Props = {
  type: "tip" | "warning" | "info";
  title: string;
  content: string;
};

const Callout = ({ type, title, content }: Props) => {
  const head = {
    tip: "Tip",
    warning: "Warning",
    info: "Information",
  }[type];

  const Icon = {
    tip: IconLightBulb,
    warning: IconWarning,
    info: IconInfo,
  }[type];

  return (
    <div
      className={cn(
        "mt-150 flex gap-100 rounded-12 border p-150",
        {
          tip: "border-green-500 dark:border-green-700",
          warning: "border-yellow-500 dark:border-yellow-700",
          info: "border-blue-500 dark:border-blue-700",
        }[type],
        {
          tip: "bg-green-200 dark:bg-green-900",
          warning: "bg-yellow-200 dark:bg-yellow-900",
          info: "bg-blue-200 dark:bg-blue-900",
        }[type],
      )}
    >
      <div className="grid h-6.5 w-5 place-items-center">
        <Icon
          className={
            {
              tip: "text-green-700 dark:text-green-500",
              warning: "text-yellow-700 dark:text-yellow-500",
              info: "text-blue-700 dark:text-blue-500",
            }[type]
          }
        />
      </div>
      <div className="flex-1">
        <p>
          <Text className="text-neutral-700 dark:text-neutral-0" variant="h5">
            {`${head}: ${title}`}
          </Text>
        </p>
        <p className="mt-75">{content}</p>
      </div>
    </div>
  );
};

export default memo(Callout);
