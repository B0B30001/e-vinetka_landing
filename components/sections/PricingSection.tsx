"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function PricingSection() {
  const { t: dict } = useLocale();
  const t = dict.pricing;
  return (
    <SectionWrapper className="bg-gray-50 dark:bg-slate-800" id="pricing">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          {t.title}
        </h2>
        <p className="mt-3 text-lg text-gray-500 dark:text-slate-400">{t.subtitle}</p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50 dark:bg-amber-950 px-4 py-2 text-sm font-medium text-amber-700 dark:text-amber-400">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {t.urgency}
        </div>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {t.plans.map((plan, i) => (
          <Card
            key={i}
            highlighted={plan.highlighted}
            className={`relative flex flex-col ${plan.highlighted ? "border-blue-200 bg-blue-50/30" : ""}`}
          >
            {plan.highlighted && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-4 py-1 text-xs font-semibold text-white">
                {"badge" in plan ? plan.badge : ""}
              </div>
            )}

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-2">
                {"oldPrice" in plan && (
                  <span className="text-xl font-semibold text-gray-400 line-through decoration-red-500 decoration-2">
                    {plan.oldPrice as string}
                  </span>
                )}
                <span className="text-4xl font-bold text-red-600 dark:text-red-400">{plan.price}</span>
              </div>
              <span className="text-gray-500 dark:text-slate-400">{plan.unit}</span>
            </div>

            <ul className="mb-8 flex-1 space-y-3">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-gray-600 dark:text-slate-300">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <Button
              variant={plan.highlighted ? "primary" : "secondary"}
              className="w-full"
              onClick={() =>
                document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {plan.cta}
            </Button>
          </Card>
        ))}
      </div>

      <div className="mt-8 space-y-2 text-center text-sm text-gray-400 dark:text-slate-500">
        <p>{t.printNote}</p>
      </div>
    </SectionWrapper>
  );
}
