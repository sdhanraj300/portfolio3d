import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: '3D Portfolio',
  description: 'A modern 3D portfolio built with Next.js, Three.js, and shadcn',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${geistSans.variable} ${geistMono.variable} bg-black text-white overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  )
}
