"use client";

import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function FaqSection() {
  const { t: dict } = useLocale();
  const t = dict.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper>
      <h2 className="text-center text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
        {t.title}
      </h2>

      <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200 dark:divide-slate-700">
        {t.items.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i}>
              <button
                type="button"
                className="flex w-full items-center justify-between py-5 text-left"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
              >
                <span className="text-base font-medium text-gray-900 dark:text-white pr-4">
                  {item.q}
                </span>
                <svg
                  className={`h-5 w-5 shrink-0 text-gray-400 dark:text-slate-500 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`}
              >
                <p className="text-sm leading-relaxed text-gray-500 dark:text-slate-400">{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
