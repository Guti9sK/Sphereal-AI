import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const CenteredCircle = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={twMerge(
        "size-[200px] border border-gray-200/20 rounded-full",
        props.className
      )}
    />
  );
};
export default CenteredCircle;
