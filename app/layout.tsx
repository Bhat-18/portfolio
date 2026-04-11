import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bhanuprakash Bhat | Portfolio",
  description: "Cloud Data Engineer | AWS Certified AI Practitioner | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased selection:bg-blue-500/30`} style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        <ThemeProvider>
          {/* Navbar is fixed, so it floats above everything */}
          <Navbar />
          {/* Main content container */}
          <div className="pt-24 pb-20 px-4 md:px-6 max-w-7xl mx-auto min-h-screen">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}