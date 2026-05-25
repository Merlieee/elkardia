import { Lato } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AgentationWidget } from "@/components/agentation-widget"
import { cn } from "@/lib/utils"
import { GoogleAnalytics } from "@next/third-parties/google"
import type { Metadata } from "next"

const lato = Lato({ subsets: ["latin"], weight: ["300", "400", "700", "900"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: {
    default: "Elkardia — Lubelskie Centrum Kardiologii",
    template: "%s | Elkardia Lublin",
  },
  description: "Wysoko­specjalistyczne centrum medyczne dla pacjentów z chorobami serca i układu krążenia. Kardiologia dzieci i dorosłych, ablacja serca, diagnostyka, stomatologia — Lublin.",
  metadataBase: new URL("https://elkardia.pl"),
  openGraph: {
    siteName: "Elkardia — Lubelskie Centrum Kardiologii",
    locale: "pl_PL",
    type: "website",
    images: [{ url: "/images/logo.png" }],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalOrganization",
      "@id": "https://elkardia.pl/#organization",
      name: "Elkardia | Lubelskie Centrum Kardiologii",
      url: "https://elkardia.pl",
      logo: "https://elkardia.pl/images/logo.png",
      telephone: "+48815657075",
      email: "rejestracja@elkardia.pl",
      sameAs: [
        "https://www.facebook.com/elkardia.lubelskie.centrum.kardiologii",
        "https://twitter.com/elkardia_pl",
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "ul. Rotmistrza Witolda Pileckiego 23/20",
        addressLocality: "Lublin",
        postalCode: "20-091",
        addressCountry: "PL",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      medicalSpecialty: [
        "Cardiology",
        "Pediatric Cardiology",
        "Cardiac Electrophysiology",
        "Neurology",
        "Pulmonology",
        "Endocrinology",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://elkardia.pl/#website",
      url: "https://elkardia.pl",
      name: "Elkardia — Lubelskie Centrum Kardiologii",
      publisher: { "@id": "https://elkardia.pl/#organization" },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" suppressHydrationWarning className={cn("antialiased", lato.variable, "font-sans")}>
      <head>
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hu-manity cookie consent */}
        <script
          id="hu-banner-options"
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var huOptions = {"appID":"elkardiapl-ef91c81","currentLanguage":"pl","blocking":false,"globalCookie":false,"isAdmin":false,"privacyConsent":true,"forms":[],"customProviders":[],"customPatterns":[]};`,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <AgentationWidget />
        </ThemeProvider>

        {/* Hu-manity GDPR banner */}
        <Script
          id="hu-banner-js"
          src="https://cdn.hu-manity.co/hu-banner.min.js"
          strategy="afterInteractive"
        />

        {/* Tidio live chat */}
        <Script
          id="tidio-chat"
          src="//code.tidio.co/cnicz45mzjg0gwamid9nmitflt6jdwbz.js"
          strategy="lazyOnload"
        />
      </body>

      {/* Google Analytics 4 */}
      <GoogleAnalytics gaId="G-PEJZE9ZS3L" />
    </html>
  )
}
