import AppLink from "@/component/app-link";
import PublicationDateShort from "@/component/publication-date-short";
import Text from "@/component/text";
import { BlogMetadata } from "@/type/blog-metadata";
import { cn } from "@/util/cn";
import { memo } from "react";

type Props = {
  post: BlogMetadata;
  withDescription?: true;
};

const ArticlePreview = ({ post, withDescription }: Props) => {
  return (
    <article>
      <AppLink
        className={cn(
          "rounded-8 transition-opacity data-[hovered]:opacity-70",
          "underline decoration-transparent transition-[text-decoration-color]",
          "data-[hovered]:decoration-current",
        )}
        style={{
          textDecorationStyle: "solid",
          textDecorationSkipInk: "auto",
          textDecorationThickness: "auto",
          textUnderlineOffset: "auto",
          textUnderlinePosition: "from-font",
        }}
        href={`/blog/${post.slug}`}
      >
        <Text className="text-neutral-700 dark:text-neutral-0" variant="h5">
          {post.title}
        </Text>
      </AppLink>
      <p className="mt-100">
        <PublicationDateShort date={post.publishedAt} />
      </p>
      {withDescription && <p className="mt-100">{post.description}</p>}
    </article>
  );
};

export default memo(ArticlePreview);
