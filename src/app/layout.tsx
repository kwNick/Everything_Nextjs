import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Cursor from "@/components/Cursor";
import Lenis from "@/components/Lenis";
import Footer from "@/components/Footer";

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
        <Lenis>
          <div className="min-h-screen min-w-screen bg-rose-950 bg-opacity-20 cursor-none">
            <Cursor />
            <Header />
            {children}
            <Footer />
          </div>
        </Lenis>
      </body>
    </html >
  );
}
