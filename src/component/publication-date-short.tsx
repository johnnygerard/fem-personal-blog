import Text from "@/component/text";
import { formatDate } from "@/util/format-date";
import { memo } from "react";

type Props = {
  date: string;
  prefix?: string;
};

const PublicationDateShort = ({ date, prefix = "" }: Props) => {
  return (
    <time dateTime={date}>
      <Text className="italic" variant="sm">
        {`${prefix}${formatDate(date)}`}
      </Text>
    </time>
  );
};

export default memo(PublicationDateShort);
