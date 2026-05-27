import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { PageDeerBackdrop } from '../components/ui/PageDeerBackdrop';
import { Button } from '../components/ui/Button';
import { MenuSection } from '../components/menu/MenuSection';
import { menuRestaurantSections } from '../data/menuRestaurant';

const MENU_SECTION_ORDER = [
  'ryby',
  'przystawki',
  'dania-glowne',
  'zupy',
  'pierogi',
  'burgery',
  'desery',
  'dania-dzieci',
  'napoje-cieple',
  'napoje-zimne',
  'piwa-bezalkoholowe',
  'piwa-beczkowe',
] as const;

const orderedMenuSections = MENU_SECTION_ORDER.map((id) =>
  menuRestaurantSections.find((section) => section.id === id),
).filter((section): section is (typeof menuRestaurantSections)[number] => Boolean(section));
import { OfferContact } from '../components/ui/OfferContact';
import '../components/menu/MenuSection.css';
import '../styles/offer-pages.css';

export function MenuPage() {
  return (
    <PageDeerBackdrop>
      <PageHero
        variant="menu"
        title="Menu restauracji"
        subtitle="Regionalna kuchnia z lokalnych produktów – specjalność: dziczyzna"
        image="/images/menu-hero.png"
      />
      <section className="section">
        <div className="container">
          <div className="offer-intro fade-in">
            <p>
              Złoty Jeleń to unikatowe miejsce w sercu Rezerwatu Przyrody Parkowe. Restauracja pomieści
              ponad 120 osób. Organizujemy komunię, chrzciny, jubileusze, wieczory kawalerskie i panieńskie.
              Oferujemy również catering do domu lub firmy.
            </p>
          </div>

          <div className="menu-page-sections">
            {orderedMenuSections.map((section) => (
              <MenuSection key={section.id} section={section} />
            ))}
          </div>

          <div className="content-block fade-in menu-page-footer-note">
            <p>
              Pełna oferta weselna i okolicznościowa:{' '}
              <Link to="/oferta/wesela">wesela</Link>,{' '}
              <Link to="/oferta/okolicznosciowa">przyjęcia okolicznościowe</Link>. Pytania i
              rezerwacje:
            </p>
            <OfferContact showLabel={false} />
          </div>

          <div className="offer-cta fade-in">
            <Button to="/kontakt" variant="primary">
              Rezerwacja stolika
            </Button>
            <Button to="/oferta/okolicznosciowa" variant="outline-dark">
              Oferta okolicznościowa
            </Button>
          </div>
        </div>
      </section>
    </PageDeerBackdrop>
  );
}
