import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ImageLightbox.css';

interface ImageLightboxProps {
  src: string;
  alt: string;
  caption?: string;
  open: boolean;
  onClose: () => void;
  onPrevious?: () => void;
  onNext?: () => void;
}

export function ImageLightbox({
  src,
  alt,
  caption,
  open,
  onClose,
  onPrevious,
  onNext,
}: ImageLightboxProps) {
  const hasNav = Boolean(onPrevious && onNext);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrevious) {
        e.preventDefault();
        onPrevious();
      }
      if (e.key === 'ArrowRight' && onNext) {
        e.preventDefault();
        onNext();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose, onPrevious, onNext]);

  if (!open) return null;

  return createPortal(
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={caption || alt}>
      <button
        type="button"
        className="lightbox__backdrop"
        onClick={onClose}
        aria-label="Zamknij podgląd"
      />
      <button
        type="button"
        className="lightbox__close"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Zamknij"
      >
        ×
      </button>
      {hasNav && (
        <>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              onPrevious?.();
            }}
            aria-label="Poprzednie zdjęcie"
          >
            ‹
          </button>
          <button
            type="button"
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              onNext?.();
            }}
            aria-label="Następne zdjęcie"
          >
            ›
          </button>
        </>
      )}
      <div
        className="lightbox__content"
        onClick={(e) => e.stopPropagation()}
        role="presentation"
      >
        <img key={src} src={src} alt={alt} />
        {caption && <p className="lightbox__caption">{caption}</p>}
      </div>
    </div>,
    document.body
  );
}
