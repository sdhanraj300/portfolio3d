import type { Metadata, Viewport } from "next";
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
  title: 'Dhanraj Singh — Full Stack Developer',
  description:
    'Dhanraj Singh is a Full Stack Developer in Kiel, Germany, building AI-powered web applications with Next.js, TypeScript, LangChain.js, and PostgreSQL.',
  keywords: [
    'Dhanraj Singh',
    'Full Stack Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript',
    'LangChain',
    'AI Engineer',
    'Kiel',
    'Germany'
  ],
  authors: [{ name: 'Dhanraj Singh' }],
  openGraph: {
    title: 'Dhanraj Singh — Full Stack Developer',
    description:
      'Full Stack Developer in Kiel, Germany building AI-powered products with Next.js, TypeScript, and LangChain.js.',
    type: 'website'
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
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
