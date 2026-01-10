import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { CircuitBackground } from "@/components/circuit-background";
import BlobCursor from "@/components/ui/BlobCursor";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

// Note: The project CSS references "Geist" and "Geist Mono" as font-family names.
// Those font names are not provided by `next/font/google` (they are not Google
// Fonts). The imports above caused build errors. Fonts can be loaded via
// `next/font/local` or by including webfont files / external links in CSS.
// For now we remove the invalid imports and unused constants so the app builds.

export const metadata: Metadata = {
  title: "REKKATHON | Offline Hardware + Software Hackathon",
  description:
    "National-level offline hackathon organized by Team Vibhav, NIT Hamirpur. Build. Break. Innovate.",
  keywords: [
    "hackathon",
    "hardware",
    "software",
    "NIT Hamirpur",
    "Team Vibhav",
    "innovation",
    "coding",
  ],
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script defer async src="https://apply.devfolio.co/v2/sdk.js"></script>
      </head>
      <body className={`font-sans antialiased`}>
        <SmoothScroll />
        <SmoothCursor/>
        <CircuitBackground />
        {/* <BlobCursor fillColor="#999" /> */}
        {children}
        <Analytics />
      </body>
    </html>
  );
}
