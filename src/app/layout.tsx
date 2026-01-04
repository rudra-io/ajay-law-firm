
import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { Toaster } from "@/components/ui/toaster"
import { Inter, Lora } from 'next/font/google'
import { FloatingButtons } from '@/components/juris-consult/floating-buttons';
import { PreLoader } from '@/components/common/pre-loader';

export const metadata: Metadata = {
  metadataBase: new URL("https://www.LegalSolutionsJaipur.com"),
  title: {
    default: "Legal Solutions Jaipur | Expert Legal Services in India",
    template: "%s | Legal Solutions Jaipur"
  },
  description: "Top-rated lawyers providing expert legal services in Civil, Criminal, Cyber, Family Law, Property Disputes, Bail, Corporate Law & more across India.",
  keywords: [
    "jaipur lawyer", "criminal lawyer jaipur", "civil lawyer jaipur", "family law", "cyber crime lawyer",
    "divorce lawyer", "bail", "property dispute", "court marriage", "consumer complaint advocate", "contract lawyer",
    "legal services India", "Indian law firm", "best lawyers in India", "legal advice online",
    "Supreme Court lawyer", "High Court advocate", "legal consultation", "corporate law", "intellectual property",
    "litigation services", "arbitration", "legal documentation",
    "वकील", "अधिवक्ता", "कानूनी सलाह", "भारतीय कानून", "कोर्ट", "न्याय", "दीवानी मामले", "फौजदारी मामले",
    "संपत्ति विवाद", "तलाक वकील", "जमानत"
  ],
  openGraph: {
    title: "Expert Lawyers for Civil, Criminal & Property Cases in India",
    description: "Get legal help from experienced advocates for Civil, Criminal, Property, Cyber, and Family law disputes. Book a consultation.",
    url: "https://www.LegalSolutionsJaipur.com",
    siteName: "Legal Solutions Jaipur",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Legal Solutions Jaipur Legal Services"
      }
    ],
    locale: "en_IN",
    type: "website"
  },
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "https://www.LegalSolutionsJaipur.com"
  },
  twitter: {
    card: 'summary_large_image',
    title: "Legal Solutions Jaipur - Expert Legal Services",
    description: "Expert legal services in India for Criminal, Civil, Cyber, and Family Law.",
    images: [`https://www.LegalSolutionsJaipur.com/og-image.png`],
    creator: '@yourtwitterhandle', // Add your twitter handle
  },
};


const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const lora = Lora({ subsets: ['latin'], variable: '--font-headline', weight: ['400', '700'] });

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Legal Solutions Jaipur",
  "url": "https://www.LegalSolutionsJaipur.com",
  "logo": "https://www.LegalSolutionsJaipur.com/logo.png",
  "description": "Expert lawyers for Civil, Criminal, Consumer, Property, Bail, Contract Disputes & more in Jaipur.",
  "telephone": "7597497063",
  "email": "Ajaykumarsharma32727@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "96 Agra Road, Prem Nagar",
    "addressLocality": "Jaipur",
    "postalCode": "302031",
    "addressRegion": "Rajasthan",
    "addressCountry": "IN"
  },
  "areaServed": "India",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
    "opens": "00:00",
    "closes": "23:59"
  },
  "sameAs": [
    "https://www.facebook.com/yourprofile",
    "https://www.twitter.com/yourprofile",
    "https://www.linkedin.com/in/yourprofile"
  ] 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="icon" href="/logo2.png" type="image/png" />
        <link rel="shortcut icon" href="/logo2.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo2.png" />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased overflow-x-hidden',
          inter.variable,
          lora.variable
        )}
      >
        <PreLoader />
        <div className="relative isolate min-h-screen">

          <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            <div
              className="absolute -top-40 -left-80 h-[30rem] w-[50rem] rounded-full bg-primary/10 blur-[150px]"
              aria-hidden="true"
            />
            <div
              className="absolute top-80 -right-40 h-[30rem] w-[50rem] rounded-full bg-primary/5 blur-[120px]"
              aria-hidden="true"
            />
            <div
              className="absolute bottom-20 -left-60 h-[20rem] w-[60rem] rounded-full bg-primary/10 blur-[140px]"
              aria-hidden="true"
            />
            <div
              className="absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-accent/5 blur-[100px]"
              aria-hidden="true"
            />
          </div>

          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>

          <Toaster />
          <FloatingButtons />
        </div>
      </body>
    </html>
  );
}
