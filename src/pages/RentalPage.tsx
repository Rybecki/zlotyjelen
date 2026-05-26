import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { RentalPartnerCard } from '../components/rental/RentalPartnerCard';
import { rentalPartnerItems, rentalHeroSlides, RENTAL_PARTNER_NAME } from '../data/rentalPartners';
import '../styles/offer-pages.css';

const PARTNER_SITE = 'https://ja-yhymm.pl';

export function RentalPage() {
  return (
    <>
      <PageHero
        variant="offer"
        className="page-hero--rental"
        title="Wypożyczalnia"
        subtitle="Odkrywaj Jurę aktywnie – rowery, kajaki, transport i atrakcje dla całej rodziny"
        slides={rentalHeroSlides}
      />
      <section className="section deer-watermark">
        <div className="container">
          <p className="offer-intro fade-in">
            Złoty Jeleń to doskonała baza wypadowa na aktywny wypoczynek w Jurze Krakowsko-Częstochowskiej.
            W okolicy czekają szlaki piesze i rowerowe, zamki, rezerwaty przyrody oraz liczne atrakcje.
          </p>

          <div className="content-block rental-partner-intro fade-in">
            <h2>Wypożyczenie sprzętu</h2>
            <p>
              We współpracy z firmą{' '}
              <a href={PARTNER_SITE} target="_blank" rel="noopener noreferrer">
                <strong>{RENTAL_PARTNER_NAME}</strong>
              </a>{' '}
              oferujemy możliwość wypożyczenia:
            </p>
            <ul className="rental-partner-intro__list">
              <li>e-rowery</li>
              <li>kajaki</li>
              <li>VIP bus</li>
              <li>dmuchańce</li>
            </ul>
            <p>
              Szczegóły, dostępność i rezerwacje znajdziesz na stronie partnera – wybierz interesującą
              Cię kategorię poniżej.
            </p>
          </div>

          <div className="rental-partners fade-in">
            {rentalPartnerItems.map((item, index) => (
              <RentalPartnerCard key={item.id} item={item} reverse={index % 2 === 1} />
            ))}
          </div>

          <p className="rental-partner-contact fade-in">
            Chcesz coś wypożyczyć?{' '}
            <Link to="/kontakt">Skontaktuj się z nami</Link> – chętnie pomożemy.
          </p>
        </div>
      </section>
    </>
  );
}
