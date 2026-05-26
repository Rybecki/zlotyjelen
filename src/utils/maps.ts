import { SITE } from '../data/site';

export type MapsDestination =
  | string
  | {
      lat: number;
      lng: number;
    };

/** Link do wyznaczenia trasy samochodem z Złotego Jelenia (Google Maps). */
export function buildDirectionsUrl(destination: MapsDestination): string {
  const origin = `${SITE.coordinates.lat},${SITE.coordinates.lng}`;
  const dest =
    typeof destination === 'string'
      ? encodeURIComponent(destination)
      : `${destination.lat},${destination.lng}`;
  return `https://www.google.com/maps/dir/?api=1&origin=${origin}&destination=${dest}&travelmode=driving`;
}

/** Link do podglądu miejsca na mapie Google. */
export function buildMapPlaceUrl(destination: MapsDestination): string {
  const query =
    typeof destination === 'string'
      ? encodeURIComponent(destination)
      : `${destination.lat},${destination.lng}`;
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}
