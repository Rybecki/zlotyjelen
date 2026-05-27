export interface CelebrationMenuSection {
  title: string;
  priceNote?: string;
  items: string[];
}

export interface CelebrationBarItem {
  name: string;
  price: string;
}

export const weddingMenuIntro = [
  'Zapraszamy do zapoznania się z naszą ofertą weselną',
  'Z przyjemnością pomożemy stworzyć wyjątkową oprawę jednego z najważniejszych dni w życiu. Oferujemy indywidualne podejście, dopracowane menu oraz przestrzeń sprzyjającą wspólnemu świętowaniu.',
];

export const occasionPageLead = [
  'Wyjątkowe chwile zasługują na wyjątkową oprawę.',
  'W Restauracji Złoty Jeleń zorganizujesz chrzciny, urodziny, komunie, jubileusze oraz inne spotkania rodzinne i okolicznościowe. Zadbamy o smaczne menu, przyjazną atmosferę i każdy detal wydarzenia.',
];

export const celebrationMenuSections: CelebrationMenuSection[] = [
  {
    title: 'Zupy',
    priceNote: 'Do wyboru jedna pozycja w cenie 19 zł/os.',
    items: [
      'Domowy rosół z dzikiego ptactwa z makaronem, młodą marchewką oraz natką pietruszki.',
      'Aromatyczny krem ze świeżych pomidorów podany z ziołowymi grzankami i świeżą bazylią.',
      'Aksamitny krem z białych warzyw, podany z bekonowym chipsem oraz lubczykowym pesto.',
    ],
  },
  {
    title: 'Dania główne',
    priceNote:
      'Podawane w formie półmisków. Trzy pozycje do wyboru w cenie 90 zł/os. Cztery pozycje do wyboru w cenie 120 zł/os.',
    items: [
      'Tradycyjny kotlet schabowy w złocistej panierce.',
      'Staropolska pieczeń z karkówki w aksamitnym sosie z suszoną śliwką.',
      'Kotlet devolay z puszystym masłem ziołowym i świeżą pietruszką.',
      'Uczciwa sztuka mięsa z dzika podana w sosie z szarej renety.',
      'Soczysta pierś z kurczaka podana z mozzarellą i pomidorem z nutą bazyliowego pesto.',
      'Rolada wieprzowa w aksamitnym sosie kurkowym.',
      'Duszone medaliony z indyka nadziewane fetą i szpinakiem.',
      'Kotlet szwajcarski w złocistej panierce.',
      'Tradycyjna śląska rolada wołowa.',
      'Polędwiczka wieprzowa w sosie o musztardowej nucie.',
      'Soczysta pierś z dzikiej kaczki podana z domową żurawiną.',
    ],
  },
  {
    title: 'Dodatki',
    priceNote: 'Powyższe dodatki w cenie 17,50 zł/os.',
    items: [
      'Młode ziemniaki podane z ziołowym masłem i świeżym koprem.',
      'Kluski śląskie podawane z masłem.',
      'Frytki stekowe podawane z parmezanem i pietruszką.',
      'Sezonowy bukiet surówek – trzy rodzaje.',
    ],
  },
  {
    title: 'Przekąski',
    priceNote: 'Podawane do stołu lub na bufecie. Do wyboru w cenie 18 zł za pozycję.',
    items: [
      'Selekcja regionalnych wędlin i mięs.',
      'Tymbaliki drobiowe w galarecie z młodymi warzywami korzennymi.',
      'Puszyste roladki jajeczne faszerowane delikatnym serkiem śmietankowym i wędzonym łososiem.',
      'Domowy pasztet z dziczyzny podany na grzance ziołowej z żurawiną.',
      'Śledziowe trio.',
      'Deska wyselekcjonowanych serów podawana z owocami i orzechami.',
      'Sałata z fetą i oliwkami podana w dressingu ziołowym.',
      'Sałata caprese podawana z ziemią jadalną.',
      'Smarowidło z dzika na żytnim chlebie podane z piklowaną cebulą oraz ogórkiem kiszonym.',
      'Smarowidło z dzikiej fasoli.',
      'Faszerowane jajka podane na sosie tatarskim.',
    ],
  },
  {
    title: 'Desery',
    priceNote: 'Do wyboru dowolna pozycja w cenie 23 zł/os.',
    items: [
      'Muffinki z płynną czekoladą podawane na ciepło z lodami śmietankowymi i bitą śmietaną.',
      'Krucha tarta pod kruszonką z owocami sezonowymi i bezą.',
      'Czekoladowy crème brûlée z leśną konfiturą.',
      'Szara Reneta pod kruszonką z gałką lodów śmietankowych.',
    ],
  },
  {
    title: 'Słodki bufet',
    priceNote: 'Do wyboru w cenie 18 zł za pozycję.',
    items: [
      'Selekcja domowych ciast.',
      'Delikatna panna cotta waniliowa muśnięta pianą z owoców leśnych.',
      'Selekcja musów z owoców leśnych.',
      'Carpaccio z owoców.',
      'Mus czekoladowy z chilli.',
    ],
  },
];

