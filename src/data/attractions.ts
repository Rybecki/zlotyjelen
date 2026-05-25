export interface Attraction {
  name: string;
  category: string;
  distance: string;
  url?: string;
}

export const attractionCategories = [
  'Rezerwat przyrody',
  'Park linowy',
  'Zabytki',
  'Muzeum',
  'Zamek',
  'Doświadczenia',
  'Aktywność',
] as const;

export const nearbyAttractions: Attraction[] = [
  { name: 'Staw Sen Nocy Letniej, Źródło Spełnionych Marzeń, Młyn Kołaczew, Grota Niedźwiedzia', category: 'Rezerwat przyrody', distance: '0 km' },
  { name: 'Jurajski Park Linowy', category: 'Park linowy', distance: '1,2 km', url: 'https://www.jurajskiparklinowy.eu' },
  { name: 'Źródło Elżbiety i Zygmunta', category: 'Zabytki', distance: '1,4 km' },
  { name: 'Pałac Raczyńskich', category: 'Pałac', distance: '1,8 km' },
  { name: 'Muzeum Regionalne im. Zygmunta Krasińskiego i Staw Irydion', category: 'Muzeum', distance: '1,8 km' },
  { name: 'Diabelskie Mosty', category: 'Zabytki', distance: '2,1 km' },
  { name: 'Brama Twardowskiego', category: 'Zabytki', distance: '2,5 km' },
  { name: 'Zamek Ogrodzieniec', category: 'Zamek', distance: '11 km', url: 'https://zamek-ogrodzieniec.pl' },
  { name: 'Zamek w Olsztynie', category: 'Zamek', distance: '16 km', url: 'https://zamekolsztyn.pl' },
  { name: 'Ruiny Zamku Bobolice', category: 'Zamek', distance: '15 km', url: 'https://www.zamekbobolice.pl' },
  { name: 'Zamek Mirów', category: 'Zamek', distance: '15 km' },
  { name: 'Rezerwat Ostrężnik, Zamek i Jaskinia Ostrężnicka', category: 'Rezerwat', distance: '22 km' },
  { name: 'Najstarsza Pstrągarnia w Europie', category: 'Przyroda', distance: '3,4 km' },
  { name: 'Pustynia Siedlecka na Jurze', category: 'Przyroda', distance: '18 km' },
  { name: 'Kampus Eureka', category: 'Nauka', distance: '11 km', url: 'https://www.kampus-eureka.pl' },
  { name: 'Muzeum Dawnych Rzemiosł – Młyn', category: 'Muzeum', distance: '0 km' },
  { name: 'Stajnia Jaroszówka', category: 'Jazda konna', distance: '3,4 km' },
  { name: 'Jura Park', category: 'Rozrywka', distance: '11 km', url: 'https://www.jurapark24.pl' },
  { name: 'Jurajska Spiżarnia – lekcje edukacyjne', category: 'Dla dzieci', distance: '6,2 km', url: 'https://www.jurajska-spizarnia.pl' },
  { name: 'Jura Kajaki', category: 'Kajaki', distance: '11 km', url: 'https://jurakajaki.pl' },
  { name: 'Szkoła Wspinaczkowa „W SKALE”', category: 'Wspinaczka', distance: '11 km', url: 'https://www.wskale.pl' },
];

export type AttractionIconId = 'trail' | 'castle' | 'nature' | 'activity';

export const juraHighlights: {
  title: string;
  text: string;
  icon: AttractionIconId;
}[] = [
  {
    title: 'Szlaki piesze i rowerowe',
    text: 'Jura oferuje setki kilometrów tras – od łagodnych spacerów po wymagające wspinaczkowe ścieżki skałkowe.',
    icon: 'trail',
  },
  {
    title: 'Zamki i ruiny',
    text: 'Ogrodzieniec, Mirów, Bobolice, Olsztyn – malownicze warownie w otoczeniu skał i lasów.',
    icon: 'castle',
  },
  {
    title: 'Rezerwaty i natura',
    text: 'Rezerwat Parkowe, Ostrężnik, pstrągarnie i jurajskie łąki – idealne na edukację i aktywny wypoczynek.',
    icon: 'nature',
  },
  {
    title: 'Aktywny wypoczynek',
    text: 'Park linowy, kajaki, wspinaczka, paintball, quady i jazda konna – atrakcje dla każdego wieku.',
    icon: 'activity',
  },
];
