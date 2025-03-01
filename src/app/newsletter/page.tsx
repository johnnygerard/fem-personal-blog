import Heading from "@/component/heading";
import NewsletterForm from "@/component/newsletter-form";
import Text from "@/component/text";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Sign up for my newsletter to stay updated on my latest articles, coding tutorials, and personal adventures.",
};

const Page = () => {
  return (
    <>
      <Heading level={1} styleLevel={2}>
        Newsletter
      </Heading>
      <p className="mt-200">
        Want to stay updated on my latest articles, coding tutorials, and
        personal adventures? Sign up for my newsletter! It’s a simple way to
        keep track of new posts and occasional coding tips I discover. Just drop
        your email in the sign-up box, and I’ll send you updates whenever
        there’s something new to share.
      </p>
      <p className="mt-200">
        <strong>
          <Text className="text-neutral-700 dark:text-neutral-0" variant="h5">
            I’d love to have you along for the ride and also hear about your own
            journey!
          </Text>
        </strong>
      </p>
      <NewsletterForm className="mt-300" />
    </>
  );
};

export default memo(Page);
