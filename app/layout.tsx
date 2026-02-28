import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import TranslateWidget from "@/components/TranslateWidget";
import { ThemeProvider } from "@/components/providers/ThemeProvider";  // Naya import

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
    <html lang="hi" suppressHydrationWarning>  {/* Important: No flicker */}
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"          // class pe dark add karega
          defaultTheme="system"      // Pehle system follow karega (user ka dark/light preference)
          enableSystem               // System preference support
          disableTransitionOnChange  // Smooth toggle (no flash)
        >
          <TranslateWidget />
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 ml-64 p-8">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
