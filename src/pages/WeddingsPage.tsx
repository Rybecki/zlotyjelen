import { PageHero } from '../components/ui/PageHero';
import { PageDeerBackdrop } from '../components/ui/PageDeerBackdrop';
import { Button } from '../components/ui/Button';
import { BenefitsList } from '../components/ui/BenefitsList';
import type { BenefitItem } from '../components/ui/BenefitsList';
import { ProgramGallery } from '../components/ui/ProgramGallery';
import { WeddingVariantCard } from '../components/wedding/WeddingVariantCard';
import {
  weddingIntro,
  weddingVariants,
  weddingBuffetHot,
  weddingBuffetCold,
  weddingDrinks,
  weddingGallery,
  weddingHeroSlides,
} from '../data/weddings';
import { OfferContact } from '../components/ui/OfferContact';
import { RentalPromoCta } from '../components/rental/RentalPromoCta';
import { dmuchanceRentalItem } from '../data/rentalPartners';
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

function BuffetBlock({
  title,
  hint,
  price,
  priceLabel,
  largeItemPrice,
  items,
}: {
  title: string;
  hint?: string;
  price?: string;
  priceLabel?: string;
  largeItemPrice?: boolean;
  items: string[];
}) {
  const buffetClass = [
    'wedding-buffet',
    'content-block',
    largeItemPrice && 'wedding-buffet--hot',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={buffetClass}>
      <header className="wedding-buffet__head">
        <h3>
          {title}
          {hint && <span className="wedding-buffet__hint"> ({hint})</span>}
        </h3>
        {price && <p className="wedding-buffet__price">{price}</p>}
      </header>
      <ul className="wedding-buffet__list">
        {items.map((item) => (
          <li key={item} className="wedding-buffet__item">
            <span>{item}</span>
            {priceLabel && <span className="wedding-buffet__item-price">{priceLabel}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

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
          <div className="content-block fade-in wedding-intro">
            {weddingIntro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="wedding-variants fade-in">
            {weddingVariants.map((variant) => (
              <WeddingVariantCard key={variant.id} variant={variant} />
            ))}
          </div>

          <div className="wedding-buffets fade-in">
            <h2 className="section__title wedding-buffets__title">Bufety dodatkowe</h2>
            <BuffetBlock
              title={weddingBuffetHot.title}
              hint={weddingBuffetHot.hint}
              priceLabel={weddingBuffetHot.priceLabel}
              largeItemPrice
              items={weddingBuffetHot.items}
            />
            <BuffetBlock
              title={weddingBuffetCold.title}
              hint={weddingBuffetCold.hint}
              price={weddingBuffetCold.price}
              items={weddingBuffetCold.items}
            />
            <div className="wedding-buffet content-block">
              <header className="wedding-buffet__head">
                <h3>Napoje</h3>
                <p className="wedding-buffet__price">{weddingDrinks.price}</p>
              </header>
              <p className="wedding-buffet__note">{weddingDrinks.text}</p>
            </div>
          </div>

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
