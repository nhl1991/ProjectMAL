import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ModeToggle } from "@/components/ThemeToggle";
import { ThemeProvider } from "@/providers/ThemeProvider";

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
          </main>
          <footer className="relative">
            <div className="fixed md:top-0 md:right-0 bottom-0 right-0 p-12 z-10">
              <ModeToggle />
            </div>
          </footer>
        </ThemeProvider>
        {/* <footer className="text-center text-sm">
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
