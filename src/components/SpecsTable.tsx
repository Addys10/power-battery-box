"use client";

import { motion } from "motion/react";

interface Spec {
  label: string;
  value: string;
}

interface SpecsTableProps {
  specs: Spec[];
}

export function SpecsTable({ specs }: SpecsTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border-2 border-dark/10">
      {specs.map((spec, i) => (
        <motion.div
          key={spec.label}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.3, delay: i * 0.03, ease: "easeOut" }}
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
        </motion.div>
      ))}
    </div>
  );
}
