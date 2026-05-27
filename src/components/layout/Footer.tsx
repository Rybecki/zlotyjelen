import { Link } from 'react-router-dom';
import { SITE } from '../../data/site';
import { ContactDetails } from '../ui/ContactDetails';
import { FacebookIcon, InstagramIcon } from '../ui/SocialIcons';
import './Footer.css';

const quickLinks = [
  { to: '/', label: 'Strona główna' },
  { to: '/oferta/pokoje', label: 'Pokoje' },
  { to: '/menu', label: 'Menu restauracji' },
  { to: '/oferta/zielone-szkoly', label: 'Zielone szkoły' },
  { to: '/oferta/wycieczki-szkolne', label: 'Wycieczki szkolne' },
  { to: '/oferta/wesela', label: 'Wesela' },
  { to: '/oferta/okolicznosciowa', label: 'Okoliczności' },
  { to: '/atrakcje', label: 'Atrakcje' },
  { to: '/kontakt', label: 'Kontakt' },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__deer" aria-hidden="true" />
      <div className="container footer__grid">
        <div className="footer__brand">
          <Link to="/">
            <img src="/images/logo.png" alt={SITE.name} width={180} loading="lazy" />
          </Link>
          <p className="footer__tagline">{SITE.tagline}</p>
          <p className="footer__address">{SITE.addressFull}</p>
          <p className="footer__address-region">{SITE.addressRegion}</p>
        </div>

        <div>
          <h3 className="footer__heading">Szybkie linki</h3>
          <ul className="footer__links">
            {quickLinks.map((link) => (
              <li key={link.to}>
                <Link to={link.to}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__heading">Kontakt</h3>
          <address className="footer__contact">
            <ContactDetails showAddress={false} />
          </address>
        </div>

        <div>
          <h3 className="footer__heading">Śledź nas</h3>
          <div className="footer__social">
            <a
              href={SITE.social.facebook}
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook – Złoty Jeleń"
            >
              <FacebookIcon className="footer__social-icon" size={32} />
            </a>
            <a
              href={SITE.social.instagram}
              className="footer__social-link"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram – Złoty Jeleń"
            >
              <InstagramIcon className="footer__social-icon" size={32} />
            </a>
          </div>
          <Link to="/kontakt" className="footer__cta btn btn--ghost">
            Skontaktuj się
          </Link>
        </div>
      </div>

      <div className="footer__bottom container">
        <p>&copy; {year} {SITE.name}. Wszelkie prawa zastrzeżone.</p>
      </div>
    </footer>
  );
}
