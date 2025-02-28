import PublicationDateShort from "@/component/publication-date-short";
import { memo } from "react";

type Props = {
  date: string;
};

const PublicationDate = ({ date }: Props) => {
  return (
    <p className="mt-150">
      <PublicationDateShort date={date} prefix="Published " />
    </p>
  );
};

export default memo(PublicationDate);
