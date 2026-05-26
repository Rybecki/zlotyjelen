import { Link } from 'react-router-dom';
import { PageHero } from '../components/ui/PageHero';
import { PageDeerBackdrop } from '../components/ui/PageDeerBackdrop';
import { Button } from '../components/ui/Button';
import { WeddingVariantCard } from '../components/wedding/WeddingVariantCard';
import { MenuDishCard } from '../components/menu/MenuDishCard';
import { menuCategories } from '../data/menu';
import {
  menuSampleDishes,
  menuSoupHighlight,
  menuDessertHighlight,
  type MenuSampleDish,
} from '../data/menuDishes';
import { SITE } from '../data/site';
import '../styles/offer-pages.css';

const menuCategoryHighlights: Record<string, MenuSampleDish> = {
  'menu-zupy': menuSoupHighlight,
  'menu-desery': menuDessertHighlight,
};

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

          <div className="groups-section fade-in">
            <h2 className="section__title groups-section__title">Przykładowe dania</h2>
            <div className="menu-dishes menu-dishes--first">
              {menuSampleDishes.map((dish, index) => (
                <MenuDishCard key={dish.id} dish={dish} reverse={index % 2 === 1} />
              ))}
            </div>
          </div>

          <div className="groups-section fade-in">
            <h2 className="section__title groups-section__title">Karta dań</h2>
            <div className="wedding-variants">
              {menuCategories.map((category) => {
                const highlight = menuCategoryHighlights[category.id];
                if (highlight) {
                  return (
                    <div key={category.id} className="menu-category-with-dish">
                      <WeddingVariantCard variant={category} />
                      <div className="menu-dishes menu-dishes--in-category">
                        <MenuDishCard dish={highlight} />
                      </div>
                    </div>
                  );
                }
                return <WeddingVariantCard key={category.id} variant={category} />;
              })}
            </div>
          </div>

          <div className="content-block fade-in">
            <p>
              Pełna oferta okolicznościowa i weselna dostępna na stronie{' '}
              <Link to="/oferta/wesela">Oferta weselna</Link>. Pytania i rezerwacje:{' '}
              <strong>{SITE.manager}</strong>, {SITE.phoneDisplay},{' '}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </div>

          <div className="offer-cta fade-in">
            <Button to="/kontakt" variant="primary">
              Rezerwacja stolika
            </Button>
            <Button to="/oferta/wesela" variant="outline-dark">
              Oferta okolicznościowa
            </Button>
          </div>
        </div>
      </section>
    </PageDeerBackdrop>
  );
}
