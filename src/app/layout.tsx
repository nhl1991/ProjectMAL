import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { ModeToggle } from "@/components/ThemeToggle";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="w-screen min-h-screen overflow-y-scroll flex flex-col items-center">
            {children}
            <div className="fixed right-0 p-12">
          <ModeToggle />
          </div>
          </main>
        </ThemeProvider>
        {/* <footer className="text-center text-sm">
          &copy;Data sourced from{" "}
          <a
            href="https://myanimelist.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MyAnimeList
          </a>
        </footer> */}
      </body>
    </html>
  );
}
