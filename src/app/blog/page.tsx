import AppLink from "@/component/app-link";
import Heading from "@/component/heading";
import PublicationDateShort from "@/component/publication-date-short";
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
            <article>
              <Heading level={2} styleLevel={5}>
                <AppLink className="rounded-8" href={`/blog/${post.slug}`}>
                  {post.title}
                </AppLink>
              </Heading>
              <p className="my-100">
                <PublicationDateShort date={post.publishedAt} />
              </p>
              <p>{post.description}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default memo(Page);
