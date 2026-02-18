import type { Metadata } from "next";
import { Afacad_Flux, Poppins } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import "./globals.css";

const afacadFlux = Afacad_Flux({
  variable: "--font-primary",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-secondary",
  subsets: ["latin", "latin-ext"],
  weight: ["100", "400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://batterypowerbox.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Battery Power Box — Energie pro rybáře",
    template: "%s | Battery Power Box",
  },
  description:
    "Battery Power Box — bateriová úložiště energie pro rybáře. Předimenzované systémy s fotovoltaickými komponenty a BMS.",
  openGraph: {
    title: "Battery Power Box — Energie pro rybáře",
    description:
      "Předimenzované bateriové systémy navržené rybáři pro rybáře.",
    url: siteUrl,
    siteName: "Battery Power Box",
    locale: "cs_CZ",
    type: "website",
    images: [{ url: "/hero-img.png", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Battery Power Box — Energie pro rybáře",
    description:
      "Předimenzované bateriové systémy navržené rybáři pro rybáře.",
    images: ["/hero-img.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/bpb-logo.png",
  },
  other: {
    "theme-color": "#73f4b0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Battery Power Box s.r.o.",
              url: siteUrl,
              telephone: "+420737167009",
              email: "jirkasladek28@email.cz",
              description:
                "Bateriová úložiště energie pro rybáře. Předimenzované systémy s fotovoltaickými komponenty a BMS.",
              address: {
                "@type": "PostalAddress",
                addressCountry: "CZ",
              },
            }),
          }}
        />
      </head>
      <body
        className={`${afacadFlux.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        <div className="h-16" />
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
        <CookieBanner />
      </body>
    </html>
  );
}
