import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Bharat Joshi - Full Stack Developer",
    template: "%s | Bharat Joshi",
  },
  description: "Portfolio of Bharat Joshi, an experienced Full Stack Developer with 8+ years of expertise in Modern Web Development.",
  keywords: ["Bharat Joshi", "Full Stack Developer", "Web Developer", "Angular", ".NET Core", "React", "SQL", "TypeScript", "Next.js", "Software Engineer"],
  authors: [{ name: "Bharat Joshi" }],
  creator: "Bharat Joshi",
  publisher: "Bharat Joshi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Bharat Joshi - Full Stack Developer",
    description: "Portfolio of Bharat Joshi, an experienced Full Stack Developer with 8+ years of expertise in Modern Web Development.",
    url: "http://bharatjoshi.com/", // Replace with your actual deployed URL
    siteName: "Bharat Joshi Portfolio",
    images: [
      {
        url: "/api/og", // This would be the OG image URL
        width: 1200,
        height: 630,
        alt: "Bharat Joshi - Full Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Joshi - Full Stack Developer",
    description: "Portfolio of Bharat Joshi, an experienced Full Stack Developer with 8+ years of expertise in Modern Web Development.",
    creator: "@yourtwitterhandle", // Replace if you have a twitter handle
    images: ["/api/og"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "http://bharatjoshi.com/", // Replace with your actual deployed URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased text-foreground bg-background`}>
        <div className="bg-animation">
          <div className="bg-grid"></div>
        </div>
        <div className="relative z-10">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
