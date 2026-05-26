export interface Testimonial {
  id: string;
  author: string;
  location: string;
  text: string;
  rating: number;
}

/** Link do opinii w Google */
export const GOOGLE_REVIEWS_URL =
  'https://www.google.com/travel/search?gsas=1&ts=EggKAggDCgIIAxocEhoSFAoHCOoPEAUYHxIHCOoPEAYYARgBMgIQAA&qs=MhRDZ3NJejdESmo3X01nZmFNQVJBQjgC&ap=ugEHcmV2aWV3cw&ictx=111&hl=pl-PL&ved=0CAAQ5JsGahcKEwjokqeipNeUAxUAAAAAHQAAAAAQAw';

export const testimonials: Testimonial[] = [
  {
    id: 'aleksandra-borek',
    author: 'Aleksandra Borek',
    location: 'Opinia z Google',
    text:
      'W restauracji Złoty Jeleń wielokrotnie zdarzyło nam się zjeść pyszny obiad, a w sierpniu 2025 organizowaliśmy w restauracji na tarasie chrzciny dla córki. Jedzenie było doskonałe, menu zróżnicowane, dostosowane do preferencji gości. Słodki stół był jeszcze bardziej bogaty niż ustalaliśmy. Wszystkie posiłki były pięknie podane, restauracja przygotowała dekoracje zgodnie z naszymi preferencjami. Dzieci miały dużo przestrzeni do zabawy w ogrodzie, a także kącik z zabawkami na tarasie. Obsługa bardzo życzliwa i profesjonalna. Miejsce zdecydowanie warte polecenia do organizacji przyjęć i spotkań rodzinnych.',
    rating: 5,
  },
  {
    id: 'adam-rapalski',
    author: 'Adam Rapalski',
    location: 'Opinia z Google',
    text:
      'Cudowne miejsce z klimatem. Dobre jedzenie z adekwatnym menu. Idealne na weekendowy wyjazd na obiad lub nawet wesele. Bardzo miła obsługa. Polecam rybkę.',
    rating: 5,
  },
  {
    id: 'big-watchin',
    author: 'Big Watchin',
    location: 'Opinia z Google',
    text:
      'Do restauracji „Złoty Jeleń” warto przyjechać nawet dla samego jedzenia. Szczególnie warto spróbować dziczyzny, upolowanej lokalnie i pstrąga, którego hodowla znajduje się 2 km dalej w Złotym Potoku. Sam obiekt jest starą harcówką, która po renowacji została przerobiona na restaurację i dom gościnny. Będąc uczestnikiem wesela miałem okazję nocować w lokalu – pokoje były czyste, pościel świeżo wyprana. Właściciele to pozytywni i otwarci ludzie, dzięki czemu wracam tu z przyjemnością!',
    rating: 5,
  },
];
