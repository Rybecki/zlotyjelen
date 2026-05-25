import { Button } from '../ui/Button';
import './AboutSection.css';

export function AboutSection() {
  return (
    <section className="section about deer-watermark deer-watermark--compact" id="o-nas" aria-labelledby="about-title">
      <div className="container about__grid fade-in">
        <div className="about__image">
          <img
            src="/images/hero-day.png"
            alt="Dom gościnny Złoty Jeleń w otoczeniu zieleni"
            loading="lazy"
            width={600}
            height={400}
          />
        </div>
        <div className="about__text">
          <span className="section__eyebrow">O obiekcie</span>
          <h2 id="about-title" className="section__title">
            Pensjonat i restauracja w sercu natury
          </h2>
          <p>
            Złoty Jeleń to wyjątkowe miejsce w Złotym Potoku, w samym sercu Rezerwatu Przyrody
            Parkowe na Jurze Krakowsko-Częstochowskiej. Łączymy komfortowy wypoczynek z
            autentyczną, regionalną kuchnią opartą na lokalnych produktach i dziczyźnie.
          </p>
          <p>
            Spokojna lokalizacja, bliskość szlaków i atrakcji turystycznych sprawiają, że jesteśmy
            idealnym wyborem dla rodzin, grup zorganizowanych, wycieczek szkolnych oraz turystów
            pragnących odkrywać piękno Jury.
          </p>
          <ul className="about__features">
            <li>Spokojna lokalizacja w rezerwacie</li>
            <li>Pokoje z prywatnymi łazienkami</li>
            <li>Restauracja ponad 120 miejsc</li>
            <li>Regionalna kuchnia z dziczyzny</li>
          </ul>
          <div className="about__actions">
            <Button to="/oferta/pokoje" variant="outline-dark">
              Zobacz ofertę
            </Button>
            <Button to="/kontakt" variant="ghost">
              Skontaktuj się
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
