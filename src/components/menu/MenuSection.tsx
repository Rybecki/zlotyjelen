import type { MenuRestaurantSection } from '../../data/menuRestaurant';
import { MenuDishCard } from './MenuDishCard';
import './MenuSection.css';

interface MenuSectionProps {
  section: MenuRestaurantSection;
}

const COMPACT_SECTION_IDS = new Set([
  'napoje-cieple',
  'napoje-zimne',
  'piwa-bezalkoholowe',
  'piwa-beczkowe',
]);

export function MenuSection({ section }: MenuSectionProps) {
  const withImage = section.items.filter((item) => item.image);
  const textOnly = section.items.filter((item) => !item.image);
  const listClass = COMPACT_SECTION_IDS.has(section.id)
    ? 'menu-section__list menu-section__list--compact'
    : 'menu-section__list';

  return (
    <section className="menu-section fade-in" id={section.id} aria-labelledby={`menu-${section.id}`}>
      <h2 className="menu-section__title" id={`menu-${section.id}`}>
        {section.title}
      </h2>
      {section.note && <p className="menu-section__note">{section.note}</p>}

      {withImage.length > 0 && (
        <div className="menu-section__featured">
          {withImage.map((item, index) => (
            <MenuDishCard
              key={item.id}
              dish={{
                id: item.id,
                title: item.title,
                price: item.price,
                description: item.description ?? '',
                weight: item.portion ?? '',
                image: item.image!,
                imageAlt: item.imageAlt ?? item.title,
              }}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      )}

      {textOnly.length > 0 && (
        <ul className={listClass}>
          {textOnly.map((item) => (
            <li key={item.id} className="menu-item">
              <div className="menu-item__row">
                <h3 className="menu-item__name">{item.title}</h3>
                <span className="menu-item__price">{item.price}</span>
              </div>
              {item.description && <p className="menu-item__desc">{item.description}</p>}
              {item.portion && <p className="menu-item__portion">{item.portion}</p>}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
