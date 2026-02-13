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
    </main>
  );
}
