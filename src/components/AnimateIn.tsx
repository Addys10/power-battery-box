"use client";

import { motion, type Variants } from "motion/react";
import type { ElementType, ComponentPropsWithoutRef } from "react";

const presets = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  scaleIn: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
} as const satisfies Record<string, Variants>;

export type AnimateInPreset = keyof typeof presets;

interface AnimateInProps {
  preset?: AnimateInPreset;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  once?: boolean;
  children: React.ReactNode;
}

export function AnimateIn({
  preset = "fadeUp",
  delay = 0,
  duration = 0.5,
  className,
  as = "div",
  once = true,
  children,
}: AnimateInProps) {
  const Tag = motion.create(as as "div");

  return (
    <Tag
      variants={presets[preset]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </Tag>
  );
}
