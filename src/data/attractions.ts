import type { MapsDestination } from '../utils/maps';

export interface Attraction {
  name: string;
  category: string;
  distance: string;
  /** Cel trasy w Google Maps (współrzędne lub nazwa miejsca) */
  mapsDestination: MapsDestination;
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
  {
    name: 'Staw Sen Nocy Letniej, Źródło Spełnionych Marzeń, Młyn Kołaczew, Grota Niedźwiedzia',
    category: 'Rezerwat przyrody',
    distance: '0 km',
    mapsDestination: 'Rezerwat Przyrody Parkowe, Złoty Potok',
  },
  {
    name: 'Jurajski Park Linowy',
    category: 'Park linowy',
    distance: '1,2 km',
    mapsDestination: { lat: 50.705833, lng: 19.409722 },
    url: 'https://www.jurajskiparklinowy.eu',
  },
  {
    name: 'Źródło Elżbiety i Zygmunta',
    category: 'Zabytki',
    distance: '1,4 km',
    mapsDestination: 'Źródło Elżbiety i Zygmunta, Złoty Potok',
  },
  {
    name: 'Pałac Raczyńskich',
    category: 'Pałac',
    distance: '1,8 km',
    mapsDestination: 'Pałac Raczyńskich, Złoty Potok',
  },
  {
    name: 'Muzeum Regionalne im. Zygmunta Krasińskiego i Staw Irydion',
    category: 'Muzeum',
    distance: '1,8 km',
    mapsDestination: 'Muzeum Regionalne im. Zygmunta Krasińskiego, Złoty Potok',
  },
  {
    name: 'Diabelskie Mosty',
    category: 'Zabytki',
    distance: '2,1 km',
    mapsDestination: { lat: 50.711389, lng: 19.438056 },
  },
  {
    name: 'Brama Twardowskiego',
    category: 'Zabytki',
    distance: '2,5 km',
    mapsDestination: 'Brama Twardowskiego, Podzamcze',
  },
  {
    name: 'Zamek Ogrodzieniec',
    category: 'Zamek',
    distance: '11 km',
    mapsDestination: { lat: 50.623963, lng: 19.481456 },
    url: 'https://zamek-ogrodzieniec.pl',
  },
  {
    name: 'Zamek w Olsztynie',
    category: 'Zamek',
    distance: '16 km',
    mapsDestination: { lat: 50.751389, lng: 19.268333 },
    url: 'https://zamekolsztyn.pl',
  },
  {
    name: 'Ruiny Zamku Bobolice',
    category: 'Zamek',
    distance: '15 km',
    mapsDestination: { lat: 50.612778, lng: 19.4925 },
    url: 'https://www.zamekbobolice.pl',
  },
  {
    name: 'Zamek Mirów',
    category: 'Zamek',
    distance: '15 km',
    mapsDestination: { lat: 50.615278, lng: 19.493611 },
  },
  {
    name: 'Rezerwat Ostrężnik, Zamek i Jaskinia Ostrężnicka',
    category: 'Rezerwat',
    distance: '22 km',
    mapsDestination: { lat: 50.581944, lng: 19.548611 },
  },
  {
    name: 'Najstarsza Pstrągarnia w Europie',
    category: 'Przyroda',
    distance: '3,4 km',
    mapsDestination: 'Najstarsza Pstrągarnia w Europie, Złoty Potok',
  },
  {
    name: 'Pustynia Siedlecka na Jurze',
    category: 'Przyroda',
    distance: '18 km',
    mapsDestination: 'Pustynia Siedlecka, Klucze',
  },
  {
    name: 'Kampus Eureka',
    category: 'Nauka',
    distance: '11 km',
    mapsDestination: 'Kampus Eureka, Podzamcze',
    url: 'https://www.kampus-eureka.pl',
  },
  {
    name: 'Muzeum Dawnych Rzemiosł – Młyn',
    category: 'Muzeum',
    distance: '0 km',
    mapsDestination: 'Muzeum Dawnych Rzemiosł Młyn, Złoty Potok',
  },
  {
    name: 'Stajnia Jaroszówka',
    category: 'Jazda konna',
    distance: '3,4 km',
    mapsDestination: 'Stajnia Jaroszówka, Złoty Potok',
  },
  {
    name: 'Jura Park',
    category: 'Rozrywka',
    distance: '11 km',
    mapsDestination: { lat: 50.620833, lng: 19.473611 },
    url: 'https://www.jurapark24.pl',
  },
  {
    name: 'Jurajska Spiżarnia – lekcje edukacyjne',
    category: 'Dla dzieci',
    distance: '6,2 km',
    mapsDestination: 'Jurajska Spiżarnia, Podzamcze',
    url: 'https://www.jurajska-spizarnia.pl',
  },
  {
    name: 'Jura Kajaki',
    category: 'Kajaki',
    distance: '11 km',
    mapsDestination: 'Jura Kajaki, Pilica',
    url: 'https://jurakajaki.pl',
  },
  {
    name: 'Szkoła Wspinaczkowa „W SKALE”',
    category: 'Wspinaczka',
    distance: '11 km',
    mapsDestination: 'Szkoła Wspinaczkowa W Skale, Podzamcze',
    url: 'https://www.wskale.pl',
  },
];

export type AttractionIconId = 'trail' | 'castle' | 'nature' | 'activity';

export const attractionsHeroSlides = [
  {
    src: '/images/attraction-ogrodzieniec.png',
    alt: 'Ruiny zamku Ogrodzieniec na Szlaku Orlich Gniazd',
    position: 'center 13%',
  },
  {
    src: '/images/attraction-olsztyn.png',
    alt: 'Ruiny zamku w Olsztynie na Jurze Krakowsko-Częstochowskiej',
    position: 'center 20%',
  },
  {
    src: '/images/attraction-sen-nocy-letniej.png',
    alt: 'Staw z łabędziami i kaczkami – okolica Złotego Potoku',
    position: 'center 90%',
  },
] as const;

export const attractionSliderPhotos = [
  {
    src: '/images/attraction-parkowe.png',
    alt: 'Rezerwat przyrody Parkowe – skałki i lasy w okolicy Złotego Potoku',
    caption: 'Rezerwat przyrody Parkowe',
  },
  {
    src: '/images/attraction-mlyn.png',
    alt: 'Muzeum Dawnych Rzemiosł – Młyn w Złotym Potoku',
    caption: 'Muzeum Dawnych Rzemiosł – Młyn',
  },
  {
    src: '/images/attraction-ogrodzieniec.png',
    alt: 'Ruiny zamku Ogrodzieniec na Szlaku Orlich Gniazd',
    caption: 'Zamek Ogrodzieniec',
  },
  {
    src: '/images/attraction-olsztyn.png',
    alt: 'Ruiny zamku w Olsztynie na Jurze Krakowsko-Częstochowskiej',
    caption: 'Zamek w Olsztynie',
  },
  {
    src: '/images/attraction-mirow.png',
    alt: 'Ruiny zamku Mirów wapiennym wzgórzu',
    caption: 'Zamek Mirów',
  },
  {
    src: '/images/attraction-bobolice.png',
    alt: 'Zamek Bobolice – malownicza warownia w Jurze',
    caption: 'Zamek Bobolice',
  },
] as const;

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
