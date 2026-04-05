import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { ThemeProvider } from "@/lib/theme/ThemeProvider";
import { LocaleProvider } from "@/lib/i18n/LocaleProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E‑Vinetka — Цифровой выпускной альбом вашего класса",
  description:
    "Цифровой выпускной альбом нового поколения: фото, видео, профили учеников, Our Story и капсула времени. Приватный доступ по приглашению. Быстрый запуск от 7 дней.",
  keywords: [
    "цифровой альбом",
    "выпускной альбом",
    "школьный альбом",
    "Казахстан",
    "E-Vinetka",
    "виньетка",
  ],
  openGraph: {
    title: "E‑Vinetka — Цифровой выпускной альбом",
    description:
      "Фото, видео, профили одноклассников, Our Story и капсула времени — всё в удобном цифровом формате.",
    url: "https://e-vinetka.kz",
    siteName: "E‑Vinetka",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "E‑Vinetka — Цифровой выпускной альбом",
    description:
      "Создайте цифровой альбом вашего класса — фото, видео, профили и капсула времени.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

const themeScript = `
try {
  if (localStorage.theme === 'dark') {
    document.documentElement.classList.add('dark');
  }
} catch(e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <SchemaMarkup />
      </head>
      <body className="min-h-full flex flex-col bg-white text-gray-900 dark:bg-slate-900 dark:text-slate-100">
        <ThemeProvider>
          <LocaleProvider>
            {children}
            <StickyMobileCta />
            <FloatingWhatsApp />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
