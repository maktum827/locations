import type { Country } from "../types/index.js";

import { countriesData } from "../data/countries.js";
import { getCountryData } from "../countries/registry.js";

export function getCountries(): Country[] {
  return countriesData;
}

export function getCountry(countryCode: string): Country | undefined {
  return countriesData.find(
    (country) => country.code.toUpperCase() === countryCode.toUpperCase(),
  );
}

export function getDivisions(countryCode: string) {
  return getCountryData(countryCode)?.divisions ?? [];
}
