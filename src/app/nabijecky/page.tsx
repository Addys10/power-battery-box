import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Nabíječky",
  description: "Nabíječky pro bateriové boxy a powerbanky Battery Power Box.",
};

export default function NabijeckyPage() {
  return (
    <main>
      <ComingSoon title="Nabíječky" />
    </main>
  );
}
