import countries from "./countries.json" with { type: "json" };

import type { Country } from "../types/index.js";

export const countriesData = countries as Country[];
