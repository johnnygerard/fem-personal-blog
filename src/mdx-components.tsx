import Divider from "@/component/divider";
import Heading from "@/component/heading";
import Text from "@/component/text";
import { cn } from "@/util/cn";
import type { MDXComponents } from "mdx/types";

const listClassName =
  "mt-150 flex list-outside flex-col gap-150 ps-7 marker:font-bold";

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
  blockquote: ({ children }) => (
    <blockquote
      className={cn(
        "border-s-4 border-neutral-400 dark:border-neutral-600",
        "px-150 py-75",
      )}
    >
      {children}
    </blockquote>
  ),
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
  h1: ({ children }) => <Heading level={1}>{children}</Heading>,
  h2: ({ children }) => <Heading level={2}>{children}</Heading>,
  h3: ({ children }) => <Heading level={3}>{children}</Heading>,
  h4: ({ children }) => <Heading level={4}>{children}</Heading>,
  h5: ({ children }) => <Heading level={5}>{children}</Heading>,
  h6: ({ children }) => <Heading level={6}>{children}</Heading>,
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
});
