import { PageHero } from '../components/ui/PageHero';
import { Button } from '../components/ui/Button';
import { SITE } from '../data/site';
import '../styles/offer-pages.css';

const benefits = [
  'Wyżywienie – 2 posiłki (śniadanie i obiadokolacja)',
  'Autorskie menu: burgery z jelenia i dzika, lokalne pstrągi, zupa rybna',
  'Nieodpłatny pobyt 1 opiekuna na 15 uczestników',
  'Darmowy parking',
  'Ognisko i grill, duża polana lub strefa relaksu',
  'Sala konferencyjna na 50 osób',
  'Bezpłatny WiFi',
  'Pokoje 1–4 osobowe z łazienkami',
];

const lunchVariants = [
  { name: 'Wariant I', price: '45 zł/os.', desc: 'Rosół z dzikiego ptactwa + burger z dzika z frytkami drwala' },
  { name: 'Wariant II', price: '45 zł/os.', desc: 'Krem pomidorowy + pieczeń z karkówki, kluski, modra kapusta' },
  { name: 'Wariant III', price: '50 zł/os.', desc: 'Krem z białych warzyw + gulasz z dzika, kasza, surówka' },
  { name: 'Wariant IV', price: '59 zł/os.', desc: 'Żurek staropolski + konfitowane udko z kaczki na puree z batata' },
];

const bonfireVariants = [
  { name: 'Wariant I', price: '49 zł/os.', desc: 'Kiełbasa, kaszanka, karkówka, dipy, pieczywo, piwo/wino/soft' },
  { name: 'Wariant II', price: '69 zł/os.', desc: 'Kiełbasa, kaszanka, stek, pstrąg lub sum, sałatka, smarowidło, napój' },
];

export function GroupsPage() {
  return (
    <>
      <PageHero
        title="Oferta dla grup zorganizowanych"
        subtitle="Firmy, biura podróży, przewodnicy – dopasujemy program i budżet"
        image="/images/hero-day.png"
      />
      <section className="section deer-watermark">
        <div className="container">
          <div className="content-block fade-in">
            <h2>Dla zorganizowanych grup zapewniamy</h2>
            <ul className="benefits-list">
              {benefits.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <div className="content-block fade-in">
            <h2>Obiadokolacje – warianty</h2>
            <div className="variant-cards">
              {lunchVariants.map((v) => (
                <article key={v.name} className="variant-card">
                  <h4>{v.name}</h4>
                  <p>{v.desc}</p>
                  <p className="variant-price">{v.price}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="content-block fade-in">
            <h2>Ognisko</h2>
            <div className="variant-cards">
              {bonfireVariants.map((v) => (
                <article key={v.name} className="variant-card">
                  <h4>{v.name}</h4>
                  <p>{v.desc}</p>
                  <p className="variant-price">{v.price}</p>
                </article>
              ))}
            </div>
            <p style={{ marginTop: '1rem' }}>
              Napoje bez limitu: <strong>15 zł/os.</strong> (woda, lemoniada, soki, herbata, kawa – specjalne
              ceny promocyjne podczas imprez).
            </p>
          </div>

          <div className="content-block fade-in">
            <p>
              Służymy pomocą w realizacji własnych programów. Zapraszamy firmy, szkoły, biura podróży i
              przewodników.
            </p>
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
    </>
  );
}
