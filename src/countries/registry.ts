import type { CountryData } from "./types.js";

import { bangladesh } from "./bd.js";

const countryRegistry = new Map<string, CountryData>([
  [bangladesh.country.code, bangladesh],
]);

export function getCountryData(countryCode: string): CountryData | undefined {
  return countryRegistry.get(countryCode.toUpperCase());
}

export function getRegisteredCountries(): CountryData[] {
  return Array.from(countryRegistry.values());
}
