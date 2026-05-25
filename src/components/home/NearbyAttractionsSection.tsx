import { useEffect, useState } from 'react';
import { attractionSliderPhotos } from '../../data/attractions';
import { Button } from '../ui/Button';
import './NearbyAttractionsSection.css';

export function NearbyAttractionsSection() {
  const [active, setActive] = useState(0);
  const total = attractionSliderPhotos.length;

  useEffect(() => {
    const timer = setInterval(() => setActive((i) => (i + 1) % total), 6000);
    return () => clearInterval(timer);
  }, [total]);

  const prev = () => setActive((i) => (i === 0 ? total - 1 : i - 1));
  const next = () => setActive((i) => (i + 1) % total);

  const slide = attractionSliderPhotos[active];

  return (
    <section
      className="section section--alt nearby-attractions"
      id="atrakcje-w-okolicy"
      aria-labelledby="nearby-attractions-title"
    >
      <div className="container nearby-attractions__grid fade-in">
        <div className="nearby-attractions__text">
          <span className="section__eyebrow">Atrakcje w okolicy</span>
          <h2 id="nearby-attractions-title" className="section__title">
            Blisko natury, zamków i przygód na Jurze
          </h2>
          <p>
            Złoty Jeleń leży w sercu Rezerwatu Przyrody Parkowe – tuż obok szlaków, źródeł,
            Jurajskiego Parku Linowego i Muzeum Dawnych Rzemiosł. To idealna baza na wycieczki
            szkolne i wypady grupowe bez długich dojazdów.
          </p>
          <p>
            W promieniu kilkunastu kilometrów czekają ruiny zamków na Szlaku Orlich Gniazd:
            Ogrodzieniec, Mirów, Bobolice i Olsztyn, a także jaskinie, rezerwaty, muzea i atrakcje
            aktywne – kajaki, wspinaczka, parki rozrywki i lekcje przyrodnicze.
          </p>
          <Button to="/atrakcje" variant="primary" className="nearby-attractions__link">
            Zobacz wszystkie atrakcje
          </Button>
        </div>

        <div className="nearby-attractions__slider">
          <figure className="nearby-attractions__figure">
            <div className="nearby-attractions__slides">
              {attractionSliderPhotos.map((photo, i) => (
                <div
                  key={photo.src}
                  className={`nearby-attractions__slide ${i === active ? 'nearby-attractions__slide--active' : ''}`}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={photo.caption}
                  aria-hidden={i !== active}
                >
                  <img src={photo.src} alt={photo.alt} loading={i === 0 ? 'eager' : 'lazy'} />
                </div>
              ))}
            </div>
            <figcaption className="nearby-attractions__caption" aria-live="polite">
              {slide.caption}
            </figcaption>
          </figure>

          <div className="nearby-attractions__controls">
            <button type="button" onClick={prev} aria-label="Poprzednie zdjęcie">
              ←
            </button>
            <div className="nearby-attractions__dots" aria-hidden="true">
              {attractionSliderPhotos.map((photo, i) => (
                <button
                  key={photo.src}
                  type="button"
                  className={i === active ? 'active' : ''}
                  onClick={() => setActive(i)}
                  aria-label={`Zdjęcie ${i + 1}: ${photo.caption}`}
                />
              ))}
            </div>
            <button type="button" onClick={next} aria-label="Następne zdjęcie">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
