
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search by season",
};

export default function SeasonLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
        {children}
    </>
  );
}
