import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import './ImageLightbox.css';

interface ImageLightboxProps {
  src: string;
  alt: string;
  caption?: string;
  open: boolean;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, caption, open, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

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
      <div
        className="lightbox__content"
        onClick={(e) => e.stopPropagation()}
        role="presentation"
      >
        <img src={src} alt={alt} />
        {caption && <p className="lightbox__caption">{caption}</p>}
      </div>
    </div>,
    document.body
  );
}
