export type LocationType =
  | "country"
  | "division"
  | "state"
  | "province"
  | "district"
  | "city"
  | "upazila"
  | "subdistrict"
  | "union"
  | "municipality"
  | "postal_code";

export interface Location {
  id: string;
  name: string;
  nameLocal?: string;
  type: LocationType;
  countryCode: string;
  parentId?: string;
  children?: Location[];
  latitude?: number;
  longitude?: number;
  postalCode?: string;
}

export interface Union {
  id: string;
  name: string;
  bn_name: string;
}

export interface SubDistrict {
  id: string;
  district_id: string;
  name: string;
  bn_name: string;
  url?: string;
  unions: Union[];
}

export interface District {
  id: string;
  division_id: string;
  name: string;
  bn_name: string;
  lat?: string;
  lon?: string;
  url?: string;
  subdistricts: SubDistrict[];
}

export interface Division {
  id: string;
  name: string;
  bn_name: string;
  lat?: string;
  long?: string;
  districts: District[];
}
