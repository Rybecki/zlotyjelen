export interface Room {
  id: string;
  name: string;
  capacity: number;
  amenities: string[];
  image: string;
  description: string;
}

export const roomCapacityRangeLabel = '1, 2, 3, 4, 5 i 6-osobowe';

export const rooms: Room[] = [
  {
    id: 'pokoj-1',
    name: 'Pokój 1-osobowy',
    capacity: 1,
    amenities: ['Łazienka', 'WiFi'],
    image: '/images/room-1os.png',
    description:
      'Przytulny pokój jednoosobowy idealny dla podróżujących solo. Wyposażony w prywatną łazienkę i wszystkie niezbędne udogodnienia.',
  },
  {
    id: 'pokoj-2',
    name: 'Pokój 2-osobowy',
    capacity: 2,
    amenities: ['Łazienka', 'WiFi', 'Dwa łóżka jednoosobowe'],
    image: '/images/room-2os.png',
    description:
      'Komfortowy pokój dwuosobowy z dwoma łóżkami jednoosobowymi. Doskonały wybór dla par i przyjaciół.',
  },
  {
    id: 'pokoj-3',
    name: 'Pokój 3-osobowy',
    capacity: 3,
    amenities: ['Łazienka', 'WiFi', 'Trzy łóżka jednoosobowe'],
    image: '/images/room-3os.png',
    description:
      'Przestronny pokój z trzema łóżkami jednoosobowymi. Idealny dla rodzin z dzieckiem lub małych grup.',
  },
  {
    id: 'pokoj-4',
    name: 'Pokój 4-osobowy',
    capacity: 4,
    amenities: ['Łazienka', 'WiFi', 'Cztery łóżka jednoosobowe'],
    image: '/images/room-4os.png',
    description:
      'Pokój dla czterech gości wyłącznie z łóżkami jednoosobowymi – wygodny dla grup szkolnych i wycieczek. Prywatna łazienka w pokoju.',
  },
  {
    id: 'pokoj-5',
    name: 'Pokój 5-osobowy',
    capacity: 5,
    amenities: ['Łazienka', 'WiFi', 'Pięć łóżek jednoosobowych'],
    image: '/images/room-5os.png',
    description:
      'Przestronny pokój z pięcioma łóżkami jednoosobowymi – tylko pojedyncze miejsca noclegowe, bez łóżek małżeńskich. Idealny dla większych grup szkolnych.',
  },
  {
    id: 'pokoj-6',
    name: 'Pokój 6-osobowy',
    capacity: 6,
    amenities: ['Łazienka', 'WiFi', 'Sześć łóżek jednoosobowych'],
    image: '/images/room-6os.png',
    description:
      'Największy pokój w ofercie – sześć łóżek jednoosobowych i miejsce do wspólnego pobytu. Sprawdza się przy najliczniejszych grupach i wycieczkach.',
  },
];

export const roomsBathroomGallery = [
  { src: '/images/bathroom-1.png', alt: 'Łazienka w pokoju gościnnym – umywalka i kabina prysznicowa' },
  { src: '/images/bathroom-2.png', alt: 'Łazienka w pokoju gościnnym – kabina prysznicowa, umywalka i WC' },
] as const;
