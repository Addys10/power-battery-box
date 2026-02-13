import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Powerbanky",
  description: "Powerbanky Battery Power Box — spolehlivá energie na cestách.",
};

export default function PowerbankyPage() {
  return (
    <main>
      <ComingSoon title="Powerbanky" />
    </main>
  );
}
