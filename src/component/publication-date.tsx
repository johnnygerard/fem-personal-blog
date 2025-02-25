import { formatDate } from "@/util/format-date";
import { memo } from "react";

type Props = {
  date: string;
};

const PublicationDate = ({ date }: Props) => {
  return <p>{`Published ${formatDate(date)}`}</p>;
};

export default memo(PublicationDate);
