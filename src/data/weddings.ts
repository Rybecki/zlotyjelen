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

export const weddingIntro = [
  'Złoty Jeleń Restauracja i Dom Gościnny to unikatowe miejsce znajdujące się w samym sercu Rezerwatu Przyrody Parkowe, tworzone przez pasjonatów okolicznych terenów.',
  'Wyjątkowe dania powstają z wykorzystaniem lokalnych i świeżych produktów dostępnych w rejonie Złotego Potoku. Naszą specjalnością są dania z dziczyzny – przygotowywane posiłki są nie tylko smaczne, ale i zdrowe.',
  'Daj się uwieść leśnym, dzikim smakom i odpocznij w miejscu, które przenika natura. Poczuj bliskość natury w najważniejszym dniu Twojego życia.',
];

export const weddingVariants: WeddingVariant[] = [
  {
    id: 'wariant-1',
    watermark: 'I',
    title: 'Wariant I',
    price: '139 zł/os.',
    sections: [
      {
        title: 'Przystawki',
        hint: 'jedna do wyboru',
        items: [
          'Kaczka sous vide podana na rukoli kompozycji z konfiturą z żurawiny',
          'Pstrąg wędzony podany na grzance z musem limonkowo-chrzanowym',
          'Łosoś gravlax podany na delikatnej roszponce w towarzystwie sosu miodowego',
        ],
      },
      {
        title: 'Zupy',
        hint: 'jedna do wyboru',
        items: [
          'Rosół z dzikiego ptactwa z makaronem własnej produkcji',
          'Krem z cukinii w towarzystwie chipsa ze skorzonery i oliwy truflowej',
        ],
      },
      {
        title: 'Danie główne',
        hint: 'dwa do wyboru, po jednym na osobę',
        items: [
          'Polędwiczka sous vide w sosie z zielonego pieprzu serwowana na puree z topinamburu i grillowanymi warzywami korzeniowymi',
          'Filet z kurczaka zagrodowego otulony boczkiem podany z kopytkami i karmelizowaną marchewką',
        ],
      },
      {
        title: 'Desery',
        hint: 'jeden do wyboru',
        items: [
          'Puszysty sernik na gorąco podany na ziemi jadalnej w towarzystwie musu z owoców leśnych i gałką lodów śmietankowych',
          'Brownie z orzechami podane na musie chałwowym z owocami sezonowymi',
        ],
      },
    ],
    footnote: '*dla vegetarian możliwa modyfikacja menu',
  },
  {
    id: 'wariant-2',
    watermark: 'II',
    title: 'Wariant II',
    price: '169 zł/os.',
    sections: [
      {
        title: 'Przystawki',
        hint: 'jedna do wyboru',
        items: [
          'Suszona polędwica z jelenia na grzance czosnkowej w towarzystwie rukoli i kaparów',
          'Mus z dzikiej fasoli podany na bagietce w towarzystwie kiełków z fasoli i cebulki piklowanej',
        ],
      },
      {
        title: 'Zupa',
        hint: 'jedna do wyboru',
        items: [
          'Krem z białych warzyw z mleczkiem kokosowym z chipsem z parmezanu i prażonym orzechem włoskim',
          'Zupa gulaszowa z dziczyzny duszona w piwie Kozel',
        ],
      },
      {
        title: 'Dania główne',
        hint: 'dwa do wyboru, po jednym na osobę',
        items: [
          'Medaliony z jelenia w sosie myśliwskim podane z kluskami śląskimi i modrą kapustą z leśną borówką',
          'Golonka z dzika serwowana na zasmażanej kiszonej kapuście z szarymi kluskami',
          'Risotto z grzybami leśnymi, białym winem i parmezanem',
        ],
      },
      {
        title: 'Deser',
        hint: 'jeden do wyboru',
        items: [
          'Panna cotta waniliowa podana na musie z owoców leśnych',
          'Mini Pawłowa z owocami leśnymi i puszystym serkiem mascarpone',
        ],
      },
    ],
    footnote: '*dla vegetarian możliwa modyfikacja menu',
  },
  {
    id: 'wariant-3',
    watermark: 'III',
    title: 'Wariant III',
    price: '259 zł/os.',
    sections: [
      {
        title: 'Przystawki',
        hint: 'jedna do wyboru',
        items: [
          'Tatar z jelenia z domowymi piklami, ogórkiem, szalotką i kaparami oraz żółtkiem przepiórczym',
          'Mozzarella opatulona szynką parmeńską podana na rukoli i łyżką sosu balsamicznego',
          'Łosoś wędzony podany na grzance z musem z awokado w towarzystwie jajka sous vide',
        ],
      },
      {
        title: 'Zupa',
        hint: 'jedna do wyboru',
        items: [
          'Bulion z gęsi podawany z faszerowanym ravioli z gęsiną',
          'Krem z żurku leśniczego podany z jajkiem przepiórczym i chipsem bekonowym',
        ],
      },
      {
        title: 'Dania główne',
        hint: 'dwa do wyboru, po jednym na osobę',
        items: [
          'Stek z combra jelenia podany na aksamitnym puree topinamburu, sosem kardamonowym i pieczonym burakiem',
          'Udko z gęsi confit podane na puree z modrej kapusty i grillowaną pietruszką z nutą sosu czekoladowego',
          'Paella z owocami morza',
        ],
      },
      {
        title: 'Desery',
        hint: 'jeden do wyboru',
        items: [
          'Crème brûlée z szafranem i kardamonem',
          'Fondant czekoladowy z owocami leśnymi i wytrawnymi lodami serowymi własnej produkcji',
        ],
      },
    ],
    footnote: '*dla vegetarian możliwa modyfikacja menu',
  },
  {
    id: 'przykladowe',
    watermark: 'P',
    title: 'Przykładowe menu',
    price: '270 zł/os.',
    intro: [
      'Kieliszek wina musującego na przywitanie, kawa, herbata, woda, soki oraz napoje bez limitu.',
    ],
    sections: [
      {
        title: 'Przystawka',
        items: [
          'Kaczka sous vide podana na rukoli kompozycji z konfiturą z żurawiny',
        ],
      },
      {
        title: 'Zupa',
        items: ['Rosół z dzikiego ptactwa z makaronem własnej produkcji'],
      },
      {
        title: 'Dania główne',
        items: [
          'Polędwiczka sous vide w sosie z zielonego pieprzu serwowana na puree z topinamburu i grillowanymi warzywami korzeniowymi',
          'Filet z kurczaka zagrodowego otulony boczkiem podany z kopytkami i karmelizowaną marchewką',
        ],
      },
      {
        title: 'Deser',
        items: [
          'Puszysty sernik na gorąco podany na ziemi jadalnej w towarzystwie musu z owoców leśnych i gałką lodów śmietankowych',
        ],
      },
      {
        title: 'Bufet gorący',
        items: ['Bigos zbójnicki na dziczyźnie'],
      },
      {
        title: 'Bufet zimny',
        items: [
          'Tatar z łososia z kaparami',
          'Selekcja wędlin z naszej wędzarni',
          'Deski regionalnych serów z orzechami i winogronem',
          'Sałatka z kaczki sous vide w sosie miodowym podana na sałatach w towarzystwie pomidorków koktajlowych i ogórka',
          'Sum w zalewie octowej z ogórkiem konserwowym, cebulą i pieczarkami',
          'Śledź po kaszubsku z pomidorem suszonym',
        ],
      },
    ],
  },
];

