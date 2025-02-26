import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import rehypePrettyCode, { Options } from "rehype-pretty-code";

const rehypePrettyCodeOptions: Options = {
  keepBackground: false, // Do not use theme background colors
  grid: false, // Only needed for line highlighting
  theme: {
    dark: "github-dark",
    light: "github-light",
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [],
    rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  reactStrictMode: true,
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        // Prevent search engines from indexing the website
        // @see https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#directives
        {
          key: "x-robots-tag",
          value: "none",
        },
      ],
    },
  ],
};

export default withMDX(nextConfig);
