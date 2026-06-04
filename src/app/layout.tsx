import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AosInit from "./_comonents/aos-init";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DemoPet - Seu Pet Merece o Melhor",
  description: "Plataforma completa para cuidados e bem-estar do seu animal de estimação",
  keywords: ["pets", "animais de estimação", "cuidados veterinários", "saúde animal"],
  authors: [{ name: "DemoPet" }],
  openGraph: {
    title: "DemoPet - Seu Pet Merece o Melhor",
    description: "Plataforma completa para cuidados e bem-estar do seu animal de estimação",
    type: "website",
  },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AosInit />
      </body>
    </html>
  );
}
