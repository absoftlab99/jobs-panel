import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '../app/components/Web/Common/Header';
import Footer from '../app/components/Web/Common/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jobs Panel",
  description: "Build with Next js and Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme='mytheme'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <div className="grid place-content-around">
          <div className="w-full lg:w-[1200px] xl:w-[1440px]">
            {children}
          </div>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