export const celebrationBarBeers: CelebrationBarItem[] = [
  { name: 'Piwo Kozel Ležák 0,5 l', price: '13 zł' },
  { name: 'Piwo Kozel Černý 0,5 l', price: '13 zł' },
  { name: 'Piwo Książęce Złote Pszeniczne 0,5 l', price: '13 zł' },
  { name: 'Wódka Wyborowa 0,7 l', price: '100 zł' },
  { name: 'Wódka Ostoya 0,7 l', price: '100 zł' },
  { name: 'Jack Daniels 0,7 l', price: '200 zł' },
  { name: 'Jameson 0,7 l', price: '180 zł' },
  { name: "Dewar's 0,7 l", price: '150 zł' },
];

export const celebrationBarWines: CelebrationBarItem[] = [
  { name: 'Capaca Chardonnay / białe / wytrawne / Chile / 0,75 l', price: '50 zł' },
  { name: 'Villa Loren – Pinot Grigio / białe / wytrawne / Włochy / 0,75 l', price: '60 zł' },
  { name: 'Agustinos – Sauvignon Blanc / białe / wytrawne / Chile / 0,75 l', price: '60 zł' },
  { name: 'Izadi – Crianza / czerwone / wytrawne / Hiszpania / 0,75 l', price: '80 zł' },
  { name: "Primitivo del Salento / czerwone / półwytrawne / Włochy / 0,75 l", price: '80 zł' },
  { name: "Montepulciano D'Abruzzo / czerwone / wytrawne / Włochy / 0,75 l", price: '60 zł' },
];

export const celebrationBarNote =
  'Promocyjne ceny podczas przyjęć okolicznościowych. Jeśli powyższe propozycje nie są dla Państwa wystarczające, prosimy o informację.';

export const celebrationMenuFooterNote =
  'Istnieje możliwość dopasowania menu indywidualnie do Państwa potrzeb, liczby gości i budżetu przyjęcia.';

export const occasionHeroSlides = [
  {
    src: '/images/occasion-1.png',
    alt: 'Elegancko nakryty stół przyjęciowy w restauracji Złoty Jeleń',
    position: 'center 45%',
  },
  {
    src: '/images/occasion-2.png',
    alt: 'Serwowane danie na nakrytym stole z logo Złoty Jeleń',
    position: 'center',
  },
  {
    src: '/images/occasion-3.png',
    alt: 'Długi stół przyjęciowy z widokiem na ogród',
    position: 'center 40%',
  },
  {
    src: '/images/occasion-4.png',
    alt: 'Dekoracja na komunię – złota arka z kwiatami',
    position: 'center',
  },
] as const;

export const occasionGallery = [
  {
    src: '/images/occasion-1.png',
    alt: 'Przyjęcie okolicznościowe – nakryty stół w sali restauracji',
  },
  {
    src: '/images/occasion-2.png',
    alt: 'Eleganckie nakrycie stołu z daniem i dekoracją kwiatową',
  },
  {
    src: '/images/occasion-3.png',
    alt: 'Sala na przyjęcia rodzinne z widokiem na taras',
  },
  {
    src: '/images/occasion-4.png',
    alt: 'Oprawa dekoracyjna na komunię świętą',
  },
] as const;
