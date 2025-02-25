import { memo, SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement>;

const IconSun = (props: Props) => {
  return (
    <svg {...props} viewBox="0 0 17 17" fill="none">
      <path
        d="M8.33336 1.38889V2.77778M8.33336 13.8889V15.2778M2.7778 8.33334H1.38892M4.38483 4.38481L3.40274 3.40271M12.2819 4.38481L13.264 3.40271M4.38483 12.2847L3.40274 13.2668M12.2819 12.2847L13.264 13.2668M15.2778 8.33334H13.8889M11.8056 8.33334C11.8056 10.251 10.251 11.8056 8.33336 11.8056C6.4157 11.8056 4.86114 10.251 4.86114 8.33334C4.86114 6.41568 6.4157 4.86112 8.33336 4.86112C10.251 4.86112 11.8056 6.41568 11.8056 8.33334Z"
        className="stroke-neutral-0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default memo(IconSun);
