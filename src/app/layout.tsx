import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manropeFont = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Mentor | Article preview component",
  description: "Frontend practice with Next.js + Tailwind CSS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manropeFont.variable} antialiased text-[13px] tracking-wide bg-custLightGrayishBlue text-custVeryDarkGrayishBlue`}
      >
        {children}
      </body>
    </html>
  );
}
