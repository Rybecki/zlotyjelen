import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { SITE } from '../data/site';
import '../styles/offer-pages.css';

const soups = [
  'Domowy rosół z dzikiego ptactwa z makaronem',
  'Aromatyczny krem ze świeżych pomidorów z grzankami ziołowymi',
  'Aksamitny krem z białych warzyw z bekonowym chipem',
];

const mains = [
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
];

const extras = [
  'Młode ziemniaki z ziołowym masłem',
  'Kluski śląskie z masłem',
  'Frytki stekowe z parmezanem',
  'Sezonowy bukiet surówek',
];

export function MenuPage() {
  return (
    <>
      <PageHero
        title="Menu restauracji"
        subtitle="Regionalna kuchnia z lokalnych produktów – specjalność: dziczyzna"
        image="/images/hero-night.png"
      />
      <section className="section">
        <div className="container">
          <p className="offer-intro fade-in">
            Złoty Jeleń to unikatowe miejsce w sercu Rezerwatu Przyrody Parkowe. Restauracja pomieści
            ponad 120 osób. Organizujemy komunię, chrzciny, jubileusze, wieczory kawalerskie i panieńskie.
            Oferujemy również catering do domu lub firmy.
          </p>

          <div className="menu-grid fade-in">
            <div className="menu-card">
              <h3>Zupy</h3>
              <p className="menu-price">35 zł/os. · jedna pozycja</p>
              <ul>
                {soups.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
            <div className="menu-card">
              <h3>Dania główne</h3>
              <p className="menu-price">Półmiski: 88 zł (3 poz.) · 97 zł (4 poz.)</p>
              <ul>
                {mains.slice(0, 6).map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <div className="menu-card">
              <h3>Dania główne (cd.)</h3>
              <ul>
                {mains.slice(6).map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
            <div className="menu-card">
              <h3>Dodatki</h3>
              <p className="menu-price">39 zł/os.</p>
              <ul>
                {extras.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
            <div className="menu-card">
              <h3>Przekąski</h3>
              <p className="menu-price">74 zł/os. · 6 pozycji do wyboru</p>
              <ul>
                <li>Selekcja regionalnych wędlin i mięs</li>
                <li>Tymbaliki drobiowe w galarecie</li>
                <li>Roladki jajeczne z łososiem</li>
                <li>Pasztet z dziczyzny na grzance</li>
                <li>Śledziowe trio</li>
                <li>Deska serów z owocami i orzechami</li>
                <li>Sałaty: feta, caprese, smarowidła z dzika</li>
              </ul>
            </div>
            <div className="menu-card">
              <h3>Desery</h3>
              <p className="menu-price">32 zł/os. · słodki bufet 69 zł (4 poz.)</p>
              <ul>
                <li>Muffinki z płynną czekoladą i lodami</li>
                <li>Tarta z owocami sezonowymi i bezą</li>
                <li>Czekoladowy crème brûlée</li>
                <li>Szara Reneta pod kruszonką</li>
                <li>Selekcja domowych ciast i musów</li>
              </ul>
            </div>
            <div className="menu-card">
              <h3>Oferta barowa</h3>
              <p className="menu-price">Napoje: 35 zł/os.</p>
              <ul>
                <li>Piwo Kozel Ležák / Černý 0,5l – 8 zł</li>
                <li>Książęce Złote Pszeniczne – 8 zł</li>
                <li>Wina od 50 zł/0,75l</li>
                <li>Promocyjne ceny podczas przyjęć</li>
              </ul>
            </div>
          </div>

          <div className="content-block fade-in" style={{ marginTop: '2rem' }}>
            <p>
              Pełna oferta okolicznościowa i weselna dostępna na stronie{' '}
              <a href="/oferta/wesela">Oferta weselna</a>. Pytania i rezerwacje:{' '}
              <strong>{SITE.manager}</strong>, {SITE.phoneDisplay}, {SITE.email}
            </p>
          </div>

          <div className="offer-cta fade-in" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Button to="/kontakt" variant="primary">
              Rezerwacja stolika
            </Button>
            <Button to="/oferta/wesela" variant="ghost">
              Oferta okolicznościowa
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
