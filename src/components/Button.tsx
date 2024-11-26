"use client";
import { cva } from "class-variance-authority";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  HTMLMotionProps,
  animate,
} from "framer-motion";
import { ReactNode, useState, useEffect } from "react";

export type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  children: ReactNode;
  block?: boolean;
} & HTMLMotionProps<"button">;

const classes = cva(
  "text-xs tracking-widest uppercase font-bold h-10 px-6 rounded-lg",
  {
    variants: {
      block: {
        true: "w-full",
      },
      variant: {
        primary: "border-gradient",
        secondary: "bg-gray-100 text-gray-950",
        tertiary: "bg-gray-800 text-gray-200",
      },
    },
    defaultVariants: {
      variant: "primary",
      block: false,
    },
  }
);

const Button = ({
  variant = "primary",
  className = "",
  children,
  block,
  ...otherProps
}: ButtonProps) => {
  const buttonClasses = classes({ variant, className, block });
  const [isHovered, setIsHovered] = useState(false);
  const angle = useMotionValue(45);
  const background = useMotionTemplate`linear-gradient( var(--color-gray-950), var(--color-gray-950)) padding-box,conic-gradient(from ${angle}deg, var(--color-violet-400), var(--color-fuchsia-400), var(--color-amber-400), var(--color-teal-400), var(--color-violet-400)) border-box`;
  useEffect(() => {
    if (isHovered) {
      animate(angle, angle.get() + 360, {
        duration: 1,
        ease: "linear",
        repeat: Infinity,
      });
    } else {
        animate(angle, 45, { duration: 0.5})
    }
  }, [isHovered, angle]);

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={buttonClasses}
      {...otherProps}
      style={
        variant === "primary"
          ? {
              background,
            }
          : undefined
      }
    >
      {children}
    </motion.button>
  );
};

export default Button;
