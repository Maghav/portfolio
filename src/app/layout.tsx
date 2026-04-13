import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Space_Grotesk } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: "Maghav Ahuja Portfolio Website",
  description: "Maghav Ahuja's Portfolio",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={spaceGrotesk.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}
