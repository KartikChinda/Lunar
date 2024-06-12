import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "Lunar",
  description: "Presenting the next generation of watches. For you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className=" bg-palette-bg md:backgroundStyle text-palette-text overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
