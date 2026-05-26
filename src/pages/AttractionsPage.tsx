import { PageHero } from '../components/ui/PageHero';
import { nearbyAttractions, juraHighlights, attractionsHeroSlides } from '../data/attractions';
import { buildDirectionsUrl } from '../utils/maps';
import '../styles/offer-pages.css';

export function AttractionsPage() {
  return (
    <>
      <PageHero
        variant="offer"
        className="page-hero--attractions"
        title="Atrakcje okolicy"
        subtitle="Jura Krakowsko-Częstochowska – zamki, szlaki, rezerwaty i aktywny wypoczynek"
        slides={[...attractionsHeroSlides]}
      />
      <section className="section">
        <div className="container">
          <div className="attractions-highlights">
            {juraHighlights.map((h) => (
              <article key={h.title} className="attraction-highlight-card fade-in">
                <h3>{h.title}</h3>
                <p>{h.text}</p>
              </article>
            ))}
          </div>

          <div className="content-block fade-in">
            <h2>Atrakcje w pobliżu obiektu</h2>
            <div className="table-scroll-wrap">
              <table className="attractions-table data-table--cards">
                <thead>
                  <tr>
                    <th>Nazwa</th>
                    <th>Kategoria</th>
                    <th>Odległość</th>
                    <th>Trasa</th>
                    <th>Strona</th>
                  </tr>
                </thead>
                <tbody>
                  {nearbyAttractions.map((a) => (
                    <tr key={a.name}>
                      <td>{a.name}</td>
                      <td data-label="Kategoria">
                        {a.category}
                      </td>
                      <td data-label="Odległość">
                        {a.distance}
                      </td>
                      <td data-label="Trasa">
                        <a
                          href={buildDirectionsUrl(a.mapsDestination)}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Zobacz trasę
                        </a>
                      </td>
                      <td data-label="Strona">
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
