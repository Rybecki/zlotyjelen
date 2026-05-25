import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { SITE } from '../data/site';
import '../styles/offer-pages.css';

const variants = [
  {
    price: '139 zł/os.',
    name: 'Wariant I',
    items: [
      'Przystawka (1 do wyboru): kaczka sous vide, pstrąg wędzony, łosoś gravlax',
      'Zupa (1): rosół z dzikiego ptactwa lub krem z cukinii',
      'Danie główne (2 do wyboru): polędwiczka sous vide, filet z kurczaka zagrodowego',
      'Deser (1): sernik na gorąco lub brownie',
      '*możliwa modyfikacja menu dla vegetarian',
    ],
  },
  {
    price: '169 zł/os.',
    name: 'Wariant II',
    items: [
      'Przystawka: polędwica z jelenia, mus z dzikiej fasoli',
      'Zupa: krem z białych warzyw lub zupa gulaszowa z dziczyzny',
      'Dania główne (2): medaliony z jelenia, golonka z dzika, risotto z grzybami',
      'Deser: panna cotta lub mini Pawłowa',
    ],
  },
  {
    price: '259 zł/os.',
    name: 'Wariant III',
    items: [
      'Przystawka: tatar z jelenia, mozzarella z parmą, łosoś wędzony',
      'Zupa: bulion z gęsi lub krem z żurku leśniczego',
      'Dania główne (2): stek z combra jelenia, udko z gęsi confit, paella z owocami morza',
      'Deser: crème brûlée lub fondant czekoladowy',
    ],
  },
  {
    price: '270 zł/os.',
    name: 'Menu przykładowe',
    items: [
      'Kieliszek wina musującego, kawa, herbata, woda i soki bez limitu',
      'Pełne menu z bufetem gorącym i zimnym',
      'Bigos zbójnicki, deski serów, tatary, sałatki i więcej',
    ],
  },
];

const extras = [
  'Bar mobilny i profesjonalna obsługa barmańska',
  'Wiejski stół w dwóch wersjach – tradycyjny lub z dziczyzną',
  'Bufet domowych słodkości',
  'Poprawiny – grill na polanie',
  'Pieczony dzik / udziec z dzika podawany na sali',
  'Fotobudka, oprawa muzyczna (DJ, zespoły)',
  'Animator dla dzieci, namioty dzwonkowe – Księżycowe Pole',
];

export function WeddingsPage() {
  return (
    <>
      <PageHero
        title="Oferta weselna"
        subtitle="Wesele inne niż zwykłe – w sercu Rezerwatu Przyrody Parkowe"
        image="/images/hero-night.png"
      />
      <section className="section">
        <div className="container">
          <div className="content-block fade-in">
            <p className="offer-intro" style={{ textAlign: 'left', margin: 0 }}>
              Złoty Jeleń to unikatowe miejsce tworzone przez pasjonatów okolicznych terenów. Wyjątkowe
              dania z lokalnych produktów, specjalność z dziczyzny – smaczne, zdrowe i bliskie naturze.
              Poczuj bliskość lasu w najważniejszym dniu Twojego życia.
            </p>
          </div>

          <div className="variant-cards fade-in">
            {variants.map((v) => (
              <article key={v.name} className="variant-card">
                <h4>{v.name}</h4>
                <ul>
                  {v.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="variant-price">{v.price}</p>
              </article>
            ))}
          </div>

          <div className="content-block fade-in">
            <h3>Bufety dodatkowe</h3>
            <p>
              Bufet gorący (2 do wyboru): 21 zł/os. · Bufet zimny (6 do wyboru + pieczywo): 90 zł/os.
              <br />
              Napoje bez limitu: 20 zł/os.
            </p>
          </div>

          <div className="content-block fade-in">
            <h2>Dodatkowe atrakcje</h2>
            <ul className="benefits-list">
              {extras.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
            <p><em>Ceny dodatkowych atrakcji wyceniane indywidualnie.</em></p>
          </div>

          <div className="content-block fade-in">
            <p>
              Kontakt: <strong>{SITE.manager}</strong> · {SITE.phoneDisplay} · {SITE.email}
            </p>
          </div>

          <div className="offer-cta fade-in">
            <Button to="/kontakt" variant="primary">
              Sprawdź wolne terminy
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
