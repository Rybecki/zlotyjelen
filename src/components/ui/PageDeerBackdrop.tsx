import type { ReactNode } from 'react';
import './PageDeerBackdrop.css';

interface PageDeerBackdropProps {
  children: ReactNode;
  className?: string;
}

export function PageDeerBackdrop({ children, className }: PageDeerBackdropProps) {
  const rootClass = ['offer-page-deer', className].filter(Boolean).join(' ');

  return (
    <div className={rootClass}>
      <div className="offer-page-deer__watermark" aria-hidden="true" />
      <div className="offer-page-deer__content">{children}</div>
    </div>
  );
}
