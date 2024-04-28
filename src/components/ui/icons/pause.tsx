import { SVGProps } from "react";

export const PauseIcon = ({
  xmlns = "http://www.w3.org/2000/svg",
  width = 24,
  height = 24,
  fill = "none",
  ...props
}: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        d="M14 19L14 5C14 3.89543 14.8954 3 16 3L17 3C18.1046 3 19 3.89543 19 5L19 19C19 20.1046 18.1046 21 17 21L16 21C14.8954 21 14 20.1046 14 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 19L10 5C10 3.89543 9.10457 3 8 3L7 3C5.89543 3 5 3.89543 5 5L5 19C5 20.1046 5.89543 21 7 21L8 21C9.10457 21 10 20.1046 10 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};