import { memo, SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement>;

const IconClose = (props: Props) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none">
      <path
        d="M15 5L5 15M5 5L15 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(IconClose);
