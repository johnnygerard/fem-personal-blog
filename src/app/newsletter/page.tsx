import AppButton from "@/component/app-button";
import Heading from "@/component/heading";
import Text from "@/component/text";
import { memo } from "react";

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
      <AppButton className="mt-200 inline-block" type="submit">
        Stay updated
      </AppButton>
      <p className="mt-100">
        <small>
          <Text variant="sm">Unsubscribe anytime. No spam, I promise 🙂</Text>
        </small>
      </p>
    </>
  );
};

export default memo(Page);
