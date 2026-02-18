import type { Metadata } from "next";
import { chargers } from "@/data/chargers";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Nabíječky",
  description:
    "Nabíječky pro bateriové boxy Battery Power Box — CC/CV, hliníkové pouzdro.",
};

export default function NabijeckyPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white py-16 sm:py-24 md:py-32">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40 blur-[140px]" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-accent/30 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10">
          <h1 className="mb-4 text-center font-secondary text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-dark">
            Nabíječky
          </h1>
          <p className="mx-auto mb-14 max-w-xl text-center font-secondary text-lg text-dark/60 sm:mb-20">
            Nabíječky pro bateriové boxy — spolehlivé nabíjení s CC/CV
            technologií. Cena na domluvě.
          </p>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {chargers.map((charger, i) => (
              <ProductCard
                key={charger.slug}
                href={`/nabijecky/${charger.slug}`}
                image={charger.image}
                name={charger.name}
                subtitle={charger.subtitle}
                index={i}
                imageClassName="object-contain"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
