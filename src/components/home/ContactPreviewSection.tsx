import { SITE } from '../../data/site';
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
          <p className="section__subtitle" style={{ textAlign: 'left' }}>
            Chętnie odpowiemy na pytania i pomożemy zaplanować pobyt, wycieczkę lub przyjęcie.
          </p>
          <div className="contact-preview__info">
            <p>
              <strong>Telefon:</strong>{' '}
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phoneDisplay}</a>
            </p>
            <p>
              <strong>E-mail:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <p>
              <strong>Godziny restauracji:</strong> {SITE.restaurantHours.weekdays}, {SITE.restaurantHours.weekend}
            </p>
          </div>
          <Button to="/kontakt" variant="primary">
            Skontaktuj się
          </Button>
        </div>
        <div className="contact-preview__map">
          <iframe
            title="Mapa – Złoty Potok"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2528.5!2d19.424!3d50.632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716c8b8c8c8c8c9%3A0x0!2zWcWCb3R5IFBvdG9r!5e0!3m2!1spl!2spl!4v1"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
