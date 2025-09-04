import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adarsh Mandal - Civil Engineer | Infrastructure Design & Development',
  description: 'Professional Civil Engineer specializing in road design, surveying, and infrastructure development. NEC registered engineer with expertise in AutoCAD, ARC GIS, and project management.',
  icons: {
    icon: '/images/001.jpg',
    apple: '/images/001.jpg',
  },
  keywords: 'civil engineer, road design, surveying, infrastructure, AutoCAD, ARC GIS, Nepal, construction',
  authors: [{ name: 'Adarsh Mandal' }],
  creator: 'Adarsh Mandal',
  publisher: 'Adarsh Mandal',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adarshmandal.com',
    title: 'Adarsh Mandal - Civil Engineer',
    description: 'Professional Civil Engineer specializing in infrastructure design and development',
    siteName: 'Adarsh Mandal Portfolio',
    images: [
      {
        url: '/images/adarsh-profile.jpg',
        width: 1200,
        height: 630,
        alt: 'Adarsh Mandal - Civil Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adarsh Mandal - Civil Engineer',
    description: 'Professional Civil Engineer specializing in infrastructure design and development',
    images: ['/images/adarsh-profile.jpg'],
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* CRITICAL: Must be FIRST in head - removes browser extension attributes */}
        <Script id="extension-cleaner" strategy="beforeInteractive" dangerouslySetInnerHTML={{
          __html: `
            (function() {
              // Immediate removal
              function cleanAttributes() {
                try {
                  if (document && document.documentElement) {
                    document.documentElement.removeAttribute('cz-shortcut-listen');
                  }
                  if (document && document.body) {
                    document.body.removeAttribute('cz-shortcut-listen');
                  }
                } catch (e) {
                  // Ignore errors - this is just cleanup
                }
              }
              
              // Run immediately
              cleanAttributes();
              
              // Run again after a short delay (for stubborn extensions)
              setTimeout(cleanAttributes, 100);
              setTimeout(cleanAttributes, 500);
              
              // MutationObserver as fallback
              if (typeof MutationObserver !== 'undefined') {
                new MutationObserver(cleanAttributes).observe(
                  document.documentElement, 
                  { attributes: true, subtree: true }
                );
              }
            })();
          `
        }} />{/* */}
        
        <link rel="icon" href="/images/001.jpg" />
        <link rel="apple-touch-icon" href="/images/001.jpg" />{/* */}
        <link rel="canonical" href="https://adarshmandal.com" />{/* */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />{/* */}
        
        {/* Schema.org structured data */}
        <Script id="json-ld" type="application/ld+json" strategy="afterInteractive">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Adarsh Mandal",
          "jobTitle": "Civil Engineer",
          "description": "Professional Civil Engineer specializing in road design, surveying, and infrastructure development",
          "url": "https://adarshmandal.com",
          "image": "https://adarshmandal.com/images/adarsh-profile.jpg",
          "email": "adarsh.mandal.143@gmail.com",
          "telephone": "+977-9811272899",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Kathmandu",
            "addressRegion": "Province No. 2",
            "addressCountry": "NP"
          },
          "alumniOf": {
            "@type": "CollegeOrUniversity",
            "@id": "https://cosmos.edu.np",
            "name": "Cosmos College of Management and Technology"
          },
          "hasCredential": {
            "@type": "EducationalOccupationalCredential",
            "name": "Bachelor of Civil Engineering",
            "credentialCategory": "degree",
            "educationalLevel": "Higher Education"
          },
          "knowsAbout": [
            "Civil Engineering", 
            "Road Design", 
            "Surveying", 
            "AutoCAD", 
            "ARC GIS", 
            "Infrastructure Development", 
            "Project Management"
          ],
          "memberOf": {
            "@type": "Organization",
            "name": "Nepal Engineering Council",
            "identifier": "85377",
            "url": "https://nec.gov.np"
          },
          "sameAs": [
            "https://www.linkedin.com/in/adarsh-mandal-143",
            "https://github.com/adarshmandal"
          ]
        })}</Script>{/* */}
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
            `}</Script>
          </>
        )}
      </head>
      <body className={inter.className}>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}