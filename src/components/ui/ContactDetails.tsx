import { SITE } from '../../data/site';
import './ContactDetails.css';

const TEL_HREF = `tel:${SITE.phone.replace(/\s/g, '')}`;

function ContactIcon({ name }: { name: string }) {
  return (
    <span className="contact-details__icon material-symbols-outlined" aria-hidden="true">
      {name}
    </span>
  );
}

interface ContactDetailsProps {
  showSiteName?: boolean;
  showAddress?: boolean;
  showRegion?: boolean;
  showPhone?: boolean;
  showEmail?: boolean;
  showManager?: boolean;
  className?: string;
}

export function ContactDetails({
  showSiteName = false,
  showAddress = true,
  showRegion = true,
  showPhone = true,
  showEmail = true,
  showManager = false,
  className = '',
}: ContactDetailsProps) {
  const cls = `contact-details ${className}`.trim();

  return (
    <div className={cls}>
      {showSiteName && (
        <p className="contact-details__name">
          <strong>{SITE.name}</strong>
        </p>
      )}
      <ul className="contact-details__list">
        {showAddress && (
          <li className="contact-details__item">
            <ContactIcon name="location_on" />
            <div className="contact-details__body">
              <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer">
                {SITE.addressFull}
              </a>
              {showRegion && (
                <span className="contact-details__muted">{SITE.addressRegion}</span>
              )}
            </div>
          </li>
        )}
        {showPhone && (
          <li className="contact-details__item">
            <ContactIcon name="call" />
            <div className="contact-details__body">
              <a href={TEL_HREF}>{SITE.phone}</a>
            </div>
          </li>
        )}
        {showEmail && (
          <li className="contact-details__item">
            <ContactIcon name="mail" />
            <div className="contact-details__body">
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </div>
          </li>
        )}
      </ul>
      {showManager && (
        <p className="contact-details__manager">
          {SITE.manager} – manager ds. sprzedaży
        </p>
      )}
    </div>
  );
}

export { TEL_HREF };
