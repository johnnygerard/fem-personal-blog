import { memo, SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement>;

const IconMenu = (props: Props) => {
  return (
    <svg {...props} viewBox="0 0 20 20" fill="none">
      <path
        d="M2.5 10H17.5M2.5 5H17.5M2.5 15H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(IconMenu);
