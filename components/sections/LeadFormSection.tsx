"use client";

import { useState, FormEvent } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { leadSchema, type LeadFormData } from "@/lib/validation/leadSchema";

type FieldErrors = Partial<Record<keyof LeadFormData, string>>;
type FormStatus = "idle" | "sending" | "success" | "error";

export function LeadFormSection() {
  const { t: dict } = useLocale();
  const t = dict.leadForm;
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});

    const form = e.currentTarget;
    const fd = new FormData(form);

    const raw = {
      city: (fd.get("city") as string).trim(),
      school: (fd.get("school") as string).trim(),
      classLabel: (fd.get("classLabel") as string).trim(),
      graduationYear: fd.get("graduationYear") as string,
      studentCount: Number(fd.get("studentCount")),
      name: (fd.get("name") as string).trim(),
      phone: (fd.get("phone") as string).trim(),
      email: (fd.get("email") as string).trim(),
      role: fd.get("role") as string,
      interest: fd.get("interest") as string,
      comment: (fd.get("comment") as string).trim(),
      consent: fd.get("consent") === "on" ? true as const : undefined,
    };

    const result = leadSchema.safeParse(raw);
    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof LeadFormData;
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <SectionWrapper id="lead-form" className="bg-blue-50 dark:bg-blue-950">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <svg className="h-8 w-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="mt-6 text-2xl font-bold text-gray-900 dark:text-white">{t.success}</h2>
        </div>
      </SectionWrapper>
    );
  }

  return (
    <SectionWrapper id="lead-form" className="bg-blue-50 dark:bg-blue-950">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-3 text-gray-500 dark:text-slate-400">{t.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5" noValidate>
          {/* Row: city + school */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="city" label={t.fields.city} error={errors.city} required />
            <Field name="school" label={t.fields.school} error={errors.school} required />
          </div>

          {/* Row: class + year + students */}
          <div className="grid gap-4 sm:grid-cols-3">
            <Field name="classLabel" label={t.fields.classLabel} error={errors.classLabel} required />
            <SelectField name="graduationYear" label={t.fields.graduationYear} options={t.years} error={errors.graduationYear} required />
            <Field name="studentCount" label={t.fields.studentCount} type="number" error={errors.studentCount} required />
          </div>

          {/* Row: name + phone */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Field name="name" label={t.fields.name} error={errors.name} required />
            <Field name="phone" label={t.fields.phone} type="tel" error={errors.phone} required />
          </div>

          {/* Email */}
          <Field name="email" label={t.fields.email} type="email" error={errors.email} />

          {/* Row: role + interest */}
          <div className="grid gap-4 sm:grid-cols-2">
            <SelectField name="role" label={t.fields.role} options={t.roles} error={errors.role} required />
            <SelectField name="interest" label={t.fields.interest} options={t.interests} error={errors.interest} required />
          </div>

          {/* Comment */}
          <div>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 dark:text-slate-300">
              {t.fields.comment}
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={3}
              className="mt-1 w-full rounded-xl border border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-900 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 transition-colors"
            />
          </div>

          {/* Consent */}
          <div>
            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                name="consent"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600"
              />
              <span className="text-sm text-gray-600 dark:text-slate-300">
                {t.fields.consent}{" "}
                <a href="#legal" className="text-blue-600 underline underline-offset-2 hover:text-blue-700">
                  ↗
                </a>
              </span>
            </label>
            {errors.consent && (
              <p className="mt-1 text-xs text-red-500">{errors.consent}</p>
            )}
          </div>

          {status === "error" && (
            <div className="rounded-xl bg-red-50 dark:bg-red-950/50 p-4 text-sm text-red-600">
              {t.error}
            </div>
          )}

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
            disabled={status === "sending"}
          >
            {status === "sending" ? t.sending : t.submit}
          </Button>
        </form>
      </div>
    </SectionWrapper>
  );
}

/* ---------- Helper components ---------- */

function Field({
  name,
  label,
  type = "text",
  error,
  required,
}: {
  name: string;
  label: string;
  type?: string;
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-slate-300">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className={`mt-1 w-full rounded-xl border bg-white dark:bg-slate-900 px-4 py-3 text-sm text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 transition-colors ${
          error ? "border-red-400" : "border-gray-300 dark:border-slate-600"
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}

function SelectField({
  name,
  label,
  options,
  error,
  required,
}: {
  name: string;
  label: string;
  options: readonly string[];
  error?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-slate-300">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <select
        id={name}
        name={name}
        className={`mt-1 w-full rounded-xl border bg-white dark:bg-slate-900 px-4 py-3 text-sm text-gray-900 dark:text-white transition-colors ${
          error ? "border-red-400" : "border-gray-300 dark:border-slate-600"
        }`}
        defaultValue=""
      >
        <option value="" disabled>
          —
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
