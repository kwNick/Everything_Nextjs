import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

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
        <div className="min-h-screen min-w-screen bg-rose-950 bg-opacity-20">
          <Header />
          <main className="flex min-h-[100%] flex-col items-center justify-between p-24">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
