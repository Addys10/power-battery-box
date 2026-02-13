import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-dark">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:px-10">
        {/* Top row */}
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          {/* Logo + tagline */}
          <div>
            <Image
              src="/bpb-logo.png"
              alt="Battery Power Box"
              width={200}
              height={80}
              className="h-auto w-40 sm:w-48"
            />
            <p className="mt-3 font-secondary text-sm italic text-accent">
              Energie, která tě dovede k cíli.
            </p>
          </div>

          {/* Main menu */}
          <div>
            <h3 className="mb-3 font-secondary text-sm font-bold uppercase tracking-wider text-light">
              Hlavní menu
            </h3>
            <nav className="flex flex-col gap-1.5">
              <Link href="/" className="font-secondary text-sm font-bold text-light/80 transition-colors hover:text-accent">
                DOMŮ
              </Link>
              <Link href="/vize" className="font-secondary text-sm font-bold text-light/80 transition-colors hover:text-accent">
                MÁ VIZE
              </Link>
              <Link href="/battery-boxy" className="font-secondary text-sm font-bold text-light/80 transition-colors hover:text-accent">
                NABÍDKA
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-3 font-secondary text-sm font-bold uppercase tracking-wider text-light">
              Kontakt
            </h3>
            <div className="flex flex-col gap-1.5 font-secondary text-sm text-light/80">
              <span className="font-bold">Jiří Sládek</span>
              <a href="mailto:info@batterypowerbox.com" className="transition-colors hover:text-accent">
                info@batterypowerbox.com
              </a>
              <a href="tel:+420737167009" className="transition-colors hover:text-accent">
                +420 737 167 009
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-light/10 pt-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p className="text-center font-secondary text-xs text-light/50">
              &copy; 2025 Battery power box s.r.o., IČO 19709876, DIČ CZ 19709876 (plátci DPH)
            </p>
            <div className="flex gap-6 font-secondary text-xs text-light/50">
              <span className="cursor-not-allowed">Obchodní podmínky</span>
              <span className="cursor-not-allowed">Cookies</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
