import type { WeddingVariant } from './weddings';

export const menuCategories: WeddingVariant[] = [
  {
    id: 'menu-zupy',
    watermark: 'Z',
    title: 'Zupy',
    price: '35 zł/os.',
    intro: ['Jedna pozycja do wyboru'],
    sections: [
      {
        title: 'Do wyboru',
        items: [
          'Domowy rosół z dzikiego ptactwa z makaronem',
          'Aromatyczny krem ze świeżych pomidorów z grzankami ziołowymi',
          'Aksamitny krem z białych warzyw z bekonowym chipem',
        ],
      },
    ],
  },
  {
    id: 'menu-mains',
    watermark: 'D',
    title: 'Dania główne',
    price: '88–97 zł',
    intro: ['Półmiski: 88 zł (3 pozycje) · 97 zł (4 pozycje)'],
    sections: [
      {
        title: 'Do wyboru',
        items: [
          'Tradycyjny kotlet schabowy w złocistej panierce',
          'Staropolska pieczeń z karkówki w sosie ze śliwką',
          'Kotlet devolay z masłem ziołowym',
          'Sztuka mięsa z dzika w sosie z szarej renety',
          'Pierś z kurczaka z mozzarellą i pesto bazyliowym',
          'Rolada wieprzowa w sosie kurkowym',
          'Medaliony z indyka z fetą i szpinakiem',
          'Kotlet szwajcarski w złocistej panierce',
          'Śląska rolada wołowa',
          'Polędwiczka wieprzowa w sosie musztardowym',
          'Pierś z dzikiej kaczki z domową żurawiną',
        ],
      },
    ],
  },
  {
    id: 'menu-dodatki',
    watermark: '+',
    title: 'Dodatki',
    price: '39 zł/os.',
    sections: [
      {
        title: 'Do wyboru',
        items: [
          'Młode ziemniaki z ziołowym masłem',
          'Kluski śląskie z masłem',
          'Frytki stekowe z parmezanem',
          'Sezonowy bukiet surówek',
        ],
      },
    ],
  },
  {
    id: 'menu-przekaski',
    watermark: 'P',
    title: 'Przekąski',
    price: '74 zł/os.',
    intro: ['6 pozycji do wyboru'],
    sections: [
      {
        title: 'Do wyboru',
        items: [
          'Selekcja regionalnych wędlin i mięs',
          'Tymbaliki drobiowe w galarecie',
          'Roladki jajeczne z łososiem',
          'Pasztet z dziczyzny na grzance',
          'Śledziowe trio',
          'Deska serów z owocami i orzechami',
          'Sałaty: feta, caprese, smarowidła z dzika',
        ],
      },
    ],
  },
  {
    id: 'menu-desery',
    watermark: 'De',
    title: 'Desery',
    price: '32 zł/os.',
    intro: ['Słodki bufet: 69 zł (4 pozycje)'],
    sections: [
      {
        title: 'Do wyboru',
        items: [
          'Muffinki z płynną czekoladą i lodami',
          'Tarta z owocami sezonowymi i bezą',
          'Czekoladowy crème brûlée',
          'Szara Reneta pod kruszonką',
          'Selekcja domowych ciast i musów',
        ],
      },
    ],
  },
  {
    id: 'menu-bar',
    watermark: 'B',
    title: 'Oferta barowa',
    price: '35 zł/os.',
    intro: ['Napoje bez limitu podczas przyjęć – promocyjne ceny'],
    sections: [
      {
        title: 'Napoje i alkohole',
        items: [
          'Piwo Kozel Ležák / Černý 0,5 l – 8 zł',
          'Książęce Złote Pszeniczne 0,5 l – 8 zł',
          'Wina od 50 zł/0,75 l',
          'Promocyjne ceny podczas przyjęć',
        ],
      },
    ],
  },
];
