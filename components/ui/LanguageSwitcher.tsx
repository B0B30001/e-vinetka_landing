"use client";

import { useLocale } from "@/lib/i18n/LocaleProvider";
import type { Locale } from "@/lib/i18n/index";

const labels: Record<Locale, string> = {
  ru: "RU",
  kz: "KZ",
  en: "EN",
};

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1 text-sm font-medium dark:bg-slate-800">
      {(Object.entries(labels) as [Locale, string][]).map(([key, label]) => (
        <button
          key={key}
          type="button"
          onClick={() => setLocale(key)}
          className={`rounded-md px-2.5 py-1 transition-colors ${
            locale === key
              ? "bg-white text-blue-600 shadow-sm dark:bg-slate-700 dark:text-blue-400"
              : "text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-200"
          }`}
          aria-label={`Switch to ${label}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
