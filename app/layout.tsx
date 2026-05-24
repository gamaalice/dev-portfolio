
import type { Metadata } from "next";
import { Geist, Geist_Mono } from 'next/font/google'
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alice Gama | Portfolio",
  description: "Portfolio website for Alice Gama",
  icons: {
    icon: [
      {
        url: "/favicon/favicon-32x32.png", 
      },
    ],
    apple: "/favicon/apple-touch-icon.png", 
    shortcut: "/favicon/favicon-16x16.png",   
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
  
      </body>
    </html>
  )
}