import { useEffect, useRef, useState } from 'react';
import { useCountUp } from '../../hooks/useCountUp';
import './StatsBanner.css';

const stats = [
  { label: 'Miejsca', value: 95 },
  { label: 'Pokoje', value: 25 },
] as const;

function StatItem({ label, value, active }: { label: string; value: number; active: boolean }) {
  const display = useCountUp(value, active);

  return (
    <div className="stats-banner__item">
      <p className="stats-banner__label">{label}</p>
      <p
        className="stats-banner__value"
        aria-label={`${value} ${label.toLowerCase()}`}
      >
        {display}
      </p>
    </div>
  );
}

export function StatsBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: '0px 0px -20px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="stats-banner"
      aria-label="Podstawowe informacje o obiekcie"
    >
      <div className="container stats-banner__grid">
        {stats.map((item) => (
          <StatItem key={item.label} label={item.label} value={item.value} active={animate} />
        ))}
      </div>
    </section>
  );
}
