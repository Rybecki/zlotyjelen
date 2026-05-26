import type { BenefitIconId } from './BenefitIcon';
import { BenefitIcon } from './BenefitIcon';

export interface BenefitItem {
  icon: BenefitIconId;
  text: string;
}

interface BenefitsListProps {
  items: BenefitItem[];
}

export function BenefitsList({ items }: BenefitsListProps) {
  return (
    <ul className="benefits-list">
      {items.map((item) => (
        <li key={item.text}>
          <span className="benefits-list__icon" aria-hidden="true">
            <BenefitIcon id={item.icon} />
          </span>
          <span className="benefits-list__text">{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
