import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhanuprakash Bhat | Portfolio",
  description: "Data Scientist & AI Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-black text-gray-200 antialiased selection:bg-blue-500/30`}>
        {/* Navbar is fixed, so it floats above everything */}
        <Navbar />
        {/* Main content container */}
        <div className="pt-24 pb-20 px-4 md:px-6 max-w-7xl mx-auto min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}