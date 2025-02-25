import { memo, SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement>;

const IconX = (props: Props) => {
  return (
    <svg {...props} viewBox="0 0 22 20" fill="none" role="img">
      <title>x.com</title>
      <path
        d="M0.248632 0L8.49875 11.0312L0.196533 20H2.06503L9.3336 12.1477L15.2064 20H21.565L12.8507 8.34833L20.5783 0H18.7098L12.0158 7.23185L6.60719 0H0.248632ZM2.99639 1.37634H5.91753L18.8168 18.6235H15.8956L2.99639 1.37634Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default memo(IconX);
