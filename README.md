# @noholi/locations

Reusable geographic location data and utilities for JavaScript and TypeScript applications.

`@noholi/locations` provides structured country and administrative location data through a simple, framework-independent API.

The package is designed to be reusable across web applications, backend services, mobile applications, e-commerce platforms, education-management systems, and other JavaScript/TypeScript projects.

## Features

- 🌍 Country-based location API
- 🇧🇩 Bangladesh location data included
- 🗺️ Division → District → Sub-District → Union hierarchy
- ⚡ Fast lookups using indexed data
- 📦 Works with JavaScript and TypeScript
- 🔧 Framework independent
- 🌐 ESM support
- 📝 TypeScript type definitions included
- 🔌 Easy to use with React, Next.js, Node.js, Express, and other frameworks
- 🚀 Designed to support additional countries in future releases

---

## Installation

Install the package using npm:

```bash
npm install @noholi/locations
```

Or using other package managers:

```bash
yarn add @noholi/locations
```

```bash
pnpm add @noholi/locations
```

---

## Basic Usage

The package provides a simple API for retrieving countries and their administrative locations.

### Import

```ts
import {
  getCountries,
  getCountry,
  getDivisions,
  getDistricts,
  getSubDistricts,
  getUnions,
} from "@noholi/locations";
```

---

## Supported Countries

Currently, the package includes:

| Code | Country    | Native Name |
| ---- | ---------- | ----------- |
| `BD` | Bangladesh | বাংলাদেশ    |

Additional countries may be added in future releases.

---

# API Reference

## `getCountries()`

Returns all countries currently registered in the package.

### Example

```ts
import { getCountries } from "@noholi/locations";

const countries = getCountries();

console.log(countries);
```

### Output

```ts
[
  {
    code: "BD",
    name: "Bangladesh",
    native_name: "বাংলাদেশ",
  },
];
```

### Return Type

```ts
Country[]
```

---

## `getCountry(countryCode)`

Returns information about a specific country.

### Parameters

| Parameter     | Type     | Description                                |
| ------------- | -------- | ------------------------------------------ |
| `countryCode` | `string` | ISO-style country code used by the package |

### Example

```ts
import { getCountry } from "@noholi/locations";

const country = getCountry("BD");

console.log(country);
```

### Output

```ts
{
  code: "BD",
  name: "Bangladesh",
  native_name: "বাংলাদেশ"
}
```

If the country does not exist:

```ts
const country = getCountry("US");

console.log(country);
```

Result:

```ts
undefined;
```

Country codes are case-insensitive:

```ts
getCountry("BD");
getCountry("bd");
```

Both resolve to Bangladesh.

---

# Bangladesh Locations

Bangladesh currently follows this administrative hierarchy:

```text
Bangladesh
│
├── Division
│   │
│   ├── District
│   │   │
│   │   ├── Sub-District
│   │   │   │
│   │   │   └── Union
```

For example:

```text
Bangladesh
└── Mymensingh Division
    └── Sherpur District
        └── Sherpur Sadar
            └── Kamararchor Union
```

---

## `getDivisions(countryCode)`

Returns all divisions for a country.

### Example

```ts
import { getDivisions } from "@noholi/locations";

const divisions = getDivisions("BD");

console.log(divisions);
```

### Example Output

```ts
[
  {
    id: "1",
    name: "Barishal",
    bn_name: "বরিশাল",
    lat: "22.701002",
    long: "90.353451",
    districts: [...]
  },
  {
    id: "2",
    name: "Chattogram",
    bn_name: "চট্টগ্রাম",
    lat: "22.356851",
    long: "91.783182",
    districts: [...]
  }
]
```

### Return Type

```ts
Division[]
```

---

## `getDistricts(countryCode, divisionId)`

Returns all districts belonging to a division.

### Example

```ts
import { getDistricts } from "@noholi/locations";

const districts = getDistricts("BD", "8");

console.log(districts);
```

Here:

```text
BD → Bangladesh
8  → Mymensingh Division
```

### Example Output

```ts
[
  {
    id: "61",
    name: "Sherpur",
    bn_name: "শেরপুর",
    division_id: "8",
    ...
  },
  {
    id: "62",
    name: "Mymensingh",
    bn_name: "ময়মনসিংহ",
    division_id: "8",
    ...
  }
]
```

### Return Type

```ts
District[]
```

If the country or division does not exist, an empty array is returned:

```ts
[];
```

---

## `getSubDistricts(countryCode, districtId)`

Returns all sub-districts belonging to a district.

### Example

```ts
import { getSubDistricts } from "@noholi/locations";

const subDistricts = getSubDistricts("BD", "61");

console.log(subDistricts);
```

Here:

```text
BD → Bangladesh
61 → Sherpur District
```

### Example Output

```ts
[
  {
    id: "457",
    district_id: "61",
    name: "Sherpur Sadar",
    bn_name: "শেরপুর সদর",
    ...
  },
  {
    id: "458",
    district_id: "61",
    name: "Nalitabari",
    bn_name: "নালিতাবাড়ী",
    ...
  }
]
```

