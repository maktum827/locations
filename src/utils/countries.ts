import type { Country } from "../types/index.js";

import {
  getCountryData,
  getRegisteredCountries,
} from "../countries/registry.js";

export function getCountries(): Country[] {
  return getRegisteredCountries().map((countryData) => countryData.country);
}

export function getCountry(countryCode: string): Country | undefined {
  return getCountryData(countryCode)?.country;
}

export function getDivisions(countryCode: string) {
  return getCountryData(countryCode)?.divisions ?? [];
}
