import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TranslateWidget from "@/components/TranslateWidget";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ThemeToggle } from "@/components/ThemeToggle";  // Import kar lo (agar alag file mein hai)

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
    <html lang="hi" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Yahan ThemeToggle aur TranslateWidget daalo */}
          <TranslateWidget />
          <ThemeToggle />  {/* Ab yahan sahi jagah pe hai */}

          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-64 p-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
