import type { MenuSampleDish } from '../../data/menuDishes';
import './MenuDishCard.css';

interface MenuDishCardProps {
  dish: MenuSampleDish;
  reverse?: boolean;
}

export function MenuDishCard({ dish, reverse = false }: MenuDishCardProps) {
  return (
    <article className={`menu-dish-card${reverse ? ' menu-dish-card--reverse' : ''}`}>
      <div className="menu-dish-card__image">
        <img src={dish.image} alt={dish.imageAlt} loading="lazy" />
      </div>
      <div className="menu-dish-card__body">
        <header className="menu-dish-card__head">
          <h3>{dish.title}</h3>
          <p className="menu-dish-card__price">{dish.price}</p>
        </header>
        <p className="menu-dish-card__desc">{dish.description}</p>
        <p className="menu-dish-card__weight">({dish.weight})</p>
      </div>
    </article>
  );
}
