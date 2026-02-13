"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

const NAV_ITEMS = [
  { label: "DOMŮ", href: "/" },
  { label: "MÁ VIZE", href: "/vize" },
  { label: "BATTERY BOXY", href: "/battery-boxy" },
  { label: "POWERBANKY", href: "/powerbanky" },
  { label: "NABÍJEČKY", href: "/nabijecky" },
  { label: "KONTAKT", href: "/kontakt" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-accent">
      {/* Desktop nav (>= 1000px) */}
      <nav className="mx-auto hidden h-16 max-w-7xl items-center justify-center gap-8 px-6 whitespace-nowrap min-[1000px]:flex">
        {NAV_ITEMS.filter((item) => item.href !== "/kontakt").map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="shrink-0 font-secondary text-base font-bold tracking-wide text-dark transition-opacity hover:opacity-70"
          >
            {label}
          </Link>
        ))}
        <Link
          href="/kontakt"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-light px-5 py-1.5 font-secondary text-base font-bold tracking-wide text-dark transition-opacity hover:opacity-70"
        >
          KONTAKT
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M3 8h10m0 0L9 4m4 4L9 12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </nav>

      {/* Mobile nav (< 1000px) */}
      <div className="flex h-16 items-center px-6 min-[1000px]:hidden">
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="flex cursor-pointer flex-col justify-center gap-1.5 text-dark"
        >
          <span
            className={`block h-[3px] w-6 rounded-full bg-dark transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-[3px] w-6 rounded-full bg-dark transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[3px] w-6 rounded-full bg-dark transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-0 top-16 z-50 overflow-hidden min-[1000px]:hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <nav className="flex w-auto flex-col rounded-br-xl bg-accent/30">
              {NAV_ITEMS.map(({ label, href }, i) => (
                <motion.div
                  key={href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.04, duration: 0.2 }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block px-8 py-3 font-secondary text-base font-bold tracking-wide text-dark transition-colors hover:bg-accent"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
