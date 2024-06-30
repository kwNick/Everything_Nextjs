import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Cursor from "@/components/Cursor";
import ScrollProgress from "@/components/ScrollProgress";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Everything Nextjs",
  description: "I am creating this app to practice all of my skills in software with nextjs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen min-w-screen bg-rose-950 bg-opacity-20 cursor-none">
          <Cursor />
          <div className="progress bg-rose-950 bg-opacity-40 w-10 h-[4px] fixed top-0 left-0 z-10" />
          <div className="m-3 fixed top-0 left-[25%] w-[50%] font-bold tracking-widest text-3xl text-rose-950 z-20">
            <ScrollProgress />
          </div>
          <Header />
          {children}
        </div>
      </body>
    </html >
  );
}
