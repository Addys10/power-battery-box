export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  warranty: string;
  warrantyNote: string;
  specs: ProductSpec[];
}

export const products: Product[] = [
  {
    slug: "436ah-li-ion-nmc",
    name: "BATTERY POWER BOX 436AH",
    subtitle: "Li-Ion-NMC 16,8V",
    image: "/boxy/436AH.png",
    warranty: "2 roky",
    warrantyNote: "Možnost prodloužení záruky — vše na domluvě",
    specs: [
      { label: "Maximální napětí baterie", value: "16,8V" },
      { label: "Nominální napětí při zatížení", value: "14,8V" },
      { label: "Minimální napětí baterie", value: "11,2V" },
      { label: "Míra samovybíjení", value: "≤ 3 % / měsíc" },
      { label: "Počet cyklů / životnost", value: "2000 (5% ~ 97% SoC)" },
      { label: "Pracovní teplota / nabíjení", value: "-20 °C ~ 55 °C" },
      { label: "Pracovní teplota / vybíjení", value: "-30 °C ~ 55 °C" },
      { label: "Teplota skladování", value: "-20 °C ~ 25 °C" },
      { label: "Kvalita článků", value: "A1" },
      { label: "Výrobce článků", value: "CALB Group" },
      { label: "Energie", value: "6 456 Wh" },
      { label: "Kapacita baterie", value: "436 Ah" },
      { label: "Váha vč. zateplení", value: "28 kg" },
      { label: "Doba nabíjení (30A nabíječka)", value: "15 h" },
      { label: "BMS", value: "200A" },
      { label: "Rozměry boxu (š × d × v)", value: "544 × 436 × 216 mm" },
      { label: "Technologie nabíjení", value: "CC/CV" },
      { label: "Životnost při odborném zacházení", value: "16 let+" },
      { label: "Externí výstupy", value: "Dle domluvy" },
      { label: "Průchodkové izolátory", value: "M8 / mosaz / 1000V / 80A" },
      { label: "Nahradí trakční baterii", value: "900 Ah" },
      {
        label: "Nájezd motorem Haibo M150 3HP 70LBS",
        value: "89 km (75% výkon, 1 osoba, prázdný člun KOLIBRI 300)",
      },
    ],
  },
  {
    slug: "300ah-li-ion",
    name: "BATTERY POWER BOX 300AH",
    subtitle: "Li-Ion 16,8V",
    image: "/boxy/436AH.png",
    warranty: "2 roky",
    warrantyNote: "Možnost prodloužení záruky — vše na domluvě",
    specs: [
      { label: "Maximální napětí baterie", value: "16,8V" },
      { label: "Nominální napětí při zatížení", value: "14,8V" },
      { label: "Minimální napětí baterie", value: "11,2V" },
      { label: "Míra samovybíjení", value: "≤ 3 % / měsíc" },
      { label: "Počet cyklů / životnost", value: "2000 (5% ~ 97% SoC)" },
      { label: "Pracovní teplota / nabíjení", value: "-20 °C ~ 55 °C" },
      { label: "Pracovní teplota / vybíjení", value: "-30 °C ~ 55 °C" },
      { label: "Teplota skladování", value: "-20 °C ~ 25 °C" },
      { label: "Kvalita článků", value: "A1" },
      { label: "Výrobce článků", value: "CATL (Contemporary Amperex Technology)" },
      { label: "Energie", value: "3 800 Wh" },
      { label: "Kapacita baterie", value: "300 Ah" },
      { label: "Váha vč. zateplení", value: "23 kg" },
      { label: "Doba nabíjení (30A nabíječka)", value: "10 h" },
      { label: "BMS", value: "200A" },
      { label: "Rozměry boxu (š × d × v)", value: "544 × 436 × 216 mm" },
      { label: "Technologie nabíjení", value: "CC/CV" },
      { label: "Životnost při odborném zacházení", value: "16 let+" },
      { label: "Externí výstupy", value: "Dle domluvy" },
      { label: "Průchodkové izolátory", value: "M8 / mosaz / 1000V / 80A" },
      { label: "Nahradí trakční baterii", value: "750 Ah" },
      {
        label: "Nájezd motorem Haibo M150 3HP 70LBS",
        value: "60 km (75% výkon, 1 osoba, prázdný člun KOLIBRI 300)",
      },
    ],
  },
  {
    slug: "218ah-li-ion-nmc",
    name: "BATTERY POWER BOX 218AH",
    subtitle: "Li-Ion-NMC 16,8V",
    image: "/boxy/218AH.png",
    warranty: "2 roky",
    warrantyNote: "Možnost prodloužení záruky — vše na domluvě",
    specs: [
      { label: "Maximální napětí baterie", value: "16,8V" },
      { label: "Nominální napětí při zatížení", value: "14,8V" },
      { label: "Minimální napětí baterie", value: "11,2V" },
      { label: "Míra samovybíjení", value: "≤ 3 % / měsíc" },
      { label: "Počet cyklů / životnost", value: "2000 (5% ~ 97% SoC)" },
      { label: "Pracovní teplota / nabíjení", value: "-20 °C ~ 55 °C" },
      { label: "Pracovní teplota / vybíjení", value: "-30 °C ~ 55 °C" },
      { label: "Teplota skladování", value: "-20 °C ~ 25 °C" },
      { label: "Kvalita článků", value: "A1" },
      { label: "Výrobce článků", value: "CALB Group" },
      { label: "Energie", value: "3 228 Wh" },
      { label: "Kapacita baterie", value: "218 Ah" },
      { label: "Váha vč. zateplení", value: "16,5 kg" },
      { label: "Doba nabíjení (15A nabíječka)", value: "14 h" },
      { label: "BMS", value: "200A" },
      { label: "Rozměry boxu (š × d × v)", value: "345 × 295 × 154 mm / Voděodolný: IP 65" },
      { label: "Technologie nabíjení", value: "CC/CV" },
      { label: "Životnost při odborném zacházení", value: "16 let+" },
      { label: "Externí výstupy", value: "4× USB / 5V / 2,1A" },
      { label: "Průchodkové izolátory", value: "M8 / mosaz / 1000V / 80A" },
      { label: "Nahradí trakční baterii", value: "400 Ah" },
      {
        label: "Nájezd motorem Haibo M150 3HP 70LBS",
        value: "32,4 km (100% výkon, 250 kg zátěž, KOLIBRI 300)",
      },
    ],
  },
  {
    slug: "150ah-li-ion",
    name: "BATTERY POWER BOX 150AH",
    subtitle: "Li-Ion 16,8V",
    image: "/boxy/150AH.png",
    warranty: "2 roky",
    warrantyNote: "Možnost prodloužení záruky — vše na domluvě",
    specs: [
      { label: "Maximální napětí baterie", value: "16,8V" },
      { label: "Nominální napětí při zatížení", value: "14,8V" },
      { label: "Minimální napětí baterie", value: "10,8V" },
      { label: "Míra samovybíjení", value: "≤ 3 % / měsíc" },
      { label: "Počet cyklů / životnost", value: "> 1 600" },
      { label: "Pracovní teplota / nabíjení", value: "0 °C ~ 45 °C" },
      { label: "Pracovní teplota / vybíjení", value: "-20 °C ~ 50 °C" },
      { label: "Teplota skladování", value: "-30 °C ~ 45 °C" },
      { label: "Kvalita článků", value: "A1" },
      { label: "Výrobce článků", value: "CATL (Contemporary Amperex Technology)" },
      { label: "Energie", value: "2 188 Wh" },
      { label: "Kapacita baterie", value: "150 Ah" },
      { label: "Váha vč. zateplení", value: "14,3 kg" },
      { label: "Doba nabíjení (10A nabíječka)", value: "15 h" },
      { label: "BMS", value: "200A" },
      { label: "Rozměry boxu (š × d × v)", value: "345 × 295 × 154 mm / Voděodolný: IP 65" },
      { label: "Technologie nabíjení", value: "CC/CV" },
      { label: "Životnost při odborném zacházení", value: "13 let+" },
      { label: "Externí výstupy", value: "4× USB / 5V / 2,1A" },
      { label: "Průchodkové izolátory", value: "M8 / mosaz / 1000V / 80A" },
      { label: "Nahradí trakční baterii", value: "300 Ah" },
      {
        label: "Nájezd motorem Haibo M150 3HP 70LBS",
        value: "21,8 km (100% výkon, 250 kg zátěž, KOLIBRI 300)",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
