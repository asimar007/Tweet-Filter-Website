import type { Metadata } from "next";
import "./globals.css";
import { Geist, Instrument_Serif } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "ZenX — Filter out the noise on Twitter",
  description:
    "Automatically hides political arguments, hate speech, war news, and controversy from your X/Twitter feed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("font-sans", geist.variable, instrumentSerif.variable)}
    >
      <body>{children}</body>
    </html>
  );
}
