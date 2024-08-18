import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Providers } from "./providers";


export const metadata: Metadata = {
  title: "Lunar",
  description: "We sell watches here.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-palette-bg">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>

      </body>
    </html>
  );
}
