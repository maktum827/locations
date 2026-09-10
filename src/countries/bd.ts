import locations from "../data/bd/locations.json" with { type: "json" };

import type {
  Country,
  Division,
  District,
  SubDistrict,
  Union,
} from "../types/index.js";

import type { CountryData } from "./types.js";

const country: Country = {
  code: "BD",
  name: "Bangladesh",
  native_name: "বাংলাদেশ",
};

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
