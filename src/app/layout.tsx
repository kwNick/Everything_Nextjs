import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

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
        <PageTransition>
          <div className="min-h-screen min-w-full">
            <Header />
            <main className="flex min-h-[100%] flex-col items-center justify-between p-24">
              {children}

              <div className="h-100vh"></div>
            </main>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
