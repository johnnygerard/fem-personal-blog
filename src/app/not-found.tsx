import AppLink from "@/component/app-link";
import Heading from "@/component/heading";
import { Metadata } from "next";
import { memo } from "react";

export const metadata: Metadata = {
  title: "404 Not Found",
};

const NotFound = () => {
  return (
    <div className="absolute grid h-full w-full place-items-center">
      <div className="text-center">
        <Heading level={1}>404 Not Found</Heading>
        <p className="mt-200 mb-300">
          Sorry, the page you are looking for does not exist.
        </p>
        <AppLink variant="primary" href="/">
          Back to Home
        </AppLink>
      </div>
    </div>
  );
};

export default memo(NotFound);
