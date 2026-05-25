import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import './HeroSection.css';

const slides = [
  {
    src: '/images/hero-1.png',
    alt: 'Złoty Jeleń – widok z lotu ptaka na obiekt wśród lasu',
    position: 'center',
  },
  {
    src: '/images/hero-2.png',
    alt: 'Złoty Jeleń – panorama obiektu, jezioro i okoliczny las',
    position: 'center 40%',
  },
  {
    src: '/images/hero-3.png',
    alt: 'Zachód słońca nad doliną i lasami w okolicy Złotego Potoku',
    position: 'center',
  },
  {
    src: '/images/hero-4.png',
    alt: 'Złoty Jeleń – budynek, taras i zielony teren wokół obiektu',
    position: 'center',
  },
];

export function HeroSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((i) => (i + 1) % slides.length), 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" aria-label="Baner główny">
      <div className="hero__slides">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className={`hero__slide ${i === active ? 'hero__slide--active' : ''}`}
            style={{
              backgroundImage: `url(${slide.src})`,
              backgroundPosition: slide.position ?? 'center',
            }}
            role="img"
            aria-label={slide.alt}
          />
        ))}
      </div>
      <div className="hero__overlay" />
      <div className="hero__content container fade-in visible">
        <div className="hero__panel">
          <img
            src="/images/logo.png"
            alt=""
            className="hero__logo"
            width={360}
            height={180}
            aria-hidden="true"
          />
          <p className="hero__eyebrow">Złoty Potok · Jura Krakowsko-Częstochowska</p>
          <h1>Wypoczynek w sercu Jury Krakowsko-Częstochowskiej</h1>
          <p className="hero__subtitle">
            Pokoje i pełne zaplecze dla wycieczek szkolnych, wesel, grup zorganizowanych i
            imprez, a także dla osób indywidualnych pragnących spokojnego wypoczynku na Jurze.
          </p>
        </div>
        <div className="hero__actions">
          <Button href="#oferta-cta" variant="primary">
            Oferta dla grup
          </Button>
          <Button to="/menu" variant="outline">
            Restauracja
          </Button>
        </div>
      </div>
      <div className="hero__indicators" aria-hidden="true">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={i === active ? 'active' : ''}
            onClick={() => setActive(i)}
            aria-label={`Slajd ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
