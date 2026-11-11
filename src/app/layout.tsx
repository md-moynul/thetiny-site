import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar, Footer } from "@/components";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "thetiny.site",
  description:
    "Shorten Your URL in seconds Create short, memorable links that you can share anywhere. Track every click with powerful analytics.",
  keywords: [
    "URL shortener",
    "shorten link",
    "free link shortener",
    "custom URL shortener",
    "link analytics",
    "branded short links",
    "short URL generator",
    "quick link shortener",
  ],
  openGraph: {
    title: "thetiny.site",
    description:
      "Shorten Your URL in seconds Create short, memorable links that you can share anywhere. Track every click with powerful analytics.",
    url: "https://thetiny.site",
    siteName: "thetiny.site",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "thetiny.site",
    description:
      "Shorten Your URL in seconds Create short, memorable links that you can share anywhere. Track every click with powerful analytics.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-[#f8f9fc] text-[#0a0a14]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