### Return Type

```ts
SubDistrict[]
```

---

## `getUnions(countryCode, subDistrictId)`

Returns all unions belonging to a sub-district.

### Example

```ts
import { getUnions } from "@noholi/locations";

const unions = getUnions("BD", "457");

console.log(unions);
```

Here:

```text
BD  → Bangladesh
457 → Sherpur Sadar
```

### Example Output

```ts
[
  {
    id: "4189",
    name: "Kamararchor",
    bn_name: "কামারের চর",
  },
  {
    id: "4190",
    name: "Chorsherpur",
    bn_name: "চরশেরপুর",
  },
];
```

### Return Type

```ts
Union[]
```

---

# TypeScript

The package includes TypeScript declarations automatically.

You can import the provided types:

```ts
import type {
  Country,
  Division,
  District,
  SubDistrict,
  Union,
} from "@noholi/locations";
```

## `Country`

```ts
interface Country {
  code: string;
  name: string;
  native_name?: string;
}
```

---

## `Division`

```ts
interface Division {
  id: string;
  name: string;
  bn_name: string;
  lat?: string;
  long?: string;
  districts: District[];
}
```

---

## `District`

```ts
interface District {
  id: string;
  division_id: string;
  name: string;
  bn_name: string;
  lat?: string;
  lon?: string;
  url?: string;
  subdistricts: SubDistrict[];
}
```

---

## `SubDistrict`

```ts
interface SubDistrict {
  id: string;
  district_id: string;
  name: string;
  bn_name: string;
  url?: string;
  unions: Union[];
}
```

---

## `Union`

```ts
interface Union {
  id: string;
  name: string;
  bn_name: string;
}
```

---

# React Example

The package is framework-independent, but it can easily be used in React applications.

For example, a cascading address selector:

```tsx
import { useState } from "react";

import {
  getDivisions,
  getDistricts,
  getSubDistricts,
  getUnions,
} from "@noholi/locations";

export default function AddressSelector() {
  const [divisionId, setDivisionId] = useState("");
  const [districtId, setDistrictId] = useState("");
  const [subDistrictId, setSubDistrictId] = useState("");

  const divisions = getDivisions("BD");

  const districts = divisionId ? getDistricts("BD", divisionId) : [];

  const subDistricts = districtId ? getSubDistricts("BD", districtId) : [];

  const unions = subDistrictId ? getUnions("BD", subDistrictId) : [];

  return <div>{/* Your select components */}</div>;
}
```

You can use the same package with:

- React
- Next.js
- Vue
- Node.js
- Express
- NestJS
- React Native
- Electron
- Other JavaScript/TypeScript applications

No framework-specific dependency is required.

---

# Node.js Example

```ts
import {
  getCountries,
  getCountry,
  getDivisions,
  getDistricts,
  getSubDistricts,
  getUnions,
} from "@noholi/locations";

const countries = getCountries();

const country = getCountry("BD");

const divisions = getDivisions("BD");

const districts = getDistricts("BD", "8");

const subDistricts = getSubDistricts("BD", "61");

const unions = getUnions("BD", "457");

console.log({
  countries,
  country,
  divisions,
  districts,
  subDistricts,
  unions,
});
```

---

# Typical Use Cases

`@noholi/locations` can be used for many types of applications.

### E-commerce

Use it for:

- Customer addresses
- Shipping addresses
- Delivery areas
- Seller addresses
- Warehouse locations
- Order addresses

Example:

```text
Division
    ↓
District
    ↓
Sub-District
    ↓
Union
```

---

### Education Management

Use it for:

- Student addresses
- Guardian addresses
- Institution addresses
- Teacher addresses
- Admission forms

---

### Business Applications

Use it for:

- Company addresses
- Branch locations
- Supplier addresses
- Customer profiles
- Employee addresses

---

### Forms

The package is especially useful for cascading location forms:

```text
Country
   ↓
Division
   ↓
District
   ↓
Sub-District
   ↓
Union
```

---

# Performance

The package loads the geographic data once and creates internal indexes for frequently accessed administrative levels.

For example:

```text
Country
   ↓
Divisions
   ↓
District Map
   ↓
Sub-District Map
   ↓
Union Map
```

This allows sub-district and union lookups to be performed efficiently without repeatedly traversing the entire location hierarchy.

For example:

```ts
getSubDistricts("BD", "61");
```

and:

```ts
getUnions("BD", "457");
```

use indexed lookups internally.

---

# Data Structure

The underlying Bangladesh data follows this structure:

```text
Country
│
└── Divisions[]
    │
    └── Districts[]
        │
        └── SubDistricts[]
            │
            └── Unions[]
```

A division contains:

```ts
{
  (id, name, bn_name, lat, long, districts);
}
```

A district contains:

```ts
{
  (id, division_id, name, bn_name, lat, lon, url, subdistricts);
}
```

A sub-district contains:

```ts
{
  (id, district_id, name, bn_name, url, unions);
}
```

A union contains:

```ts
{
  (id, name, bn_name);
}
```

---

# Error Handling

