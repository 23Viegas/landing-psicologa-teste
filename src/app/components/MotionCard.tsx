"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type MotionCardProps = HTMLMotionProps<"article"> & {
  children: ReactNode;
  variant: "specialty" | "testimonial";
};

export function MotionCard({
  children,
  className,
  variant,
  ...props
}: MotionCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const hover =
    variant === "specialty"
      ? {
          y: -6,
          boxShadow: "0 22px 55px rgba(30, 30, 46, 0.12)",
        }
      : {
          borderColor: "rgba(192, 132, 252, 0.55)",
          boxShadow: "0 18px 45px rgba(30, 30, 46, 0.08)",
        };

  return (
    <motion.article
      whileHover={shouldReduceMotion ? undefined : hover}
      transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.article>
  );
}
