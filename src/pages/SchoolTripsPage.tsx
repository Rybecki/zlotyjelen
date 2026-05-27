import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { PageDeerBackdrop } from '../components/ui/PageDeerBackdrop';
import { ProgramGallery } from '../components/ui/ProgramGallery';
import { BenefitsList } from '../components/ui/BenefitsList';
import type { BenefitItem } from '../components/ui/BenefitsList';
import { OfferContact } from '../components/ui/OfferContact';
import { RentalPromoCta } from '../components/rental/RentalPromoCta';
import { dmuchanceRentalItem } from '../data/rentalPartners';
import { schoolTripPackages } from '../data/schoolTrips';
import '../styles/offer-pages.css';

const benefits: BenefitItem[] = [
  {
    icon: 'food',
    text: 'Wyżywienie (śniadania, obiady, obiadokolację i kolację)',
  },
  {
    icon: 'guardian',
    text: 'Nieodpłatny pobyt 1 opiekuna na 15 uczestników',
  },
  {
    icon: 'parking',
    text: 'Darmowy parking',
  },
  {
    icon: 'bonfire',
    text: 'Możliwość zorganizowania ogniska oraz grilla',
  },
  {
    icon: 'meadow',
    text: 'Możliwość aktywnego spędzenia czasu na dużej polanie',
  },
  {
    icon: 'conference',
    text: 'Sala konferencyjna mogąca pomieścić 50 osób',
  },
  {
    icon: 'wifi',
    text: 'Bezpłatny Internet WiFi na terenie całego obiektu',
  },
  {
    icon: 'dinner',
    text: 'Możliwość zorganizowania uroczystej kolacji z autorskim menu',
  },
  {
    icon: 'bed',
    text: 'Nocleg w pokojach 1–6-osobowych (łóżka jednoosobowe) – wszystkie z łazienkami',
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

const programBGallery = [
  {
    src: '/images/school-olsztyn.png',
    alt: 'Ruiny zamku w Olsztynie na Jurze Krakowsko-Częstochowskiej',
    caption: 'Zamek Olsztyn',
  },
  {
    src: '/images/school-brama-twardowskiego.png',
    alt: 'Brama Twardowskiego – naturalna brama skalna w Złotym Potoku',
    caption: 'Brama Twardowskiego',
  },
  {
    src: '/images/school-ostreznik.png',
    alt: 'Rezerwat Ostrężnik – jaskinia i skały wapienne',
    caption: 'Rezerwat Ostrężnik',
  },
  {
    src: '/images/school-muzeum-zarki.png',
    alt: 'Muzeum Dawnych Rzemiosł w Żarkach – dawny młyn',
    caption: 'Muzeum Dawnych Rzemiosł w Żarkach',
  },
];

const schoolHeroSlides = [
  {
    src: '/images/school-ogrodzieniec.png',
    alt: 'Ruiny Zamku Ogrodzieniec na Jurze',
    position: 'center',
  },
  {
    src: '/images/school-olsztyn.png',
    alt: 'Ruiny zamku w Olsztynie na Jurze Krakowsko-Częstochowskiej',
    position: 'center',
  },
  {
    src: '/images/school-brama-twardowskiego.png',
    alt: 'Brama Twardowskiego – naturalna brama skalna w Złotym Potoku',
    position: 'center',
  },
];

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

interface SchoolTripsPageProps {
  heroTitle?: string;
  inflatableDescription?: string;
}

export function SchoolTripsPage({
  heroTitle = 'Oferta dla wycieczek szkolnych',
  inflatableDescription = 'Istnieje możliwość wynajęcia dmuchańca na czas wycieczki szkolnej – dodatkowa atrakcja dla uczniów podczas pobytu w Złotym Jeleniu.',
}: SchoolTripsPageProps) {
  return (
    <PageDeerBackdrop>
      <PageHero
        variant="offer"
        className="page-hero--school"
        title={heroTitle}
        subtitle="Edukacja, natura i komfortowy pobyt w sercu Jury"
        slides={schoolHeroSlides}
      />
      <section className="section">
        <div className="container">
          <div className="content-block fade-in">
            <h2>Dla grup wycieczkowych zapewniamy</h2>
            <BenefitsList items={benefits} />
          </div>

          <div className="content-block fade-in">
            <h2>Pakiety noclegowe z wyżywieniem</h2>
            <div className="table-scroll-wrap">
              <table className="price-table data-table--cards">
                <thead>
                  <tr>
                    <th>Pakiet</th>
                    <th>Pn–Pt</th>
                    <th>Pt–Nd</th>
                  </tr>
                </thead>
                <tbody>
                  {schoolTripPackages.map((pkg) => (
                    <tr key={pkg.id}>
                      <td>
                        <strong>{pkg.name}</strong>
                        <br />
                        <small>{pkg.desc}</small>
                      </td>
                      <td className="price" data-label="Pn–Pt">
                        {pkg.weekday}
                      </td>
                      <td className="price" data-label="Pt–Nd">
                        {pkg.weekend}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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

            <div className="program-block">
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
              <ProgramGallery photos={programBGallery} />
            </div>
          </div>

          <RentalPromoCta
            className="fade-in"
            title={dmuchanceRentalItem.title}
            description={inflatableDescription}
            image={dmuchanceRentalItem.image}
            imageAlt={dmuchanceRentalItem.imageAlt}
            to="/wypozyczalnia"
            ctaLabel={dmuchanceRentalItem.ctaLabel}
          />

          <div className="content-block fade-in school-closing">
            <p>
              Służymy pomocą w realizacji własnych programów oraz polecamy nasze propozycje. Dopasujemy
              ceny noclegu oraz wyżywienia do Państwa budżetu. Zapraszamy szkoły, biura podróży i
              przewodników.
            </p>
            <OfferContact />
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
