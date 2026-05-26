export interface MenuSampleDish {
  id: string;
  title: string;
  price: string;
  description: string;
  weight: string;
  image: string;
  imageAlt: string;
}

export const menuSampleDishes: MenuSampleDish[] = [
  {
    id: 'pstrag',
    title: 'Pstrąg wędzony',
    price: '32 zł',
    description:
      'Podany na gorąco z pieczywem lub frytkami i kiszoną kapustą.',
    weight: 'ok. 350 g',
    image: '/images/menu-pstrag.png',
    imageAlt: 'Pstrąg wędzony podany z dodatkami',
  },
  {
    id: 'burger-jelen',
    title: 'Burger z szarpanego jelenia',
    price: '36 zł',
    description:
      'Maślana bułka z szarpanym mięsem z jeleniego udźca, maczanym w sosie z palonych kości, sezamową kiszoną kapustą, piklowaną czerwoną cebulą i majonezem z wędzonych śliwek. Z dodatkiem frytek drwala.',
    weight: 'ok. 550 g',
    image: '/images/menu-burger-jelenia.png',
    imageAlt: 'Burger z szarpanego jelenia z frytkami drwala',
  },
  {
    id: 'burger-dzik',
    title: 'Burger z dzika',
    price: '34 zł',
    description:
      'Zapieczony pod plastrem wędzonego sera, w maślanej bułce z rukolą, sosem chrzanowym i leśną żurawiną. Z dodatkiem frytek drwala.',
    weight: 'ok. 550 g',
    image: '/images/menu-burger-dzik.png',
    imageAlt: 'Burger z dzika z frytkami drwala',
  },
  {
    id: 'salatka-kaczka',
    title: 'Sałatka z grillowaną kaczką sous-vide',
    price: '46 zł',
    description:
      'Podana na świeżych sałatach z pomidorkami koktajlowymi, ogórkiem, sosem miodowym z orzechami nerkowca i pszennym pieczywem z ziołami i czosnkiem niedźwiedzim.',
    weight: 'ok. 300 g',
    image: '/images/menu-salad-kaczka.png',
    imageAlt: 'Sałatka z grillowaną kaczką sous-vide',
  },
];

/** Wyróżniony rosół pod boxem „Zupy” (karta dań) */
export const menuSoupHighlight: MenuSampleDish = {
  id: 'rosol-dziki',
  title: 'Domowy rosół z dzikiego ptactwa z makaronem',
  price: '35 zł',
  description:
    'Klarowny, aromatyczny rosół z makaronem nitkami, marchewką i świeżym szczypiorkiem – z dziczyzną w roli głównej.',
  weight: 'ok. 400 ml',
  image: '/images/menu-rosol.png',
  imageAlt: 'Domowy rosół z dzikiego ptactwa z makaronem i warzywami',
};

/** Wyróżniony deser pod boxem „Desery” (karta dań) */
export const menuDessertHighlight: MenuSampleDish = {
  id: 'tarta-bezowa',
  title: 'Tarta z owocami sezonowymi i bezą',
  price: '32 zł',
  description:
    'Chrupiąca beza z bitą śmietaną, świeżymi malinami i borówkami, sosem z owoców leśnych i akcentem czekolady.',
  weight: 'ok. 180 g',
  image: '/images/menu-deser-tarta.png',
  imageAlt: 'Tarta z owocami sezonowymi i bezą z malinami i borówkami',
};
