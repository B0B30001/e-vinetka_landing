"use client";

import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type SectionWrapperProps = {
  children: ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
};

export function SectionWrapper({
  children,
  id,
  className = "",
  dark = false,
}: SectionWrapperProps) {
  const ref = useScrollReveal();
  const bg = dark ? "bg-gray-950 text-white" : "bg-white dark:bg-slate-900";

  return (
    <section
      id={id}
      ref={ref}
      className={`reveal-section py-16 md:py-24 ${bg} ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
