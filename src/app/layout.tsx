import './globals.css' // Asegúrate de tener este archivo con los estilos globales de Tailwind

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: "precure – Industrielle Instandhaltung & Schwingungssensorik",
  description: "precure ist Ihr Partner für industrielle Instandhaltung, Überwachung und Schwingungssensorik in Deutschland.",
  keywords: ["Industrielle Instandhaltung", "Schwingungssensorik", "Monitoring", "Industrie 4.0", "Deutschland"],
  openGraph: {
    title: "precure – Industrielle Instandhaltung & Schwingungssensorik",
    description: "Ihr Partner für industrielle Instandhaltung, Überwachung und Schwingungssensorik.",
    url: "https://www.precure.de",
    siteName: "precure",
    locale: "de_DE",
    type: "website",
  },
  alternates: {
    canonical: "https://www.precure.de",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-white text-blue-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
