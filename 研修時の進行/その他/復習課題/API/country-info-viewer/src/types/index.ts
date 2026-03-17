// src/types/index.ts

export interface Country {
  name: { common: string };
  region: string;
  population: number;
  flags: { png: string };
  capital?: string[];
  languages?: { [key: string]: string };
  currencies?: { [key: string]: { name: string } };
}