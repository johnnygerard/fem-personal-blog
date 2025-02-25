import Divider from "@/component/divider";
import Text from "@/component/text";
import { cn } from "@/util/cn";
import type { MDXComponents } from "mdx/types";

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    em: ({ children }) => <em className="italic">{children}</em>,
    hr: () => <Divider className="first-of-type:my-400" />,
    h1: ({ children }) => (
      <h1 className="text-neutral-700 dark:text-neutral-0">
        <Text variant="h1">{children}</Text>
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-neutral-700 dark:text-neutral-0">
        {/* This is not an error: h2 is styled with h3 variant. */}
        <Text variant="h3">{children}</Text>
      </h2>
    ),
    ol: ({ children }) => (
      <ol
        className={cn(
          "mt-150 list-outside list-decimal ps-7 marker:font-bold",
          "flex flex-col gap-150",
        )}
      >
        {children}
      </ol>
    ),
    p: ({ children }) => <p className="mt-150">{children}</p>,
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    ...components,
  };
};
