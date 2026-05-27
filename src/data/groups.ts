import type { WeddingVariant } from './weddings';
import { rooms } from './rooms';

const room3 = rooms.find((r) => r.id === 'pokoj-3')!;

export const groupsHeroSlides = [
  {
    src: '/images/menu-burger-dzik.png',
    alt: 'Burgery z dzika z frytkami drwala',
    position: 'center 85%',
  },
  {
    src: room3.image,
    alt: room3.name,
    position: 'center 90%',
  },
] as const;

export const groupsAccommodation: WeddingVariant = {
  id: 'nocleg',
  watermark: 'N',
  title: 'Pakiet nocleg + śniadanie',
  price: '125 zł/os.',
  intro: [
    'Nocleg w pokoju 1, 2, 3 lub 4-osobowym z obfitym śniadaniem w formie bufetowej.',
    'Układ pokoi do ustalenia.',
  ],
  sections: [],
};

export const groupsLunchVariants: WeddingVariant[] = [
  {
    id: 'obiad-1',
    watermark: 'I',
    title: 'Wariant I',
    price: '55 zł/os.',
    sections: [
      { title: 'Zupa', items: ['Rosół z dzikiego ptactwa'] },
      { title: 'Danie główne', items: ['Burger z dzika z frytkami drwala'] },
    ],
  },
  {
    id: 'obiad-2',
    watermark: 'II',
    title: 'Wariant II',
    price: '65 zł/os.',
    sections: [
      {
        title: 'Zupa',
        items: ['Krem pomidorowy z grzankami ziołowymi i bazyliowym pesto'],
      },
      {
        title: 'Danie główne',
        items: ['Pieczeń z karkówki, kluski śląskie, modra kapusta'],
      },
    ],
  },
  {
    id: 'obiad-3',
    watermark: 'III',
    title: 'Wariant III',
    price: '60 zł/os.',
    sections: [
      {
        title: 'Zupa',
        items: ['Krem z białych warzyw z oliwą truflową i kiełkami fasoli'],
      },
      {
        title: 'Danie główne',
        items: ['Gulasz z dzika, kasza perłowa, surówka z kiszonej kapusty'],
      },
    ],
  },
  {
    id: 'obiad-4',
    watermark: 'IV',
    title: 'Wariant IV',
    price: '69 zł/os.',
    sections: [
      { title: 'Zupa', items: ['Żurek staropolski z kiełbasą z dzika i grzybami'] },
      {
        title: 'Danie główne',
        items: [
          'Konfitowane udko z kaczki podane na puree z batata z glazurowanym burakiem',
        ],
      },
    ],
  },
];

export const groupsVegeMains = [
  'Cukinia faszerowana żurawiną zapiekana serem mozzarella',
  'Pstrąg Szefa kuchni z pieca, podawany z frytkami i surówką',
  'Selekcja chrupiących sałat i młodych pędów ziół, kozi ser pieczony z miodem i orzechami podany z sosem z leśnych jagód, burakiem i migdałami',
];

export const groupsVegePhotos = [
  { src: '/images/groups-vege-3.png', alt: 'Burgery wege z frytkami' },
  { src: '/images/groups-vege-pstrag.png', alt: 'Pstrąg Szefa kuchni z pieca z frytkami i surówką' },
  { src: '/images/groups-vege-1.png', alt: 'Cukinia faszerowana – danie wege' },
  { src: '/images/groups-vege-4.png', alt: 'Danie główne z kluskami śląskimi i surówką' },
] as const;

export const groupsBonfireVariants: WeddingVariant[] = [
  {
    id: 'ognisko-1',
    watermark: 'I',
    title: 'Wariant I',
    price: '60 zł/os.',
    intro: ['Po jednej porcji dania/napoju na osobę w cenie.'],
    sections: [
      {
        title: 'W zestawie',
        items: [
          'Kiełbasa, kaszanka, karkówka, dipy, ogórek kiszony, pieczywo, małe piwo, kieliszek wina lub soft',
        ],
      },
    ],
  },
  {
    id: 'ognisko-2',
    watermark: 'II',
    title: 'Wariant II',
    price: '75 zł/os.',
    intro: ['Po jednym daniu/napoju na osobę w cenie.'],
    sections: [
      {
        title: 'W zestawie',
        items: [
          'Kiełbasa, kaszanka, stek z karczku, pstrąg lub sum, sałata grecka, smarowidło z dzikiej fasoli, sosy, ogórek kiszony, pieczywo, małe piwo, kieliszek wina lub soft',
        ],
      },
    ],
  },
];

