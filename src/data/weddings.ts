export interface WeddingMenuSection {
  title: string;
  hint?: string;
  items: string[];
}

export interface WeddingVariant {
  id: string;
  watermark: string;
  title: string;
  price: string;
  intro?: string[];
  sections: WeddingMenuSection[];
  footnote?: string;
}

export const weddingHeroSlides = [
  {
    src: '/images/wedding-hall.png',
    alt: 'Przyjęcie weselne na tarasie – długi stół w drewnianej altanie',
    position: 'center 45%',
  },
  {
    src: '/images/wedding-table-2.png',
    alt: 'Stół prezydialny z kwiatami i neonem „Z Tobą chcę oglądać świat”',
    position: 'center 40%',
  },
  {
    src: '/images/wedding-flowers.png',
    alt: 'Elegancko nakryte stoły weselne z różową dekoracją',
    position: 'center 45%',
  },
] as const;

export const weddingGallery = [
  {
    src: '/images/wedding-hall.png',
    alt: 'Przyjęcie weselne na tarasie – długi stół w drewnianej altanie',
  },
  {
    src: '/images/wedding-table-2.png',
    alt: 'Stół prezydialny z kwiatami i neonem „Z Tobą chcę oglądać świat”',
  },
  {
    src: '/images/wedding-flowers.png',
    alt: 'Elegancko nakryte stoły weselne z różową dekoracją',
  },
  { src: '/images/wedding-dish.png', alt: 'Danie z dziczyzną – Złoty Jeleń' },
  { src: '/images/wedding-desserts.png', alt: 'Bufet domowych słodkości' },
  { src: '/images/wedding-cake.png', alt: 'Tort weselny ze szparklerami' },
  { src: '/images/wedding-table-1.png', alt: 'Toast kieliszkami podczas przyjęcia weselnego' },
  { src: '/images/wedding-barman.png', alt: 'Profesjonalna obsługa barmańska' },
] as const;
