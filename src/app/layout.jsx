import Link from "next/link";
import "./globals.css";
import BottomNav from "@/components/tiocents/BottomNav";
import { Suspense } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/Header.js";
export const metadata = {
  title: "Hello, You.",
  description: "Explore new ideas and stories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#0D0D0D] text-[#E5E5E5] min-h-screen flex flex-col overflow-x-hidden max-w-full">
        <Header />
        {/* <header className="w-full py-4 flex justify-center border-b border-gray-700 text-xl font-bold">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            HomePage
          </Link>
        </header> */}
        <main className="flex-grow">{children}</main>
        <Suspense fallback={null}></Suspense>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
