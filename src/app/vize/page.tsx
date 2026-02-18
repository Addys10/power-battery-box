import type { Metadata } from "next";
import Image from "next/image";
import { ShieldCheck, SunMedium, Cpu, Cable, Flame, Award } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Má vize",
  description:
    "Vize a příběh za projektem Battery Power Box — předimenzované systémy s fotovoltaickými komponenty.",
};

export default function VizePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24 md:py-32">
        <div className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40 blur-[140px]" />
        <div className="absolute right-1/4 bottom-1/4 h-72 w-72 rounded-full bg-accent/30 blur-[110px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-10">
          <AnimateIn preset="fadeUp">
            <h1 className="mb-8 text-center font-secondary text-[clamp(2rem,5vw,3.5rem)] font-bold leading-tight text-dark">
              Má vize
            </h1>
          </AnimateIn>
          <AnimateIn preset="fadeUp" delay={0.15}>
            <div className="mx-auto flex max-w-2xl items-center justify-center gap-5 rounded-2xl bg-dark px-8 py-8 sm:px-14 sm:py-10">
              <Award
                className="hidden h-12 w-12 shrink-0 text-accent sm:block"
                strokeWidth={1.5}
              />
              <p className="text-center font-secondary text-lg font-bold leading-relaxed text-light sm:text-left sm:text-xl">
                Každou baterii dělám poctivě a&nbsp;s&nbsp;precizností, jako by
                měla sloužit mě samotnému.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      <div className="bg-white">
        {/* Quality section */}
        <section className="relative overflow-hidden pb-16 sm:pb-24">
          <div className="absolute -left-20 top-20 h-80 w-80 rounded-full bg-accent/30 blur-[130px]" />

          <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10">
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:gap-14">
              <AnimateIn preset="slideRight" className="flex-1">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dark">
                  <ShieldCheck className="h-7 w-7 text-dark" strokeWidth={1.5} />
                </div>
                <h2 className="mb-4 font-secondary text-2xl font-bold text-dark sm:text-3xl">
                  Bez kompromisů
                </h2>
                <p className="font-secondary text-base leading-relaxed text-dark/70">
                  Celé systémy jsou extrémně předimenzované. Na sestavu jsou
                  použity jen ty nejkvalitnější součástky, které dlouhé roky
                  používám a mám je vyzkoušeny v praxi — vím, co dokážou
                  a vydrží. Jsou použity ve všech bateriových sestavách bez
                  výjimek a kompromisů.
                </p>
              </AnimateIn>
              <AnimateIn preset="slideLeft" className="w-full shrink-0 overflow-hidden rounded-2xl md:w-[40%]">
                <Image
                  src="/vize/b1.png"
                  alt="Battery box na váze — odolný TACTIX kufr"
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="h-auto w-full"
                />
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Solar inspiration */}
        <section className="relative overflow-hidden pb-16 sm:pb-24">
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-accent/35 blur-[140px]" />

          <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10">
            <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:gap-14">
              <AnimateIn preset="slideRight" className="w-full shrink-0 overflow-hidden rounded-2xl md:w-[40%]">
                <Image
                  src="/vize/b2.png"
                  alt="Battery box napájí echosounder Lowrance"
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="h-auto w-full"
                />
              </AnimateIn>
              <AnimateIn preset="slideLeft" className="flex-1">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dark">
                  <SunMedium className="h-7 w-7 text-dark" strokeWidth={1.5} />
                </div>
                <h2 className="mb-4 font-secondary text-2xl font-bold text-dark sm:text-3xl">
                  Inspirace fotovoltaikou
                </h2>
                <p className="font-secondary text-base leading-relaxed text-dark/70">
                  Hlavní inspirací jsou součástky používané ve fotovoltaice.
                  Jelikož se už nějaký pátek zabývám a podnikám ve výstavbě
                  fotovoltaických systémů, tak jsem si z toho hodně odnesl
                  k rybaření. Velké bateriové úložiště a řízení procesů baterií
                  jsem vždy obdivoval a energii na rybách jsem vždy potřeboval —
                  proto byla tahle cesta jasná volba.
                </p>
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* BMS + Active Balance */}
        <section className="relative overflow-hidden pb-16 sm:pb-24">
          <div className="absolute left-1/3 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-accent/35 blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-10">
            <div className="flex flex-col gap-10 md:flex-row md:items-start md:gap-14">
              <AnimateIn preset="slideRight" className="flex-1">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dark">
                  <Cpu className="h-7 w-7 text-dark" strokeWidth={1.5} />
                </div>
                <h2 className="mb-4 font-secondary text-2xl font-bold text-dark sm:text-3xl">
                  BMS & Aktivní Balanc
                </h2>
                <p className="mb-6 font-secondary text-base leading-relaxed text-dark/70">
                  Je zde použita BMS, která řídí procesy ve velkých bateriových
                  sestavách určených pro výrobní závody a objekty náročné na
                  časté využívání energie z baterií. Její jmenovitý vybíjecí
                  proud je 200A, což je až pro nás rybáře nepředstavitelné
                  (bereme maximálně 40–60A).
                </p>
                <p className="font-secondary text-base leading-relaxed text-dark/70">
                  Vlastnost Aktivní Balanc jsem v praxi ocenil především
                  u sestav baterií, které si zakládaly na dlouhé životnosti
                  článků — proto byla tahle BMS jasná volba. Dokáže aktivně
                  řídit tok energie z jednotlivých článků a držet celkovou
                  vybíjecí křivku na konstantní úrovni, což dává bateriím
                  maximální životnost a účinnost.
                </p>
              </AnimateIn>
              <AnimateIn preset="slideLeft" className="w-full shrink-0 overflow-hidden rounded-2xl md:w-[40%]">
                <Image
                  src="/vize/b3.png"
                  alt="Battery box v akci na lodi"
                  width={600}
                  height={800}
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="h-auto w-full"
                />
              </AnimateIn>
            </div>
          </div>
        </section>

        {/* Build quality */}
        <section className="relative overflow-hidden pb-20 sm:pb-28 md:pb-36">
          <div className="absolute -right-10 bottom-10 h-80 w-80 rounded-full bg-accent/30 blur-[130px]" />

          <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 sm:grid-cols-2 sm:px-10">
            <AnimateIn preset="fadeUp" delay={0}>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dark">
                <Cable className="h-7 w-7 text-dark" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 font-secondary text-xl font-bold text-dark">
                Spoje & kabeláž
              </h3>
              <p className="font-secondary text-base leading-relaxed text-dark/70">
                Není zde žádný pájecí spoj — všechny spoje jsou dělány pomocí
                lisovacích ok pro maximální pevnost, kvůli přepravě nebo hrubému
                zacházení s kufrem.
              </p>
              <p className="mt-4 font-secondary text-base leading-relaxed text-dark/70">
                Jsou použity kabely průřezu 6mm, dimenzované a vyvinuté pro
                fotovoltaické systémy s vysokým standardem na vodivost. Hrubá
                izolace do 1000VDC a samozhášecí vlastnost kabeláže — mezi
                základní izolací je nalisovaný zhášecí prášek, který chladí
                a je schopný hasit ohnisko vzniku jiskry.
              </p>
            </AnimateIn>

            <AnimateIn preset="fadeUp" delay={0.15}>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border-2 border-dark">
                <Flame className="h-7 w-7 text-dark" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 font-secondary text-xl font-bold text-dark">
                Normy & certifikace
              </h3>
              <p className="mb-4 font-secondary text-sm italic text-dark/60">
                BETAflam Solar 125 RV flex FRNC — bezhalogenový, samozhášecí
              </p>
              <ul className="flex flex-col gap-2 font-secondary text-sm leading-relaxed text-dark/70">
                <li>
                  <span className="font-bold text-dark">Požární odolnost:</span>{" "}
                  IEC 60332-1, IEC 60332-3-24
                </li>
                <li>
                  <span className="font-bold text-dark">Kouřové emise:</span>{" "}
                  IEC 61034, EN 61034-2
                </li>
                <li>
                  <span className="font-bold text-dark">
                    Nízké požární zatížení:
                  </span>{" "}
                  DIN 51900
                </li>
                <li>
                  <span className="font-bold text-dark">Certifikace:</span>{" "}
                  TÜV PfG 1169/08.2007 PV1-F
                </li>
                <li>
                  <span className="font-bold text-dark">Standardy:</span>{" "}
                  UNE 21123, UNE 20.460-5-52, UTE C 32-502
                </li>
              </ul>
            </AnimateIn>
          </div>
        </section>

      </div>
    </main>
  );
}
