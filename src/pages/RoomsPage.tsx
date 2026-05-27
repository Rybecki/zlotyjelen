import { PageHero } from '../components/ui/PageHero';
import { ProgramGallery } from '../components/ui/ProgramGallery';
import { rooms, roomsBathroomGallery, roomCapacityRangeLabel } from '../data/rooms';
import { Button } from '../components/ui/Button';
import '../styles/offer-pages.css';

const roomsHeroSlides = (['pokoj-3', 'pokoj-2'] as const).map((id) => {
  const room = rooms.find((r) => r.id === id)!;
  return { src: room.image, alt: room.name, position: 'center 85%' };
});

export function RoomsPage() {
  return (
    <>
      <PageHero
        variant="offer"
        className="page-hero--rooms"
        title="Pokoje gościnne"
        subtitle="95 miejsc noclegowych w 25 pokojach – od wycieczek szkolnych po pobyt indywidualny"
        slides={roomsHeroSlides}
      />
      <section className="section">
        <div className="container">
          <div className="offer-intro fade-in">
            <div className="rooms-intro__stats" aria-label="Liczba miejsc i pokoi">
              <div>
                <span className="rooms-intro__stat-value">95</span>
                <span className="rooms-intro__stat-label">miejsc noclegowych</span>
              </div>
              <div>
                <span className="rooms-intro__stat-value">25</span>
                <span className="rooms-intro__stat-label">pokoi gościnnych</span>
              </div>
            </div>
            <p>
              Złoty Jeleń dysponuje <strong>95 miejscami noclegowymi w 25 pokojach</strong> o
              zróżnicowanej pojemności ({roomCapacityRangeLabel}). W pokojach wieloosobowych są wyłącznie
              łóżka jednoosobowe. Taka skala sprawia, że jesteśmy
              doskonałą bazą dla <strong>wycieczek szkolnych</strong>,{' '}
              <strong>grup zorganizowanych</strong>, wesel, imprez firmowych i innych pobytów
              grupowych – zapewniamy zakwaterowanie wielu uczestników w jednym miejscu, blisko
              atrakcji Jury.
            </p>
            <p>
              Organizujemy noclegi dla szkół z pełnym zapleczem: śniadania, obiady, kolacje,
              programy edukacyjne i atrakcje w okolicy. Grupy mogą liczyć na elastyczne ustalenie
              terminów, menu i harmonogramu pobytu – skontaktuj się z nami, a przygotujemy ofertę
              dopasowaną do wielkości grupy.
            </p>
            <p>
              Jednocześnie <strong>goście indywidualni</strong>, pary i rodziny również znajdą u nas
              miejsce na spokojny wypoczynek. Każdy pokój ma prywatną łazienkę i bezpłatne WiFi – to
              komfortowa baza wypadowa na szlaki, zamki i rezerwat Parkowe w
              Złotym Potoku.
            </p>
          </div>
          <div className="rooms-detail-grid">
            {rooms.map((room) => (
              <article key={room.id} className="room-detail fade-in">
                <img
                  src={room.image}
                  alt={room.name}
                  loading="lazy"
                  className={room.id === 'pokoj-1' ? 'room-detail__image--1os' : undefined}
                />
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

          <div className="groups-section fade-in">
            <h2 className="section__title groups-section__title">Łazienki</h2>
            <ProgramGallery photos={[...roomsBathroomGallery]} showCaptions={false} />
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
