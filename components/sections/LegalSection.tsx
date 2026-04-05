"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function LegalSection() {
  const { t: dict } = useLocale();
  const t = dict.legal;
  return (
    <SectionWrapper id="legal" className="bg-gray-50 dark:bg-slate-800">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center justify-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
            <svg className="h-5 w-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{t.title}</h2>
        </div>

        <div className="mt-8 space-y-4">
          {t.statements.map((s, i) => (
            <p key={i} className="text-sm leading-relaxed text-gray-500 dark:text-slate-400">
              {s}
            </p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
          <a href="#lead-form" className="text-blue-600 underline underline-offset-4 hover:text-blue-700">
            {t.links.consent}
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
