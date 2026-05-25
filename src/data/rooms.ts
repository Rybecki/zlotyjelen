export interface Room {
  id: string;
  name: string;
  capacity: number;
  amenities: string[];
  image: string;
  description: string;
}

export const rooms: Room[] = [
  {
    id: 'pokoj-1',
    name: 'Pokój 1-osobowy',
    capacity: 1,
    amenities: ['Łazienka', 'TV', 'WiFi'],
    image: '/images/room-1os.png',
    description:
      'Przytulny pokój jednoosobowy idealny dla podróżujących solo. Wyposażony w prywatną łazienkę i wszystkie niezbędne udogodnienia.',
  },
  {
    id: 'pokoj-2',
    name: 'Pokój 2-osobowy',
    capacity: 2,
    amenities: ['Łazienka', 'TV', 'WiFi', 'Łóżko małżeńskie'],
    image: '/images/room-2os.png',
    description:
      'Komfortowy pokój dwuosobowy z łóżkiem małżeńskim. Doskonały wybór dla par i przyjaciół.',
  },
  {
    id: 'pokoj-3',
    name: 'Pokój 3-osobowy',
    capacity: 3,
    amenities: ['Łazienka', 'TV', 'WiFi', 'Łóżko + sofa'],
    image: '/images/room-3os.png',
    description:
      'Przestronny pokój dla trzech osób. Idealny dla rodzin z dzieckiem lub małych grup.',
  },
  {
    id: 'pokoj-4',
    name: 'Pokój 4-osobowy',
    capacity: 4,
    amenities: ['Łazienka', 'TV', 'WiFi', 'Dwa łóżka'],
    image: '/images/room-4os.png',
    description:
      'Największy pokój w ofercie – idealny dla rodzin i grup czteroosobowych. Wszystkie pokoje z prywatną łazienką.',
  },
];
