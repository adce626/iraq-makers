import type { Metadata } from "next";
import { Cairo, Tajawal } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

const cairo = Cairo({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const tajawal = Tajawal({
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  subsets: ["arabic", "latin"],
  variable: "--font-tajawal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مكونات العراق - مكونات إلكترونية أصلية لمشاريعك البرمجية",
  description: "متجر إلكتروني عراقي متخصص في بيع مكونات Arduino، ESP32، شاشات LED، حساسات، ومحركات. شحن سريع داخل العراق، دعم فني، وأكواد برمجة جاهزة.",
  metadataBase: new URL("https://arduino-iraq.com"),
  openGraph: {
    title: "مكونات العراق - مكونات إلكترونية أصلية",
    description: "مكونات إلكترونية أصلية لمشاريعك البرمجية في العراق",
    locale: "ar_IQ",
    siteName: "مكونات العراق",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${tajawal.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-cairo bg-gray-950 text-white overflow-x-hidden">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
