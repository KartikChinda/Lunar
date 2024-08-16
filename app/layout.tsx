import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "WeSellItAll",
  description: "An ecommerce store.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-palette-bg">
        {children}
      </body>
    </html>
  );
}
