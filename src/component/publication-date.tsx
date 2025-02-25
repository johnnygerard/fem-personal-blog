import Text from "@/component/text";
import { formatDate } from "@/util/format-date";
import { memo } from "react";

type Props = {
  date: string;
};

const PublicationDate = ({ date }: Props) => {
  return (
    <p className="mt-150">
      <Text
        className="italic"
        variant="sm"
      >{`Published ${formatDate(date)}`}</Text>
    </p>
  );
};

export default memo(PublicationDate);
