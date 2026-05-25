import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavbarScroll } from '../../hooks/useNavbarScroll';
import './Navbar.css';

const offerLinks = [
  { to: '/oferta/pokoje', label: 'Pokoje gościnne' },
  { to: '/oferta/szkoly', label: 'Oferta dla wycieczek szkolnych' },
  { to: '/oferta/wesela', label: 'Oferta weselna' },
  { to: '/oferta/grupy', label: 'Oferta dla grup zorganizowanych' },
];

export function Navbar() {
  const scrolled = useNavbarScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [offerOpen, setOfferOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setOfferOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">
        <Link to="/" className="navbar__logo" onClick={closeMenu} aria-label="Strona główna Złoty Jeleń">
          <img src="/images/logo.png" alt="Złoty Jeleń – restauracja i dom gościnny" width={160} height={80} />
        </Link>

        <button
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Zamknij menu' : 'Otwórz menu'}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav id="main-nav" className={`navbar__nav ${menuOpen ? 'navbar__nav--open' : ''}`} aria-label="Główne menu">
          <NavLink to="/" end onClick={closeMenu}>
            Strona główna
          </NavLink>

          <div
            className={`navbar__dropdown ${offerOpen ? 'navbar__dropdown--open' : ''}`}
            onMouseEnter={() => setOfferOpen(true)}
            onMouseLeave={() => setOfferOpen(false)}
          >
            <button
              type="button"
              className="navbar__dropdown-trigger"
              aria-expanded={offerOpen}
              onClick={() => setOfferOpen(!offerOpen)}
            >
              Oferta
              <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
            <ul className="navbar__dropdown-menu">
              {offerLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <NavLink to="/menu" onClick={closeMenu}>
            Menu
          </NavLink>
          <NavLink to="/atrakcje" onClick={closeMenu}>
            Atrakcje
          </NavLink>
          <NavLink to="/wypozyczalnia" onClick={closeMenu}>
            Wypożyczalnia
          </NavLink>
          <NavLink to="/kontakt" onClick={closeMenu}>
            Kontakt
          </NavLink>

          <Link to="/kontakt" className="navbar__cta btn btn--primary" onClick={closeMenu}>
            Zarezerwuj pokój
          </Link>
        </nav>
      </div>
    </header>
  );
}
