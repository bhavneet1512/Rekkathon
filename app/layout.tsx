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
    "Join REKKATHON, a national-level offline hackathon organized by Team Vibhav at NIT Hamirpur. Compete, build innovative projects, and win amazing prizes. Register now!",
  keywords: [
    "rekathon",
    "rakathon",
    "hackathon",
    "hardware hackathon",
    "software hackathon",
    "NIT Hamirpur",
    "Team Vibhav",
    "innovation competition",
    "coding competition",
    "student hackathon",
    "offline hackathon",
    "engineering hackathon",
    "IoT hackathon",
    "web development",
    "programming competition",
    "tech event",
    "build and code",
    "hackathon registration",
    "tech competition India",
  ],
  generator: "v0.app",
  authors: [{ name: "Team Vibhav", url: "https://rekkathon.com" }],
  creator: "Team Vibhav",
  publisher: "NIT Hamirpur",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rekkathon.com",
    siteName: "REKKATHON",
    title: "REKKATHON | National-Level Offline Hardware + Software Hackathon",
    description: "Join REKKATHON 2025 - The ultimate offline hackathon at NIT Hamirpur. Build, innovate, and compete for amazing prizes!",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "REKKATHON Hackathon Event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "REKKATHON | Offline Hackathon",
    description: "Join REKKATHON 2025 - Build and innovate at NIT Hamirpur",
    images: ["/og-image.png"],
    creator: "@TeamVibhav",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rekkathon.com",
  },
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
