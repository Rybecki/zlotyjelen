import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { RoomsPage } from './pages/RoomsPage';
import { SchoolTripsPage } from './pages/SchoolTripsPage';
import { GreenSchoolPage } from './pages/GreenSchoolPage';
import { WeddingsPage } from './pages/WeddingsPage';
import { OccasionsPage } from './pages/OccasionsPage';
import { GroupsPage } from './pages/GroupsPage';
import { MenuPage } from './pages/MenuPage';
import { AttractionsPage } from './pages/AttractionsPage';
import { RentalPage } from './pages/RentalPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="oferta/pokoje" element={<RoomsPage />} />
          <Route path="oferta/zielone-szkoly" element={<GreenSchoolPage />} />
          <Route path="oferta/wycieczki-szkolne" element={<SchoolTripsPage />} />
          <Route path="oferta/wesela" element={<WeddingsPage />} />
          <Route path="oferta/okolicznosciowa" element={<OccasionsPage />} />
          <Route path="oferta/grupy-zorganizowane" element={<GroupsPage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="atrakcje" element={<AttractionsPage />} />
          <Route path="wypozyczalnia" element={<RentalPage />} />
          <Route path="kontakt" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
