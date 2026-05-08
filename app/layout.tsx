import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Jabir Imteyaz Portfolio",
  description:
    "Premium portfolio of Jabir Imteyaz, a Computer Science undergraduate focused on React engineering, Java plus DSA, scalable UI systems, and polished product experiences.",
  openGraph: {
    title: "Jabir Imteyaz Portfolio",
    description:
      "Modern developer portfolio featuring projects, experience, Java plus DSA strength, and GitHub activity.",
    url: "/",
    siteName: "Jabir Imteyaz Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jabir Imteyaz Portfolio",
    description:
      "Modern developer portfolio featuring React work, Java plus DSA strengths, and premium frontend execution.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
