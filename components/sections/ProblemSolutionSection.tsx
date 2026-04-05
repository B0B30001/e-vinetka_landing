"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function ProblemSolutionSection() {
  const { t: dict } = useLocale();
  const t = dict.problem;
  return (
    <SectionWrapper className="bg-gray-50 dark:bg-slate-800">
      <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
        {t.title}
      </h2>

      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {/* Traditional */}
        <Card className="border-red-100 dark:border-red-900 bg-red-50/50 dark:bg-red-950/50">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/30">
              <svg className="h-5 w-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t.traditional.title}</h3>
          </div>
          <ul className="space-y-3">
            {t.traditional.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-slate-300">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </Card>

        {/* E-Vinetka */}
        <Card className="border-green-100 dark:border-green-900 bg-green-50/50 dark:bg-green-950/50">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{t.evinetka.title}</h3>
          </div>
          <ul className="space-y-3">
            {t.evinetka.items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600 dark:text-slate-300">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </SectionWrapper>
  );
}
