"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/LocaleProvider";

const stepIcons = [
  // clipboard / form
  <svg key="1" className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
  </svg>,
  // check badge
  <svg key="2" className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  // credit card
  <svg key="3" className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>,
  // rocket
  <svg key="4" className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>,
];

export function HowItWorksSection() {
  const { t: dict } = useLocale();
  const t = dict.howItWorks;
  return (
    <SectionWrapper>
      <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
        {t.title}
      </h2>

      <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {t.steps.map((step, i) => (
          <div key={i} className="relative text-center">
            {/* Connector line (hidden on last item and mobile) */}
            {i < t.steps.length - 1 && (
              <div className="pointer-events-none absolute top-8 left-[calc(50%+32px)] hidden h-0.5 w-[calc(100%-64px)] bg-gradient-to-r from-blue-300 to-blue-100 lg:block" />
            )}

            {/* Step circle */}
            <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-600">
              {stepIcons[i]}
              <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                {i + 1}
              </span>
            </div>

            <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-500 dark:text-slate-400">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
