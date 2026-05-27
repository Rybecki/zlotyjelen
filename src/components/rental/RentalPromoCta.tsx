import { Button } from '../ui/Button';
import './RentalPromoCta.css';

interface RentalPromoCtaProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  to: string;
  ctaLabel: string;
  reverse?: boolean;
  className?: string;
}

export function RentalPromoCta({
  title,
  description,
  image,
  imageAlt,
  to,
  ctaLabel,
  reverse = false,
  className = '',
}: RentalPromoCtaProps) {
  const cls = [
    'rental-promo-cta',
    'content-block',
    reverse && 'rental-promo-cta--reverse',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={cls}>
      <div className="rental-promo-cta__image">
        <img src={image} alt={imageAlt} loading="lazy" />
      </div>
      <div className="rental-promo-cta__body">
        <h3>{title}</h3>
        <p>{description}</p>
        <Button to={to} variant="primary">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
