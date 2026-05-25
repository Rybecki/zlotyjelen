import { juraHighlights } from '../../data/attractions';
import { Button } from '../ui/Button';
import { AttractionIcon } from '../ui/AttractionIcon';
import './AttractionsSection.css';

export function AttractionsSection() {
  return (
    <section
      className="section section--dark attractions"
      id="atrakcje-preview"
      aria-labelledby="attractions-title"
    >
      <div className="container">
        <header className="section__header fade-in">
          <span className="section__eyebrow">Okolica</span>
          <h2 id="attractions-title" className="section__title">
            Atrakcje Jury Krakowsko-Częstochowskiej
          </h2>
          <p className="section__subtitle">
            Zamki, szlaki, rezerwaty przyrody i aktywny wypoczynek – wszystko w zasięgu krótkiej podróży
          </p>
        </header>

        <div className="attractions__grid">
          {juraHighlights.map((item) => (
            <article key={item.title} className="attraction-card fade-in">
              <span className="attraction-card__icon" aria-hidden="true">
                <AttractionIcon id={item.icon} />
              </span>
              <div className="attraction-card__text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="attractions__cta fade-in">
          <Button to="/atrakcje" variant="outline-dark">
            Zobacz wszystkie atrakcje
          </Button>
        </div>
      </div>
    </section>
  );
}
