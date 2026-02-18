"use client";

import { motion } from "motion/react";

export function HeroText() {
  return (
    <h1 className="whitespace-nowrap font-secondary leading-tight text-light text-xl sm:text-3xl md:text-4xl lg:text-6xl">
      <motion.span
        className="inline-block font-bold"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      >
        Nyní již neřeš energii,
      </motion.span>
      <br />
      <motion.span
        className="inline-block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45, ease: "easeOut" }}
      >
        jen jezdi a{" "}
        <span className="relative inline-block font-bold">
          plň si své sny
          <motion.svg
            className="absolute -bottom-4 left-0 w-full"
            viewBox="0 0 200 12"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <motion.path
              d="M2 10 Q100 -2 198 10"
              stroke="var(--color-accent)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6, delay: 0.9, ease: "easeOut" }}
            />
          </motion.svg>
        </span>
      </motion.span>
    </h1>
  );
}
