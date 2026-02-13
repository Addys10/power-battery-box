import type { Metadata } from "next";
import { ComingSoon } from "@/components/ComingSoon";

export const metadata: Metadata = {
  title: "Battery Boxy",
  description: "Nabídka bateriových boxů — předimenzované systémy pro rybáře.",
};

export default function BatteryBoxyPage() {
  return (
    <main>
      <ComingSoon title="Battery Boxy" />
    </main>
  );
}