export const weddingBuffetHot = {
  title: 'Bufet gorący',
  hint: 'dwa do wyboru',
  priceLabel: '21 zł/os.',
  items: [
    'Żurek myśliwego z kiełbasą z dzika i jajkiem',
    'Barszcz czerwony z krokietem',
    'Bigos zbójnicki na dziczyźnie',
    'Zupa gulaszowa z dziczyzny',
    'Kwaśnica na dziczyźnie serwowana z prażuchami',
  ],
};

export const weddingBuffetCold = {
  title: 'Bufet zimny',
  hint: 'sześć do wyboru + pieczywo',
  price: '90 zł/os.',
  items: [
    'Tatar z wołowiny z domowymi piklami, sałatą i ogórkiem',
    'Pstrąg wędzony podany na musie chrzanowym',
    'Tatar z łososia z kaparami',
    'Selekcja wędlin z naszej wędzarni',
    'Deski regionalnych serów z orzechami i winogronem',
    'Sałatka z kaczki sous vide w sosie miodowym podana na sałatach w towarzystwie pomidorków koktajlowych i ogórka',
    'Sałatka z grillowaną polędwiczką sous vide podana na sałatach w towarzystwie borówki, truskawki, prażonych orzechów z nutą sosu czekoladowego z chilli',
    'Sum w zalewie octowej z ogórkiem konserwowym, cebulą i pieczarkami',
    'Śledź po kaszubsku z pomidorem suszonym',
    'Wykwintne tymbaliki z jelenia',
  ],
};

export const weddingDrinks = {
  text: 'Kieliszek wina musującego na przywitanie, kawa, herbata, woda, soki oraz napoje bez limitu.',
  price: '20 zł/os.',
};

export const weddingHeroSlides = [
  { src: '/images/wedding-flowers.png', alt: 'Kwiatowa dekoracja stołu', position: 'center' },
  { src: '/images/wedding-cake.png', alt: 'Tort weselny ze szparklerami', position: 'center' },
] as const;

export const weddingGallery = [
  { src: '/images/wedding-hall.png', alt: 'Sala weselna w Złotym Jeleniu' },
  { src: '/images/wedding-table-2.png', alt: 'Elegancko nakryty stół weselny' },
  { src: '/images/wedding-flowers.png', alt: 'Kwiatowa dekoracja stołu' },
  { src: '/images/wedding-dish.png', alt: 'Danie z dziczyzną – Złoty Jeleń' },
  { src: '/images/wedding-desserts.png', alt: 'Bufet domowych słodkości' },
  { src: '/images/wedding-cake.png', alt: 'Tort weselny ze szparklerami' },
  { src: '/images/wedding-table-1.png', alt: 'Toast kieliszkami podczas przyjęcia weselnego' },
  { src: '/images/wedding-barman.png', alt: 'Profesjonalna obsługa barmańska' },
] as const;
