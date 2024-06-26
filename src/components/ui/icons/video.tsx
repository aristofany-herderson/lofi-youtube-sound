import { SVGProps } from "react";

export const VideoIcon = ({
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
        fill="currentColor"
        d="M17 2H7C4.243 2 2 4.243 2 7V17C2 19.757 4.243 22 7 22H17C19.757 22 22 19.757 22 17V7C22 4.243 19.757 2 17 2ZM18 13H20V15H18V13ZM18 9H20V11H18V9ZM20 7H18V4.18408C19.161 4.59808 20 5.698 20 7ZM16 4V11H8V4H16ZM6 15H4V13H6V15ZM4 11V9H6V11H4ZM6 4.18408V7H4C4 5.698 4.839 4.59808 6 4.18408ZM4 17H6V19.8159C4.839 19.4019 4 18.302 4 17ZM8 20V13H16V20H8ZM18 19.8159V17H20C20 18.302 19.161 19.4019 18 19.8159Z"
      />
    </svg>
  );
};