The API intentionally returns empty arrays when a requested location cannot be found.

For example:

```ts
const districts = getDistricts("BD", "invalid-id");

console.log(districts);
```

Returns:

```ts
[];
```

Similarly:

```ts
const subDistricts = getSubDistricts("BD", "invalid-id");
```

returns:

```ts
[];
```

For an unknown country:

```ts
const divisions = getDivisions("XX");

console.log(divisions);
```

returns:

```ts
[];
```

For an unknown country using `getCountry()`:

```ts
const country = getCountry("XX");

console.log(country);
```

returns:

```ts
undefined;
```

This makes the API convenient for form components and applications without requiring exception handling for normal "not found" cases.

---

# Package Design

The package is intentionally framework-independent.

It does not depend on:

- React
- Next.js
- Express
- MUI
- Redux
- RTK Query
- Browser APIs

The package only provides:

1. Location data
2. Location types
3. Location lookup utilities

Application-specific hooks and UI components should be implemented in the consuming application.

For example:

```text
@noholi/locations
        │
        ├── Data
        ├── Types
        └── Utilities
              │
              ↓
      Your Application
              │
        ┌─────┴─────┐
        ↓           ↓
      React       Node.js
      Hook        Service
```

---

# Future Expansion

The package is designed with country registration in mind.

Currently:

```text
@noholi/locations
        │
        └── Bangladesh (BD)
```

Future versions may support additional countries:

```text
@noholi/locations
        │
        ├── Bangladesh (BD)
        ├── India (IN)
        ├── Pakistan (PK)
        ├── ...
        └── ...
```

The public API is already country-aware:

```ts
getDivisions("BD");
getDistricts("BD", "8");
getSubDistricts("BD", "61");
getUnions("BD", "457");
```

This allows additional countries to be introduced without changing the fundamental API design.

---

# Development

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/locations.git
```

Enter the project:

```bash
cd locations
```

Install dependencies:

```bash
npm install
```

Build the package:

```bash
npm run build
```

Clean the build directory:

```bash
npm run clean
```

---

# Project Structure

```text
locations/
│
├── src/
│   ├── countries/
│   │   ├── bd.ts
│   │   ├── index.ts
│   │   ├── registry.ts
│   │   └── types.ts
│   │
│   ├── data/
│   │   └── bd/
│   │       └── locations.json
│   │
│   ├── types/
│   │   ├── country.ts
│   │   ├── index.ts
│   │   └── location.ts
│   │
│   ├── utils/
│   │   ├── countries.ts
│   │   ├── index.ts
│   │   └── locations.ts
│   │
│   └── index.ts
│
├── README.md
├── LICENSE
├── package.json
└── tsconfig.json
```

---

# Contributing

Contributions are welcome.

If you would like to:

- Add support for another country
- Improve location data
- Fix incorrect location information
- Improve TypeScript types
- Improve performance
- Improve documentation
- Fix bugs

please open an issue or submit a pull request.

Before contributing location data, please ensure that the data is properly structured and follows the existing type definitions.

---

# Data Accuracy

Location data can change over time due to administrative changes, naming changes, boundary changes, or other government decisions.

Applications that require legally authoritative or real-time administrative information should verify location data against appropriate official sources.

---

# Versioning

This package follows semantic versioning.

```text
MAJOR.MINOR.PATCH
```

For example:

```text
1.0.0
```

- **MAJOR** — Breaking API changes
- **MINOR** — Backward-compatible features or new countries/location levels
- **PATCH** — Backward-compatible bug fixes and data corrections

---

# License

This project is licensed under the MIT License.

See the [LICENSE](LICENSE) file for details.

---

# Author

Developed and maintained by **Noholi**.

The package is part of the Noholi ecosystem but is designed to be used by any JavaScript or TypeScript project.

---

## Related

- **Noholi** — E-commerce platform
- **Tanzim Academy** — Academy management software

---

## Support

If you find a bug or have a suggestion, please open an issue in the GitHub repository.

For location-data corrections, please include:

1. Country
2. Administrative level
3. Location ID
4. Current value
5. Correct value
6. Supporting reference, when available

---

## Quick Reference

| Function                            | Purpose                          |
| ----------------------------------- | -------------------------------- |
| `getCountries()`                    | Get all supported countries      |
| `getCountry(code)`                  | Get a country                    |
| `getDivisions(code)`                | Get divisions for a country      |
| `getDistricts(code, divisionId)`    | Get districts for a division     |
| `getSubDistricts(code, districtId)` | Get sub-districts for a district |
| `getUnions(code, subDistrictId)`    | Get unions for a sub-district    |

### Example

```ts
import {
  getCountries,
  getCountry,
  getDivisions,
  getDistricts,
  getSubDistricts,
  getUnions,
} from "@noholi/locations";

const countries = getCountries();

const bangladesh = getCountry("BD");

const divisions = getDivisions("BD");

const districts = getDistricts("BD", "8");

const subDistricts = getSubDistricts("BD", "61");

const unions = getUnions("BD", "457");
```

That's all you need to start using `@noholi/locations`.
