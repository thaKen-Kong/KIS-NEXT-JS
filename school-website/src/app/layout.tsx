import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { HeaderComponent } from "@/components/ui/Header";
import { NavigationPanel } from "@/components/ui/Navigation";
import Link from "next/link";
import { ToTop } from "@/components/items/ToTopButton";
import { Footer } from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KIS",
  description: "Website for Kaytitinga Integrated School",
  icons: {
    icon : "../../public/icons/logo.png",
  }
};

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>

  ) {


    return (
      <html
        lang="en"
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <body className="min-h-full flex flex-col p-0 m-0">
          <HeaderComponent />
          <NavigationPanel />

          <ToTop />

          <main className="pt-2 pb-2 gap-10 p-0">
            {children}
          </main>
          

          <Footer />
        </body>
      </html>
    );
  }
