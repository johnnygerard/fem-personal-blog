import { memo, SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement>;

const IconMoon = (props: Props) => {
  return (
    <svg {...props} viewBox="0 0 17 17" fill="none">
      <path
        d="M15.2464 8.99766C14.2903 10.6749 12.4855 11.8058 10.4167 11.8058C7.34845 11.8058 4.86114 9.31849 4.86114 6.25024C4.86114 4.18123 5.99216 2.37639 7.66966 1.42027C4.14568 1.75439 1.38892 4.72196 1.38892 8.33341C1.38892 12.1687 4.49805 15.2778 8.33336 15.2778C11.9446 15.2778 14.9121 12.5214 15.2464 8.99766Z"
        className="stroke-neutral-900"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(IconMoon);
