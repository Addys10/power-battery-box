"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
        <Link href="/" className="shrink-0">
          <Image src="/bpb-logo.png" alt="Battery Power Box" width={120} height={40} unoptimized className="h-8 w-auto" />
        </Link>
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
      <div className="flex h-16 items-center justify-between px-6 min-[1000px]:hidden">
        <Link href="/">
          <Image src="/bpb-logo.png" alt="Battery Power Box" width={100} height={36} unoptimized className="h-7 w-auto" />
        </Link>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="relative z-[60] flex cursor-pointer flex-col justify-center gap-1.5"
        >
          <span
            className={`block h-[3px] w-6 rounded-full transition-all duration-300 ${open ? "translate-y-[9px] rotate-45 bg-light" : "bg-dark"}`}
          />
          <span
            className={`block h-[3px] w-6 rounded-full transition-all duration-300 ${open ? "opacity-0" : "bg-dark"}`}
          />
          <span
            className={`block h-[3px] w-6 rounded-full transition-all duration-300 ${open ? "-translate-y-[9px] -rotate-45 bg-light" : "bg-dark"}`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex flex-col bg-dark min-[1000px]:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="flex flex-1 flex-col items-center justify-center gap-6">
              {NAV_ITEMS.map(({ label, href }, i) => (
                <motion.div
                  key={href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                >
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="block font-secondary text-2xl font-bold tracking-wide text-light transition-colors hover:text-accent"
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
