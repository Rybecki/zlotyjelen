import { useState, FormEvent } from 'react';
import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { SITE } from '../data/site';
import '../styles/offer-pages.css';

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        variant="offer"
        className="page-hero--contact"
        title="Kontakt"
        subtitle="Zarezerwuj pokój, stolik lub zapytaj o ofertę dla grupy"
        image="/images/contact-hero.png"
      />
      <section className="section">
        <div className="container contact-page-grid">
          <div className="fade-in">
            <h2 className="section__title contact-page__heading">Napisz do nas</h2>
            {submitted ? (
              <p role="status" style={{ color: 'var(--color-forest)', fontWeight: 500 }}>
                Dziękujemy za wiadomość! Skontaktujemy się wkrótce. W pilnych sprawach zadzwoń:{' '}
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phoneDisplay}</a>
              </p>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div>
                  <label htmlFor="name">Imię i nazwisko *</label>
                  <input id="name" name="name" type="text" required autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="email">E-mail *</label>
                  <input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div>
                  <label htmlFor="phone">Telefon</label>
                  <input id="phone" name="phone" type="tel" autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="topic">Temat</label>
                  <select id="topic" name="topic" defaultValue="nocleg">
                    <option value="nocleg">Rezerwacja pokoju</option>
                    <option value="restauracja">Rezerwacja stolika</option>
                    <option value="szkola">Wycieczka szkolna</option>
                    <option value="wesele">Wesele / przyjęcie</option>
                    <option value="grupa">Grupa zorganizowana</option>
                    <option value="wypozyczalnia">Wypożyczalnia</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message">Wiadomość *</label>
                  <textarea id="message" name="message" required />
                </div>
                <Button type="submit" variant="primary">
                  Wyślij wiadomość
                </Button>
              </form>
            )}
          </div>

          <div className="fade-in">
            <h2 className="section__title contact-page__heading">Dane kontaktowe</h2>
            <address className="contact-page__address">
              <p><strong>{SITE.name}</strong></p>
              <p>
                <a href={SITE.mapsLink} target="_blank" rel="noopener noreferrer">
                  {SITE.addressFull}
                </a>
              </p>
              <p>{SITE.addressRegion}</p>
              <p>
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phoneDisplay}</a>
              </p>
              <p>
                <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
              </p>
              <p className="contact-page__manager">
                {SITE.manager} – manager ds. sprzedaży
              </p>
            </address>

            <h3 className="contact-page__subheading">Godziny restauracji</h3>
            <p>{SITE.restaurantHours.weekdays}</p>
            <p>{SITE.restaurantHours.weekend}</p>
            <p className="contact-page__hours-note">{SITE.restaurantHours.breakfast}</p>

            <div className="contact-preview__map contact-page__map">
              <iframe
                title="Lokalizacja Złoty Jeleń – Złoty Potok"
                src={SITE.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
