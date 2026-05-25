import { Link } from 'react-router-dom';
import './OffersSection.css';

const offers = [
  {
    to: '/oferta/szkoly',
    title: 'Wycieczki szkolne',
    desc: 'Pełne wyżywienie, sala konferencyjna, ognisko i programy edukacyjne w Jurze.',
    num: '01',
  },
  {
    to: '/oferta/wesela',
    title: 'Wesela i przyjęcia',
    desc: 'Wesele w sercu rezerwatu – menu z dziczyzny, bufety i wyjątkowa oprawa.',
    num: '02',
  },
  {
    to: '/oferta/grupy',
    title: 'Grupy zorganizowane',
    desc: 'Autorskie menu, ogniska, sala na 50 osób – dla firm i biur podróży.',
    num: '03',
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
