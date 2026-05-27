export interface SchoolTripPackage {
  id: 'bb' | 'hb' | 'fb';
  label: string;
  name: string;
  desc: string;
  weekday: string;
  weekend: string;
}

export const schoolTripPackages: SchoolTripPackage[] = [
  {
    id: 'bb',
    label: 'BB',
    name: 'Nocleg + Śniadanie (BB)',
    desc: 'Śniadanie serwowane w formie bufetu: pieczywo, wędliny, sery, kiełbaski, jajecznica, dżemy, jogurty, płatki, napoje oraz lokalne przysmaki.',
    weekday: '125 zł/os.',
    weekend: '135 zł/os.',
  },
  {
    id: 'hb',
    label: 'HB',
    name: 'Nocleg + Śniadanie + Obiadokolacja (HB)',
    desc: 'Obiadokolacja składająca się z dwóch dań: zupy oraz dania głównego. Możliwość ustalenia indywidualnego menu.',
    weekday: '175 zł/os.',
    weekend: '185 zł/os.',
  },
  {
    id: 'fb',
    label: 'FB',
    name: 'Nocleg + Pełne Wyżywienie (FB)',
    desc: 'Śniadania, obiady i kolacja bazująca na lokalnych produktach.',
    weekday: '210 zł/os.',
    weekend: '220 zł/os.',
  },
];

/** Jedna linia na pakiet – do list na stronie głównej */
export function schoolPackagePriceLine(pkg: SchoolTripPackage): string {
  return `Pakiet ${pkg.label}: Pn–Pt ${pkg.weekday} · Pt–Nd ${pkg.weekend}`;
}

export const schoolTripPriceHighlights = schoolTripPackages.map(schoolPackagePriceLine);

export const schoolTripPackagesSummary = `Pakiety ${schoolTripPackages
  .map((pkg) => `${pkg.label} ${pkg.weekday}`)
  .join(', ')} (Pn–Pt).`;
