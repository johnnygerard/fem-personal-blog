import Divider from "@/component/divider";
import Heading from "@/component/heading";
import Text from "@/component/text";
import { cn } from "@/util/cn";
import type { MDXComponents } from "mdx/types";

const MARGIN_TOP = "mt-150";
const TABLE_BORDER_COLORS = "border-neutral-200 dark:border-neutral-700";

const listClassName = cn(
  MARGIN_TOP,
  "flex list-outside flex-col gap-150 ps-7 marker:font-bold",
);

export const useMDXComponents = (components: MDXComponents): MDXComponents => ({
  blockquote: ({ children }) => (
    <blockquote
      className={cn(
        "border-s-4 border-neutral-400 px-150 dark:border-neutral-600",
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
  hr: () => <Divider className="my-300 first-of-type:my-400" />,
  h1: ({ children }) => <Heading level={1}>{children}</Heading>,
  h2: ({ children }) => (
    <Heading className={MARGIN_TOP} level={2}>
      {children}
    </Heading>
  ),
  h3: ({ children }) => (
    <Heading className={MARGIN_TOP} level={3}>
      {children}
    </Heading>
  ),
  h4: ({ children }) => (
    <Heading className={MARGIN_TOP} level={4}>
      {children}
    </Heading>
  ),
  h5: ({ children }) => (
    <Heading className={MARGIN_TOP} level={5}>
      {children}
    </Heading>
  ),
  h6: ({ children }) => (
    <Heading className={MARGIN_TOP} level={6}>
      {children}
    </Heading>
  ),
  ol: ({ children }) => (
    <ol className={cn(listClassName, "list-decimal")}>{children}</ol>
  ),
  p: ({ children }) => <p className={MARGIN_TOP}>{children}</p>,
  pre: ({ children }) => (
    <pre
      className={cn(
        MARGIN_TOP,
        "rounded-12 bg-neutral-200 p-150 dark:bg-neutral-800",
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
  table: ({ children }) => (
    <table
      className={cn(
        MARGIN_TOP,
        "w-full table-fixed border-collapse divide-y rounded-8",
        // A ring is used because a border does not follow the border radius.
        // The outline works on Chrome but not on Firefox.
        "inset-ring inset-ring-neutral-200 dark:inset-ring-neutral-700",
      )}
    >
      {children}
    </table>
  ),
  tbody: ({ children }) => (
    <tbody className={cn("divide-y", TABLE_BORDER_COLORS)}>{children}</tbody>
  ),
  thead: ({ children }) => (
    <thead className={cn("divide-y", TABLE_BORDER_COLORS)}>{children}</thead>
  ),
  tr: ({ children }) => (
    <tr className={cn("divide-x", TABLE_BORDER_COLORS)}>{children}</tr>
  ),
  td: ({ children }) => (
    <td className={cn("px-150 pt-75 pb-100", TABLE_BORDER_COLORS)}>
      <Text className="text-neutral-600 dark:text-neutral-400" variant="sm">
        {children}
      </Text>
    </td>
  ),
  th: ({ children }) => (
    <th className={cn("px-150 pt-75 pb-100 text-left", TABLE_BORDER_COLORS)}>
      <Text className="text-neutral-700 dark:text-neutral-0" variant="h6">
        {children}
      </Text>
    </th>
  ),
  ul: ({ children }) => (
    <ul className={cn(listClassName, "list-disc")}>{children}</ul>
  ),
  ...components,
});
