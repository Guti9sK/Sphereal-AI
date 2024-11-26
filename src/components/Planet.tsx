import { cva, VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

const classes = cva("bg-gradient-to-b to-gray-950 rounded-full", {
  variants: {
    size: {
      sm: "size-4",
      md: "size-6",
      lg: "size-8 ",
    },
    color: {
      violet: "from-violet-400",
      teal: "from-teal-400",
      fuchsia: "from-fuchsia-400",
    },
  },
  defaultVariants: {
    size: "lg",
    color: "violet",
  },
});

type PlanetProps = VariantProps<typeof classes> &
  HTMLAttributes<HTMLDivElement>;

const Planet = ({ size, color, className, ...otherProps }: PlanetProps) => {
  return (
    <div
      className={`${classes({ size, color })} ${className}`}
      {...otherProps}
    ></div>
  );
};

export default Planet;
