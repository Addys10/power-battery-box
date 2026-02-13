import Image from "next/image";
import { ShieldCheck, SunMedium, Cpu, Fish, Zap } from "lucide-react";

export default function Home() {
  return (
    <main>
      <section className="relative bg-dark">
        <Image
          src="/hero-img.png"
          alt=""
          width={1920}
          height={1080}
          priority
          unoptimized
          className="h-auto w-full"
        />
        <div className="absolute inset-0 z-10 flex items-center px-6 sm:px-10 md:pl-20">
          <h1 className="whitespace-nowrap font-secondary leading-tight text-light text-xl sm:text-3xl md:text-4xl lg:text-6xl">
            <span className="font-bold">Nyní již neřeš energii,</span>
            <br />
            jen jezdi a{" "}
            <span className="relative inline-block font-bold">
              plň si své sny
              <svg
                className="absolute -bottom-4 left-0 w-full"
                viewBox="0 0 200 12"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10 Q100 -2 198 10"
                  stroke="var(--color-accent)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
        </div>
      </section>

      {/* Quote section */}
      <section className="relative overflow-hidden bg-white py-16 sm:py-24 md:py-32">
        {/* Accent blurs */}
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/50 blur-[120px]" />
        <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-accent/40 blur-[110px]" />

        <div className="relative z-10 mx-auto flex max-w-7xl items-center gap-8 px-6 sm:px-10 md:gap-14">
          {/* Image */}
          <div className="w-[30%] max-w-xs shrink-0 overflow-hidden rounded-2xl">
            <Image
              src="/jirikkaprr.png"
              alt="Jiří Kapr"
              width={400}
              height={500}
              unoptimized
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Quote */}
          <div className="relative min-w-0 flex-1">
            <blockquote className="font-secondary text-[clamp(1rem,3.2vw,2.75rem)] font-bold leading-snug text-dark">
              <svg
                className="mb-1 block w-[clamp(2rem,6vw,5rem)]"
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 20C0 10 6 2 16 0l2 4c-6 3-9 7-9 12h9v14H0V20zm22 0C22 10 28 2 38 0l2 4c-6 3-9 7-9 12h9v14H22V20z"
                  fill="var(--color-accent)"
                />
              </svg>
              Soustřeď se jen na své poslání.
              <br />
              Battery power box je energií,
              <br />
              která tě dovede k cíli.{" "}
              <svg
                className="ml-10 inline-block w-[clamp(2rem,6vw,5rem)] translate-y-[clamp(0.5rem,1.5vw,1.25rem)]"
                viewBox="0 0 40 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 10C18 20 12 28 2 30L0 26c6-3 9-7 9-12H0V0h18v10zm22 0C40 20 34 28 24 30l-2-4c6-3 9-7 9-12h-9V0h18v10z"
                  fill="var(--color-accent)"
                />
              </svg>
            </blockquote>
          </div>
        </div>
      </section>

      {/* Why choose Battery power box? */}
      <section className="relative overflow-hidden bg-white pb-20 sm:pb-28 md:pb-36">
        {/* Accent blurs */}
        <div className="absolute -right-20 top-10 h-[30rem] w-[30rem] rounded-full bg-accent/40 blur-[160px]" />
        <div className="absolute -left-10 bottom-20 h-96 w-96 rounded-full bg-accent/40 blur-[140px]" />
        <div className="absolute left-[60%] top-[40%] h-72 w-72 rounded-full bg-accent/40 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-10">
          <h2 className="mb-14 text-center font-secondary text-[clamp(1.75rem,4.5vw,3.5rem)] font-bold leading-tight text-dark sm:mb-20">
            Proč zvolit Battery power box?
          </h2>

          {/* Top row - 3 items */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
            {/* 1 - Quality */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dark">
                <ShieldCheck className="h-8 w-8 text-dark" strokeWidth={1.5} />
              </div>
              <p className="max-w-xs font-secondary text-sm italic leading-relaxed text-dark/80">
                Celé systémy jsou předimenzované. Sestava je složena z těch nejkvalitnějších komponentů, které jsou ověřeny v praxi. Komponenty jsou použity ve všech bateriových sestavách.
              </p>
            </div>

            {/* 2 - Solar */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dark">
                <SunMedium className="h-8 w-8 text-dark" strokeWidth={1.5} />
              </div>
              <p className="max-w-xs font-secondary text-sm italic leading-relaxed text-dark/80">
                Hlavní inspirací jsou součástky používané ve fotovoltaice. Jelikož se už nějaký pátek zabývám a podnikám ve výstavbě fotovoltaických systémů, tak jsem si z toho hodně odnesl k rybaření.
              </p>
            </div>

            {/* 3 - BMS */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dark">
                <Cpu className="h-8 w-8 text-dark" strokeWidth={1.5} />
              </div>
              <p className="max-w-xs font-secondary text-sm italic leading-relaxed text-dark/80">
                BMS řídí procesy ve velkých bateriových sestavách určených pro výrobní závody. Její jmenovitý vybíjecí proud je 200A, což je až pro nás rybáře nepředstavitelné (bereme max. 40–60A).
              </p>
            </div>
          </div>

          {/* Bottom row - 2 items centered */}
          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-8 sm:px-[16.666%]">
            {/* 4 - Fishing */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dark">
                <Fish className="h-8 w-8 text-dark" strokeWidth={1.5} />
              </div>
              <p className="max-w-xs font-secondary text-sm italic leading-relaxed text-dark/80">
                Navrženo rybáři pro rybáře. Každý box je testovaný přímo u vody v reálných podmínkách, aby vydržel celý víkendový maraton bez nutnosti dobíjení.
              </p>
            </div>

            {/* 5 - Energy */}
            <div className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border-2 border-dark">
                <Zap className="h-8 w-8 text-dark" strokeWidth={1.5} />
              </div>
              <p className="max-w-xs font-secondary text-sm italic leading-relaxed text-dark/80">
                Kapacita, na kterou se můžeš spolehnout. Echosoundy, signalizátory, osvětlení i nabíjení telefonu — vše z jednoho zdroje, bez kompromisů a kdykoliv připravené.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Large image section */}
      <section className="bg-white px-6 pb-10 sm:px-10 sm:pb-16 md:px-20 md:pb-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-2xl">
          <Image
            src="/jirik-kapr2.png"
            alt="Jiří s kaprem"
            width={1920}
            height={1080}
            unoptimized
            className="h-auto w-full"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/30 via-[33%] to-transparent" />
        </div>
      </section>
    </main>
  );
}
