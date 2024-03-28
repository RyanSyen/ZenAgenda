import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zen Agenda",
  description:
    "Find your inner peace amidst the chaos of your schedule with ZenAgenda – where tranquility meets productivity.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} m-0 overflow-x-hidden width-[100vw] relative text-[#fcfcfc] bg-[#030014] font-main`}
      >
        {children}
      </body>
    </html>
  );
}
