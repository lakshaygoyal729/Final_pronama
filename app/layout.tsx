import React from "react"
import type { Metadata } from 'next'
import { Geist } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Providers } from '@/components/providers'
import './globals.css'

const geist = Geist({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: 'Pronama Infratel Pvt Ltd | Telecom Infrastructure & Manpower Solutions',
    template: '%s | Pronama Infratel Pvt Ltd',
  },
  description:
    'Pronama Infratel Pvt Ltd - Leading provider of telecom infrastructure project execution, manpower outsourcing, and government tender services in India. MSME registered, Woman Empowered Enterprise.',
  keywords: ['telecom infrastructure', 'government tenders', 'MSME', 'Delhi', 'India', 'manpower outsourcing', 'network infrastructure'],
  icons: { icon: '/icon.svg' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Pronama Infratel Pvt Ltd',
    description: 'Telecom infrastructure and manpower solutions provider in India',
    url: 'https://pronama.in',
    telephone: '+91-8178297956',
    email: 'admin@pronama.in',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '317 Gupta Complex, Inderlok',
      addressLocality: 'Delhi',
      postalCode: '110035',
      addressCountry: 'IN',
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
