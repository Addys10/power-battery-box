import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Battery Boxy",
  description:
    "Nabídka bateriových boxů — předimenzované systémy pro rybáře.",
};

export default function BatteryBoxyPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white py-16 sm:py-24 md:py-32">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40 blur-[140px]" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-accent/30 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10">
          <h1 className="mb-4 text-center font-secondary text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-dark">
            Battery Boxy
          </h1>
          <p className="mx-auto mb-14 max-w-xl text-center font-secondary text-lg text-dark/60 sm:mb-20">
            Předimenzované bateriové systémy navržené rybáři pro rybáře. Cena
            a konfigurace na domluvě.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/battery-boxy/${product.slug}`}
                className="group overflow-hidden rounded-2xl border-2 border-dark/10 transition-colors hover:border-accent"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-dark/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="px-6 py-5">
                  <h2 className="font-secondary text-lg font-bold text-dark">
                    {product.name}
                  </h2>
                  <p className="mt-1 font-secondary text-sm text-dark/60">
                    {product.subtitle}
                  </p>
                  <div className="mt-3 flex items-center gap-2 font-secondary text-sm font-bold text-accent">
                    Zobrazit detail
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
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
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
