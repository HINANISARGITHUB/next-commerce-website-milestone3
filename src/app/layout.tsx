import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/navbar";
import CartProvider from "./components/providers";
import ShoppingCartModal from "./components/shoppingCartModal";
import { Footprints } from "lucide-react";
import Footer from "./components/footer";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "e-commerce-website by sanity ",
  description: "Created by Hina Nisar",
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
      >
         
       <CartProvider>
        <Navbar />
       <ShoppingCartModal /> 
       
        {children}

        </CartProvider>

        <Footer />

      </body>
    </html>
  );
}
