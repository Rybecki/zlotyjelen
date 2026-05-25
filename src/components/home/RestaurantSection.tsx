import { Button } from '../ui/Button';
import './RestaurantSection.css';

const photos = [
  {
    src: '/images/restaurant-1.png',
    alt: 'Burgery z frytkami – dania regionalne w restauracji Złoty Jeleń',
  },
  {
    src: '/images/restaurant-2.png',
    alt: 'Dania główne z frytkami i surówką – kuchnia regionalna Złoty Jeleń',
  },
];

export function RestaurantSection() {
  return (
    <section className="section restaurant section--dark" id="restauracja" aria-labelledby="restaurant-title">
      <div className="container restaurant__grid fade-in">
        <div className="restaurant__content">
          <span className="section__eyebrow">Restauracja</span>
          <h2 id="restaurant-title" className="section__title">
            Regionalna kuchnia z sercem Jury
          </h2>
          <p className="section__subtitle">
            Dania oparte na lokalnych i świeżych produktach z regionu Złotego Potoku. Naszą
            specjalnością jest dziczyzna – leśne, dzikie smaki w eleganckim, klimatycznym wnętrzu.
          </p>
          <p>
            Restauracja pomieści ponad 120 osób. Organizujemy przyjęcia okolicznościowe, komunię,
            chrzciny, jubileusze oraz wieczory kawalerskie i panieńskie.
          </p>
          <div className="restaurant__actions">
            <Button to="/menu" variant="primary">
              Sprawdź menu restauracji
            </Button>
            <Button to="/kontakt" variant="outline">
              Rezerwacja stolika
            </Button>
          </div>
        </div>
        <div className="restaurant__gallery">
          {photos.map((photo) => (
            <figure key={photo.src} className="restaurant__photo">
              <img src={photo.src} alt={photo.alt} loading="lazy" width={800} height={500} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
