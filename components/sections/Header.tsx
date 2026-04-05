"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { useTheme } from "@/lib/theme/ThemeProvider";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Button } from "@/components/ui/Button";

export function Header() {
  const { t } = useLocale();
  const { theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappUrl = "https://wa.me/77066279145";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-lg dark:border-slate-700/50 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand */}
        <a href="#" className="text-xl font-bold text-gray-900 dark:text-white">
          E‑Vinetka
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button
            variant="primary"
            size="sm"
            onClick={() =>
              document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t.nav.apply}
          </Button>
        </div>

        {/* Mobile: theme + lang + hamburger */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100 dark:text-slate-400 dark:hover:bg-slate-800"
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 pb-4 pt-2 dark:border-slate-700 dark:bg-slate-900 md:hidden">
          <div className="flex flex-col gap-2">
            <Button
              variant="primary"
              size="sm"
              className="w-full"
              onClick={() => {
                setMenuOpen(false);
                document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {t.nav.apply}
            </Button>
            <Button
              variant="whatsapp"
              size="sm"
              className="w-full"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.nav.whatsapp}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
