import locations from "../data/bd/locations.json" with { type: "json" };

import { countriesData } from "../data/countries.js";

import type { Division, District, SubDistrict, Union } from "../types/index.js";

import type { CountryData } from "./types.js";

const country = countriesData.find((country) => country.code === "BD");

if (!country) {
  throw new Error("Bangladesh (BD) is not defined in countries.json");
}

const divisions = locations as Division[];

const districts = new Map<string, District>();

const subDistricts = new Map<string, SubDistrict>();

const unions = new Map<string, Union>();

for (const division of divisions) {
  for (const district of division.districts) {
    districts.set(district.id, district);

    for (const subDistrict of district.subdistricts) {
      subDistricts.set(subDistrict.id, subDistrict);

      for (const union of subDistrict.unions) {
        unions.set(union.id, union);
      }
    }
  }
}

export const bangladesh: CountryData = {
  country,
  divisions,
  districts,
  subDistricts,
  unions,
};
