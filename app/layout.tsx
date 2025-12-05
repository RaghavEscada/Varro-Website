import type { Metadata } from 'next'
import { Montserrat, Inter, Abhaya_Libre } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const abhayaLibre = Abhaya_Libre({
  subsets: ['latin'],
  weight: ['400', '700'], // Regular and Bold
  variable: '--font-abhaya',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Varro Group - Acquiring High-Quality Australian SMBs Ready for Growth',
  description: 'Our approach combines entrepreneurial drive with the care and stability needed to protect your legacy and team while unlocking their full potential.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} ${abhayaLibre.variable}`}>
      <body className="font-primary">
        {children}
      </body>
    </html>
  )
}

