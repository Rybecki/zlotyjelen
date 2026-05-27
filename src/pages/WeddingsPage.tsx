import { PageHero } from '../components/ui/PageHero';
import { PageDeerBackdrop } from '../components/ui/PageDeerBackdrop';
import { Button } from '../components/ui/Button';
import { BenefitsList } from '../components/ui/BenefitsList';
import type { BenefitItem } from '../components/ui/BenefitsList';
import { ProgramGallery } from '../components/ui/ProgramGallery';
import { CelebrationMenu } from '../components/celebration/CelebrationMenu';
import { weddingMenuIntro } from '../data/celebrationMenu';
import { weddingGallery, weddingHeroSlides } from '../data/weddings';
import { OfferContact } from '../components/ui/OfferContact';
import { RentalPromoCta } from '../components/rental/RentalPromoCta';
import { dmuchanceRentalItem } from '../data/rentalPartners';
import '../components/celebration/CelebrationMenu.css';
import '../styles/offer-pages.css';

const extras: BenefitItem[] = [
  { icon: 'bar', text: 'Bar mobilny i profesjonalna obsługa barmańska' },
  { icon: 'buffet', text: 'Wiejski stół w dwóch wersjach – tradycyjny lub z dziczyzną' },
  { icon: 'food', text: 'Bufet domowych słodkości' },
  { icon: 'bonfire', text: 'Poprawiny w formie grilla na naszej polanie' },
  {
    icon: 'dinner',
    text: 'Pieczony dzik / udziec z dzika (możliwość podania zamiast kolacji) – pieczony w całości i podawany na sali',
  },
  { icon: 'photo', text: 'Fotobudka' },
  { icon: 'music', text: 'Oprawa muzyczna (DJ, zespoły muzyczne)' },
  { icon: 'guardian', text: 'Animator dla dzieci' },
  { icon: 'tent', text: 'Ekskluzywne namioty dzwonkowe – Księżycowe Pole' },
];

export function WeddingsPage() {
  return (
    <PageDeerBackdrop>
      <PageHero
        variant="offer"
        className="page-hero--wedding"
        title="Oferta weselna"
        subtitle="Wesele inne niż zwykłe – w sercu Rezerwatu Przyrody Parkowe"
        slides={[...weddingHeroSlides]}
      />
      <section className="section">
        <div className="container">
          <CelebrationMenu intro={weddingMenuIntro} introLead="first" showMenuTitle={false} />

          <div className="content-block fade-in">
            <h2 className="section__title">Złoty Jeleń w obiektywie</h2>
            <ProgramGallery photos={[...weddingGallery]} showCaptions={false} />
          </div>

          <div className="content-block fade-in">
            <h2>Dodatkowe atrakcje</h2>
            <BenefitsList items={extras} />
            <RentalPromoCta
              className="wedding-extras-promo"
              title={dmuchanceRentalItem.title}
              description="Istnieje możliwość wynajęcia dmuchańca dla dzieci na czas wesela – atrakcja, która umili najmłodszym z gości przyjęcie."
              image={dmuchanceRentalItem.image}
              imageAlt={dmuchanceRentalItem.imageAlt}
              to="/wypozyczalnia"
              ctaLabel={dmuchanceRentalItem.ctaLabel}
            />
            <p className="wedding-extras-highlight">
              <span
                className="material-symbols-outlined wedding-extras-highlight__icon"
                aria-hidden="true"
              >
                local_florist
              </span>
              Istnieje możliwość wystroju sali jako dodatkowej usługi.
            </p>
            <p className="wedding-extras-note">
              <em>Ceny dodatkowych atrakcji wyceniane indywidualnie.</em>
            </p>
          </div>

          <div className="content-block fade-in">
            <OfferContact />
          </div>

          <div className="offer-cta fade-in">
            <Button to="/kontakt" variant="primary">
              Sprawdź wolne terminy
            </Button>
          </div>
        </div>
      </section>
    </PageDeerBackdrop>
  );
}
