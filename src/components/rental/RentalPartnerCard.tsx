import type { RentalPartnerItem } from '../../data/rentalPartners';
import './RentalPartnerCard.css';

interface RentalPartnerCardProps {
  item: RentalPartnerItem;
  reverse?: boolean;
}

export function RentalPartnerCard({ item, reverse = false }: RentalPartnerCardProps) {
  return (
    <article className={`rental-partner-card${reverse ? ' rental-partner-card--reverse' : ''}`}>
      <div className="rental-partner-card__image">
        <img src={item.image} alt={item.imageAlt} loading="lazy" />
      </div>
      <div className="rental-partner-card__body">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <a
          href={item.href}
          className="btn btn--primary rental-partner-card__cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.ctaLabel}
        </a>
      </div>
    </article>
  );
}
