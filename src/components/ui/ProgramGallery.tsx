import { useState } from 'react';
import { ImageLightbox } from './ImageLightbox';

export interface GalleryPhoto {
  src: string;
  alt: string;
  caption: string;
}

interface ProgramGalleryProps {
  photos: GalleryPhoto[];
}

export function ProgramGallery({ photos }: ProgramGalleryProps) {
  const [active, setActive] = useState<GalleryPhoto | null>(null);

  return (
    <>
      <div className="program-gallery">
        {photos.map((photo) => (
          <figure key={photo.src} className="program-gallery__item">
            <button
              type="button"
              className="program-gallery__trigger"
              onClick={() => setActive(photo)}
              aria-label={`Powiększ: ${photo.caption}`}
            >
              <img src={photo.src} alt={photo.alt} loading="lazy" />
              <span className="program-gallery__zoom" aria-hidden="true">
                +
              </span>
            </button>
            <figcaption>{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      <ImageLightbox
        src={active?.src ?? ''}
        alt={active?.alt ?? ''}
        caption={active?.caption}
        open={active !== null}
        onClose={() => setActive(null)}
      />
    </>
  );
}
