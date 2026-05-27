import { Link } from 'react-router-dom';
import { schoolTripPackagesSummary } from '../../data/schoolTrips';
import './OffersSection.css';

const offers = [
  {
    to: '/oferta/wycieczki-szkolne',
    title: 'Wycieczki szkolne',
    desc: `${schoolTripPackagesSummary} Sala konferencyjna, ognisko i programy edukacyjne w Jurze.`,
    num: '01',
  },
  {
    to: '/oferta/wesela',
    title: 'Wesela',
    desc: 'Wesele w sercu rezerwatu – menu z lokalnych produktów i dziczyzny, sala na 120+ gości.',
    num: '02',
  },
  {
    to: '/oferta/okolicznosciowa',
    title: 'Przyjęcia okolicznościowe',
    desc: 'Komunie, chrzciny, urodziny i jubileusze – smaczne menu i przyjazna atmosfera.',
    num: '03',
  },
  {
    to: '/oferta/grupy-zorganizowane',
    title: 'Grupy zorganizowane',
    desc: 'Autorskie menu, ogniska, sala na 50 osób – dla firm i biur podróży.',
    num: '04',
  },
];

export function OffersSection() {
  return (
    <section className="section offers deer-watermark deer-watermark--compact" id="oferta" aria-labelledby="offers-title">
      <div className="container">
        <header className="section__header fade-in">
          <span className="section__eyebrow">Oferta specjalna</span>
          <h2 id="offers-title" className="section__title">
            Wydarzenia i grupy
          </h2>
          <p className="section__subtitle">
            Dopasujemy nocleg i wyżywienie do Państwa budżetu. Zapraszamy szkoły, firmy i biura podróży.
          </p>
        </header>

        <div className="offers-grid">
          {offers.map((offer) => (
            <Link key={offer.to} to={offer.to} className="offer-box fade-in">
              <span className="offer-box__num" aria-hidden="true">
                {offer.num}
              </span>
              <h3>{offer.title}</h3>
              <p>{offer.desc}</p>
              <span className="offer-box__link">Zobacz ofertę →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
