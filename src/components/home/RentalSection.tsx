import { Button } from '../ui/Button';
import './RentalSection.css';

export function RentalSection() {
  return (
    <section className="section rental deer-watermark" id="wypozyczalnia-preview" aria-labelledby="rental-title">
      <div className="container rental__inner fade-in">
        <div>
          <span className="section__eyebrow">Wypożyczalnia</span>
          <h2 id="rental-title" className="section__title">
            Aktywnie poznaj Jurę
          </h2>
          <p className="section__subtitle" style={{ textAlign: 'left', margin: '0 0 1rem' }}>
            Wypożycz rowery i sprzęt, by w pełni odkryć jurajskie szlaki, skałki i malownicze
            trasy rowerowe wokół Złotego Potoku.
          </p>
          <ul className="rental__list">
            <li>Rowery turystyczne i górskie</li>
            <li>Mapy szlaków i trasy w okolicy</li>
            <li>Idealna baza wypadowa na Jurę</li>
          </ul>
          <Button to="/wypozyczalnia" variant="primary">
            Wypożyczalnia
          </Button>
        </div>
        <div className="rental__visual" aria-hidden="true">
          <img src="/images/jelen-geo.png" alt="" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
