import { useEffect, useState } from 'react';

export interface PageHeroSlide {
  src: string;
  alt?: string;
  position?: string;
}

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  slides?: PageHeroSlide[];
  variant?: 'default' | 'menu' | 'offer';
  className?: string;
}

export function PageHero({
  title,
  subtitle,
  image = '/images/hero-night.png',
  slides,
  variant = 'default',
  className,
}: PageHeroProps) {
  const [active, setActive] = useState(0);
  const slideCount = slides?.length ?? 0;

  useEffect(() => {
    if (slideCount < 2) return;
    const timer = setInterval(() => setActive((i) => (i + 1) % slideCount), 7000);
    return () => clearInterval(timer);
  }, [slideCount]);

  const heroClassName = [
    'page-hero',
    variant === 'menu' && 'page-hero--menu',
    variant === 'offer' && 'page-hero--offer',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section className={heroClassName}>
      {slideCount > 0 ? (
        <div className="page-hero__slides" aria-hidden="true">
          {slides!.map((slide, i) => (
            <div
              key={slide.src}
              className={`page-hero__slide ${i === active ? 'page-hero__slide--active' : ''}`}
              style={{
                backgroundImage: `url(${slide.src})`,
                backgroundPosition: slide.position ?? 'center',
              }}
              role="img"
              aria-label={slide.alt}
            />
          ))}
        </div>
      ) : (
        <div className="page-hero__bg" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
      )}
      <div className="page-hero__overlay" aria-hidden="true" />
      <div className="container page-hero__content fade-in visible">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}