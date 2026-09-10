import type { District, SubDistrict, Union } from "../types/index.js";

import { getCountryData } from "../countries/registry.js";

export function getDistricts(
  countryCode: string,
  divisionId: string,
): District[] {
  const countryData = getCountryData(countryCode);

  return (
    countryData?.divisions.find((division) => division.id === divisionId)
      ?.districts ?? []
  );
}

export function getSubDistricts(
  countryCode: string,
  districtId: string,
): SubDistrict[] {
  const countryData = getCountryData(countryCode);

  return countryData?.districts.get(districtId)?.subdistricts ?? [];
}

export function getUnions(countryCode: string, subDistrictId: string): Union[] {
  const countryData = getCountryData(countryCode);

  return countryData?.subDistricts.get(subDistrictId)?.unions ?? [];
}
