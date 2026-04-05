"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useLocale } from "@/lib/i18n/LocaleProvider";

export function StickyMobileCta() {
  const { t } = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const whatsappUrl = "https://wa.me/77066279145";

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 dark:border-slate-700 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-transform duration-300 md:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex gap-3">
        <Button
          variant="primary"
          size="sm"
          className="flex-1"
          onClick={() =>
            document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
          }
        >
          {t.nav.apply}
        </Button>
        <Button
          variant="whatsapp"
          size="sm"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t.footer.links.whatsapp}
        </Button>
      </div>
    </div>
  );
}
