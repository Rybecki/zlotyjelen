import type { ReactNode } from 'react';
import './PageDeerBackdrop.css';

interface PageDeerBackdropProps {
  children: ReactNode;
}

export function PageDeerBackdrop({ children }: PageDeerBackdropProps) {
  return (
    <div className="offer-page-deer">
      <div className="offer-page-deer__watermark" aria-hidden="true" />
      <div className="offer-page-deer__content">{children}</div>
    </div>
  );
}
