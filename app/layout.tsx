import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "ApexFactory.ai — Peak Performance. Factory Scale.",
  description:
    "Where elite AI engineering meets industrial-scale delivery. Every solution precision-crafted. Every deployment battle-tested.",
  openGraph: {
    title: "ApexFactory.ai — Peak Performance. Factory Scale.",
    description:
      "Where elite AI engineering meets industrial-scale delivery. Every solution precision-crafted. Every deployment battle-tested.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable}`}>
      <body>{children}</body>
    </html>
  );
}
