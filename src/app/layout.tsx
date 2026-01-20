import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project-Anime",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="w-screen min-h-screen flex flex-col items-center">{children}</main>
        {/* <footer className="fixed bottom-0 text-center text-sm">
          &copy;Data sourced from{" "}
          <Link
            href="https://myanimelist.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MyAnimeList
          </Link>
        </footer> */}
      </body>
    </html>
  );
}
