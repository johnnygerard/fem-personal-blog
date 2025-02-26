import Divider from "@/component/divider";
import Text from "@/component/text";
import { cn } from "@/util/cn";
import type { MDXComponents } from "mdx/types";

const listClassName =
  "mt-150 flex list-outside flex-col gap-150 ps-7 marker:font-bold";

export const useMDXComponents = (components: MDXComponents): MDXComponents => {
  return {
    code: ({ children, ...props }) => {
      const isInline = !props.isCodeBlock;
      delete props.isCodeBlock;

      return (
        <code
          {...props}
          className={cn(
            isInline && "rounded-4 bg-neutral-200 px-50 dark:bg-neutral-700",
          )}
        >
          <Text variant="code">{children}</Text>
        </code>
      );
    },
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
      <ol className={cn(listClassName, "list-decimal")}>{children}</ol>
    ),
    p: ({ children }) => <p className="mt-150">{children}</p>,
    pre: ({ children }) => (
      <pre
        className={cn(
          "mt-150 rounded-12 bg-neutral-200 p-150 dark:bg-neutral-800",
          "border border-neutral-200 dark:border-neutral-700",
        )}
      >
        {{
          ...children,
          props: {
            ...children.props,
            isCodeBlock: true,
          },
        }}
      </pre>
    ),
    strong: ({ children }) => <strong className="font-bold">{children}</strong>,
    ul: ({ children }) => (
      <ul className={cn(listClassName, "list-disc")}>{children}</ul>
    ),
    ...components,
  };
};
