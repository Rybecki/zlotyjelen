import { Button } from '../ui/Button';
import {
  celebrationMenuSections,
  celebrationBarBeers,
  celebrationBarWines,
  celebrationBarNote,
  celebrationMenuFooterNote,
} from '../../data/celebrationMenu';
import '../menu/MenuSection.css';
import './CelebrationMenu.css';

interface CelebrationMenuProps {
  intro?: readonly string[];
  introLead?: 'first' | 'last';
  showMenuTitle?: boolean;
}

export function CelebrationMenu({
  intro = [],
  introLead = 'last',
  showMenuTitle = true,
}: CelebrationMenuProps) {
  const introClass = [
    'celebration-menu__intro',
    'content-block',
    introLead === 'first' && 'celebration-menu__intro--lead-first',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="celebration-menu fade-in">
      {intro.length > 0 && (
        <div className={introClass}>
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}

      {showMenuTitle && <h2 className="menu-section__title celebration-menu__heading">Menu</h2>}

      <div className="menu-page-sections celebration-menu__sections">
        {celebrationMenuSections.map((section) => (
          <section
            key={section.title}
            className="menu-section"
            aria-labelledby={`celebration-menu-${section.title}`}
          >
            <h2 className="menu-section__title" id={`celebration-menu-${section.title}`}>
              {section.title}
            </h2>
            {section.priceNote && <p className="menu-section__note">{section.priceNote}</p>}
            <ol className="menu-section__list celebration-menu__numbered-list">
              {section.items.map((item) => (
                <li key={item} className="menu-item">
                  <p className="menu-item__desc">{item}</p>
                </li>
              ))}
            </ol>
          </section>
        ))}
      </div>

      <section className="menu-section celebration-menu__bar" aria-labelledby="celebration-menu-bar">
        <h2 className="menu-section__title" id="celebration-menu-bar">
          Oferta barowa
        </h2>

        <div className="celebration-menu__bar-grid">
          <div>
            <h4>Piwa i alkohole</h4>
            <ol className="celebration-menu__bar-list celebration-menu__numbered-list">
              {celebrationBarBeers.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <span className="celebration-menu__bar-price">{item.price}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h4>Wina</h4>
            <ol className="celebration-menu__bar-list celebration-menu__numbered-list">
              {celebrationBarWines.map((item) => (
                <li key={item.name}>
                  <span>{item.name}</span>
                  <span className="celebration-menu__bar-price">{item.price}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="menu-section__note celebration-menu__bar-note">{celebrationBarNote}</p>
      </section>

      <div className="celebration-menu__footer content-block">
        <p>{celebrationMenuFooterNote}</p>
        <Button to="/kontakt" variant="primary">
          Zapytaj o menu i termin
        </Button>
      </div>
    </div>
  );
}
