import { PageHero } from '../components/ui/PageHero';
import { PageDeerBackdrop } from '../components/ui/PageDeerBackdrop';
import { Button } from '../components/ui/Button';
import { ProgramGallery } from '../components/ui/ProgramGallery';
import { WeddingVariantCard } from '../components/wedding/WeddingVariantCard';
import { GroupsPriceList } from '../components/groups/GroupsPriceList';
import { rooms, roomsBathroomGallery } from '../data/rooms';
import {
  groupsAccommodation,
  groupsLunchVariants,
  groupsVegeMains,
  groupsVegePhotos,
  groupsBonfireVariants,
  groupsSoftDrinks,
  groupsAlcohol,
  groupsAttractionsPrimary,
  groupsAttractionsSecondary,
  groupsClosing,
  groupsHeroSlides,
} from '../data/groups';
import { SITE } from '../data/site';
import '../components/home/RoomsSection.css';
import '../styles/offer-pages.css';

export function GroupsPage() {
  return (
    <PageDeerBackdrop>
      <PageHero
        variant="offer"
        className="page-hero--groups"
        title="Oferta dla grup zorganizowanych"
        subtitle="Firmy, biura podróży, przewodnicy – dopasujemy program i budżet"
        slides={[...groupsHeroSlides]}
      />
      <section className="section">
        <div className="container">
          <div className="groups-section fade-in">
            <h2 className="section__title groups-section__title">Nocleg</h2>
            <WeddingVariantCard variant={groupsAccommodation} />
          </div>

          <div className="groups-section fade-in">
            <header className="groups-section__header">
              <h2 className="section__title groups-section__title">Pokoje</h2>
              <p className="section__subtitle groups-rooms-subtitle">
                Dysponujemy <span className="groups-rooms-subtitle__num">95</span> miejscami w{' '}
                <span className="groups-rooms-subtitle__num">25</span> pokojach
              </p>
            </header>
            <div className="rooms-grid groups-rooms-grid">
              {rooms.map((room) => (
                <article
                  key={room.id}
                  className={`room-card${room.capacity === 2 || room.capacity === 4 ? ' room-card--dark' : ''}`}
                >
                  <div
                    className={`room-card__image${room.id === 'pokoj-1' ? ' room-card__image--1os' : ''}`}
                  >
                    <img src={room.image} alt={room.name} loading="lazy" width={400} height={280} />
                    <span className="room-card__badge">
                      {room.capacity} {room.capacity === 1 ? 'osoba' : 'osoby'}
                    </span>
                  </div>
                  <div className="room-card__body">
                    <h3>{room.name}</h3>
                    <ul className="room-card__amenities">
                      {room.amenities.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="groups-section fade-in">
            <h2 className="section__title groups-section__title">Łazienki</h2>
            <ProgramGallery photos={[...roomsBathroomGallery]} showCaptions={false} />
          </div>

          <div className="groups-section fade-in">
            <h2 className="section__title groups-section__title">Obiad</h2>
            <div className="wedding-variants">
              {groupsLunchVariants.map((variant) => (
                <WeddingVariantCard key={variant.id} variant={variant} />
              ))}
            </div>
            <ProgramGallery photos={[...groupsVegePhotos]} showCaptions={false} />
            <div className="groups-wege content-block">
              <h3>Warianty dań głównych wege</h3>
              <ul>
                {groupsVegeMains.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="groups-section fade-in">
            <h2 className="section__title groups-section__title">Ognisko</h2>
            <div className="wedding-variants">
              {groupsBonfireVariants.map((variant) => (
                <WeddingVariantCard key={variant.id} variant={variant} />
              ))}
            </div>
          </div>

          <div className="groups-section fade-in">
            <h2 className="section__title groups-section__title">Napoje</h2>
            <div className="groups-drinks">
              <div className="groups-drinks__panel">
                <header className="groups-drinks__head">
                  <h3>Bezalkoholowe</h3>
                  <p className="groups-drinks__price">{groupsSoftDrinks.price}</p>
                </header>
                <p className="groups-drinks__note">{groupsSoftDrinks.note}</p>
                <ul className="groups-drinks__list">
                  {groupsSoftDrinks.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="groups-drinks__panel">
                <header className="groups-drinks__head">
                  <h3>Alkohole</h3>
                </header>
                <p className="groups-drinks__promo">
                  <em>Specjalne promocyjne ceny.</em>
                </p>
                <div className="table-scroll-wrap">
                  <table className="price-table groups-drinks__table data-table--cards">
                    <tbody>
                      {groupsAlcohol.map((row) => (
                        <tr key={row.name}>
                          <td>{row.name}</td>
                          <td className="price" data-label="Cena">
                            {row.price}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="groups-drinks__own">
                  W przypadku spożywania własnego alkoholu obowiązuje opłata <strong>30 zł/os.</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="groups-section fade-in">
            <h2 className="section__title groups-section__title">Atrakcje</h2>
            <GroupsPriceList items={groupsAttractionsPrimary} />
            <h3 className="groups-attractions__subtitle">Atrakcje – dodatkowe</h3>
            <GroupsPriceList items={groupsAttractionsSecondary} />
            <p className="groups-attractions__more">
              <Button to="/atrakcje" variant="outline-dark">
                Zobacz pełną ofertę atrakcji
              </Button>
            </p>
          </div>

          <div className="content-block fade-in groups-closing">
            {groupsClosing.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="content-block fade-in">
            <p>
              <strong>{SITE.manager}</strong> ·{' '}
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phoneDisplay}</a> ·{' '}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
          </div>

          <div className="offer-cta fade-in">
            <Button to="/kontakt" variant="primary">
              Zapytaj o ofertę grupową
            </Button>
          </div>
        </div>
      </section>
    </PageDeerBackdrop>
  );
}
