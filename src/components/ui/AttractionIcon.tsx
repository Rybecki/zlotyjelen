import type { AttractionIconId } from '../../data/attractions';

interface AttractionIconProps {
  id: AttractionIconId;
  className?: string;
}

export function AttractionIcon({ id, className = '' }: AttractionIconProps) {
  const cls = `attraction-icon ${className}`.trim();

  switch (id) {
    case 'trail':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M4 20l4-8 4 4 4-10 4 6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="6" cy="18" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'castle':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M4 21V9l4-3v3l4-3v3l4-3v12H4z" strokeLinejoin="round" />
          <path d="M9 14h2v3H9zM13 14h2v3h-2z" fill="currentColor" stroke="none" />
          <path d="M4 21h16" strokeLinecap="round" />
        </svg>
      );
    case 'nature':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M12 3c-4 6-8 8-8 13a8 8 0 1016 0c0-5-4-7-8-13z" strokeLinejoin="round" />
          <path d="M12 12v9" strokeLinecap="round" />
        </svg>
      );
    case 'activity':
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="5" r="2.5" />
          <path d="M12 7.5v3M9 18l3-7 3 7M7 21h10" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}
