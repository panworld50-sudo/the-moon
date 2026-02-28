import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TranslateWidget from "@/components/TranslateWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Moon",
  description: "World-class news, study & commercial portal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hi">  {/* Hindi default */}
      <body className={`${inter.className} antialiased`}>
        <TranslateWidget />
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 ml-64 p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}
