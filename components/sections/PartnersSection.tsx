"use client";

import Image from "next/image";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const partners = [
  {
    name: "SDL International School",
    logo: "/partners/sdl.png",
    url: "https://e-vinetka-11c-sdl-2025.vercel.app/ru/s/SDL-almaty/c/2025-11c",
  },
];

export function PartnersSection() {
  const { t } = useLocale();

  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gray-50 dark:bg-slate-800/50 px-8 py-10 text-center shadow-sm">
          <h2 className="text-lg font-semibold text-gray-700 dark:text-slate-300 sm:text-xl">
            {t.partners.title}
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-10">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center gap-3 transition-opacity hover:opacity-80"
              >
                <div className="relative h-20 w-40 sm:h-24 sm:w-48">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-sm font-medium text-gray-500 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {partner.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
