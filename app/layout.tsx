import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://getwilliam.xyz'),
  title: 'William | AI-Powered Legal Billing',
  description: 'The intelligent billing platform that captures every billable moment. AI-powered time tracking, compliant narratives, and practice analytics for AmLaw 200 firms.',
  keywords: ['legal billing', 'time tracking', 'law firm software', 'AI billing', 'legal tech', 'practice management'],
  authors: [{ name: 'William Technologies, Inc.' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://getwilliam.xyz',
    siteName: 'William',
    title: 'William | AI-Powered Legal Billing',
    description: 'The intelligent billing platform that captures every billable moment. AI-powered time tracking, compliant narratives, and practice analytics for AmLaw 200 firms.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'William - AI-Powered Legal Billing Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'William | AI-Powered Legal Billing',
    description: 'The intelligent billing platform that captures every billable moment. AI-powered time tracking for AmLaw 200 firms.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
