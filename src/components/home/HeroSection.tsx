import { useState, useEffect } from 'react';
import { Button } from '../ui/Button';
import './HeroSection.css';

const slides = [
  { src: '/images/hero-day.png', alt: 'Złoty Jeleń – widok obiektu w dzień ze statuą jelenia' },
  { src: '/images/hero-night.png', alt: 'Złoty Jeleń – widok obiektu nocą z iluminacją' },
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
            style={{ backgroundImage: `url(${slide.src})` }}
            role="img"
            aria-label={slide.alt}
          />
        ))}
      </div>
      <div className="hero__overlay" />
      <div className="hero__content container fade-in visible">
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
          Komfortowe pokoje, regionalna kuchnia i wyjątkowa atmosfera w Złotym Potoku
        </p>
        <div className="hero__actions">
          <Button to="/kontakt" variant="primary">
            Zarezerwuj pobyt
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