export const groupsSoftDrinks = {
  price: '35 zł/os.',
  note: 'Bez limitu w cenie.',
  items: [
    'Woda gazowana i niegazowana',
    'Lemoniada owocowa/klasyczna',
    'Soki owocowe',
    'Herbata',
    'Kawa',
  ],
};

export const groupsAlcohol = [
  { name: 'Piwo Kozel Ležák 0,5 l', price: '9 zł' },
  { name: 'Piwo Kozel Černý 0,5 l', price: '9 zł' },
  { name: 'Piwo Książęce Złote Pszeniczne 0,5 l', price: '9 zł' },
  { name: 'Wódka Wyborowa 0,7 l', price: '80 zł' },
  { name: 'Wódka Ostoya 0,7 l', price: '100 zł' },
  { name: 'Jack Daniels 0,7 l', price: '200 zł' },
  { name: 'Jameson 0,7 l', price: '180 zł' },
  { name: "Dewar's 0,7 l", price: '150 zł' },
];

export interface GroupsAttraction {
  name: string;
  price?: string;
  note?: string;
  /** Zamiast ceny – przycisk do podstrony (np. wypożyczalnia) */
  rentalLink?: {
    to: string;
    label: string;
  };
}

export const groupsAttractionsPrimary: GroupsAttraction[] = [
  { name: 'Quad o pojemności 150 ccm', price: '150,00 zł netto/h' },
  { name: 'Quad o pojemności 250 ccm', price: '170,00 zł netto/h' },
  { name: 'Off-road – samochód terenowy', price: '350,00 zł netto/h' },
  {
    name: 'Paintball poligon (instruktor, markery, odzież ochronna, maska)',
    price: '80,00 zł netto',
    note: 'Pakiet podstawowy – 200 kulek; każde kolejne 100 sztuk – 25,00 zł netto',
  },
  {
    name: 'Broń pneumatyczna – strzelnica',
    price: '600,00 zł netto',
    note: 'Atrakcja dostępna przez cały czas trwania imprezy',
  },
  {
    name: 'Strzelnica łucznicza',
    price: '600,00 zł netto',
    note: 'Atrakcja dostępna przez cały czas trwania imprezy',
  },
  {
    name: 'Strzelnica łucznicza + dmuchawki',
    price: '660,00 zł netto',
    note: 'Atrakcja dostępna przez cały czas trwania imprezy',
  },
  {
    name: 'Kolejka tyrolska',
    price: '1 900,00 zł netto',
    note: 'Atrakcja dostępna przez cały czas trwania imprezy',
  },
];

export const groupsAttractionsSecondary: GroupsAttraction[] = [
  {
    name: 'Broń biała (shuriken, tomahawk, noże)',
    price: '550,00 zł netto',
    note: 'Atrakcja dostępna przez cały czas trwania imprezy',
  },
  {
    name: 'Ścianka wspinaczkowa',
    price: '2 800,00 zł netto',
    note: 'Atrakcja dostępna przez cały czas trwania imprezy',
  },
  {
    name: 'Strzelnica broni ostrej',
    price: 'Wycena indywidualna',
    note: 'W zależności od liczby osób, rodzaju broni i ilości strzałów – Strzelnica w Myszkowie, woj. śląskie',
  },
  {
    name: 'Bieg w workach na czas',
    price: '500,00 zł netto',
  },
  { name: 'Wędkowanie', price: '500,00 zł netto' },
  {
    name: 'Tor ASG',
    price: '950,00 zł netto',
    note: 'Przy grupie do 20 osób; cena zależy od liczby uczestników',
  },
  { name: 'Piłowanie drewna na czas', price: '600,00 zł netto' },
  {
    name: 'Odnalezienie i naprawa uszkodzonego pojazdu',
    price: '600,00 zł netto',
  },
  {
    name: 'Wynajem dmuchańca',
    note: 'Kolorowe dmuchańce i place zabaw na imprezy, pikniki i eventy.',
    rentalLink: {
      to: '/wypozyczalnia',
      label: 'Przejdź do wypożyczalni',
    },
  },
];

export const groupsClosing = [
  'Z przyjemnością wycenimy dla Państwa dodatkowe warianty zgodnie z życzeniami.',
  'Zapraszamy! Służymy pomocą w realizacji własnych programów oraz polecamy nasze propozycje.',
  'Organizacja atrakcji na terenie Jura Park Biskupice – tylko i wyłącznie po uprzednim uzgodnieniu rodzaju zajęć. Wszystkie zajęcia prowadzone są przez wykwalifikowaną, posiadającą odpowiednie uprawnienia, kadrę instruktorską. Podczas zajęć uczestnicy używają wyłącznie sprzętu posiadającego odpowiednie atesty.',
];
