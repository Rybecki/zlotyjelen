import { useCallback, useState } from 'react';
import { ImageLightbox } from './ImageLightbox';

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption?: string;
}

interface ProgramGalleryProps {
  photos: GalleryPhoto[];
  showCaptions?: boolean;
  /** cover – wypełnia kafelek; contain – całe zdjęcie widoczne w kafelku */
  variant?: 'cover' | 'contain';
  className?: string;
}

export function ProgramGallery({
  photos,
  showCaptions = true,
  variant = 'cover',
  className = '',
}: ProgramGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex((index + photos.length) % photos.length);
    },
    [photos.length]
  );

  const goPrevious = useCallback(() => {
    if (activeIndex === null) return;
    goTo(activeIndex - 1);
  }, [activeIndex, goTo]);

  const goNext = useCallback(() => {
    if (activeIndex === null) return;
    goTo(activeIndex + 1);
  }, [activeIndex, goTo]);

  const active = activeIndex !== null ? photos[activeIndex] : null;
  const canNavigate = photos.length > 1 && activeIndex !== null;

  return (
    <>
      <div
        className={[
          'program-gallery',
          variant === 'contain' && 'program-gallery--contain',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
      >
        {photos.map((photo, index) => (
          <figure key={photo.src} className="program-gallery__item">
            <button
              type="button"
              className="program-gallery__trigger"
              onClick={() => setActiveIndex(index)}
              aria-label={photo.caption ? `Powiększ: ${photo.caption}` : `Powiększ: ${photo.alt}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span className="program-gallery__zoom" aria-hidden="true">
                +
              </span>
            </button>
            {showCaptions && photo.caption ? (
              <figcaption>{photo.caption}</figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      <ImageLightbox
        src={active?.src ?? ''}
        alt={active?.alt ?? ''}
        caption={showCaptions ? active?.caption ?? active?.alt : undefined}
        open={active !== null}
        onClose={() => setActiveIndex(null)}
        onPrevious={canNavigate ? goPrevious : undefined}
        onNext={canNavigate ? goNext : undefined}
      />
    </>
  );
}
