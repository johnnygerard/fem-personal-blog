import AppLink from "@/component/app-link";
import Divider from "@/component/divider";
import Heading from "@/component/heading";
import PublicationDateShort from "@/component/publication-date-short";
import SocialMediaLinks from "@/component/social-media-links";
import Text from "@/component/text";
import { BlogMetadata } from "@/type/blog-metadata";
import { cn } from "@/util/cn";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { cwd } from "node:process";
import { memo } from "react";

const MOST_RECENT_POSTS = 5;

const HomePage = async () => {
  const path = join(cwd(), "data/blog-metadata.json");
  const json = await readFile(path, "utf8");
  const metadata: BlogMetadata[] = JSON.parse(json);
  const lastPosts = metadata
    .sort((a, b) => {
      const dateA = new Date(a.publishedAt).getTime();
      const dateB = new Date(b.publishedAt).getTime();
      return dateB - dateA;
    })
    .slice(0, MOST_RECENT_POSTS);

  return (
    <>
      <Heading level={1} styleLevel={2} hasUnderline>
        Hi, I’m Paulina 👋
      </Heading>
      <p className="mt-300">
        I’m on a journey to become a front-end web developer. I love building
        little projects, trying out new coding techniques, and sharing what I
        learn along the way. When I’m not at my desk, you’ll find me reading,
        hiking through the mountains, or challenging myself on rock-climbing
        walls.
      </p>
      <p className="mt-[1em]">
        I started this blog to document my progress, keep myself accountable,
        and hopefully inspire anyone else who’s learning to code. Welcome to my
        corner of the internet, and thanks for stopping by!
      </p>
      <SocialMediaLinks hasBackground className="mt-300" />
      <Divider className="my-600" />
      <Heading hasDecoration level={2}>
        Latest Articles
      </Heading>
      <ul className="mt-400 space-y-300">
        {lastPosts.map((post) => (
          <li key={post.slug}>
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
              <Text
                className="text-neutral-700 dark:text-neutral-0"
                variant="h5"
              >
                {post.title}
              </Text>
            </AppLink>
            <p className="mt-100">
              <PublicationDateShort date={post.publishedAt} />
            </p>
          </li>
        ))}
      </ul>
      <AppLink
        className={cn(
          "rounded-8 transition-opacity data-[hovered]:opacity-70",
          "mt-400 inline-block",
        )}
        href="/blog"
      >
        <Text
          className={cn(
            "text-neutral-700 dark:text-neutral-0",
            "underline decoration-[0.1875rem] [text-underline-position:under]",
            "decoration-blue-500 dark:decoration-blue-700",
          )}
          variant="h6"
        >
          View all articles
        </Text>
      </AppLink>
    </>
  );
};

export default memo(HomePage);
