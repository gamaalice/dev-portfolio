import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alice Gama | Front-End Developer",
  description:
    "Portfolio of Alice Gama featuring Front-End projects built with modern web technologies.",

  keywords: [
    "Alice Gama",
    "Front-End Developer",
    "Frontend Developer",
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Next.js",
    "Web Development",
  ],

  authors: [
    {
      name: "Alice Gama",
    },
  ],

  creator: "Alice Gama",

  verification: {
    google: "9n8Wc3IuyN9IMICpB8PAqMkX1LyaB-I48FJXCm876hI",
  },

  openGraph: {
    title: "Alice Gama | Front-End Developer",
    description:
      "Portfolio of Alice Gama featuring Front-End projects built with modern web technologies.",
    url: "https://dev-portfolio-two-lovat-95.vercel.app/",
    siteName: "Alice Gama Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alice Gama | Front-End Developer",
    description:
      "Portfolio of Alice Gama featuring Front-End projects.",
  },

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
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}