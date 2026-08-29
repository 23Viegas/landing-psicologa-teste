"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useRef } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function ScrollReveal({
  children,
  delay = 0,
  className,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.18,
    margin: "0px 0px -80px 0px",
  });
  const shouldReduceMotion = useReducedMotion();
  const hiddenY = shouldReduceMotion ? 0 : 40;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: hiddenY }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: hiddenY }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.6,
        delay: shouldReduceMotion ? 0 : delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
