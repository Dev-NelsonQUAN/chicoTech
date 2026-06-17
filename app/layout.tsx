import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

// 1. ADVANCED SEO METADATA
export const metadata: Metadata = {
  metadataBase: new URL('https://chicotechnical.com'), // Replace with your actual domain
  title: {
    default: 'CHICO Technical Works | Steel Fabrication & Industrial Engineering Nigeria',
    template: '%s | CHICO Technical Works'
  },
  description: 'Specialized industrial engineering in Lagos, Nigeria. Experts in steel fabrication, conveyor systems, elevator installation, and HSSE compliant technical services.',
  keywords: [
    'Steel Fabrication Lagos', 
    'Industrial Engineering Nigeria', 
    'Conveyor Systems Apapa', 
    'Steel Structural Engineering', 
    'Elevator Installation Nigeria',
    'Chico Technical Works',
    "Chico Tech",
  ],
  authors: [{ name: 'CHICO Technical Works' }],
  icons: {
    icon: '/favicon.ico', 
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'CHICO Technical Works | Precision Steel Solutions',
    description: 'Expert industrial engineering and steel fabrication services since 2004.',
    url: 'https://chicotechnical.com',
    siteName: 'CHICO Technical Works',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'CHICO Technical Works Logo',
      },
    ],
    locale: 'en_NG',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CHICO Technical Works | Steel Solutions',
    description: 'Premier industrial engineering in West Africa.',
    images: ['/opengraph-image.png'],
  },
}

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'CHICO Technical Works',
          image: 'https://chicotechnical.com/opengraph-image.png',
          description: 'Industrial engineering and steel fabrication experts in Lagos, Nigeria.',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '39A, Emordi Street, Olodi – Apapa',
            addressLocality: 'Lagos',
            addressRegion: 'Lagos State',
            addressCountry: 'NG',
          },
          telephone: '+2347065001134',
          url: 'https://chicotechnical.com',
        }),
      }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-[#F8FAFC] text-slate-900`}>
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
