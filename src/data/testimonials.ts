export interface Testimonial {
  id: string;
  author: string;
  location: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Anna K.',
    location: 'Kraków',
    text: 'Wspaniałe miejsce na wypoczynek z rodziną. Pokoje czyste i przytulne, śniadanie obfite, a restauracja serwuje prawdziwe regionalne przysmaki z dziczyzny.',
    rating: 5,
  },
  {
    id: '2',
    author: 'Marek W.',
    location: 'Katowice',
    text: 'Organizowaliśmy wycieczkę szkolną – profesjonalna obsługa, świetne wyżywienie i dogodna lokalizacja blisko najważniejszych atrakcji Jury. Polecamy!',
    rating: 5,
  },
  {
    id: '3',
    author: 'Joanna i Piotr',
    location: 'Częstochowa',
    text: 'Nasze wesele w Złotym Jeleniu było magiczne. Natura, wyśmienite jedzenie i obsługa na najwyższym poziomie. Goście byli zachwyceni.',
    rating: 5,
  },
  {
    id: '4',
    author: 'Tomasz R.',
    location: 'Warszawa',
    text: 'Idealna baza wypadowa na szlaki jurajskie. Wypożyczyliśmy rowery, wieczorem zjedliśmy pyszną kolację. Na pewno wrócimy.',
    rating: 5,
  },
];
