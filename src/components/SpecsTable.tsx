"use client";

import { useEffect, useRef } from "react";

interface Spec {
  label: string;
  value: string;
}

export function SpecsTable({ specs }: { specs: Spec[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const rows = Array.from(container.querySelectorAll<HTMLElement>("[data-row]"));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          rows.forEach((row, i) => {
            setTimeout(() => row.classList.add("in-view"), i * 35);
          });
          observer.disconnect();
        }
      },
      { rootMargin: "-30px" }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="overflow-hidden rounded-2xl border-2 border-dark/10">
      {specs.map((spec, i) => (
        <div
          key={spec.label}
          data-row
          data-animate
          data-preset="fadeUp"
          style={{ "--anim-delay": "0s", "--anim-dur": "0.3s" } as React.CSSProperties}
          className={`flex flex-col gap-1 px-6 py-3.5 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${
            i % 2 === 0 ? "bg-dark/[0.03]" : ""
          }`}
        >
          <span className="font-secondary text-sm font-bold text-dark">
            {spec.label}
          </span>
          <span className="font-secondary text-sm text-dark/70 sm:text-right">
            {spec.value}
          </span>
        </div>
      ))}
    </div>
  );
}