import { SITE } from '../../data/site';
import { ContactDetails } from '../ui/ContactDetails';
import { Button } from '../ui/Button';
import './ContactPreviewSection.css';

export function ContactPreviewSection() {
  return (
    <section className="section contact-preview" id="kontakt-preview" aria-labelledby="contact-preview-title">
      <div className="container contact-preview__grid fade-in">
        <div>
          <span className="section__eyebrow">Kontakt</span>
          <h2 id="contact-preview-title" className="section__title">
            Zarezerwuj pobyt lub stolik
          </h2>
          <p className="section__subtitle contact-preview__lead">
            Chętnie odpowiemy na pytania i pomożemy zaplanować pobyt, wycieczkę lub przyjęcie.
          </p>
          <div className="contact-preview__info">
            <ContactDetails showAddress={false} />
            <p className="contact-preview__hours">
              <strong>Godziny restauracji:</strong> {SITE.restaurantHours.weekdays},{' '}
              {SITE.restaurantHours.weekend}
            </p>
          </div>
          <Button to="/kontakt" variant="primary">
            Skontaktuj się
          </Button>
        </div>
        <div className="contact-preview__map">
          <iframe
            title="Mapa – Złoty Jeleń, Złoty Potok"
            src={SITE.mapEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
