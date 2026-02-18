import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Phone, Mail, ArrowLeft, ShieldCheck } from "lucide-react";
import { chargers, getChargerBySlug } from "@/data/chargers";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return chargers.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const charger = getChargerBySlug(slug);
  if (!charger) return {};
  return {
    title: charger.name,
    description: `${charger.name} — ${charger.subtitle}`,
  };
}

export default async function ChargerPage({ params }: Props) {
  const { slug } = await params;
  const charger = getChargerBySlug(slug);
  if (!charger) notFound();

  return (
    <main>
      <div className="bg-white">
        {/* Back link */}
        <div className="mx-auto max-w-5xl px-6 pt-8 sm:px-10">
          <Link
            href="/nabijecky"
            className="inline-flex items-center gap-2 font-secondary text-sm font-bold text-dark/60 transition-colors hover:text-dark"
          >
            <ArrowLeft className="h-4 w-4" />
            Zpět na nabíječky
          </Link>
        </div>

        {/* Product hero */}
        <section className="relative overflow-hidden py-10 sm:py-16">
          <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-accent/35 blur-[150px]" />
          <div className="absolute -left-10 bottom-20 h-72 w-72 rounded-full bg-accent/30 blur-[120px]" />

          <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10 px-6 sm:px-10 md:flex-row md:items-start md:gap-14">
            {/* Image */}
            <div className="flex w-full shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white md:w-[45%]">
              <Image
                src={charger.image}
                alt={charger.name}
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="h-auto w-full object-contain"
              />
            </div>

            {/* Info */}
            <div className="flex-1">
              <h1 className="font-secondary text-[clamp(1.5rem,4vw,2.5rem)] font-bold leading-tight text-dark">
                {charger.name}
              </h1>
              <p className="mt-2 font-secondary text-lg text-dark/60">
                {charger.subtitle}
              </p>

              {/* Warranty */}
              <div className="mt-6 flex items-center gap-3 rounded-xl bg-dark/5 px-5 py-3">
                <ShieldCheck
                  className="h-5 w-5 shrink-0 text-accent"
                  strokeWidth={1.5}
                />
                <span className="font-secondary text-sm text-dark/80">
                  <span className="font-bold">Záruka {charger.warranty}</span>
                </span>
              </div>

              {/* Price CTA */}
              <div className="mt-6 rounded-xl bg-dark px-6 py-5">
                <p className="mb-1 font-secondary text-sm text-light/60">
                  Cena
                </p>
                <p className="mb-4 font-secondary text-xl font-bold text-light">
                  Na domluvě
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href="tel:+420737167009"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-2.5 font-secondary text-sm font-bold text-dark transition-opacity hover:opacity-80"
                  >
                    <Phone className="h-4 w-4" />
                    +420 737 167 009
                  </a>
                  <a
                    href="mailto:jirkasladek28@email.cz"
                    className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-light/20 px-6 py-2.5 font-secondary text-sm font-bold text-light transition-colors hover:border-accent hover:text-accent"
                  >
                    <Mail className="h-4 w-4" />
                    Napsat email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specs table */}
        <section className="relative overflow-hidden pb-20 sm:pb-28 md:pb-36">
          <div className="absolute left-1/3 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/25 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10">
            <h2 className="mb-8 font-secondary text-2xl font-bold text-dark">
              Technické parametry
            </h2>
            <div className="overflow-hidden rounded-2xl border-2 border-dark/10">
              {charger.specs.map((spec, i) => (
                <div
                  key={spec.label}
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
          </div>
        </section>
      </div>
    </main>
  );
}
