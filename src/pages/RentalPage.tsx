import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import '../styles/offer-pages.css';

const equipment = [
  { name: 'Rowery turystyczne', desc: 'Idealne na jurajskie szlaki i trasy asfaltowe wokół Złotego Potoku.' },
  { name: 'Rowery górskie', desc: 'Dla bardziej wymagających tras i ścieżek leśnych.' },
  { name: 'Akcesoria', desc: 'Kaski, mapy szlaków i rekomendacje tras w okolicy.' },
];

export function RentalPage() {
  return (
    <>
      <PageHero
        title="Wypożyczalnia"
        subtitle="Odkrywaj Jurę na rowerze – wypożycz sprzęt w Złotym Jeleniu"
        image="/images/hero-day.png"
      />
      <section className="section deer-watermark">
        <div className="container">
          <p className="offer-intro fade-in">
            Złoty Jeleń to doskonała baza wypadowa na aktywny wypoczynek. W okolicy czekają szlaki
            piesze i rowerowe, zamki, rezerwaty przyrody, park linowy, kajaki i wspinaczka.
          </p>

          <div className="variant-cards fade-in">
            {equipment.map((item) => (
              <article key={item.name} className="variant-card">
                <h4>{item.name}</h4>
                <p>{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="content-block fade-in">
            <p>
              Szczegóły dostępności sprzętu i cennik ustalamy indywidualnie. Zapraszamy do kontaktu
              telefonicznego lub mailowego.
            </p>
          </div>

          <div className="offer-cta fade-in" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
            <Button to="/kontakt" variant="primary">
              Zapytaj o wypożyczenie
            </Button>
            <Button to="/atrakcje" variant="ghost">
              Atrakcje w okolicy
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
