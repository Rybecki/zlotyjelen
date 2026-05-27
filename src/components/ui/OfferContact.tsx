import { ContactDetails } from './ContactDetails';
import './OfferContact.css';

interface OfferContactProps {
  /** Etykieta nad danymi; domyślnie „Kontakt”. Ustaw false, aby pominąć. */
  showLabel?: boolean;
  label?: string;
  className?: string;
}

export function OfferContact({
  showLabel = true,
  label = 'Kontakt',
  className = '',
}: OfferContactProps) {
  const cls = `offer-contact ${className}`.trim();

  return (
    <div className={cls}>
      {showLabel && <p className="offer-contact__label">{label}</p>}
      <ContactDetails showAddress={false} showRegion={false} />
    </div>
  );
}
