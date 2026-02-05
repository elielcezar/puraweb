import type { Metadata } from "next";
import Script from 'next/script'
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://puraweb.com.br'),
  title: "Sites Profissionais e Landing Pages | Pura Web Agência Digital",
  description: "Tenha um site ultra rápido para sua empresa por apenas R$ 490. Landing pages e sites institucionais otimizados para vendas. Pagamento facilitado em 12x!",
  keywords: "criação de sites, curitiba, landing page para empresas, agência web curitiba, desenvolvimento web profissional",
  authors: [{ name: "Pura Web" }],
  creator: "Pura Web",
  publisher: "Pura Web",

  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  
  // Open Graph
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://puraweb.com.br/",
    title: "Sites Profissionais e Landing Pages | Pura Web Agência Digital",
    description: "Tenha um site ultra rápido para sua empresa por apenas R$ 490. Landing pages e sites institucionais otimizados para vendas. Pagamento facilitado em 12x!",
    siteName: "Pura Web",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Pura Web - Sites Profissionais e Landing Pages",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Sites Profissionais e Landing Pages | Pura Web Agência Digital",
    description: "Tenha um site ultra rápido para sua empresa por apenas R$ 490. Landing pages e sites institucionais otimizados para vendas. Pagamento facilitado em 12x!",
    images: ["/og.png"],
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Preload da imagem crítica do Hero (LCP) */}
        <link
          rel="preload"
          href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/burst.webp`}
          as="image"
          fetchPriority="high"
        />
        {/* Font Awesome */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Notebook Expert",
              "description": "A melhor de Curitiba em conserto de notebooks, com atendimento personalizado e garantia total. 16 anos de experiência.",
              "image": "/clients/notebookexpert/logo.webp",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Curitiba",
                "addressRegion": "PR",
                "addressCountry": "BR"
              },
              "telephone": "+55-41-99887-0606",
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2K60RR663P"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2K60RR663P');
          `}
        </Script>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

