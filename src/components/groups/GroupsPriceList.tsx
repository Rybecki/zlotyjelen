import type { GroupsAttraction } from '../../data/groups';

interface GroupsPriceListProps {
  items: GroupsAttraction[];
}

export function GroupsPriceList({ items }: GroupsPriceListProps) {
  return (
    <ul className="groups-price-list">
      {items.map((item) => (
        <li key={item.name} className="groups-price-list__item">
          <div className="groups-price-list__main">
            <span className="groups-price-list__name">{item.name}</span>
            <span className="groups-price-list__price">{item.price}</span>
          </div>
          {item.note && <p className="groups-price-list__note">{item.note}</p>}
        </li>
      ))}
    </ul>
  );
}
