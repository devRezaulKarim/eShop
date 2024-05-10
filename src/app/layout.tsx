import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eShop",
  description: `Discover a world of endless shopping possibilities at "eShop". From trendy fashion to cutting-edge electronics, find everything you need and more. Shop with ease, explore exciting deals, and indulge in a seamless online shopping experience today!`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
