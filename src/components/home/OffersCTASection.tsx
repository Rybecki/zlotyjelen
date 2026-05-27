import { useState } from 'react';
import { Button } from '../ui/Button';
import './OffersCTASection.css';

type OfferTab = 'szkoly' | 'wesela' | 'grupy';

const tabs: { id: OfferTab; label: string }[] = [
  { id: 'szkoly', label: 'Wycieczki szkolne' },
  { id: 'wesela', label: 'Oferta weselna' },
  { id: 'grupy', label: 'Grupy zorganizowane' },
];

const offerContent: Record<
  OfferTab,
  {
    title: string;
    lead: string;
    highlights: string[];
    priceNote: string;
    to: string;
    cta: string;
  }
> = {
  szkoly: {
    title: 'Wycieczki szkolne na Jurze',
    lead:
      'Kompleksowa obsługa grup wycieczkowych – wyżywienie, noclegi, sala na 50 osób, ognisko i gotowe programy 2-dniowe.',
    highlights: [
      'Pakiety BB od 105 zł, HB od 125 zł, FB od 149 zł/os.',
      '1 opiekun gratis na 15 uczestników · darmowy parking',
      'Pokoje 1–4 osobowe z łazienkami · WiFi na całym obiekcie',
      'Propozycje: Zamek Ogrodzieniec lub Olsztyn, edukacja leśna',
    ],
    priceNote: 'Pn–Pt / Pt–Nd – dopasujemy menu do budżetu szkoły',
    to: '/oferta/wycieczki-szkolne',
    cta: 'Zobacz ofertę szkolną',
  },
  wesela: {
    title: 'Wesele w sercu rezerwatu Parkowe',
    lead:
      'Wesele inne niż zwykłe – dania z dziczyzny i lokalnych produktów, sala na 120+ gości, bliskość natury w Złotym Potoku.',
    highlights: [
      'Menu od 139 zł/os. – warianty I, II i III do 259 zł',
      'Bufety gorące i zimne, napoje bez limitu',
      'Komunie, chrzciny, jubileusze, wieczory panieńskie i kawalerskie',
      'Dodatki: grill na polanie, pieczony dzik, fotobudka, DJ',
    ],
    priceNote: 'Przykładowe menu 270 zł/os. · modyfikacje dla vegetarian',
    to: '/oferta/wesela',
    cta: 'Sprawdź ofertę weselną',
  },
  grupy: {
    title: 'Grupy zorganizowane i firmy',
    lead:
      'Autorskie menu z dziczyzny – burgery z jelenia, pstrągi, ogniska i strefa relaksu na dużej polanie.',
    highlights: [
      'Obiadokolacje od 45 zł/os. – menu szyte na miarę',
      'Ognisko od 10 zł/os. · napoje bez limitu 15 zł/os.',
      'Sala konferencyjna 50 osób · 1 opiekun gratis / 15 osób',
      'Współpraca z biurami podróży i przewodnikami',
    ],
    priceNote: 'Realizujemy własne programy – elastyczne ceny noclegu',
    to: '/oferta/grupy-zorganizowane',
    cta: 'Oferta dla grup',
  },
};

export function OffersCTASection() {
  const [active, setActive] = useState<OfferTab>('szkoly');
  const content = offerContent[active];

  return (
    <section
      className="section section--dark offers-cta"
      id="oferta-cta"
      aria-labelledby="offers-cta-title"
    >
      <div className="container offers-cta__inner fade-in">
        <header className="offers-cta__header">
          <span className="section__eyebrow">Oferta specjalna</span>
          <h2 id="offers-cta-title" className="section__title">
            Wybierz ofertę dla swojej grupy
          </h2>
        </header>

        <div
          className="offers-cta__tabs"
          role="tablist"
          aria-label="Rodzaj oferty"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={active === tab.id}
              aria-controls={`panel-${tab.id}`}
              className={active === tab.id ? 'active' : ''}
              onClick={() => setActive(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          className="offers-cta__panel"
          role="tabpanel"
          id={`panel-${active}`}
          aria-labelledby={`tab-${active}`}
        >
          <div className="offers-cta__deer" aria-hidden="true">
            <img src="/images/jelen-geo.png" alt="" loading="lazy" />
          </div>
          <div className="offers-cta__content">
            <h3>{content.title}</h3>
            <p className="offers-cta__lead">{content.lead}</p>
            <ul className="offers-cta__list">
              {content.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="offers-cta__price">{content.priceNote}</p>
            <Button to={content.to} variant="primary">
              {content.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
