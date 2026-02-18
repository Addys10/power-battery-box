import type { Metadata } from "next";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

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
            {products.map((product, i) => (
              <ProductCard
                key={product.slug}
                href={`/battery-boxy/${product.slug}`}
                image={product.image}
                name={product.name}
                subtitle={product.subtitle}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
