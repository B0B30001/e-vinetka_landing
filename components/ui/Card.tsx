import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
  glass?: boolean;
  highlighted?: boolean;
};

export function Card({
  children,
  className = "",
  glass = false,
  highlighted = false,
}: CardProps) {
  const base = "rounded-2xl p-6 md:p-8 transition-all duration-200";
  const glassStyles = glass
    ? "bg-white/60 dark:bg-slate-800/60 backdrop-blur-md border border-white/40 dark:border-slate-600 shadow-lg dark:shadow-slate-900/50"
    : "bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 shadow-md dark:shadow-slate-900/50";
  const highlightStyles = highlighted
    ? "ring-2 ring-blue-500 md:scale-[1.02]"
    : "";

  return (
    <div className={`${base} ${glassStyles} ${highlightStyles} ${className}`}>
      {children}
    </div>
  );
}
