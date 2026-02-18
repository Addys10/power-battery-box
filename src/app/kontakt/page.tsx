import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";
import { AnimateIn } from "@/components/AnimateIn";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktujte nás — Battery Power Box s.r.o., Jiří Sládek.",
};

export default function KontaktPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-white py-20 sm:py-28 md:py-36">
        <div className="absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-accent/30 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-2xl px-6 text-center sm:px-10">
          <AnimateIn preset="fadeUp">
            <h1 className="mb-4 font-secondary text-[clamp(2rem,5vw,3.5rem)] font-bold text-dark">
              Kontakt
            </h1>
            <p className="mb-12 font-secondary text-lg text-dark/60">
              Neváhejte se na nás obrátit s jakýmkoliv dotazem.
            </p>
          </AnimateIn>

          <div className="flex flex-col gap-8">
            <AnimateIn preset="fadeUp" delay={0.1}>
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dark">
                  <Mail className="h-6 w-6 text-dark" strokeWidth={1.5} />
                </div>
                <span className="font-secondary text-sm font-bold text-dark">
                  Jiří Sládek
                </span>
                <a
                  href="mailto:jirkasladek28@email.cz"
                  className="font-secondary text-base text-dark/80 transition-colors hover:text-accent"
                >
                  jirkasladek28@email.cz
                </a>
              </div>
            </AnimateIn>

            <AnimateIn preset="fadeUp" delay={0.2}>
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dark">
                  <Phone className="h-6 w-6 text-dark" strokeWidth={1.5} />
                </div>
                <a
                  href="tel:+420737167009"
                  className="font-secondary text-base text-dark/80 transition-colors hover:text-accent"
                >
                  +420 737 167 009
                </a>
              </div>
            </AnimateIn>

            <AnimateIn preset="fadeUp" delay={0.3}>
              <div className="flex flex-col items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-dark">
                  <MapPin className="h-6 w-6 text-dark" strokeWidth={1.5} />
                </div>
                <span className="font-secondary text-sm font-bold text-dark">
                  Battery Power Box s.r.o.
                </span>
                <span className="font-secondary text-sm text-dark/80">
                  Střední 122, Šilheřovice, 747 15
                </span>
                <span className="font-secondary text-xs text-dark/50">
                  IČO 19709876 &middot; DIČ CZ 19709876
                </span>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </main>
  );
}
