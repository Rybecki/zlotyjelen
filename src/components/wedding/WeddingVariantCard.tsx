import type { WeddingVariant } from '../../data/weddings';
import './WeddingVariantCard.css';

interface WeddingVariantCardProps {
  variant: WeddingVariant;
}

export function WeddingVariantCard({ variant }: WeddingVariantCardProps) {
  return (
    <article className="wedding-variant" id={variant.id}>
      <span className="wedding-variant__watermark" aria-hidden="true">
        {variant.watermark}
      </span>
      <header className="wedding-variant__head">
        <h3>{variant.title}</h3>
        <p className="wedding-variant__price">{variant.price}</p>
      </header>
      {variant.intro?.map((line) => (
        <p key={line} className="wedding-variant__intro">
          {line}
        </p>
      ))}
      {variant.sections.length > 0 && (
        <div className="wedding-variant__sections">
          {variant.sections.map((section) => (
            <section key={section.title} className="wedding-variant__section">
              <h4>
                {section.title}
                {section.hint && <span className="wedding-variant__hint"> ({section.hint})</span>}
              </h4>
              <ul>
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
      {variant.footnote && <p className="wedding-variant__footnote">{variant.footnote}</p>}
    </article>
  );
}
