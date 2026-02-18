"use client";

import { useEffect, useRef } from "react";
import type { ElementType, ReactNode, CSSProperties } from "react";

export type AnimateInPreset =
  | "fadeUp"
  | "fadeIn"
  | "scaleIn"
  | "slideLeft"
  | "slideRight";

interface AnimateInProps {
  preset?: AnimateInPreset;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  children: ReactNode;
}

export function AnimateIn({
  preset = "fadeUp",
  delay = 0,
  duration = 0.5,
  className,
  as: Tag = "div",
  children,
}: AnimateInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { rootMargin: "-50px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style: CSSProperties = {
    "--anim-delay": `${delay}s`,
    "--anim-dur": `${duration}s`,
  } as CSSProperties;

  return (
    <Tag
      ref={ref}
      data-animate
      data-preset={preset}
      style={style}
      className={className}
    >
      {children}
    </Tag>
  );
}