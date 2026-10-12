import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";

import type { Metadata } from "next";
import { baseURL } from "@/resources";
import { Bricolage_Grotesque, DM_Sans, JetBrains_Mono } from "next/font/google";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage" });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  metadataBase: new URL(baseURL),
  title: "Edgar De Avila — AI First Developer",
  description: "I build web products with AI as my co-pilot, from prototype to production.",
  openGraph: {
    title: "Edgar De Avila — AI First Developer",
    description: "I build web products with AI as my co-pilot, from prototype to production.",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable} ${jetbrains.variable}`}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
