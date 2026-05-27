import { PageHero } from '../components/ui/PageHero';
import { PageDeerBackdrop } from '../components/ui/PageDeerBackdrop';
import { Button } from '../components/ui/Button';
import { ProgramGallery } from '../components/ui/ProgramGallery';
import { CelebrationMenu } from '../components/celebration/CelebrationMenu';
import {
  occasionPageLead,
  occasionHeroSlides,
  occasionGallery,
} from '../data/celebrationMenu';
import { OfferContact } from '../components/ui/OfferContact';
import { RentalPromoCta } from '../components/rental/RentalPromoCta';
import { dmuchanceRentalItem } from '../data/rentalPartners';
import '../components/celebration/CelebrationMenu.css';
import '../styles/offer-pages.css';

export function OccasionsPage() {
  return (
    <PageDeerBackdrop className="page-occasion">
      <PageHero
        variant="offer"
        className="page-hero--occasion"
        title="Oferta okolicznościowa"
        subtitle="Komunie, chrzciny, urodziny i jubileusze w sercu rezerwatu Parkowe"
        slides={[...occasionHeroSlides]}
      />
      <section className="section section--occasion">
        <div className="container">
          <CelebrationMenu intro={occasionPageLead} introLead="first" showMenuTitle={false} />

          <div className="content-block fade-in occasion-gallery-block">
            <h2 className="section__title">Atmosfera przyjęć</h2>
            <ProgramGallery photos={[...occasionGallery]} showCaptions={false} />
          </div>

          <div className="occasion-post-gallery">
            <div className="content-block fade-in occasion-attractions-cta">
              <h2 className="section__title">Atrakcje w okolicy</h2>
              <p>
                Po przyjęciu zapraszamy gości na spacery po Jury – zamki, szlaki i rezerwaty przyrody są
                tuż obok. Sprawdź, co można zrobić w okolicy Złotego Potoku.
              </p>
              <p className="occasion-attractions-cta__action">
                <Button to="/atrakcje" variant="outline-dark">
                  Zobacz pełną ofertę atrakcji
                </Button>
              </p>
            </div>

            <RentalPromoCta
              className="fade-in occasion-extras-promo"
              title={dmuchanceRentalItem.title}
              description="Istnieje możliwość wynajęcia dmuchańca dla dzieci na czas przyjęcia okolicznościowego – atrakcja, która umili najmłodszym gościom komunie, chrzciny czy urodziny."
              image={dmuchanceRentalItem.image}
              imageAlt={dmuchanceRentalItem.imageAlt}
              to="/wypozyczalnia"
              ctaLabel={dmuchanceRentalItem.ctaLabel}
            />
          </div>

          <div className="content-block fade-in">
            <OfferContact />
          </div>

          <div className="offer-cta fade-in">
            <Button to="/kontakt" variant="primary">
              Zapytaj o termin przyjęcia
            </Button>
            <Button to="/oferta/wesela" variant="outline-dark">
              Oferta weselna
            </Button>
          </div>
        </div>
      </section>
    </PageDeerBackdrop>
  );
}
