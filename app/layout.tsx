import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'L & L Shuttle Services | Premium Transport in Mthatha',
  description:
    'Professional shuttle and transport services across Mthatha and surrounding areas. Airport transfers, long distance, monthly contracts, and event transport.',
  keywords: [
    'shuttle services Mthatha',
    'transport Mthatha',
    'airport transfer Eastern Cape',
    'long distance transport South Africa',
    'L & L Shuttle',
  ],
  openGraph: {
    title: 'L & L Shuttle Services',
    description: 'Safe, reliable transport across Mthatha and surrounding areas.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
