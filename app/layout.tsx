import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ade-williams Joshua (AJ) | Full-Stack Developer & AI Engineer",
  description: "Rapidly growing full-stack developer specializing in building reusable infrastructure and modernizing production systems. Currently contributing to AI research platforms.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ backgroundColor: '#94a3b8' }} // Darker slate - beyond medium, not too dark
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
