import { memo, SVGAttributes } from "react";

type Props = SVGAttributes<SVGElement>;

const IconInfo = (props: Props) => {
  return (
    <svg width={19} height={19} {...props} viewBox="0 0 19 19" fill="none">
      <path
        d="M18.875 2.17857V16.3214C18.875 17.4062 17.9911 18.25 16.9464 18.25H2.80357C1.71875 18.25 0.875 17.4062 0.875 16.3214V2.17857C0.875 1.13393 1.71875 0.25 2.80357 0.25H16.9464C17.9911 0.25 18.875 1.13393 18.875 2.17857ZM16.9464 16.0804V2.41964C16.9464 2.29911 16.8259 2.17857 16.7054 2.17857H3.04464C2.88393 2.17857 2.80357 2.29911 2.80357 2.41964V16.0804C2.80357 16.2411 2.88393 16.3214 3.04464 16.3214H16.7054C16.8259 16.3214 16.9464 16.2411 16.9464 16.0804ZM9.875 3.70536C10.7991 3.70536 11.5625 4.46875 11.5625 5.39286C11.5625 6.35714 10.7991 7.08036 9.875 7.08036C8.91072 7.08036 8.1875 6.35714 8.1875 5.39286C8.1875 4.46875 8.91072 3.70536 9.875 3.70536ZM12.125 13.9107C12.125 14.192 11.8839 14.3929 11.6429 14.3929H8.10714C7.82589 14.3929 7.625 14.192 7.625 13.9107V12.9464C7.625 12.7054 7.82589 12.4643 8.10714 12.4643H8.58929V9.89286H8.10714C7.82589 9.89286 7.625 9.69197 7.625 9.41072V8.44643C7.625 8.20536 7.82589 7.96429 8.10714 7.96429H10.6786C10.9196 7.96429 11.1607 8.20536 11.1607 8.44643V12.4643H11.6429C11.8839 12.4643 12.125 12.7054 12.125 12.9464V13.9107Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default memo(IconInfo);
