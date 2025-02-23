import Image from "next/image";
import { memo } from "react";

const Avatar = () => {
  return (
    <Image src="/asset/image/avatar.png" alt="avatar" width="40" height="40" />
  );
};

export default memo(Avatar);
