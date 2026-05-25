import { HeroSection } from '../components/home/HeroSection';
import { AboutSection } from '../components/home/AboutSection';
import { OffersCTASection } from '../components/home/OffersCTASection';
import { RoomsSection } from '../components/home/RoomsSection';
import { RestaurantSection } from '../components/home/RestaurantSection';
import { OffersSection } from '../components/home/OffersSection';
import { AttractionsSection } from '../components/home/AttractionsSection';
import { RentalSection } from '../components/home/RentalSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ContactPreviewSection } from '../components/home/ContactPreviewSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <OffersCTASection />
      <RoomsSection />
      <RestaurantSection />
      <OffersSection />
      <AttractionsSection />
      <RentalSection />
      <TestimonialsSection />
      <ContactPreviewSection />
    </>
  );
}
