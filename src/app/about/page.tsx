import Heading from "@/component/heading";
import List from "@/component/list";
import SocialMediaLinks from "@/component/social-media-links";
import { Metadata } from "next";
import Image from "next/image";
import { memo } from "react";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Paulina, a front-end developer who loves coding, reading, and hiking.",
};

const Page = () => {
  const BOOKS = [
    {
      title: "The Pragmatic Programmer",
      source:
        "by Andrew Hunt and David Thomas (for helpful insights into software development)",
    },
    {
      title: "Ready Player One",
      source: "by Ernest Cline (for some futuristic escapism)",
    },
    {
      title: "The Hobbit",
      source: "by J.R.R. Tolkien (for a bit of fantasy fun)",
    },
    {
      title: "Educated",
      source: "by Tara Westover (for incredible inspiration)",
    },
  ] as const;

  return (
    <>
      <Heading level={1} styleLevel={2} hasUnderline>
        About Me
      </Heading>
      <p className="mt-300">
        Hi, I’m Paulina! Ever since I can remember, I’ve had a passion for
        creativity and problem-solving. That’s what led me to the world of
        front-end web development. There’s something magical about seeing an
        idea come to life in the browser—whether it’s a simple layout experiment
        or a complex interface for a bigger project.
      </p>
      <p className="mt-[1em]">
        When I’m not coding, I love getting lost in a good book. My taste is
        pretty eclectic: I’ll happily read everything from fantasy novels to
        biographies of tech pioneers. Reading helps me unwind and often sparks
        new ideas for my coding projects.
      </p>
      <p className="mt-[1em]">
        Another big passion of mine is the great outdoors. Hiking allows me to
        disconnect from the digital world and reconnect with nature. I love
        challenging hikes with rewarding views at the top. And if I’m not on the
        trails, you might catch me rock climbing. The combination of mental
        focus and physical endurance is a perfect parallel to tackling tough
        coding challenges!
      </p>
      <p className="mt-[1em]">Some of my favorite books:</p>

      <List className="mt-[1em] space-y-0" isOrdered={false}>
        {BOOKS.map(({ title, source }) => (
          <li key={title}>
            <strong className="font-semibold">{`“${title}” `}</strong>
            {source}
          </li>
        ))}
      </List>

      <p className="mt-[1em]">
        I absolutely love my workspace as a place that inspires me to do my best
        work, so I thought I’d share it with you:
      </p>
      <Image
        className="mt-300 rounded-12"
        src="/asset/image/workspace.png"
        alt="My modern workspace setup with a flat screen monitor on a clean white wooden desk"
        width="3970"
        height="2436"
        priority
      />
      <p className="mt-300">
        I hope this blog not only documents my growth but also helps others see
        that coding can be for everyone. Thanks for joining me on this journey!
      </p>
      <Heading level={2} styleLevel={4} className="mt-300">
        Follow me
      </Heading>
      <SocialMediaLinks hasBackground className="mt-200" />
    </>
  );
};

export default memo(Page);
