import { HeroSection } from '../components/home/HeroSection';
import { StatsBanner } from '../components/home/StatsBanner';
import { AboutSection } from '../components/home/AboutSection';
import { OffersCTASection } from '../components/home/OffersCTASection';
import { NearbyAttractionsSection } from '../components/home/NearbyAttractionsSection';
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
      <StatsBanner />
      <AboutSection />
      <OffersCTASection />
      <NearbyAttractionsSection />
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
