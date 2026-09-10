import type {
  Country,
  Division,
  District,
  SubDistrict,
  Union,
} from "../types/index.js";

export interface CountryData {
  country: Country;

  divisions: Division[];

  districts: Map<string, District>;

  subDistricts: Map<string, SubDistrict>;

  unions: Map<string, Union>;
}
