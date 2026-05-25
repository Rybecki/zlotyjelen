import { PageHero } from '../components/ui/PageHero';
import { rooms } from '../data/rooms';
import { Button } from '../components/ui/Button';
import '../styles/offer-pages.css';

export function RoomsPage() {
  return (
    <>
      <PageHero
        title="Pokoje gościnne"
        subtitle="Komfortowe noclegi 1, 2, 3 i 4-osobowe – wszystkie z prywatnymi łazienkami"
        image="/images/hero-night.png"
      />
      <section className="section">
        <div className="container">
          <p className="offer-intro fade-in">
            Wszystkie nasze pokoje są wyposażone w łazienki, telewizor i bezpłatny dostęp do WiFi na
            terenie całego obiektu. Idealna baza wypadowa na odkrywanie Jury.
          </p>
          <div className="rooms-detail-grid">
            {rooms.map((room) => (
              <article key={room.id} className="room-detail fade-in">
                <img src={room.image} alt={room.name} loading="lazy" />
                <div>
                  <h2>{room.name}</h2>
                  <p className="room-detail__capacity">Do {room.capacity} {room.capacity === 1 ? 'osoby' : 'osób'}</p>
                  <p>{room.description}</p>
                  <ul>
                    {room.amenities.map((a) => (
                      <li key={a}>{a}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="offer-cta fade-in">
            <Button to="/kontakt" variant="primary">
              Zarezerwuj pokój
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
