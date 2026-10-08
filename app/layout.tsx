import './globals.css'
import { Inter } from "next/font/google"
import { Metadata } from "next"
import ClientLayout from "./components/ClientLayout"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://sebastian-valencia.site'),
  title: "Sebastian Valencia",
  description: "DJ/Producer from Cali, Colombia. Genres: Progressive, melodic house, organico house, deep",
  keywords: ["Sebastian Valencia", "DJ", "Producer", "Electronic Music", "Artist", "Cali", "Colombia", "Progressive House", "Melodic House", "Deep House"],
  authors: [{ name: "Sebastian Valencia" }],
  creator: "Sebastian Valencia",
  publisher: "Sebastian Valencia",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://sebastian-valencia.site",
    siteName: "Sebastian Valencia",
    title: "Sebastian Valencia - DJ/Producer",
    description: "DJ/Producer from Cali, Colombia. Genres: Progressive, melodic house, organico house, deep",
    images: [{
      url: "https://i.ibb.co/hFtRDCwt/artistphoto.jpg",
      width: 1200,
      height: 1200,
      alt: "Sebastian Valencia - DJ/Producer"
    }]
  },
  twitter: {
    card: "summary_large_image",
    site: "@joset_asperjet",
    creator: "@joset_asperjet",
    title: "Sebastian Valencia - DJ/Producer",
    description: "DJ/Producer from Cali, Colombia. Genres: Progressive, melodic house, organico house, deep",
    images: ["https://i.ibb.co/Kc6y9y3d/artistphoto.jpg"]
  },
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
  verification: {
    google: "google-site-verification-code", // Reemplazar con el código real
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-black text-white relative min-h-screen overflow-x-hidden`}>
        <ClientLayout>
          <main className="min-h-screen pt-10 relative">
            {children}
          </main>
        </ClientLayout>
      </body>
    </html>
  )
}