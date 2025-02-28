import ArticlePreview from "@/component/article-preview";
import Heading from "@/component/heading";
import { BlogMetadata } from "@/type/blog-metadata";
import { Metadata } from "next";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import { memo } from "react";

export const metadata: Metadata = {
  title: "My Articles",
  description: "This is where I write about my thoughts and experiences...",
};

const Page = async () => {
  const path = join(cwd(), "data/blog-metadata.json");
  const json = await readFile(path, "utf8");
  const metadata: BlogMetadata[] = JSON.parse(json);

  return (
    <>
      <Heading hasDecoration level={1} styleLevel={2}>
        My Articles
      </Heading>
      <p className="mt-75 mb-300">
        Below are all my recent blog posts. Click on any title to read the full
        article.
      </p>
      <ul>
        {metadata.map((post) => (
          <li
            className="border-t border-neutral-200 py-250 dark:border-neutral-700"
            key={post.slug}
          >
            <ArticlePreview withDescription post={post} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(Page);
