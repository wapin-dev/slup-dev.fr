import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import CookieBanner from '../components/CookieBanner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://slup-dev.fr'),
  title: 'SlupDev - Agence de Développement Web et Mobile | Devis Gratuit 24h',
  description: 'SlupDev : Création de sites web, applications mobiles, refonte graphique et optimisation SEO. Développeur freelance expert avec 2 ans d\'expérience. Devis gratuit sous 24h. Basé à Saint-Joseph.',
  keywords: [
    'développement web',
    'application mobile', 
    'refonte site web',
    'SEO technique',
    'SlupDev',
    'freelance développeur',
    'Saint-Joseph',
    'React',
    'Next.js',
    'Django'
  ].join(', '),
  authors: [{ name: 'Dorian Boyer', url: 'https://slup-dev.fr' }],
  creator: 'SlupDev - Dorian Boyer',
  publisher: 'SlupDev',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://slup-dev.fr',
    siteName: 'SlupDev',
    title: 'SlupDev - Développement Web et Mobile | Devis Gratuit',
    description: 'Création de sites web et applications mobiles sur mesure. Développeur freelance expert. Devis gratuit sous 24h.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SlupDev - Agence de Développement Web et Mobile',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SlupDev - Développement Web et Mobile',
    description: 'Création de sites web et applications mobiles sur mesure. Devis gratuit sous 24h.',
    images: ['/og-image.jpg'],
    creator: '@slupdev',
  },
  alternates: {
    canonical: 'https://slup-dev.fr',
  },
  category: 'Technology',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content={`${viewport.width}, initial-scale=${viewport.initialScale}`} />
        {/* Google Analytics avec consentement */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-H09HQF2GKB"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              
              // Configuration avec consentement par défaut refusé
              gtag('consent', 'default', {
                analytics_storage: 'denied'
              });
              
              gtag('config', 'G-H09HQF2GKB');
            `,
          }}
        />
        <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "SlupDev",
            "url": "https://slup-dev.fr",
            "logo": "https://slup-dev.fr/logo.png",
            "description": "Agence de développement web et mobile spécialisée dans la création de sites web, applications mobiles, refonte graphique et optimisation SEO.",
            "founder": {
              "@type": "Person",
              "name": "Dorian Boyer",
              "jobTitle": "Développeur Full-Stack"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Saint-Joseph",
              "addressCountry": "FR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "contact@slup-dev.fr",
              "availableLanguage": "French"
            },
            "serviceType": [
              "Développement Web",
              "Développement Mobile", 
              "Refonte Graphique",
              "Optimisation SEO"
            ],
            "areaServed": {
              "@type": "Country",
              "name": "France"
            }
          })
        }}
        />
      </head>
      <body className={inter.className}>
        {children}
        <CookieBanner />
      </body>
    </html>
  )
}
