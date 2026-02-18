"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

interface ProductCardProps {
  href: string;
  image: string;
  name: string;
  subtitle: string;
  index: number;
  imageClassName?: string;
}

export function ProductCard({
  href,
  image,
  name,
  subtitle,
  index,
  imageClassName = "object-cover",
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
    >
      <Link
        href={href}
        className="group block overflow-hidden rounded-2xl border-2 border-dark/10 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_30px_rgba(115,244,176,0.25)]"
      >
        <div className={`relative aspect-[4/3] overflow-hidden ${imageClassName.includes("contain") ? "bg-white" : "bg-dark/5"}`}>
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            className={`${imageClassName} ${imageClassName.includes("contain") ? "p-4" : ""} transition-transform duration-300 group-hover:scale-105`}
          />
        </div>
        <div className="px-6 py-5">
          <h2 className="font-secondary text-lg font-bold text-dark">
            {name}
          </h2>
          <p className="mt-1 font-secondary text-sm text-dark/60">
            {subtitle}
          </p>
          <div className="mt-3 flex items-center gap-2 font-secondary text-sm font-bold text-accent">
            Zobrazit detail
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path
                d="M3 8h10m0 0L9 4m4 4L9 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
