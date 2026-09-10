import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from "next";
import "./globals.css";
import { modamFont } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "پلتفرم تجهیز وتروس X2 | توسعه‌یافته توسط PIE",
  description:
    "وتروس X2 زیرساختی برای تجهیز، توسعه و استانداردسازی تولیدکنندگان ایرانی و آماده‌سازی محصولات برای بازارهای جهانی است. PIE توسعه‌دهنده و اپراتور این پلتفرم است.",
  generator: "v0.app",
  keywords: [
    "وتروس",
    "VETROS",
    "VETROS X2",
    "PIE",
    "تجهیز تولید",
    "مشارکت در تولید",
    "صادرات",
    "استانداردسازی",
    "زنجیره تأمین",
  ],
  openGraph: {
    title: "پلتفرم تجهیز وتروس X2",
    description:
      "تولید را تجهیز می‌کنیم، محصول را برای جهان آماده می‌کنیم. زیرساختی از اکوسیستم VETROS، توسعه‌یافته توسط PIE.",
    type: "website",
    locale: "fa_IR",
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="bg-background">
      <body className={`${modamFont.variable}`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
