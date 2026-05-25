interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

export function PageHero({ title, subtitle, image = '/images/hero-night.png' }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
      <div className="page-hero__overlay" aria-hidden="true" />
      <div className="container page-hero__content fade-in visible">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </section>
  );
}
