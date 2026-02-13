import Image from "next/image";
import { Typography } from "@/components/ui";

export default function DesignPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-16 px-6 py-16">
      {/* --- Logo --- */}
      <section className="space-y-6">
        <Typography variant="overline">Logo</Typography>

        <div className="flex flex-wrap items-center gap-8">
          <div className="flex items-center justify-center rounded-xl bg-light p-8">
            <Image
              src="/bpb-logo.png"
              alt="Battery Power Box logo"
              width={220}
              height={80}
              priority
            />
          </div>
          <div className="flex items-center justify-center rounded-xl bg-dark p-8">
            <Image
              src="/bpb-logo.png"
              alt="Battery Power Box logo na tmavém pozadí"
              width={220}
              height={80}
            />
          </div>
        </div>
      </section>

      {/* --- Barvy --- */}
      <section className="space-y-6">
        <Typography variant="overline">Barevná paleta</Typography>

        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-2 text-center">
            <div className="h-24 rounded-xl bg-dark" />
            <Typography variant="caption">Dark</Typography>
            <Typography variant="caption" className="block text-dark/60">
              #282828
            </Typography>
          </div>
          <div className="space-y-2 text-center">
            <div className="h-24 rounded-xl bg-accent" />
            <Typography variant="caption">Accent</Typography>
            <Typography variant="caption" className="block text-dark/60">
              #73f4b0
            </Typography>
          </div>
          <div className="space-y-2 text-center">
            <div className="h-24 rounded-xl border border-dark/10 bg-light" />
            <Typography variant="caption">Light</Typography>
            <Typography variant="caption" className="block text-dark/60">
              #e6fff0
            </Typography>
          </div>
        </div>
      </section>

      {/* --- Nadpisy (Afacad Flux) --- */}
      <section className="space-y-4">
        <Typography variant="overline">Typografie — nadpisy · Afacad Flux</Typography>

        <Typography variant="h1">H1 — Afacad Flux Bold</Typography>
        <Typography variant="h2">H2 — Afacad Flux Bold</Typography>
        <Typography variant="h3">H3 — Afacad Flux Semibold</Typography>
        <Typography variant="h4">H4 — Afacad Flux Semibold</Typography>
        <Typography variant="h5">H5 — Afacad Flux Medium</Typography>
        <Typography variant="h6">H6 — Afacad Flux Medium</Typography>
      </section>

      {/* --- Body texty (Poppins) --- */}
      <section className="space-y-4">
        <Typography variant="overline">Typografie — texty · Poppins</Typography>

        <Typography variant="subtitle1">
          Subtitle 1 — Poppins Medium
        </Typography>
        <Typography variant="subtitle2">
          Subtitle 2 — Poppins Medium
        </Typography>
        <Typography variant="body">
          Body — Poppins Regular. Toto je ukázkový odstavec, který demonstruje
          základní textový styl použitý napříč celým projektem.
        </Typography>
        <Typography variant="body-sm">
          Body SM — Poppins Regular, menší varianta pro doplňkové texty.
        </Typography>
        <Typography variant="caption">
          Caption — Poppins Regular, drobný text
        </Typography>
      </section>

      {/* --- Váhy --- */}
      <section className="space-y-4">
        <Typography variant="overline">Přepisy váhy</Typography>

        <Typography variant="body" weight="thin">
          Body s váhou thin (100)
        </Typography>
        <Typography variant="body" weight="regular">
          Body s váhou regular (400)
        </Typography>
        <Typography variant="body" weight="medium">
          Body s váhou medium (500)
        </Typography>
        <Typography variant="body" weight="semibold">
          Body s váhou semibold (600)
        </Typography>
        <Typography variant="body" weight="bold">
          Body s váhou bold (700)
        </Typography>
      </section>

      {/* --- Barvy na textu --- */}
      <section className="space-y-4">
        <Typography variant="overline">Barvy na textu</Typography>

        <Typography variant="h4" className="text-dark">
          Nadpis v barvě dark
        </Typography>
        <Typography variant="h4" className="text-accent">
          Nadpis v barvě accent
        </Typography>
        <div className="rounded-xl bg-dark p-6 space-y-2">
          <Typography variant="h4" className="text-light">
            Nadpis v barvě light na tmavém pozadí
          </Typography>
          <Typography variant="body" className="text-accent">
            Body text v barvě accent na tmavém pozadí
          </Typography>
        </div>
      </section>
    </main>
  );
}
