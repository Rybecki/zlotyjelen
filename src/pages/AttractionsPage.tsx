import { PageHero } from '../components/ui/PageHero';
import { nearbyAttractions, juraHighlights } from '../data/attractions';
import '../styles/offer-pages.css';

export function AttractionsPage() {
  return (
    <>
      <PageHero
        title="Atrakcje okolicy"
        subtitle="Jura Krakowsko-Częstochowska – zamki, szlaki, rezerwaty i aktywny wypoczynek"
        image="/images/hero-day.png"
      />
      <section className="section">
        <div className="container">
          <div className="attractions__grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
            {juraHighlights.map((h) => (
              <article key={h.title} className="attraction-card fade-in" style={{ background: 'var(--color-warm-white)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-soft)' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{h.title}</h3>
                <p style={{ color: 'var(--color-text-muted)' }}>{h.text}</p>
              </article>
            ))}
          </div>

          <div className="content-block fade-in">
            <h2>Atrakcje w pobliżu obiektu</h2>
            <div className="attractions-table-wrap">
              <table className="attractions-table">
                <thead>
                  <tr>
                    <th>Nazwa</th>
                    <th>Kategoria</th>
                    <th>Odległość</th>
                    <th>Strona</th>
                  </tr>
                </thead>
                <tbody>
                  {nearbyAttractions.map((a) => (
                    <tr key={a.name}>
                      <td>{a.name}</td>
                      <td>{a.category}</td>
                      <td>{a.distance}</td>
                      <td>
                        {a.url ? (
                          <a href={a.url} target="_blank" rel="noopener noreferrer">
                            Zobacz
                          </a>
                        ) : (
                          '—'
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
