import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bharat Joshi - Full Stack Developer",
  description: "Portfolio of Bharat Joshi, an experienced Full Stack Developer with 8+ years of expertise in Modern Web Development.",
  keywords: "Bharat Joshi, Full Stack Developer, Web Developer, Angular, .NET Core, React, SQL",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
