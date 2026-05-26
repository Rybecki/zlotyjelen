import { useState } from 'react';
import { testimonials, GOOGLE_REVIEWS_URL } from '../../data/testimonials';
import './TestimonialsSection.css';

export function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () => setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="section section--dark testimonials" aria-labelledby="testimonials-title">
      <div className="container fade-in">
        <header className="section__header">
          <span className="section__eyebrow">Opinie</span>
          <h2 id="testimonials-title" className="section__title">
            Co mówią nasi goście
          </h2>
          <p className="section__subtitle">
            Opinie gości z{' '}
            <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              Google
            </a>
          </p>
        </header>

        <div className="testimonial-slider">
          <blockquote className="testimonial-slider__quote">
            <div className="testimonial-slider__body">
              <p>&ldquo;{current.text}&rdquo;</p>
            </div>
            <footer>
              <cite>{current.author}</cite>
              <span>{current.location}</span>
              <div className="testimonial-slider__stars" aria-label={`Ocena ${current.rating} z 5`}>
                {'★'.repeat(current.rating)}
              </div>
            </footer>
          </blockquote>

          <div className="testimonial-slider__nav">
            <button type="button" onClick={prev} aria-label="Poprzednia opinia">
              ←
            </button>
            <div className="testimonial-slider__dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={i === index ? 'active' : ''}
                  onClick={() => setIndex(i)}
                  aria-label={`Opinia ${i + 1}`}
                />
              ))}
            </div>
            <button type="button" onClick={next} aria-label="Następna opinia">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
