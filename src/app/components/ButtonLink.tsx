"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const MotionLink = motion(Link);

type ButtonLinkProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  children,
  href,
  variant = "primary",
}: ButtonLinkProps) {
  const shouldReduceMotion = useReducedMotion();
  const styles =
    variant === "primary"
      ? "bg-primary text-white shadow-sm hover:bg-primary/90"
      : "border border-primary/25 bg-white text-primary hover:bg-secondary";

  return (
    <MotionLink
      href={href}
      className={`button-motion inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold ${styles}`}
      whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
      whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
      transition={{ duration: 0.16, ease: [0.23, 1, 0.32, 1] }}
    >
      {children}
    </MotionLink>
  );
}
