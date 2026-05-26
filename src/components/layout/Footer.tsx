import { Link } from 'react-router-dom';
import { SITE } from '../../data/site';
import './Footer.css';

function FacebookIcon() {
  return (
    <svg
      className="footer__facebook-icon"
      viewBox="0 0 24 24"
      width={32}
      height={32}
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
      />
    </svg>
  );
}

const quickLinks = [
  { to: '/', label: 'Strona główna' },
  { to: '/oferta/pokoje', label: 'Pokoje' },
  { to: '/menu', label: 'Menu restauracji' },
  { to: '/oferta/szkoly', label: 'Wycieczki szkolne' },
  { to: '/oferta/wesela', label: 'Wesela' },
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
            <p>
              <a href={`tel:${SITE.phone.replace(/\s/g, '')}`}>{SITE.phoneDisplay}</a>
            </p>
            <p>
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </p>
            <p>{SITE.manager}</p>
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
              <FacebookIcon />
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
