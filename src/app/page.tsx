import Image from "next/image";

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
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-accent/50 blur-[120px]" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-accent/50 blur-[150px]" />
        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/50 blur-[100px]" />

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
                className="mb-1 block w-[clamp(1.75rem,5vw,4rem)]"
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
              která tě dovede k cíli.
              <svg
                className="ml-auto mt-1 block w-[clamp(1.75rem,5vw,4rem)]"
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
    </main>
  );
}
