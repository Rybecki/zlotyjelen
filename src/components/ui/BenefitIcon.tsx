export type BenefitIconId =
  | 'food'
  | 'guardian'
  | 'parking'
  | 'bonfire'
  | 'meadow'
  | 'conference'
  | 'wifi'
  | 'dinner'
  | 'bed'
  | 'menu'
  | 'bar'
  | 'buffet'
  | 'music'
  | 'photo'
  | 'tent';

/** Nazwy ikon Google Material Symbols Outlined */
const MATERIAL_ICONS: Record<BenefitIconId, string> = {
  food: 'fork_spoon',
  menu: 'menu_book',
  guardian: 'supervisor_account',
  parking: 'directions_car',
  bonfire: 'local_fire_department',
  meadow: 'directions_run',
  conference: 'groups',
  wifi: 'wifi',
  dinner: 'restaurant_menu',
  bed: 'bed',
  bar: 'local_bar',
  buffet: 'bakery_dining',
  music: 'music_note',
  photo: 'photo_camera',
  tent: 'camping',
};

interface BenefitIconProps {
  id: BenefitIconId;
  className?: string;
}

export function BenefitIcon({ id, className = '' }: BenefitIconProps) {
  const cls = `material-symbols-outlined benefit-icon ${className}`.trim();
  return (
    <span className={cls} aria-hidden="true">
      {MATERIAL_ICONS[id]}
    </span>
  );
}
