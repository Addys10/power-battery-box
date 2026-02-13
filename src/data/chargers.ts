export interface ChargerSpec {
  label: string;
  value: string;
}

export interface Charger {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  warranty: string;
  specs: ChargerSpec[];
}

export const chargers: Charger[] = [
  {
    slug: "14-8v-50a",
    name: "Nabíječka Li-Ion 14,8V 50A",
    subtitle: "16,8V / 50A / CC-CV",
    image: "/nabijecky/14-8V50A.png",
    warranty: "2 roky",
    specs: [
      { label: "Vstupní napětí", value: "100–240 V (47–63 Hz)" },
      { label: "Napětí baterie", value: "14,8V" },
      { label: "Nabíjecí napětí", value: "16,8V" },
      { label: "Nabíjecí proud", value: "50A" },
      { label: "Druh nabíjení", value: "CC/CV" },
      { label: "Účinnost", value: "≥ 87 %" },
      { label: "Provozní teplota", value: "-20 °C ~ +50 °C" },
      { label: "Materiál pouzdra", value: "Hliník" },
      { label: "LED indikátor", value: "Červená = nabíjení, zelená = plně nabito" },
      { label: "Připojení k bateriím", value: "Pomocí ok" },
      { label: "Rozměry", value: "410 × 121 × 100 mm" },
      { label: "Váha", value: "< 5 kg" },
    ],
  },
  {
    slug: "14-8v-10a",
    name: "Nabíječka Li-Ion 14,8V 10A",
    subtitle: "16,8V / 10A / CC-CV",
    image: "/nabijecky/14-8V10A.png",
    warranty: "2 roky",
    specs: [
      { label: "Vstupní napětí", value: "100–240 V (47–63 Hz)" },
      { label: "Napětí baterie", value: "14,8V" },
      { label: "Nabíjecí napětí", value: "16,8V" },
      { label: "Nabíjecí proud", value: "10A" },
      { label: "Druh nabíjení", value: "CC/CV" },
      { label: "Účinnost", value: "≥ 87 %" },
      { label: "Provozní teplota", value: "-20 °C ~ +50 °C" },
      { label: "Materiál pouzdra", value: "Plast UL94V0" },
      { label: "LED indikátor", value: "Červená = nabíjení, zelená = plně nabito" },
      { label: "Připojení k bateriím", value: "Pomocí ok" },
      { label: "Rozměry", value: "160 × 85 × 56 mm" },
      { label: "Váha", value: "< 0,6 kg" },
    ],
  },
  {
    slug: "16-8v-15a",
    name: "Nabíječka Li-Ion 16,8V 15A",
    subtitle: "16,8V / 15A / CC-CV",
    image: "/nabijecky/16-8V15A.png",
    warranty: "2 roky",
    specs: [
      { label: "Vstupní napětí", value: "100–240 V (47–63 Hz)" },
      { label: "Napětí baterie", value: "14,8V" },
      { label: "Nabíjecí napětí", value: "16,8V" },
      { label: "Nabíjecí proud", value: "15A" },
      { label: "Druh nabíjení", value: "CC/CV" },
      { label: "Účinnost", value: "≥ 87 %" },
      { label: "Provozní teplota", value: "-20 °C ~ +50 °C" },
      { label: "Materiál pouzdra", value: "Hliník" },
      { label: "LED indikátor", value: "Červená = nabíjení, zelená = plně nabito" },
      { label: "Připojení k bateriím", value: "Pomocí ok" },
      { label: "Rozměry", value: "163 × 95 × 56 mm" },
      { label: "Váha", value: "< 1 kg" },
    ],
  },
  {
    slug: "16-8v-30a",
    name: "Nabíječka Li-Ion 16,8V 30A",
    subtitle: "16,8V / 30A / CC-CV",
    image: "/nabijecky/16-8V30A.png",
    warranty: "2 roky",
    specs: [
      { label: "Vstupní napětí", value: "100–240 V (47–63 Hz)" },
      { label: "Napětí baterie", value: "14,8V" },
      { label: "Nabíjecí napětí", value: "16,8V" },
      { label: "Nabíjecí proud", value: "30A" },
      { label: "Druh nabíjení", value: "CC/CV" },
      { label: "Účinnost", value: "≥ 87 %" },
      { label: "Provozní teplota", value: "-20 °C ~ +50 °C" },
      { label: "Materiál pouzdra", value: "Hliník" },
      { label: "LED indikátor", value: "Červená = nabíjení, zelená = plně nabito" },
      { label: "Připojení k bateriím", value: "Pomocí ok" },
      { label: "Rozměry", value: "205 × 121 × 100 mm" },
      { label: "Váha", value: "< 2 kg" },
    ],
  },
];

export function getChargerBySlug(slug: string): Charger | undefined {
  return chargers.find((c) => c.slug === slug);
}
