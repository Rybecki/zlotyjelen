export interface RentalPartnerItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  href: string;
  ctaLabel: string;
}

export const RENTAL_PARTNER_NAME = 'JA-YHYMM...';

export const rentalPartnerItems: RentalPartnerItem[] = [
  {
    id: 'e-rowery',
    title: 'E-rowery',
    description:
      'Elektryczne rowery górskie – idealne na jurajskie szlaki i dłuższe trasy w okolicy Złotego Potoku bez nadmiaru wysiłku.',
    image: '/images/rental-ebikes.png',
    imageAlt: 'Para turystów na rowerach elektrycznych na szlaku w górach',
    href: 'https://ja-yhymm.pl/wypozyczalnia/e-rowery',
    ctaLabel: 'Zobacz ofertę e-rowerów',
  },
  {
    id: 'kajaki',
    title: 'Kajaki',
    description:
      'Spływy kajakowe dla par, rodzin i grup – aktywny wypoczynek na wodzie w malowniczej okolicy Jury.',
    image: '/images/rental-kayaks.png',
    imageAlt: 'Para kajakarzy na spokojnej, turkusowej wodzie',
    href: 'https://ja-yhymm.pl/wypozyczalnia/kajaki',
    ctaLabel: 'Zobacz ofertę kajaków',
  },
  {
    id: 'vip-bus',
    title: 'VIP bus',
    description:
      'Komfortowy transport dla grup – wycieczki, eventy i wyjazdy okolicznościowe z profesjonalną obsługą.',
    image: '/images/rental-vip-bus.png',
    imageAlt: 'Biały bus VIP z grafiką kompasu',
    href: 'https://ja-yhymm.pl/wypozyczalnia/vip-bus',
    ctaLabel: 'Zobacz ofertę VIP bus',
  },
  {
    id: 'dmuchance',
    title: 'Dmuchańce',
    description:
      'Kolorowe dmuchańce i place zabaw na imprezy, pikniki i eventy – atrakcja dla najmłodszych i całej rodziny.',
    image: '/images/rental-inflatables.png',
    imageAlt: 'Dmuchańce – zjeżdżalnie, place zabaw i atrakcje dla dzieci',
    href: 'https://ja-yhymm.pl/wypozyczalnia/dmuchance',
    ctaLabel: 'Zobacz ofertę dmuchańców',
  },
];

export const dmuchanceRentalItem = rentalPartnerItems.find((item) => item.id === 'dmuchance')!;

const rentalHeroSlidePosition: Partial<Record<string, string>> = {
  'e-rowery': 'center 10%',
  kajaki: 'center 10%',
};

export const rentalHeroSlides = rentalPartnerItems.map((item) => ({
  src: item.image,
  alt: item.imageAlt,
  position: rentalHeroSlidePosition[item.id] ?? 'center',
}));
