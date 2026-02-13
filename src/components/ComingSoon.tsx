import Link from "next/link";

interface ComingSoonProps {
  title: string;
}

export function ComingSoon({ title }: ComingSoonProps) {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-white">
      <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/40 blur-[120px]" />

      <div className="relative z-10 px-6 text-center">
        <h1 className="mb-4 font-secondary text-[clamp(2rem,5vw,3.5rem)] font-bold text-dark">
          {title}
        </h1>
        <p className="mx-auto mb-8 max-w-md font-secondary text-lg text-dark/60">
          Tato stránka se připravuje. Brzy zde najdete vše potřebné.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-dark px-6 py-3 font-secondary text-sm font-bold text-light transition-opacity hover:opacity-80"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M13 8H3m0 0l4-4M3 8l4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Zpět na hlavní stránku
        </Link>
      </div>
    </section>
  );
}
