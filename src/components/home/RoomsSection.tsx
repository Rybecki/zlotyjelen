import { rooms, roomCapacityRangeLabel } from '../../data/rooms';
import { Button } from '../ui/Button';
import './RoomsSection.css';

export function RoomsSection() {
  return (
    <section className="section section--alt" id="pokoje" aria-labelledby="rooms-title">
      <div className="container">
        <header className="section__header fade-in">
          <span className="section__eyebrow">Noclegi</span>
          <h2 id="rooms-title" className="section__title">
            Komfortowe pokoje gościnne
          </h2>
          <p className="section__subtitle">
            Pokoje {roomCapacityRangeLabel} – prywatne łazienki, łóżka jednoosobowe w pokojach
            wieloosobowych, bezpłatne WiFi
          </p>
        </header>

        <div className="rooms-grid">
          {rooms.map((room) => (
            <article
              key={room.id}
              className={`room-card fade-in${room.capacity === 2 || room.capacity === 4 || room.capacity === 6 ? ' room-card--dark' : ''}`}
            >
              <div
                className={`room-card__image${room.id === 'pokoj-1' ? ' room-card__image--1os' : ''}`}
              >
                <img src={room.image} alt={room.name} loading="lazy" width={400} height={280} />
                <span className="room-card__badge">
                  {room.capacity} {room.capacity === 1 ? 'osoba' : room.capacity <= 4 ? 'osoby' : 'osób'}
                </span>
              </div>
              <div className="room-card__body">
                <h3>{room.name}</h3>
                <ul className="room-card__amenities">
                  {room.amenities.map((a) => (
                    <li key={a}>{a}</li>
                  ))}
                </ul>
                <Button
                  to="/oferta/pokoje"
                  variant={
                    room.capacity === 2 || room.capacity === 4 || room.capacity === 6
                      ? 'outline'
                      : 'outline-dark'
                  }
                  className="room-card__btn"
                >
                  Zobacz więcej
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="rooms-cta fade-in">
          <Button to="/kontakt" variant="primary">
            Zarezerwuj pokój
          </Button>
        </div>
      </div>
    </section>
  );
}
