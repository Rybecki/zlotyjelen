import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { PageDeerBackdrop } from '../components/ui/PageDeerBackdrop';
import { ProgramGallery } from '../components/ui/ProgramGallery';
import { SITE } from '../data/site';
import '../styles/offer-pages.css';

const benefits = [
  'Wyżywienie (śniadania, obiady, obiadokolację i kolację)',
  'Nieodpłatny pobyt 1 opiekuna na 15 uczestników',
  'Darmowy parking',
  'Możliwość zorganizowania ogniska oraz grilla',
  'Możliwość aktywnego spędzenia czasu na dużej polanie',
  'Sala konferencyjna mogąca pomieścić 50 osób',
  'Bezpłatny Internet WiFi na terenie całego obiektu',
  'Możliwość zorganizowania uroczystej kolacji z autorskim menu',
  'Nocleg w pokojach 1, 2, 3 i 4-osobowych – wszystkie z łazienkami',
];

const packages = [
  {
    name: 'Nocleg + Śniadanie (BB)',
    desc: 'Śniadanie serwowane w formie bufetu: pieczywo, wędliny, sery, kiełbaski, jajecznica, dżemy, jogurty, płatki, napoje oraz lokalne przysmaki.',
    weekday: '105 zł/os.',
    weekend: '115 zł/os.',
  },
  {
    name: 'Nocleg + Śniadanie + Obiadokolacja (HB)',
    desc: 'Obiadokolacja składająca się z dwóch dań: zupy oraz dania głównego. Możliwość ustalenia indywidualnego menu.',
    weekday: '125 zł/os.',
    weekend: '135 zł/os.',
  },
  {
    name: 'Nocleg + Pełne Wyżywienie (FB)',
    desc: 'Śniadania, obiady i kolacja bazująca na lokalnych produktach.',
    weekday: '149 zł/os.',
    weekend: '159 zł/os.',
  },
];

const programAGallery = [
  {
    src: '/images/school-ogrodzieniec.png',
    alt: 'Ruiny Zamku Ogrodzieniec na Jurze',
    caption: 'Zamek Ogrodzieniec',
  },
  {
    src: '/images/school-zloty-jelen.png',
    alt: 'Dom Gościnny Złoty Jeleń – obiad i zakwaterowanie',
    caption: 'Złoty Jeleń',
  },
  {
    src: '/images/school-parkowe.png',
    alt: 'Rezerwat przyrody Parkowe – skałki i las',
    caption: 'Rezerwat „PARKOWE”',
  },
  {
    src: '/images/school-ognisko.png',
    alt: 'Kolacja przy ognisku',
    caption: 'Ognisko wieczorem',
  },
];

const programA = {
  day1: [
    '10:30 – Zwiedzanie Zamku Ogrodzieniec (ruiny, park miniatur)',
    '14:30 – Obiad i zakwaterowanie w Domu Gościnnym Złoty Jeleń',
    '16:00 – Spacer po rezerwacie „PARKOWE” – edukacja leśna z przewodnikiem (~3 h)',
    '19:00 – Kolacja tradycyjna lub w formie ogniska',
  ],
  day2: [
    '8:30 – Śniadanie w Złotym Jeleniu',
    'Zwiedzanie Muzeum Dawnych Rzemiosł w Żarkach (wcześniejsza rezerwacja)',
    'Spacer między zamkami Mirów – Bobolice',
    '14:30 – Obiad i wymeldowanie',
    'Spacer w Tajemniczym Lesie w Czatachowie – punkt widokowy na Jurę',
  ],
};

const programB = {
  day1: [
    '10:30 – Zwiedzanie Zamku Olsztyn',
    'Brama Twardowskiego, Dworek Krasickich w Złotym Potoku',
    '14:30 – Obiad i zakwaterowanie w Złotym Jeleniu',
    'Rezerwat Ostrężnik – spacer i edukacja leśna (~3 h)',
    '19:00 – Kolacja tradycyjna lub w formie ogniska',
  ],
  day2: [
    '8:30 – Śniadanie w Złotym Jeleniu',
    'Muzeum Dawnych Rzemiosł w Żarkach',
    'Spacer między Zamkami Mirów – Bobolice (~3 h)',
    '14:30 – Obiad i wymeldowanie',
    'Szlaki w krainie pstrąga – najstarsza pstrągarnia w Europie, rezerwat Parkowe (~3 h)',
  ],
};

export function SchoolTripsPage() {
  return (
    <PageDeerBackdrop>
      <PageHero
        title="Oferta dla wycieczek szkolnych"
        subtitle="Edukacja, natura i komfortowy pobyt w sercu Jury"
        image="/images/hero-day.png"
      />
      <section className="section">
        <div className="container">
          <div className="content-block fade-in">
            <h2>Dla grup wycieczkowych zapewniamy</h2>
            <ul className="benefits-list">
              {benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="content-block fade-in">
            <h2>Pakiety noclegowe z wyżywieniem</h2>
            <table className="price-table">
              <thead>
                <tr>
                  <th>Pakiet</th>
                  <th>Pn–Pt</th>
                  <th>Pt–Nd</th>
                </tr>
              </thead>
              <tbody>
                {packages.map((pkg) => (
                  <tr key={pkg.name}>
                    <td>
                      <strong>{pkg.name}</strong>
                      <br />
                      <small>{pkg.desc}</small>
                    </td>
                    <td className="price">{pkg.weekday}</td>
                    <td className="price">{pkg.weekend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="content-block fade-in">
            <h2>Propozycje programów 2-dniowych</h2>
            <div className="program-block">
              <h3>Program I – Zamek Ogrodzieniec</h3>
              <div className="program-day">
                <h4>Dzień pierwszy</h4>
                <ul>
                  {programA.day1.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="program-day">
                <h4>Dzień drugi</h4>
                <ul>
                  {programA.day2.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <ProgramGallery photos={programAGallery} />
            </div>

            <h3>Program II – Zamek Olsztyn</h3>
            <div className="program-day">
              <h4>Dzień pierwszy</h4>
              <ul>
                {programB.day1.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="program-day">
              <h4>Dzień drugi</h4>
              <ul>
                {programB.day2.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="content-block fade-in">
            <p>
              Służymy pomocą w realizacji własnych programów oraz polecamy nasze propozycje. Dopasujemy
              ceny noclegu oraz wyżywienia do Państwa budżetu. Zapraszamy szkoły, biura podróży i
              przewodników.
            </p>
            <p>
              Kontakt: <strong>{SITE.manager}</strong> ·{' '}
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phoneDisplay}</a> ·{' '}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </div>

          <div className="offer-cta fade-in">
            <Button to="/kontakt" variant="primary">
              Zapytaj o ofertę
            </Button>
          </div>
        </div>
      </section>
    </PageDeerBackdrop>
  );
}
