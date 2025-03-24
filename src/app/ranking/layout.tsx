
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search by ranking",
};

export default function RankingLayout({
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
