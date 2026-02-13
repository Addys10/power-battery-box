import type { Metadata } from "next";
import { Afacad_Flux, Poppins } from "next/font/google";
import { Header } from "@/components/Header";
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

export const metadata: Metadata = {
  title: "PBX — Power Battery Boxy",
  description: "Power Battery Boxy — prodej a montáž",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${afacadFlux.variable} ${poppins.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
