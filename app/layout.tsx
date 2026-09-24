import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "NEXT LEVEL FAHRZEUGPFLEGE | High-End Auto Detailing & Keramikversiegelung",
  description:
    "SAUBER | PFLEGT | WERTBESTÄNDIG. Exklusive High-End Fahrzeugaufbereitung, mehrstufige Lackpolitur, Innenraum-Tiefenreinigung und 9H Keramikversiegelung in Meisterqualität.",
  keywords: [
    "Fahrzeugaufbereitung",
    "Auto Detailing",
    "Keramikversiegelung",
    "Lackaufbereitung",
    "Innenraumreinigung",
    "High-End Detailing",
    "Leasingrückläufer Aufbereitung",
    "Handwäsche",
    "NEXT LEVEL Fahrzeugpflege",
  ],
  authors: [{ name: "NEXT LEVEL FAHRZEUGPFLEGE" }],
  creator: "NEXT LEVEL FAHRZEUGPFLEGE",
  metadataBase: new URL("https://nextlevel-fahrzeugpflege.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NEXT LEVEL FAHRZEUGPFLEGE | Mehr als nur sauber",
    description:
      "SAUBER | PFLEGT | WERTBESTÄNDIG. High-End Fahrzeugaufbereitung & Keramikversiegelung für Liebhaber- und Premiumfahrzeuge.",
    url: "https://nextlevel-fahrzeugpflege.de",
    siteName: "NEXT LEVEL FAHRZEUGPFLEGE",
    locale: "de_DE",
    type: "website",
    images: [
      {
        url: "/images/loader/car.jpg",
        width: 1024,
        height: 191,
        alt: "NEXT LEVEL FAHRZEUGPFLEGE Luxury Silhouette",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NEXT LEVEL FAHRZEUGPFLEGE | High-End Auto Detailing",
    description: "SAUBER | PFLEGT | WERTBESTÄNDIG. Exklusive Fahrzeugaufbereitung & Keramikversiegelung.",
    images: ["/images/loader/car.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/images/loader/car.png",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["AutomotiveBusiness", "AutoRepair"],
  name: "NEXT LEVEL FAHRZEUGPFLEGE",
  image: "https://nextlevel-fahrzeugpflege.de/images/loader/car.png",
  description:
    "Exklusive High-End Fahrzeugaufbereitung, Lackpolitur, Innenraum-Tiefenreinigung und 9H Keramikversiegelung. Sauber, gepflegt, wertbeständig.",
  telephone: "+491761234567",
  email: "info@nextlevel-fahrzeugpflege.de",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Musterstraße 12",
    addressLocality: "Musterstadt",
    postalCode: "12345",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.1657,
    longitude: 10.4515,
  },
  url: "https://nextlevel-fahrzeugpflege.de",
  priceRange: "€€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "15:00",
    },
  ],
  sameAs: ["https://www.instagram.com/nextlevel_fahrzeugpflege"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Detailing Dienstleistungen",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Außenreinigung",
          description: "Schonende 2-Eimer Handwäsche, Felgen-Tiefenreinigung, Flugrostentfernung",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Innenraumreinigung",
          description: "Tiefenreinigung mit Nasssauger, porentiefe Lederpflege, Ozon-Geruchsneutralisierung",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Lackaufbereitung & Versiegelung",
          description: "Mehrstufige Lackpolitur, Kratzerentfernung, Hochglanz-Finish",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Keramikversiegelung",
          description: "9H Langzeitschutz, extremer Glanz, maximale Hydrophobie, Werterhalt",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sonderaufbereitung",
          description: "Leasingrückläufer-Aufbereitung, Verkaufsaufbereitung, Scheinwerfer-Restauration",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${jakarta.variable} ${syne.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#050505] text-[#EDEDED] font-sans antialiased overflow-x-hidden selection:bg-[#D4AF37] selection:text-black">
        {children}
      </body>
    </html>
  );
}
