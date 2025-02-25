import Divider from "@/component/divider";
import Text from "@/component/text";
import type { MDXComponents } from "mdx/types";

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    hr: () => <Divider />,
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
    p: ({ children }) => <p className="mt-150">{children}</p>,
    ...components,
  };
};
