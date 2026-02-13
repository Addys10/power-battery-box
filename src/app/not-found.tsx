import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="font-primary text-8xl font-bold text-accent sm:text-9xl">
        404
      </h1>
      <p className="mt-4 font-secondary text-xl font-bold text-dark sm:text-2xl">
        Stránka nenalezena
      </p>
      <p className="mt-2 font-secondary text-sm text-dark/60">
        Omlouváme se, ale stránka kterou hledáte neexistuje.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-secondary text-sm font-bold text-dark transition-opacity hover:opacity-80"
      >
        Zpět na hlavní stránku
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
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
      </Link>
    </div>
  );
}
