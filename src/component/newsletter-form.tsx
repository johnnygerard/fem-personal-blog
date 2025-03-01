"use client";
import AppButton from "@/component/app-button";
import AppFocusRing from "@/component/app-focus-ring";
import IconError from "@/component/svg/icon-error";
import IconSuccess from "@/component/svg/icon-success";
import Text from "@/component/text";
import { cn } from "@/util/cn";
import { memo, useState } from "react";
import {
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "react-aria-components";

type Props = {
  className?: string;
};

const NewsletterForm = ({ className }: Props) => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className={className}
    >
      <TextField type="email" isRequired>
        <div className="flex flex-col gap-75">
          <Label>Email Address</Label>
          <AppFocusRing>
            <Input
              readOnly={submitted}
              className={cn(
                "rounded-10 px-200 py-150 transition-colors",
                "border border-neutral-300 dark:border-neutral-600",
                "bg-neutral-0 data-[hovered]:bg-neutral-200",
                "dark:bg-neutral-800 dark:data-[hovered]:bg-neutral-700",
                "data-[invalid]:border-red-600 dark:data-[invalid]:border-red-400",
                submitted && "border-green-700 dark:border-green-500",
              )}
              placeholder="email@example.com"
            />
          </AppFocusRing>
        </div>
        {submitted && (
          <p
            className={cn(
              "mt-75 flex items-center gap-100",
              "text-green-700 dark:text-green-500",
            )}
          >
            <IconSuccess className="shrink-0" />
            <Text variant="sm">
              You’re subscribed! Check your inbox for updates.
            </Text>
          </p>
        )}
        <FieldError>
          {({ validationDetails }) => {
            let errorMessage = "";

            if (validationDetails.valueMissing) {
              errorMessage = "Please enter your email address.";
            } else if (validationDetails.typeMismatch) {
              errorMessage = "Please enter a valid email address.";
            }

            return (
              <p
                className={cn(
                  "mt-75 flex items-center gap-100",
                  "text-red-600 dark:text-red-400",
                )}
              >
                <IconError className="shrink-0" />
                <Text variant="sm">{errorMessage}</Text>
              </p>
            );
          }}
        </FieldError>
      </TextField>
      <AppButton className="mt-200 inline-block" type="submit">
        Stay updated
      </AppButton>
      <p className="mt-100">
        <small>
          <Text variant="sm">Unsubscribe anytime. No spam, I promise 🙂</Text>
        </small>
      </p>
    </Form>
  );
};

export default memo(NewsletterForm);
