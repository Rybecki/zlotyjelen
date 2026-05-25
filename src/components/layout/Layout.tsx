import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export function Layout() {
  const { pathname } = useLocation();
  useScrollReveal([pathname]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <a href="#main-content" className="skip-link">
        Przejdź do treści
      </a>
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
