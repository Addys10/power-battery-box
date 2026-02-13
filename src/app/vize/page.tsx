import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Má vize",
  description: "Vize a příběh za projektem Battery Power Box.",
};

export default function VizePage() {
  return (
    <main>
      <ComingSoon title="Má vize" />
    </main>
  );
}
