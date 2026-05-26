export interface MenuRestaurantItem {
  id: string;
  title: string;
  price: string;
  description?: string;
  portion?: string;
  image?: string;
  imageAlt?: string;
}

export interface MenuRestaurantSection {
  id: string;
  title: string;
  note?: string;
  items: MenuRestaurantItem[];
}

export const menuRestaurantSections: MenuRestaurantSection[] = [
  {
    id: 'pierogi',
    title: 'Pierogi',
    note: 'O dostępność proszę pytać obsługi.',
    items: [
      {
        id: 'pierogi-mysliwskie',
        title: 'Pierogi Myśliwskie',
        price: '37,00 zł',
        description: 'z różnych rodzajów dzikich mięs ze skwarkami',
        portion: '10 szt.',
      },
      {
        id: 'pierogi-szpinak',
        title: 'Pierogi ze szpinakiem i fetą',
        price: '37,00 zł',
        portion: '10 szt.',
      },
      {
        id: 'pierogi-kapusta',
        title: 'Pierogi z kapustą i grzybami',
        price: '37,00 zł',
        portion: '10 szt.',
      },
      {
        id: 'pierogi-ruskie',
        title: 'Pierogi ruskie',
        price: '37,00 zł',
        description: 'z boczkiem w środku, podawane ze skwarkami',
        portion: '10 szt.',
      },
      {
        id: 'pierogi-pstrag',
        title: 'Pierogi z wędzonym pstrągiem',
        price: '41,00 zł',
        description: 'podawane z sosem kaparowym',
        portion: '10 szt.',
      },
      {
        id: 'pierogi-czekoladowe',
        title: 'Pierogi czekoladowe z serem',
        price: '37,00 zł',
        description: 'podawane z sosem owocowym i owocami',
        portion: '10 szt.',
      },
      {
        id: 'pierogi-jagody',
        title: 'Pierogi z jagodami',
        price: '40,00 zł',
        description: 'podawane ze śmietaną',
        portion: '10 szt.',
      },
    ],
  },
  {
    id: 'dania-glowne',
    title: 'Dania główne',
    items: [
      {
        id: 'rolada-wolowa',
        title: 'Rolada Wołowa',
        price: '60,00 zł',
        description:
          'podana na modrej kapuście z dodatkiem dzikiej borówki, z kluskami śląskimi w sosie pieczeniowym',
        portion: 'ok. 450 g',
      },
      {
        id: 'dzik-lesniczego',
        title: 'Dzik Leśniczego',
        price: '59,00 zł',
        description:
          'dzik pieczony na cebuli oraz szarej renecie, podawany z kluską śląską i surówką z kiszonej kapusty',
        portion: 'ok. 450 g',
      },
      {
        id: 'medaliony-dziczyzny',
        title: 'Medaliony z Dziczyzny',
        price: '69,00 zł',
        description:
          'podane z aromatycznym sosem myśliwskim z nutą jałowca, kluskami śląskimi i kapustą modrą z dziką, leśną borówką',
        portion: 'ok. 450 g',
      },
      {
        id: 'gulasz-dziczyzny',
        title: 'Gulasz z Dziczyzny',
        price: '60,00 zł',
        description:
          'z warzywami korzeniowymi, w akompaniamencie mieszanki świeżych ziół, podany z kluskami śląskimi i kiszonym ogórkiem',
        portion: 'ok. 600 g',
      },
      {
        id: 'salatka-kaczka',
        title: 'Sałatka z Grillowaną Kaczką Sous-Vide',
        price: '65,00 zł',
        description:
          'podana na świeżych sałatach z pomidorem malinowym, ogórkiem, sosem miodowym z orzechami nerkowca i pszennym pieczywem z ziołami i czosnkiem niedźwiedzim',
        portion: 'ok. 300 g',
      },
      {
        id: 'salatka-kozi-ser',
        title: 'Uczciwa Sałatka z Kozim Serem',
        price: '58,00 zł',
        description:
          'selekcja chrupiących sałat i młodych pędów ziół, kozi ser pieczony z miodem i orzechami, podany z sosem z leśnych jagód, pieczonym i marynowanym burakiem, solonymi migdałami, pszennym pieczywem z ziołami i czosnkiem niedźwiedzim',
        portion: 'ok. 250 g',
        image: '/images/menu-salad-kaczka.png',
        imageAlt: 'Uczciwa sałatka z kozim serem pieczonym z miodem i orzechami',
      },
      {
        id: 'stek-jelen',
        title: 'Stek z Combra Jelenia',
        price: '95,00 zł',
        description:
          'w pudrze ziołowym, podany z frytkami drwala, kompozycją świeżych sałat i sosem z zielonego pieprzu',
        portion: 'ok. 450 g',
      },
    ],
  },
  {
    id: 'zupy',
    title: 'Zupy',
    items: [
      {
        id: 'zurek-mysliwego',
        title: 'Żurek Myśliwego',
        price: '35,00 zł',
        description:
          'gotowany na wywarze z grzybów leśnych, z kiełbasą z dziczyzny, świeżymi ziołami, podany z jajkiem i pieczywem',
        portion: 'ok. 330 g',
      },
      {
        id: 'zupa-rybna',
        title: 'Zupa Rybna',
        price: '35,00 zł',
        description: 'na uczciwym bulionie z włoszczyzną, w akompaniamencie pstrąga',
        portion: 'ok. 330 g',
      },
      {
        id: 'rosol-dziki',
        title: 'Rosół z dzikiego ptactwa',
        price: '26,00 zł',
        description: 'z ręcznie robionym makaronem, marchewką i pietruszką',
        portion: 'ok. 330 g',
        image: '/images/menu-rosol.png',
        imageAlt: 'Rosół z dzikiego ptactwa z makaronem i warzywami',
      },
      {
        id: 'kwasnica',
        title: 'Kwaśnica na dziczyźnie',
        price: '34,00 zł',
        description: 'na wywarze z dziczyzny z naszą kapustą kiszoną',
        portion: 'ok. 330 g',
      },
      {
        id: 'krem-wege',
        title: 'Wegetariański krem niespodzianka',
        price: '29,00 zł',
        portion: 'ok. 330 g',
      },
    ],
  },
  {
    id: 'przystawki',
    title: 'Przystawki',
    items: [
      {
        id: 'smarowidlo-dzik',
        title: 'Smarowidło z dzika',
        price: '29,00 zł',
        description: 'na żytnim pieczywie z piklowaną cebulą i kiszonymi ogórkami',
        portion: 'ok. 220 g',
      },
      {
        id: 'carpaccio-burak',
        title: 'Carpaccio z Buraka i Gruszki',
        price: '42,00 zł',
        description:
          'carpaccio z pieczonego, marynowanego buraka i gruszki z musem z koziego sera, selekcją młodych pędów ziół i sałat, prażonym orzechem włoskim i majonezem truflowym',
        portion: 'ok. 120 g',
      },
      {
        id: 'carpaccio-jelen',
        title: 'Carpaccio z Polędwicy Jelenia',
        price: '60,00 zł',
        description:
          'nacierane autorską mieszanką przypraw, marynowane w czerwonym winie, z dodatkiem młodych pędów ziół i sałat, solonych kaparów i oliwy',
        portion: 'ok. 200 g',
      },
      {
        id: 'tatar-pstrag',
        title: 'Tatar z Pstrąga Łososiowego',
        price: '49,00 zł',
        description:
          'podany z ogórkiem konserwowym, w towarzystwie rukoli i żółtka przepiórczego',
        portion: 'ok. 200 g',
      },
    ],
  },
  {
    id: 'burgery',
    title: 'Burgery',
    items: [
      {
        id: 'burger-jelen',
        title: 'Burger z szarpanego jelenia',
        price: '56,00 zł',
        description:
          'maślana bułka z szarpanym mięsem z jeleniego udźca, maczanym w sosie z palonych kości, sezamową kiszoną kapustą, piklowaną czerwoną cebulą, majonezem z wędzonych śliwek. Z dodatkiem frytek drwala',
        portion: 'ok. 550 g',
        image: '/images/menu-burger-jelenia.png',
        imageAlt: 'Burger z szarpanego jelenia z frytkami drwala',
      },
      {
        id: 'burger-dzik',
        title: 'Burger z dzika',
        price: '54,00 zł',
        description:
          'zapieczony pod plastrem wędzonego sera, w maślanej bułce z rukolą, sosem chrzanowym i leśną żurawiną. Z dodatkiem frytek drwala',
        portion: 'ok. 550 g',
        image: '/images/menu-burger-dzik.png',
        imageAlt: 'Burger z dzika z frytkami drwala',
      },
      {
        id: 'burger-mozzarella',
        title: 'Burger z panierowaną Mozzarellą',
        price: '50,00 zł',
        description:
          'w maślanej bułce, z karmelizowaną gruszką, rukolą, pomidorem oraz sosem 1000 wysp',
        portion: 'ok. 550 g',
      },
    ],
  },
  {
    id: 'ryby',
    title: 'Ryby',
    items: [
      {
        id: 'pstrag-szefa',
        title: 'Pstrąg Szefa Kuchni z Pieca',
        price: '69,00 zł',
        description:
          'faszerowany cytryną i leśnymi ziołami z masłem czosnkowym. Podany z frytkami drwala i surówką z kiszonej kapusty',
        portion: 'ok. 550 g',
        image: '/images/menu-pstrag.png',
        imageAlt: 'Pstrąg szefa kuchni z pieca',
      },
      {
        id: 'karp',
        title: 'Złoty filet z Karpia',
        price: '65,00 zł',
        description:
          'filet z karpia smażony na klarowanym maśle. Podawany z frytkami drwala i surówką z kapusty kiszonej z naszej spiżarni',
        portion: 'ok. 450 g',
      },
      {
        id: 'jesiotr',
        title: 'Filet z Jesiotra',
        price: '80,00 zł',
        description:
          'filet z jesiotra smażony w panierce z mąki kukurydzianej. Podawany z frytkami drwala i surówką z kapusty kiszonej z naszej spiżarni',
        portion: 'ok. 450 g',
      },
    ],
  },
  {
    id: 'desery',
    title: 'Desery',
    items: [
      {
        id: 'sernik',
        title: 'Aksamitny sernik',
        price: '33,00 zł',
        description: 'podawany na ciepło z musem malinowym i gałką lodów śmietankowych',
        portion: 'ok. 200 g',
      },
      {
        id: 'torcik-bezowy',
        title: 'Leśny Torcik Bezowy',
        price: '32,00 zł',
        description: 'krucha beza z owocami leśnymi i bitą śmietaną',
        portion: 'ok. 150 g',
        image: '/images/menu-deser-tarta.png',
        imageAlt: 'Leśny torcik bezowy z owocami leśnymi',
      },
      {
        id: 'lody',
        title: 'Selekcja Lodów Rzemieślniczych',
        price: '11,00 / 19,00 / 26,00 zł',
        description:
          'Trzy smaki do wyboru: Czekolada, Wanilia porzeczka, Śmietanka, Słony karmel',
        portion: '1 gałka / 2 gałki / 3 gałki',
      },
      {
        id: 'jablka-kruszonka',
        title: 'Jabłka pod kruszonką',
        price: '38,00 zł',
        description: 'jabłka z orzechami pod kruszonką z gałką lodów waniliowych',
        portion: 'ok. 200 g',
      },
      {
        id: 'deser-dnia',
        title: 'Deser dnia',
        price: '28,00 zł',
        portion: 'ok. 200 g',
      },
    ],
  },
  {
    id: 'dania-dzieci',
    title: 'Dania dla dzieci',
    items: [
      {
        id: 'spaghetti',
        title: 'Spaghetti',
        price: '32,00 zł',
        description: 'makaron spaghetti z mięsnym sosem pomidorowym, posypany parmezanem',
        portion: 'ok. 220 g',
      },
      {
        id: 'nalesniki',
        title: 'Naleśniki na słodko',
        price: '30,00 zł',
        description:
          'naleśniki z twarożkiem z toffi, świeżymi owocami, orzechami i bitą śmietaną',
        portion: '2 szt.',
      },
      {
        id: 'stripsy',
        title: 'Chrupiące stripsy z kurczaka',
        price: '35,00 zł',
        description:
          'podawane z frytkami drwala w akompaniamencie sosu majonezowego z surówką z marchewki',
        portion: 'ok. 330 g',
      },
    ],
  },
  {
    id: 'napoje-cieple',
    title: 'Napoje ciepłe',
    items: [
      { id: 'espresso', title: 'Espresso', price: '12,00 zł', portion: '25 ml' },
      { id: 'espresso-doppio', title: 'Espresso doppio', price: '14,00 zł', portion: '50 ml' },
      { id: 'macchiato', title: 'Espresso Macchiato', price: '14,00 zł', portion: '40 ml' },
      { id: 'americano', title: 'Americano', price: '13,00 zł', portion: '100 ml' },
      { id: 'cappuccino', title: 'Cappuccino', price: '15,00 zł', portion: '200 ml' },
      { id: 'latte', title: 'Caffe latte', price: '16,00 zł', portion: '300 ml' },
      {
        id: 'herbata',
        title: 'Herbata Sir Williams',
        price: '12,00 zł',
        portion: '400 ml',
        description:
          'Smaki: czarna, biała, zielona, earl grey, malinowa, owoce lasu, cynamonowa, miętowa',
      },
    ],
  },
  {
    id: 'napoje-zimne',
    title: 'Napoje zimne',
    items: [
      {
        id: 'pepsi',
        title: 'Pepsi / Pepsi MAX / Mirinda / 7up',
        price: '10,00 zł',
        portion: '200 ml',
      },
      {
        id: 'lipton',
        title: 'Lipton',
        price: '10,00 zł',
        description: 'Green / Lemon / Peach',
        portion: '200 ml',
      },
      {
        id: 'soki-toma',
        title: 'Soki i nektary owocowe Toma',
        price: '10,00 zł',
        description: 'jabłko, pomarańcza, czarna porzeczka',
        portion: '200 ml',
      },
      {
        id: 'woda',
        title: 'Woda Krystaliczne Źródło',
        price: '8,00 zł',
        description: 'gazowana / niegazowana',
        portion: '300 ml',
      },
    ],
  },
  {
    id: 'piwa-bezalkoholowe',
    title: 'Piwa bezalkoholowe',
    items: [
      {
        id: 'lech-free',
        title: 'Lech Free',
        price: '16,00 zł',
        portion: '0,5 l',
        description: 'Smaki: Limonka Mięta / Arbuz Mięta / Pomelo Grejpfrut',
      },
      {
        id: 'ksiazece-00',
        title: 'Książęce Złote Pszeniczne 0,0%',
        price: '16,00 zł',
        portion: '0,5 l',
      },
      {
        id: 'kozel-00',
        title: 'Kozel 0,0%',
        price: '16,00 zł',
        portion: '0,5 l',
      },
    ],
  },
  {
    id: 'piwa-beczkowe',
    title: 'Piwa beczkowe',
    items: [
      {
        id: 'kozel-beczka',
        title: 'Kozel',
        price: '13,00 / 17,00 zł',
        description: 'Leżak, czerny',
        portion: '0,3 l / 0,5 l',
      },
      {
        id: 'ksiazece-beczka',
        title: 'Książęce Złote Pszeniczne',
        price: '14,00 / 18,00 zł',
        portion: '0,3 l / 0,5 l',
      },
    ],
  },
];
