import { ru, type Dictionary } from "./ru";
import { en } from "./en";
import { kz } from "./kz";

export type Locale = "ru" | "kz" | "en";

export const locales: Locale[] = ["ru", "kz", "en"];
export const defaultLocale: Locale = "ru";

const dictionaries: Record<Locale, Dictionary> = { ru, en: en as unknown as Dictionary, kz: kz as unknown as Dictionary };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
