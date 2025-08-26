import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Sidebar, SidebarProvider, SidebarTrigger } from "import/components/ui/sidebar";
import { AppSidebar } from "import/components/ui/app-sidebar";
import { ThemeProvider } from "import/components/ui/theme-provider";
import Navbar from "import/components/ui/global/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coinbase- Buy & Sell Bitcoin, Ethereum, and more with trust",
  description: "Coinbase is an online cryptocurrency buying/selling place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
